import React, { useEffect, useRef, useState } from 'react';
import { 
  Calculator, 
  Code, 
  Database, 
  Palette, 
  Video, 
  Home, 
  Brain, 
  BarChart3,
  FileSpreadsheet,
  Lightbulb
} from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: "Business & Finance",
      icon: <Calculator className="w-6 h-6" />,
      color: "primary",
      skills: [
        { name: "Accounting & Bookkeeping", level: 85 },
        { name: "Business Analysis", level: 75 },
        { name: "Financial Management", level: 80 },
        { name: "Data Entry & Management", level: 90 }
      ]
    },
    {
      title: "Technology",
      icon: <Code className="w-6 h-6" />,
      color: "accent",
      skills: [
        { name: "HTML & CSS", level: 85 },
        { name: "JavaScript", level: 70 },
        { name: "Google Sheets (Advanced)", level: 95 },
        { name: "AI Tools Utilization", level: 80 }
      ]
    },
    {
      title: "Creative Design",
      icon: <Palette className="w-6 h-6" />,
      color: "primary",
      skills: [
        { name: "Canva Design", level: 90 },
        { name: "Video Editing", level: 75 },
        { name: "Photo Editing", level: 80 },
        { name: "Interior Design Concepts", level: 70 }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "accent",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Teamwork & Collaboration", level: 85 },
        { name: "Communication", level: 80 },
        { name: "Adaptability", level: 88 }
      ]
    }
  ];

  const tools = [
    { name: "Google Sheets", icon: <FileSpreadsheet className="w-8 h-8" />, proficiency: "Expert" },
    { name: "Canva", icon: <Palette className="w-8 h-8" />, proficiency: "Advanced" },
    { name: "Video Editing", icon: <Video className="w-8 h-8" />, proficiency: "Advanced" },
    { name: "AI Tools", icon: <Brain className="w-8 h-8" />, proficiency: "Advanced" },
    { name: "Web Development", icon: <Code className="w-8 h-8" />, proficiency: "Intermediate" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, color, index }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-foreground font-medium">{skill.name}</span>
        <span className="text-muted-foreground text-sm">{skill.level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ease-out ${
            color === 'primary' ? 'bg-gradient-primary' : 'bg-gradient-accent'
          }`}
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 0.1}s`
          }}
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-30" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      <div className="absolute top-40 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-poppins font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A diverse skill set combining business acumen with creative and technical expertise,
            constantly evolving through continuous learning and practical application.
          </p>
        </div>

        {/* Skills Categories */}
        <section ref={skillsRef} className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 shadow-elegant hover-lift border border-white/20 dark:border-gray-800/20 group hover:scale-105 transition-all duration-500"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-glow group-hover:shadow-lg transition-all duration-300 ${
                    category.color === 'primary' ? 'bg-gradient-primary group-hover:shadow-primary/40' : 'bg-gradient-accent group-hover:shadow-accent/40'
                  }`}>
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-poppins font-semibold">
                    <span className={category.color === 'primary' ? 'gradient-text' : 'gradient-text-accent'}>
                      {category.title}
                    </span>
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, index) => (
                    <SkillBar 
                      key={index} 
                      skill={skill} 
                      color={category.color}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools & Technologies */}
        <section className="mb-20">
          <h2 className="text-3xl font-poppins font-bold text-center mb-12">
            Tools & <span className="gradient-text-accent">Technologies</span>
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-gradient-card rounded-2xl p-6 text-center shadow-soft hover-lift transition-all duration-300 hover:shadow-medium"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-primary mb-4 flex justify-center">
                  {tool.icon}
                </div>
                <h4 className="font-poppins font-semibold mb-2 text-sm">{tool.name}</h4>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  tool.proficiency === 'Expert' 
                    ? 'bg-primary/10 text-primary'
                    : tool.proficiency === 'Advanced'
                    ? 'bg-accent/10 text-accent' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  {tool.proficiency}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Learning Philosophy */}
        <section className="text-center">
          <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 shadow-medium max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-poppins font-bold mb-6">
              Continuous <span className="gradient-text">Learning</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              I believe in the power of self-directed learning and staying updated with the latest 
              trends in business, technology, and design. My approach combines theoretical knowledge 
              with hands-on practice to build practical, applicable skills.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20">
                Self-Learning
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-lg border border-accent/20">
                Problem Solving
              </span>
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20">
                Innovation
              </span>
              <span className="px-4 py-2 bg-accent/10 text-accent rounded-lg border border-accent/20">
                Adaptability
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;