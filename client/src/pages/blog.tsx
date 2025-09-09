import { Helmet } from "react-helmet";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User } from "lucide-react";

export default function Blog() {
  const blogPosts = [
    {
      title: "Building Scalable Data Pipelines in 2024",
      excerpt: "Modern approaches to data architecture that support real-time analytics and machine learning workflows for Calgary businesses.",
      content: "Explore the latest techniques and technologies for building robust, scalable data pipelines that can handle growing data volumes while maintaining performance and reliability.",
      category: "Data Engineering",
      readTime: 5,
      imageUrl: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=250",
      publishedAt: "2023-12-15",
      author: "Alex Thompson"
    },
    {
      title: "AI Adoption Strategies for Canadian SMBs",
      excerpt: "Practical framework for small and medium businesses to integrate AI technologies while managing costs and complexity.",
      content: "A comprehensive guide to implementing artificial intelligence solutions in small to medium businesses, with specific considerations for the Canadian market.",
      category: "Digital Transformation",
      readTime: 7,
      imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=250",
      publishedAt: "2023-12-10",
      author: "Jamie Park"
    },
    {
      title: "UX Design Trends Driving Conversions",
      excerpt: "How modern design principles and user experience optimization can significantly impact business outcomes and customer satisfaction.",
      content: "Discover the latest UX design trends and learn how to implement them to improve user engagement and drive better business results.",
      category: "Design Strategy",
      readTime: 6,
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=250",
      publishedAt: "2023-12-08",
      author: "Alex Thompson"
    },
    {
      title: "Digital Transformation ROI: Measuring Success",
      excerpt: "Key metrics and measurement strategies to ensure your digital transformation initiatives deliver tangible business value.",
      content: "Learn how to establish meaningful KPIs and measurement frameworks for digital transformation projects to demonstrate clear ROI.",
      category: "Digital Transformation",
      readTime: 8,
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=250",
      publishedAt: "2023-12-05",
      author: "Jamie Park"
    },
    {
      title: "Data Governance Best Practices for Energy Sector",
      excerpt: "Specialized guidance for energy companies looking to implement robust data governance frameworks while ensuring regulatory compliance.",
      content: "Energy sector-specific insights on implementing data governance that meets regulatory requirements while enabling business innovation.",
      category: "Data Engineering",
      readTime: 9,
      imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=250",
      publishedAt: "2023-12-01",
      author: "Alex Thompson"
    },
    {
      title: "Brand Strategy in the Digital Age",
      excerpt: "How Calgary businesses can build compelling brand narratives that resonate across digital and traditional channels.",
      content: "Strategic approaches to brand development that work effectively across all touchpoints in today's multi-channel environment.",
      category: "Design Strategy",
      readTime: 6,
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=250",
      publishedAt: "2023-11-28",
      author: "Jamie Park"
    }
  ];

  const categories = ["All", "Data Engineering", "Digital Transformation", "Design Strategy"];
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <>
      <Helmet>
        <title>Blog & Insights | CAPLEO Sage Solutions | Calgary Business Technology</title>
        <meta name="description" content="Expert insights on data engineering, digital transformation, and design strategy from Calgary's leading consulting firm. Technical articles and industry trends." />
      </Helmet>
      
      <div className="py-20" data-testid="blog-page">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4 text-primary" data-testid="blog-title">Latest Insights</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="blog-subtitle">
              Expert perspectives on data, digital transformation, and design trends that matter to Calgary businesses.
            </p>
          </div>
          
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-testid="blog-categories">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={category === "All" ? "default" : "outline"} 
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                data-testid={`category-${category.toLowerCase().replace(' ', '-')}`}
              >
                {category}
              </Badge>
            ))}
          </div>
          
          {/* Featured Post */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-primary">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow" data-testid="featured-post">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <img 
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover"
                    data-testid="featured-post-image"
                  />
                  
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <Badge variant="secondary" className="mr-3">{featuredPost.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="mr-4">{featuredPost.readTime} min read</span>
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-3xl font-bold mb-4 text-primary">{featuredPost.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">By {featuredPost.author}</span>
                      </div>
                      <button className="text-primary font-medium hover:underline">
                        Read Full Article →
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Other Posts */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-primary">Recent Articles</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {otherPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow" data-testid={`blog-post-${index}`}>
                  <img 
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-48 object-cover"
                    data-testid={`blog-post-image-${index}`}
                  />
                  
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Badge variant="secondary" className="mr-3">{post.category}</Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime} min read</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-primary">{post.title}</h3>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <button className="text-primary font-medium hover:underline text-sm">
                        Read More →
                      </button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Newsletter Signup */}
          <div className="mt-16 bg-muted p-8 rounded-xl text-center" data-testid="newsletter-signup">
            <h3 className="text-2xl font-bold mb-4 text-primary">Stay Updated</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the latest insights on data engineering, digital transformation, and design strategy delivered to your inbox monthly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                data-testid="newsletter-email"
              />
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors" data-testid="newsletter-submit">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
