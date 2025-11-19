import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Mail, MapPin, GraduationCap } from 'lucide-react';
import harshProfile from '@/assets/harsh-profile-new.jpg';
const Home = () => {
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 bg-gradient-hero">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>
        
        {/* Floating Background Elements with Enhanced Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-primary opacity-10 rounded-full blur-3xl animate-float" />
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-accent opacity-8 rounded-full blur-3xl animate-float float-delayed" />
          <div className="absolute top-1/2 left-3/4 w-56 h-56 bg-primary/20 rounded-full blur-2xl animate-float" />
          <div className="absolute top-10 right-10 w-32 h-32 bg-accent/30 rounded-full blur-xl animate-float" />
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/15 rounded-full blur-2xl animate-float float-delayed" />
        </div>

        {/* Particle Effect Overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/5 w-2 h-2 bg-primary rounded-full animate-pulse opacity-60" />
          <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse opacity-40" />
          <div className="absolute top-1/2 left-3/5 w-1.5 h-1.5 bg-primary rounded-full animate-pulse opacity-50" />
          <div className="absolute top-1/4 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse opacity-30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Profile Image */}
            <div className="relative animate-slide-in-right order-1 lg:order-2 mb-6 lg:mb-0">
              <div className="relative mx-auto w-56 h-56 sm:w-72 sm:h-72 lg:w-96 lg:h-96">
                {/* Multiple Background Circles for Depth */}
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 animate-float scale-110" />
                <div className="absolute inset-2 bg-gradient-accent rounded-full blur-2xl opacity-15 animate-float float-delayed scale-105" />
                
                {/* Glass Morphism Container */}
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden shadow-strong bg-white/10 backdrop-blur-md border border-white/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
                  <img src={harshProfile} alt="Harsh Borla - Business Student & Creative Professional" className="w-full h-full object-cover relative z-10" />
                </div>

                {/* Enhanced Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-accent rounded-2xl shadow-accent animate-float flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <span className="text-2xl lg:text-3xl">🎯</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-14 h-14 lg:w-16 lg:h-16 bg-gradient-primary rounded-xl shadow-medium animate-float float-delayed flex items-center justify-center backdrop-blur-sm border border-white/20">
                  <span className="text-xl lg:text-2xl">💡</span>
                </div>
                <div className="absolute top-3 -left-6 lg:top-4 lg:-left-8 w-10 h-10 lg:w-12 lg:h-12 bg-white/20 backdrop-blur-sm rounded-full shadow-soft animate-float flex items-center justify-center border border-white/30">
                  <span className="text-base lg:text-lg">✨</span>
                </div>
                <div className="absolute -top-1 left-1/3 lg:-top-2 w-6 h-6 lg:w-8 lg:h-8 bg-accent/30 backdrop-blur-sm rounded-full shadow-soft animate-float float-delayed flex items-center justify-center border border-white/20">
                  <span className="text-xs lg:text-sm">🚀</span>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-6 lg:space-y-8 animate-fade-in-up order-2 lg:order-1 text-center lg:text-left">
              <div className="space-y-4 lg:space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 lg:px-5 lg:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 text-primary text-sm font-medium shadow-soft hover-lift">
                  <GraduationCap className="w-4 h-4" />
                  School of Business Student
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold leading-tight text-primary">
                  Harsh Borla
                </h1>
                
                <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-poppins font-medium text-muted-foreground leading-relaxed">
                  <span className="gradient-text-accent">Blending Business & Creativity</span>
                </h2>
              </div>

              <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                I'm currently learning at the School of Business, where I focus on real-world business skills like communication, leadership, problem-solving, marketing basics, and practical decision-making. I enjoy applying these skills to projects that help me grow personally and professionally.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="bg-gradient-primary hover:shadow-primary/25 hover:scale-105 transition-all duration-300 shadow-accent border-0 text-white font-semibold">
                  <Link to="/portfolio">
                    View Portfolio <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="bg-white/5 backdrop-blur-sm border-white/20 text-foreground hover:bg-white/10 hover:border-white/40 hover-lift transition-all duration-300">
                  <Link to="/contact">
                    <Mail className="mr-2 w-4 h-4" />
                    Contact Me
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-4 sm:gap-6 justify-center lg:justify-start text-sm text-muted-foreground flex-wrap">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Bhopalpatnam</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-accent" />
                  <span>B.S.c (2024-2026)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-card rounded-2xl shadow-soft hover-lift">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-poppins font-bold gradient-text mb-2">2+ Years</h3>
              <p className="text-muted-foreground">Academic Excellence</p>
            </div>

            <div className="text-center p-6 bg-gradient-card rounded-2xl shadow-soft hover-lift">
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">💼</span>
              </div>
              <h3 className="text-2xl font-poppins font-bold gradient-text-accent mb-2">1+ Year</h3>
              <p className="text-muted-foreground">Work Experience</p>
            </div>

            <div className="text-center p-6 bg-gradient-card rounded-2xl shadow-soft hover-lift">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-xl">🎨</span>
              </div>
              <h3 className="text-2xl font-poppins font-bold gradient-text mb-2">Multiple</h3>
              <p className="text-muted-foreground">Creative Skills</p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;