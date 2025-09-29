import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { projectsData } from '@/data/projects';

export const Projects = () => {
  const handleKeyDown = (event: React.KeyboardEvent, url: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in full-stack development, 
            cloud architecture, and scalable systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="project-card group"
            >
              {/* Project Image */}
              <div className="aspect-video bg-gradient-card relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/20">
                    {project.title.split(' ').map(word => word[0]).join('').slice(0, 2)}
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <motion.button
                      onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                      onKeyDown={(e) => handleKeyDown(e, project.liveUrl!)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground text-sm font-medium rounded-lg hover:bg-accent-glow transition-colors"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <Eye className="w-4 h-4" />
                      Live Demo
                    </motion.button>
                  )}
                  
                  {project.repoUrl && (
                    <motion.button
                      onClick={() => window.open(project.repoUrl, '_blank', 'noopener,noreferrer')}
                      onKeyDown={(e) => handleKeyDown(e, project.repoUrl!)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground text-sm font-medium rounded-lg hover:bg-muted transition-colors"
                      aria-label={`View source code for ${project.title}`}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.button>
                  )}
                  
                  {project.caseStudyUrl && (
                    <motion.button
                      onClick={() => window.open(project.caseStudyUrl, '_blank', 'noopener,noreferrer')}
                      onKeyDown={(e) => handleKeyDown(e, project.caseStudyUrl!)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-muted text-muted-foreground text-sm font-medium rounded-lg hover:bg-secondary transition-colors"
                      aria-label={`Read case study for ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Case Study
                    </motion.button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};