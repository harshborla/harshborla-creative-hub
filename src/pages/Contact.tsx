import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram, 
  Send,
  MessageCircle,
  Clock,
  CheckCircle
} from 'lucide-react';

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(1, { message: "Name is required" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email" })
    .max(255, { message: "Email must be less than 255 characters" }),
  subject: z.string()
    .trim()
    .min(1, { message: "Subject is required" })
    .max(200, { message: "Subject must be less than 200 characters" }),
  message: z.string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(2000, { message: "Message must be less than 2000 characters" })
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form data
    try {
      const validatedData = contactSchema.parse(formData);
      setIsSubmitting(true);

      // Call the edge function to send email
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: validatedData
      });

      if (error) throw error;

      // Reset form and show success
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        // Show validation errors
        toast({
          title: "Please check your input",
          description: error.errors[0].message,
          variant: "destructive",
        });
      } else {
        console.error('Error sending message:', error);
        toast({
          title: "Failed to send message",
          description: "Please try again or contact me directly via email.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "harshborla064@gmail.com",
      link: "mailto:harshborla064@gmail.com",
      color: "primary"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+91 8305303144",
      link: "tel:+918305303144",
      color: "accent"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Bhopalpatnam",
      link: "#",
      color: "primary"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "Harsh Borla",
      link: "https://linkedin.com/in/harsh-borla",
      color: "primary"
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      label: "Instagram", 
      value: "@hrxhhh.roy_",
      link: "https://instagram.com/hrxhhh.roy_",
      color: "accent"
    }
  ];

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-40" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-poppins font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Want to start a project? I would love to hear from you. 
            Let's talk about how we can work together to make your ideas real.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 shadow-elegant border border-white/20 dark:border-gray-800/20">
            <div className="mb-8">
              <h2 className="text-3xl font-poppins font-bold mb-4">
                Send Me a <span className="gradient-text-accent">Message</span>
              </h2>
              <p className="text-muted-foreground">
                Fill out this form and I will reply to you soon.
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-poppins font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:opacity-90 shadow-accent disabled:opacity-50"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact */}
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 shadow-elegant border border-white/20 dark:border-gray-800/20">
              <h3 className="text-2xl font-poppins font-bold mb-6">
                Contact <span className="gradient-text">Information</span>
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${
                      contact.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-accent'
                    }`}>
                      {contact.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 shadow-elegant border border-white/20 dark:border-gray-800/20">
              <h3 className="text-2xl font-poppins font-bold mb-6">
                Social <span className="gradient-text-accent">Media</span>
              </h3>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white ${
                      social.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-accent'
                    }`}>
                      {social.icon}
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{social.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">
                        {social.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 shadow-elegant border border-white/20 dark:border-gray-800/20 text-center">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-poppins font-bold mb-2">Quick Response</h3>
              <p className="text-muted-foreground">
                I typically respond to messages within 24 hours. For urgent inquiries, 
                feel free to call me directly.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20">
          <h2 className="text-3xl font-poppins font-bold text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "What services do you offer?",
                answer: "I provide a range of services including accounting support, Google Sheets automation, graphic design, video editing, interior design concepts, and frontend web development."
              },
              {
                question: "How long does a typical project take?",
                answer: "Project timelines vary based on complexity. Simple tasks may take 1-3 days, while comprehensive projects can take 1-3 weeks. I always provide realistic timelines during our initial discussion."
              },
              {
                question: "Do you work with students and small businesses?",
                answer: "Absolutely! I work with clients of all sizes, from individual students to small businesses. I believe in providing quality service regardless of project size."
              },
              {
                question: "What's your approach to project communication?",
                answer: "I maintain regular communication throughout the project, providing updates and seeking feedback to ensure the final result exceeds your expectations."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg rounded-2xl p-6 shadow-glow border border-white/20 dark:border-gray-800/20 hover-lift">
                <h4 className="font-poppins font-semibold mb-3 text-lg">{faq.question}</h4>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact;