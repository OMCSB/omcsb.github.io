import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yourusername",
      icon: Github,
      label: "View my code on GitHub",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/yourprofile",
      icon: Linkedin,
      label: "Connect with me on LinkedIn",
    },
    {
      name: "Email",
      url: "mailto:your.email@example.com",
      icon: Mail,
      label: "Send me an email",
    },
  ];

  const quickLinks = [
    { name: "Timeline", href: "#timeline" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Software Engineer
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
                Building scalable web applications and cloud-native systems.
                Let's create something amazing together.
              </p>

              {/* Resume Download */}
              <motion.a
                href="/assets/CV_GarethGlendiuzY_2.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="card-elegant inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-medium rounded-xl hover:bg-accent-glow transition-colors shadow-card hover:shadow-glow"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </motion.a>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      onKeyDown={(e) =>
                        handleKeyDown(e, () => handleLinkClick(link.href))
                      }
                      className="text-muted-foreground hover:text-accent transition-colors duration-200 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Connect
              </h4>
              <div className="flex flex-col space-y-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.button
                      key={link.name}
                      onClick={() => handleLinkClick(link.url)}
                      onKeyDown={(e) =>
                        handleKeyDown(e, () => handleLinkClick(link.url))
                      }
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-3 text-muted-foreground hover:text-accent transition-colors duration-200 text-left"
                      aria-label={link.label}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{link.name}</span>
                    </motion.button>
                  );
                })}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <strong>Status:</strong> Available for new opportunities
                </p>
                <p className="text-sm text-green-600 mt-1">
                  ● Open to remote work
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Analytics Placeholder */}
        {/* 
        <script>
          // Analytics tracking code would go here
          // Example: Google Analytics, Plausible, etc.
        </script>
        */}
      </div>
    </footer>
  );
};
