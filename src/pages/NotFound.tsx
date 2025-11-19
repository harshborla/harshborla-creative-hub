import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-hero">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float float-delayed" />
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <div className="text-8xl sm:text-9xl font-poppins font-bold gradient-text mb-4">
            404
          </div>
          <h1 className="text-3xl sm:text-4xl font-poppins font-bold mb-4 text-foreground">
            Page Not Found
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have wandered off. 
            Don't worry, let's get you back on track.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 shadow-accent">
            <Link to="/">
              <Home className="mr-2 w-4 h-4" />
              Back to Home
            </Link>
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.history.back()}
            className="hover-lift"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Go Back
          </Button>
        </div>

        <div className="mt-12 p-6 bg-gradient-card rounded-2xl shadow-soft border border-border/50">
          <h3 className="font-poppins font-semibold text-lg mb-2">Looking for something specific?</h3>
          <p className="text-muted-foreground mb-4">
            You can explore my work and services through the main navigation.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { name: 'About', path: '/about' },
              { name: 'Skills', path: '/skills' },
              { name: 'Services', path: '/services' },
              { name: 'Portfolio', path: '/portfolio' },
              { name: 'Contact', path: '/contact' },
            ].map((link) => (
              <Button key={link.name} asChild variant="outline" size="sm">
                <Link to={link.path}>{link.name}</Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
