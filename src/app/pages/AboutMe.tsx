import { motion } from "framer-motion";
import { Link } from "react-router";
import { outboundLinks } from "../outboundLinks";

export default function AboutMe() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Fixed Header with Author Name and Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 lg:px-24 py-5 flex items-start justify-between bg-background/80 backdrop-blur-sm border-b border-foreground/5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-[10px] tracking-[0.5em] opacity-20 uppercase"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          ARPAN MUKHERJEE
        </motion.div>

        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex gap-8"
        >
          <Link
            to="/"
            className="text-xs tracking-[0.2em] opacity-40 hover:opacity-70 transition-opacity duration-300 relative group"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            HOME
            <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground opacity-0 group-hover:w-full group-hover:opacity-40 transition-all duration-300"></span>
          </Link>
        </motion.nav>
      </header>

      {/* Bio Section */}
      <section className="min-h-screen flex items-center px-8 md:px-16 lg:px-24 pt-24 relative">
        <div className="absolute left-4 md:left-8 top-[45vh] text-xs opacity-40" style={{ fontFamily: "'IBM Plex Mono', monospace", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          ABOUT
        </div>

        <motion.div
          className="max-w-3xl mx-auto grid md:grid-cols-[200px_1fr] gap-10 md:gap-14 items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src="/media/headshot.jpg"
            alt="Arpan Mukherjee"
            className="w-40 h-40 md:w-full md:h-auto aspect-square object-cover rounded-full md:rounded-none mx-auto md:mx-0"
          />

          <div>
            <div className="mb-6 text-xs tracking-widest opacity-40" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              §1 — BIOGRAPHY
            </div>
            <p className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 300 }}>
              I started in civil engineering at Jadavpur University (2007-2011), building things and trusting that the math behind them was solid, until I realized I cared more about the math itself. That took me to the Indian Statistical Institute (2011-2013) for a grounding in pure statistics, and then to the University at Buffalo (2013-2018) for a PhD built around the least fashionable question in any modeling problem: how much should you actually trust this number. My specific contribution there was a set of novel algorithms for faster, more scalable uncertainty quantification, combining polynomial chaos expansion with Kalman filtering to make that question tractable on real systems, not just on paper. A postdoc in materials science (2018-2020) carried the same question into a new domain: predicting material behavior from sparse, expensive experimental data, where being wrong isn't an abstract concern. Since 2020, as a Research Scientist at the University at Buffalo, I've kept asking the same question at a bigger scale, applying it to physics-informed monitoring of real industrial equipment and, more recently, to language models, post-training them on scarce, high-stakes, structured-judgment tasks, then proving mechanistically, not just statistically, that the training changed the model for the right reasons. Every domain has been different. The question hasn't.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Theater Section */}
      <section className="py-24 px-8 md:px-16 lg:px-24 relative border-t border-foreground/10">
        <div className="absolute left-4 md:left-8 top-32 text-xs opacity-30" style={{ fontFamily: "'IBM Plex Mono', monospace", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          THEATER
        </div>

        <motion.div
          className="max-w-3xl ml-0 md:ml-12"
          {...fadeInUp}
        >
          <div className="flex items-baseline gap-3 mb-12">
            <span className="text-xs opacity-40" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>§2</span>
            <h2 className="text-sm tracking-widest uppercase opacity-60" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Theater
            </h2>
          </div>

          <div className="space-y-12">
            <div className="relative">
              <div className="flex gap-6">
                <span className="text-xs opacity-30 mt-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>[1]</span>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl mb-3 italic" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 400 }}>
                    Bhooter Bhabishyat (2019)
                  </h3>
                  <p className="text-lg mb-2 opacity-70 leading-relaxed" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 300 }}>
                    Ghosts refuse to stay buried. Histories refuse to stay silent
                  </p>
                  <p className="text-base opacity-60 leading-relaxed" style={{ fontFamily: "'Courier Prime', monospace" }}>
                    This stage adaptation of Bhooter Bhabishyat transformed the cult Bengali film into a live ensemble experience—where humor, haunting, and political satire unfolded inside a decaying mansion crowded with the dead. Each ghost carried the residue of a different era, turning comedy into a confrontation with memory, displacement, and cultural erasure. The recorded production later found an unexpected second life online, reaching more than 115,000 viewers on YouTube.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pt-6 border-t border-foreground/10">
              <div className="flex gap-6">
                <span className="text-xs opacity-30 mt-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>[2]</span>
                <div className="flex-1">
                  <h3 className="text-3xl md:text-4xl mb-3 italic" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 400 }}>
                    New Royal Kissa (2025)
                  </h3>
                  <p className="text-lg mb-2 opacity-70 leading-relaxed" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 300 }}>
                    A kingdom built on prediction begins to mistake probability for destiny
                  </p>
                  <p className="text-base opacity-60 leading-relaxed" style={{ fontFamily: "'Courier Prime', monospace" }}>
                    In New Royal Kissa, a jubilant king erupts into celebration after an AI system forecasts his inevitable Nobel Prize victory. But as the court spirals deeper into spectacle, vanity, and algorithmic devotion, certainty itself begins to fracture. The machine was hallucinating. The king was too. What unfolds is a political satire about power, technological faith, and the dangerous human need to hear prophecy disguised as data.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            href={outboundLinks.theaterVideo}
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-14 text-sm tracking-[0.18em] opacity-40 hover:opacity-70 hover:underline underline-offset-4 transition-opacity duration-300"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            See it on stage →
          </a>
        </motion.div>
      </section>

      {/* Closing */}
      <section className="py-32 px-8 md:px-16 lg:px-24 min-h-[40vh] flex items-center relative border-t border-foreground/10">
        <motion.div
          className="max-w-2xl ml-0 md:ml-12"
          {...fadeInUp}
        >
          <Link
            to="/"
            className="inline-block text-sm tracking-[0.18em] opacity-40 hover:opacity-70 hover:underline underline-offset-4 transition-opacity duration-300"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            ← Back to research
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
