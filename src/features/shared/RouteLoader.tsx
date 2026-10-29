import { motion } from "framer-motion";

const RouteLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Top progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-1 bg-muted overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-r-full"
          initial={{ width: "0%" }}
          animate={{ width: ["0%", "60%", "80%", "90%"] }}
          transition={{
            duration: 2,
            times: [0, 0.4, 0.7, 1],
            ease: "easeOut",
          }}
        />
      </motion.div>

      {/* Center spinner */}
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.15 }}
      >
        <div className="relative w-12 h-12">
          {/* Outer ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/20"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Spinning ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary border-r-primary/50 animate-spin" />
          {/* Inner dot */}
          <motion.div
            className="absolute inset-0 m-auto w-2 h-2 rounded-full bg-primary"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <p className="text-sm text-muted-foreground font-medium">Loading page...</p>
      </motion.div>
    </div>
  );
};

export default RouteLoader;
