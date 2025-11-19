import React from 'react';
import { GraduationCap, MapPin, Calendar, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const experiences = [
    {
      title: "Accounting Assistant (Part-time)",
      company: "Raipur, Chhattisgarh, India",
      period: "2023-2024",
      description: "I handled daily accounting work like keeping records, managing cash, and making financial entries. I learned about managing money and how small businesses work.",
      skills: ["Financial Management", "Record-Keeping", "Cash Handling", "Business Operations"]
    }
  ];

  const education = [
    {
      degree: "NavGurukul – School of Business",
      school: "NavGurukul Foundation for Social Welfare",
      period: "Present",
      status: "Currently Pursuing",
      description: "I am studying at NavGurukul and learning business and creative skills. I learn about communication, teamwork, solving problems, CRM, Google tools, digital marketing, working with data, and basic website coding (HTML, CSS, JavaScript)."
    },
    {
      degree: "B.Sc Science",
      school: "Govt. Indrawati College, Bhopalpatnam, Chhattisgarh",
      period: "Present",
      status: "Currently Pursuing",
      description: "I am also studying for a Bachelor of Science degree, which helps me think clearly and build a strong base for my education."
    },
    {
      degree: "CAD Academy – Interior Design",
      school: "CAD Academy",
      period: "Completed",
      status: "Completed",
      description: "I completed an Interior Design program at CAD Academy. I learned how to design spaces, plan layouts, and present visual ideas."
    },
    {
      degree: "Higher Secondary (12th – Science, Biology)",
      school: "DAV Mukhyamantri Public School, Ulloor, Bhopalpatnam",
      period: "2023",
      status: "Completed",
      description: "I completed my 12th grade in the Science (Biology) stream, studying Physics, Chemistry, and Biology."
    },
    {
      degree: "Secondary School (10th)",
      school: "DAV Mukhyamantri Public School, Ulloor, Bhopalpatnam",
      period: "2021",
      status: "Completed",
      description: "I completed my 10th grade with a strong focus on basic subjects and foundational learning."
    }
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Goal-Oriented",
      description: "I always focus on reaching my goals with clear plans."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Creative Thinking",
      description: "I bring new ideas to solve everyday business problems."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative",
      description: "I enjoy working in teams and building good connections."
    }
  ];

  return (
    <div className="min-h-screen py-20 relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl font-poppins font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I am a student who loves learning about business and working with numbers. I believe in learning by doing and using what I learn to help others.
          </p>
        </div>

        {/* Personal Story */}
        <section className="mb-20">
          <div className="bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-elegant hover-lift border border-white/20 dark:border-gray-800/20">
            <h2 className="text-3xl font-poppins font-bold mb-6 gradient-text-accent">My Journey</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                I started my education in science, which taught me how to think carefully and pay attention to small details. I also worked with accounting and learned about managing money and business operations.
              </p>
              <p>
                At the School of Business, I am learning useful tools like Google Sheets, CRM, digital marketing, and working with data. I also learned about interior design and building websites, which helps me be creative while solving problems.
              </p>
              <p>
                I enjoy bringing together different skills - using science thinking, money management, and creative ideas to find good solutions. I always try to use what I learn in real situations.
              </p>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-poppins font-bold text-center mb-12">
            Core <span className="gradient-text">Values</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="text-center p-8 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-glow hover-lift border border-white/20 dark:border-gray-800/20 group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-glow group-hover:shadow-primary/40 transition-all duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-poppins font-semibold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-20">
          <h2 className="text-3xl font-poppins font-bold text-center mb-12">
            Educational <span className="gradient-text-accent">Background</span>
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-gradient-card rounded-2xl p-6 lg:p-8 shadow-soft hover-lift border border-border/50"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-poppins font-semibold gradient-text">{edu.degree}</h3>
                    <p className="text-foreground font-medium">{edu.school}</p>
                  </div>
                  <div className="flex flex-col lg:items-end">
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      edu.status === 'Currently Pursuing' 
                        ? 'bg-primary/10 text-primary' 
                        : 'bg-accent/10 text-accent'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Work Experience */}
        <section className="mb-20">
          <h2 className="text-3xl font-poppins font-bold text-center mb-12">
            Work <span className="gradient-text">Experience</span>
          </h2>
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-gradient-card rounded-2xl p-6 lg:p-8 shadow-soft hover-lift border border-border/50"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-poppins font-semibold gradient-text-accent">{exp.title}</h3>
                  <p className="text-foreground font-medium text-lg">{exp.company}</p>
                </div>
                <span className="text-muted-foreground px-4 py-2 bg-muted/50 rounded-lg">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-lg border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Personal Details */}
        <section className="text-center">
          <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 shadow-medium">
            <h2 className="text-3xl font-poppins font-bold mb-8">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span>Bhopalpatnam</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-accent" />
                </div>
                <span>Business Student</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;