// import express, { type Express } from "express";
// import fs from "fs";
// import path from "path";
// import { createServer as createViteServer, createLogger } from "vite";
// import { type Server } from "http";
// import viteConfig from "../vite.config";
// import { nanoid } from "nanoid";

// const viteLogger = createLogger();

// export function log(message: string, source = "express") {
//   const formattedTime = new Date().toLocaleTimeString("en-US", {
//     hour: "numeric",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: true,
//   });

//   console.log(`${formattedTime} [${source}] ${message}`);
// }

// export async function setupVite(app: Express, server: Server) {
//   const serverOptions = {
//     middlewareMode: true,
//     hmr: { server },
//     allowedHosts: true as const,
//   };

//   const vite = await createViteServer({
//     ...viteConfig,
//     configFile: false,
//     customLogger: {
//       ...viteLogger,
//       error: (msg, options) => {
//         viteLogger.error(msg, options);
//         process.exit(1);
//       },
//     },
//     server: serverOptions,
//     appType: "custom",
//   });

//   app.use(vite.middlewares);
//   app.use("*", async (req, res, next) => {
//     const url = req.originalUrl;

//     try {
//       const clientTemplate = path.resolve(
//         import.meta.dirname,
//         "..",
//         "client",
//         "index.html",
//       );

//       // always reload the index.html file from disk incase it changes
//       let template = await fs.promises.readFile(clientTemplate, "utf-8");
//       template = template.replace(
//         `src="/src/main.tsx"`,
//         `src="/src/main.tsx?v=${nanoid()}"`,
//       );
//       const page = await vite.transformIndexHtml(url, template);
//       res.status(200).set({ "Content-Type": "text/html" }).end(page);
//     } catch (e) {
//       vite.ssrFixStacktrace(e as Error);
//       next(e);
//     }
//   });
// }

// export function serveStatic(app: Express) {
//   // const distPath = path.resolve(import.meta.dirname,"..",  "public");
//   const distPath = path.resolve(process.cwd(), "dist", "public");

//   if (!fs.existsSync(distPath)) {
//     throw new Error(
//       `Could not find the build directory: ${distPath}, make sure to build the client first`,
//     );
//   }

//   app.use(express.static(distPath));

//   // fall through to index.html if the file doesn't exist
//   app.use("*", (_req, res) => {
//     res.sendFile(path.resolve(distPath, "index.html"));
//   });
// }
import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer, createLogger } from "vite";
import { type Server } from "http";
import viteConfig from "../vite.config";
import { nanoid } from "nanoid";

const viteLogger = createLogger();

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    customLogger: {
      ...viteLogger,
      error: (msg, options) => {
        viteLogger.error(msg, options);
        process.exit(1);
      },
    },
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "..",
        "client",
        "index.html",
      );

      // always reload the index.html file from disk incase it changes
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`,
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

export function serveStatic(app: Express) {
  // Try multiple possible paths in order of likelihood
  const possiblePaths = [
    path.resolve(process.cwd(), "dist", "public"),
    path.resolve(import.meta.dirname, "..", "public"),
    path.resolve(import.meta.dirname, "public"),
    path.join(process.cwd(), "dist", "public"),
  ];

  console.log("[Static] Searching for build directory...");
  console.log("[Static] Current working directory:", process.cwd());
  console.log("[Static] import.meta.dirname:", import.meta.dirname);

  let distPath = "";
  
  for (const testPath of possiblePaths) {
    console.log("[Static] Trying path:", testPath);
    if (fs.existsSync(testPath)) {
      const indexExists = fs.existsSync(path.join(testPath, "index.html"));
      console.log("[Static] Path exists:", testPath);
      console.log("[Static] index.html exists:", indexExists);
      
      if (indexExists) {
        distPath = testPath;
        console.log("[Static] ✓ Using path:", distPath);
        break;
      }
    }
  }

  if (!distPath) {
    console.error("[Static] ✗ Could not find build directory!");
    console.error("[Static] Tried paths:", possiblePaths);
    throw new Error(
      `Could not find the build directory, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));
  console.log("[Static] Serving static files from:", distPath);

  // fall through to index.html if the file doesn't exist
  app.use("*", (req, res) => {
    console.log("[Static] Serving index.html for:", req.originalUrl);
    res.sendFile(path.resolve(distPath, "index.html"));
  });
}