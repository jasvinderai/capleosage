import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSchema } from "@shared/schema";

const contactFormSchema = insertContactSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: "",
      description: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: ContactFormData) => 
      apiRequest("POST", "/api/contacts", data),
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "We'll respond within 24 hours to schedule your consultation.",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to submit form. Please try again.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    },
    onSettled: () => {
      setIsSubmitting(false);
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    mutation.mutate(data);
  };

  const serviceValue = watch("service");

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg" data-testid="contact-form">
      <h3 className="text-2xl font-bold mb-6 text-primary">Book Your Free 30min Consultation</h3>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
            Full Name *
          </Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your full name"
            {...register("name")}
            className={errors.name ? "border-destructive" : ""}
            data-testid="input-name"
          />
          {errors.name && (
            <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
            Email Address *
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className={errors.email ? "border-destructive" : ""}
            data-testid="input-email"
          />
          {errors.email && (
            <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
            Company
          </Label>
          <Input
            id="company"
            type="text"
            placeholder="Your company name"
            {...register("company")}
            data-testid="input-company"
          />
        </div>
        
        <div>
          <Label className="block text-sm font-medium text-foreground mb-2">
            Service Interest
          </Label>
          <Select value={serviceValue} onValueChange={(value) => setValue("service", value)}>
            <SelectTrigger data-testid="select-service">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="data-engineering">Data Engineering & Analytics</SelectItem>
              <SelectItem value="digital-transformation">Digital Transformation Advisory</SelectItem>
              <SelectItem value="design-transformation">Design Transformation & Enhancement</SelectItem>
              <SelectItem value="multiple">Multiple Services</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div>
          <Label htmlFor="description" className="block text-sm font-medium text-foreground mb-2">
            Project Description
          </Label>
          <Textarea
            id="description"
            rows={4}
            placeholder="Tell us about your project or challenge..."
            {...register("description")}
            data-testid="textarea-description"
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-4"
          data-testid="button-submit"
        >
          {isSubmitting ? "Booking..." : "Book Free 30min Consultation"}
        </Button>
        
        <p className="text-sm text-muted-foreground text-center">
          We'll respond within 24 hours to schedule your consultation.
        </p>
      </form>
    </div>
  );
}
