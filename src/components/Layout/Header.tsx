import { motion } from "framer-motion";
import { ThemeToggle } from "../ThemeToggle";

export const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-40 glass border-b border-border/20"
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold text-foreground max-w-[32px] md:max-w-[64px]"
          >
            <span>
              <img src="/assets/NewLogo.png"/>
            </span>
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {[
              { label: "About", id: "hero" },
              { label: "Timeline", id: "timeline" },
              { label: "Projects", id: "projects" },
              { label: "Skills", id: "skills" },
              { label: "Contact", id: "contact" },
            ].map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
              >
                {item.label}
              </motion.button>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </motion.header>
  );
};
