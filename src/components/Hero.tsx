import { LayoutGroup, motion } from "framer-motion";
import { Download, Eye } from "lucide-react";
import RotatingText from "./RotatingText";
import Particles from "./Particles";

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
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >

      <div className="absolute inset-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={false}
        />
         
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, staggerChildren: 0.2, delayChildren: 0.3 }}
        className="container mx-auto px-6 text-start relative z-20 max-w-7xl"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-row flex-wrap text-3xl sm:text-4xl md:text-6xl gap-2 mb-6 text-center sm:text-left"
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
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-2xl text-sm sm:text-lg leading-relaxed text-left mx-auto sm:mx-0"
        >
          <p className="mb-3">
            Full-stack developer with hands-on experience designing, building,
            and deploying production-grade applications and automation systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
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
