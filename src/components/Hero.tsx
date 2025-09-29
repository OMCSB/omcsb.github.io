import { LayoutGroup, motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import RotatingText from "./RotatingText";

export const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden "
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-5" />

      {/* Blur Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large primary blur orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-accent/25 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />

        {/* Medium secondary blur orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary-glow/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/5 w-72 h-72 bg-accent-glow/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />

        {/* Small accent blur orbs */}
        <div
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-primary/10 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute top-3/4 right-1/3 w-56 h-56 bg-accent/15 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "0.8s" }}
        />

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 backdrop-blur-[1px]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, staggerChildren: 0.2, delayChildren: 0.3 }}
        className="container mx-auto px-6 text-start relative z-10 max-w-7xl"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-row flex-wrap text-2xl sm:text-3xl md:text-5xl gap-2 mb-6 text-center sm:text-left"
        >
          <LayoutGroup>
            <p className="py-0.5 sm:py-1 md:py-2">I'm</p>
            <RotatingText
              texts={["Gareth", "Software Engineer", "Full-stack Developer"]}
              mainClassName="px-2 md:px-3 bg-cyan-300 text-black rounded-lg overflow-hidden py-0.5 sm:py-1 md:py-2"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </LayoutGroup>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="max-w-2xl text-base sm:text-lg leading-relaxed text-left mx-auto sm:mx-0"
        >
          <p className="mb-3">
            Full-stack developer with hands-on experience designing, building,
            and deploying production-grade applications and automation systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center sm:justify-start items-center w-full mt-6"
        >
          <motion.button
            onClick={scrollToProjects}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-hero-primary flex items-center justify-center gap-2 text-base sm:text-lg w-full sm:w-auto h-12 rounded-xl"
          >
            <Eye className="w-5 h-5" />
            View Work
          </motion.button>

          <motion.a
            href="/assets/CV_GarethGlendiuzY_2.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-hero-secondary flex items-center justify-center gap-2 text-base sm:text-lg w-full sm:w-auto h-12 rounded-xl"
          >
            <Download className="w-5 h-5" />
            Download CV
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div> */}
      </motion.div>
    </section>
  );
};
