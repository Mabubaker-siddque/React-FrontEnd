import React from 'react';
import { Target, Zap, Users, Shield } from 'lucide-react';

export const About: React.FC = () => {
  const skills = [
    { name: 'React', level: '95%' },
    { name: 'TypeScript', level: '90%' },
    { name: 'Tailwind CSS', level: '85%' },
    { name: 'Next.js', level: '80%' },
    { name: 'Node.js', level: '75%' },
    { name: 'UI/UX Design', level: '70%' },
  ];

  const features = [
    { icon: <Target className="h-6 w-6 text-primary" />, title: 'Goal Oriented', desc: 'Focused on delivering high quality solutions that meet business needs.' },
    { icon: <Zap className="h-6 w-6 text-yellow-500" />, title: 'Fast Execution', desc: 'Rapid prototyping and development using modern tooling.' },
    { icon: <Users className="h-6 w-6 text-blue-500" />, title: 'Team Player', desc: 'Collaborative approach to problem solving and code reviews.' },
    { icon: <Shield className="h-6 w-6 text-emerald-500" />, title: 'Reliable', desc: 'Writing clean, maintainable, and well-tested code.' },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex-grow w-full">
      <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden glass">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80" 
              alt="Workspace" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
        
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Building Digital <span className="text-primary">Experiences</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            I'm a passionate Frontend Developer dedicated to creating beautiful, responsive, and user-friendly web applications. With a strong foundation in modern web technologies, I transform complex problems into elegant solutions.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            {features.map((feat, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg h-fit">
                  {feat.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">{feat.title}</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="glass p-8 rounded-2xl">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Mission</h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            Our mission is to empower developers with the skills and knowledge needed to excel in the modern web development landscape. We believe in practical, hands-on learning that bridges the gap between theory and real-world application.
          </p>
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            Through clean code, intuitive design, and scalable architecture, we strive to elevate the standard of frontend development and create digital products that leave a lasting impact.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Technical Skills</h2>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-slate-700 dark:text-slate-200">{skill.name}</span>
                  <span className="text-slate-500 dark:text-slate-400">{skill.level}</span>
                </div>
                <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
