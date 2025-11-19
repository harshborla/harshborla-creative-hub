import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  ExternalLink, 
  Github, 
  FileSpreadsheet, 
  Palette, 
  Video, 
  Home, 
  Calculator,
  Filter
} from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Business', 'Design', 'Development', 'Spreadsheets'];

  const projects = [
    {
      title: "Restaurant Financial Dashboard",
      category: "Business", 
      description: "A complete system to track money and create reports that I built while working as Accounting Assistant. It has automatic calculations and easy-to-read charts.",
      image: "/api/placeholder/400/300",
      technologies: ["Google Sheets", "Data Analysis", "Financial Management"],
      icon: <Calculator className="w-6 h-6" />,
      color: "primary"
    },
    {
      title: "Advanced Google Sheets Automation",
      category: "Spreadsheets",
      description: "Automatic reporting system with live dashboards, smart calculations, and visual data display to help understand business information.",
      image: "/api/placeholder/400/300", 
      technologies: ["Google Sheets", "Automation", "Data Visualization"],
      icon: <FileSpreadsheet className="w-6 h-6" />,
      color: "accent"
    },
    {
      title: "Brand Identity Design Package",
      category: "Design",
      description: "Full brand design including logo, colors, fonts, and marketing materials made using Canva for a local business.",
      image: "/api/placeholder/400/300",
      technologies: ["Canva", "Brand Design", "Visual Identity"],
      icon: <Palette className="w-6 h-6" />,
      color: "primary"
    },
    {
      title: "Modern Interior Design Concept",
      category: "Design", 
      description: "Modern home interior design with smart use of space, beautiful looks, and practical layouts for a 2BHK apartment.",
      image: "/api/placeholder/400/300",
      technologies: ["Interior Design", "Space Planning", "3D Visualization"],
      icon: <Home className="w-6 h-6" />,
      color: "accent"
    },
    {
      title: "Promotional Video Campaign",
      category: "Design",
      description: "Creative video editing for social media with moving graphics, smooth transitions, and interesting visual stories.",
      image: "/api/placeholder/400/300",
      technologies: ["Video Editing", "Motion Graphics", "Social Media"],
      icon: <Video className="w-6 h-6" />,
      color: "primary"
    },
    {
      title: "Business Website Frontend",
      category: "Development",
      description: "Business website built with HTML, CSS, and JavaScript that works on all devices with modern design and smooth animations.",
      image: "/api/placeholder/400/300",
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"],
      icon: <ExternalLink className="w-6 h-6" />,
      color: "accent"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-30" />
      <div className="absolute top-32 left-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 right-16 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-poppins font-bold mb-6">
            My <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my projects in business, design, and web development. Each project helped me learn something new.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-gradient-primary text-white shadow-accent' 
                  : 'hover:bg-primary/10 hover:text-primary hover:border-primary'
              }`}
            >
              <Filter className="w-4 h-4 mr-2" />
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl overflow-hidden shadow-elegant hover-lift transition-all duration-500 border border-white/20 dark:border-gray-800/20 group hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="h-64 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative overflow-hidden group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-white shadow-glow transition-all duration-300 ${
                  project.color === 'primary' ? 'bg-gradient-primary group-hover:shadow-primary/40' : 'bg-gradient-accent group-hover:shadow-accent/40'
                }`}>
                  {project.icon}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.color === 'primary' 
                      ? 'bg-primary/10 text-primary border border-primary/20'
                      : 'bg-accent/10 text-accent border border-accent/20'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-poppins font-bold mb-4">
                  <span className={project.color === 'primary' ? 'gradient-text' : 'gradient-text-accent'}>
                    {project.title}
                  </span>
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm"
                    className={`flex-1 ${
                      project.color === 'primary' 
                        ? 'bg-gradient-primary hover:opacity-90' 
                        : 'bg-gradient-accent hover:opacity-90'
                    }`}
                  >
                    View Details <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="hover-lift">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Highlight */}
        <section className="mb-20">
          <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 shadow-medium text-center">
            <h2 className="text-3xl font-poppins font-bold mb-6">
              Project <span className="gradient-text-accent">Highlights</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
              Each project demonstrates my ability to understand complex requirements, 
              develop creative solutions, and deliver results that combine technical excellence with aesthetic appeal.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  number: "7+", 
                  label: "Projects Completed",
                  color: "primary"
                },
                { 
                  number: "100%", 
                  label: "Client Satisfaction",
                  color: "accent"
                },
                { 
                  number: "5", 
                  label: "Skill Categories",
                  color: "primary"
                }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-poppins font-bold mb-2">
                    <span className={stat.color === 'primary' ? 'gradient-text' : 'gradient-text-accent'}>
                      {stat.number}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 shadow-medium max-w-4xl mx-auto">
            <h2 className="text-3xl font-poppins font-bold mb-6">
              Interested in Working <span className="gradient-text">Together?</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              I'm always excited to take on new challenges and create innovative solutions.
              Let's discuss how I can help bring your next project to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-accent">
                <a href="/contact">
                  Start a Conversation
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="hover-lift">
                <a href="mailto:harshborla064@gmail.com">
                  Send Direct Email
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;