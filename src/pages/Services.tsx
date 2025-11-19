import React from 'react';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  FileSpreadsheet, 
  Palette, 
  Video, 
  Home, 
  Brain, 
  Code,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      title: "Accounting & Business Support",
      description: "Professional accounting assistance, bookkeeping, and business process optimization.",
      icon: <Calculator className="w-8 h-8" />,
      features: [
        "Financial record management", 
        "Bookkeeping assistance",
        "Business process analysis",
        "Data entry and organization"
      ],
      color: "primary"
    },
    {
      title: "Google Sheets Reporting & Automation",
      description: "Advanced spreadsheet solutions, automated reporting, and data visualization.",
      icon: <FileSpreadsheet className="w-8 h-8" />,
      features: [
        "Custom dashboard creation",
        "Automated reporting systems", 
        "Data analysis and visualization",
        "Formula and macro development"
      ],
      color: "accent"
    },
    {
      title: "Graphic Design (Canva)",
      description: "Creative visual content for marketing, branding, and business communications.",
      icon: <Palette className="w-8 h-8" />,
      features: [
        "Social media graphics",
        "Business presentations", 
        "Marketing materials",
        "Brand identity design"
      ],
      color: "primary"
    },
    {
      title: "Video & Photo Editing",
      description: "Professional editing services for promotional content and visual storytelling.",
      icon: <Video className="w-8 h-8" />,
      features: [
        "Video editing and production",
        "Photo enhancement",
        "Content creation for social media",
        "Promotional video development"
      ],
      color: "accent"
    },
    {
      title: "Interior Design Concepts",
      description: "Creative space planning and design concepts for residential and commercial spaces.",
      icon: <Home className="w-8 h-8" />,
      features: [
        "Space planning and layout",
        "Color scheme development",
        "Furniture and decor suggestions",
        "3D visualization concepts"
      ],
      color: "primary"
    },
    {
      title: "AI Tools Utilization",
      description: "Leveraging AI technologies to streamline business processes and enhance productivity.",
      icon: <Brain className="w-8 h-8" />,
      features: [
        "AI tool integration",
        "Process automation",
        "Content generation assistance",
        "Workflow optimization"
      ],
      color: "accent"
    },
    {
      title: "Web Design (Frontend)",
      description: "Modern, responsive web design and development for businesses and personal projects.",
      icon: <Code className="w-8 h-8" />,
      features: [
        "Responsive web design",
        "HTML/CSS development",
        "JavaScript functionality",
        "User experience optimization"
      ],
      color: "primary"
    }
  ];

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-40" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-poppins font-bold mb-6">
            My <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions combining business expertise with creative innovation.
            From accounting to design, I offer services that bridge the gap between analytical precision and creative excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 shadow-elegant hover-lift transition-all duration-500 border border-white/20 dark:border-gray-800/20 group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Header */}
              <div className="flex items-start gap-6 mb-6">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-glow transition-all duration-300 ${
                  service.color === 'primary' ? 'bg-gradient-primary group-hover:shadow-primary/40' : 'bg-gradient-accent group-hover:shadow-accent/40'
                }`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-poppins font-bold mb-3">
                    <span className={service.color === 'primary' ? 'gradient-text' : 'gradient-text-accent'}>
                      {service.title}
                    </span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                      service.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button 
                asChild 
                className={`w-full ${
                  service.color === 'primary' 
                    ? 'bg-gradient-primary hover:opacity-90' 
                    : 'bg-gradient-accent hover:opacity-90'
                }`}
              >
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-poppins font-bold text-center mb-12">
            My <span className="gradient-text-accent">Process</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Understanding",
                description: "I start by thoroughly understanding your requirements, objectives, and vision for the project.",
                color: "primary"
              },
              {
                step: "02", 
                title: "Planning",
                description: "Detailed planning and strategy development to ensure efficient execution and optimal results.",
                color: "accent"
              },
              {
                step: "03",
                title: "Execution",
                description: "Professional delivery with attention to detail, keeping you updated throughout the process.",
                color: "primary"
              }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mx-auto mb-6 ${
                  process.color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-accent'
                }`}>
                  {process.step}
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-4">{process.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 shadow-medium max-w-4xl mx-auto">
            <h2 className="text-3xl font-poppins font-bold mb-6">
              Ready to Get <span className="gradient-text">Started?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Let's discuss your project and explore how I can help bring your vision to life.
              I'm committed to delivering quality work that exceeds expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-accent">
                <Link to="/contact">
                  Start a Project <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-lift">
                <Link to="/portfolio">
                  View My Work
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;