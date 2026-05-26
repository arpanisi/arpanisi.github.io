import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import outboundLinksYaml from "../content/outbound-links.yaml?raw";

type OutboundLinkKey = "research" | "systems" | "theater";

const parseOutboundLinks = (yaml: string): Record<OutboundLinkKey, string> => {
  const links: Record<OutboundLinkKey, string> = {
    research: "#",
    systems: "#",
    theater: "#",
  };

  yaml.split("\n").forEach((line) => {
    const trimmed = line.trim();

    if (!trimmed || trimmed.startsWith("#")) {
      return;
    }

    const match = trimmed.match(/^(research|systems|theater):\s*(.*)$/);

    if (!match) {
      return;
    }

    const key = match[1] as OutboundLinkKey;
    const value = match[2].trim().replace(/^["']|["']$/g, "");

    if (value) {
      links[key] = value;
    }
  });

  return links;
};

const outboundLinks = parseOutboundLinks(outboundLinksYaml);

export default function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  };

  const quietOutboundLink = "inline-block mt-14 text-sm tracking-[0.18em] opacity-40 hover:opacity-70 hover:underline underline-offset-4 transition-opacity duration-300";

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Fixed Header with Author Name and Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-8 md:px-16 lg:px-24 py-5 flex items-start justify-between bg-background/80 backdrop-blur-sm border-b border-foreground/5">
        {/* Author Name - Top Left */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="text-[10px] tracking-[0.5em] opacity-20 uppercase"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          ARPAN MUKHERJEE
        </motion.div>

        {/* Navigation - Top Right */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="flex gap-8"
        >
          <a
            href="#research"
            onClick={(e) => scrollToSection(e, 'research')}
            className="text-xs tracking-[0.2em] opacity-40 hover:opacity-70 transition-opacity duration-300 relative group"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            RESEARCH
            <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground opacity-0 group-hover:w-full group-hover:opacity-40 transition-all duration-300"></span>
          </a>
          <a
            href="#systems"
            onClick={(e) => scrollToSection(e, 'systems')}
            className="text-xs tracking-[0.2em] opacity-40 hover:opacity-70 transition-opacity duration-300 relative group"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            SYSTEMS
            <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground opacity-0 group-hover:w-full group-hover:opacity-40 transition-all duration-300"></span>
          </a>
          <a
            href="#theater"
            onClick={(e) => scrollToSection(e, 'theater')}
            className="text-xs tracking-[0.2em] opacity-40 hover:opacity-70 transition-opacity duration-300 relative group"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            THEATER
            <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground opacity-0 group-hover:w-full group-hover:opacity-40 transition-all duration-300"></span>
          </a>
        </motion.nav>
      </header>

      {/* Hero Section - Script Style */}
      <section className="min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24 pt-24 relative">
        {/* Margin annotation */}
        <div className="absolute left-4 md:left-8 top-[45vh] text-xs opacity-40" style={{ fontFamily: "'IBM Plex Mono', monospace", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          OPENING
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 text-xs tracking-widest opacity-40" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            INT. SYSTEMS — CONTINUOUS
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl leading-[1.2] mb-8"
            style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 400 }}
          >
            I build systems. I direct stories. I try to understand how complex things behave.
          </h1>
          <div className="text-sm opacity-30 border-l-2 border-foreground/20 pl-4 italic inline-block" style={{ fontFamily: "'Courier Prime', monospace" }}>
            (A pause. Something shifts.)
          </div>
        </motion.div>
      </section>

      {/* Narrative Section - Notebook Entry */}
      <section className="py-24 px-8 md:px-16 lg:px-24 relative">
        <div className="absolute left-4 md:left-8 top-32 text-xs opacity-30" style={{ fontFamily: "'IBM Plex Mono', monospace", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          NOTE 01
        </div>

        <motion.div
          className="max-w-2xl ml-0 md:ml-12 relative"
          {...fadeInUp}
        >
          {/* Marginal note */}
          <div className="hidden lg:block absolute -left-32 top-4 w-24 text-xs leading-relaxed opacity-40" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            cf. Bateson on form & pattern
          </div>

          <p className="text-xl md:text-2xl leading-relaxed mb-6" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 300 }}>
            There's a common thread between designing a computational model, staging a play, and building decision infrastructure: they all require <span className="border-b border-foreground/30">translating complexity into form</span>. Whether I'm working with uncertainty in machine learning systems, directing actors through a script, or architecting platforms that help organizations think more clearly, I'm always asking the same question—
          </p>

          <p className="text-xl md:text-2xl leading-relaxed italic opacity-70" style={{ fontFamily: "'Courier Prime', monospace" }}>
            how do we make intricate systems comprehensible without flattening them?
          </p>

          {/* Annotation */}
          <div className="mt-6 text-xs opacity-40 flex items-start gap-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            <span>→</span>
            <span>This question recurs. It's structural, not stylistic.</span>
          </div>
        </motion.div>
      </section>

      {/* Bridge Section - Script Direction */}
      <section className="py-32 px-8 md:px-16 lg:px-24 relative border-t border-b border-foreground/10">
        <div className="absolute left-4 md:left-8 top-32 text-xs opacity-30" style={{ fontFamily: "'IBM Plex Mono', monospace", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          THESIS
        </div>

        <motion.div
          className="max-w-3xl mx-auto text-center relative"
          {...fadeInUp}
        >
          <div className="mb-6 text-xs tracking-widest opacity-40 uppercase" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            [The central claim]
          </div>

          <p className="text-3xl md:text-4xl lg:text-5xl leading-[1.3]" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 400 }}>
            The goal isn't simplification. It's legibility. Complex systems deserve to be understood on their own terms.
          </p>

          <div className="mt-8 text-xs opacity-30 italic" style={{ fontFamily: "'Courier Prime', monospace" }}>
            (Let this sit.)
          </div>
        </motion.div>
      </section>

      {/* Current Focus - Research Note */}
      <section className="py-24 px-8 md:px-16 lg:px-24 relative">
        <div className="absolute left-4 md:left-8 top-32 text-xs opacity-30" style={{ fontFamily: "'IBM Plex Mono', monospace", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          CURRENT
        </div>

        <motion.div
          className="max-w-2xl ml-0 md:ml-12 relative"
          {...fadeInUp}
        >
          <div className="flex items-baseline gap-3 mb-8">
            <span className="text-xs opacity-40" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>§2</span>
            <h2 className="text-sm tracking-widest uppercase opacity-60" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Current Focus
            </h2>
          </div>

          <p className="text-xl md:text-2xl leading-relaxed mb-8" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 300 }}>
            Right now, I'm working on decision systems that handle uncertainty without pretending it doesn't exist. This means building tools for organizations navigating ambiguous situations—where the stakes are real, the data is incomplete, and linear thinking breaks down.
          </p>

          {/* Handwritten-style note */}
          <div className="pl-6 border-l-2 border-foreground/20 text-base opacity-60 leading-relaxed" style={{ fontFamily: "'Courier Prime', monospace" }}>
            The work sits at the intersection of computational modeling, cognitive science, and real-world implementation.
          </div>

          <div className="mt-4 text-xs opacity-30" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            [See: lab notebook vol. 7, pp. 142-189]
          </div>
        </motion.div>
      </section>

      {/* Research Section */}
      <section id="research" className="py-24 px-8 md:px-16 lg:px-24 relative">
        <div className="absolute left-4 md:left-8 top-32 text-xs opacity-30" style={{ fontFamily: "'IBM Plex Mono', monospace", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          RESEARCH
        </div>

        <motion.div
          className="max-w-3xl ml-0 md:ml-12"
          {...fadeInUp}
        >
          <div className="flex items-baseline gap-3 mb-12">
            <span className="text-xs opacity-40" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>§3</span>
            <h2 className="text-sm tracking-widest uppercase opacity-60" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Research
            </h2>
          </div>

          <div className="space-y-12">
            <div className="relative">
              <div className="flex gap-6">
                <span className="text-xs opacity-30 mt-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>[1]</span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 500 }}>
                    PFAS / Chemical Remediation
                  </h3>
                  <p className="text-lg mb-1 opacity-70 leading-relaxed" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 300 }}>
                    Predictive Modeling for Chemical Degradation Pathways
                  </p>
                  <p className="text-sm opacity-50 italic mt-3" style={{ fontFamily: "'Courier Prime', monospace" }}>
                    Built models to predict degradation behavior across large chemical spaces using sparse experimental and literature-derived data
Dyadic modeling enabled learning interactions between compounds and conditions, not just isolated predictions
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pt-6 border-t border-foreground/10">
              <div className="flex gap-6">
                <span className="text-xs opacity-30 mt-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>[2]</span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 500 }}>
                    AI-Guided Materials Discovery
                  </h3>
                  <p className="text-lg mb-1 opacity-70 leading-relaxed" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 300 }}>
                    Physics-Informed Feature Engineering for Materials Prediction
                  </p>
                  <p className="text-sm opacity-50 italic mt-3" style={{ fontFamily: "'Courier Prime', monospace" }}>
                    Designed descriptor systems grounded in inorganic physics to improve prediction under low-data regimes
Structured representations significantly improved generalization compared to raw composition-based models
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pt-6 border-t border-foreground/10">
              <div className="flex gap-6">
                <span className="text-xs opacity-30 mt-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>[3]</span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 500 }}>
                    LLM-Assisted Decision Systems for Scientific Discovery
                  </h3>
                  <p className="text-lg mb-1 opacity-70 leading-relaxed" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 300 }}>
                    LLM-Integrated Decision Pipelines for Noisy Scientific Data under Distribution Shift
                  </p>
                  <p className="text-sm opacity-50 italic mt-3" style={{ fontFamily: "'Courier Prime', monospace" }}>
                    Developed pipelines where LLMs extract structured signals from literature and interface with predictive models for decision-making
Focused on making LLM outputs verifiable and actionable under sparse, high-uncertainty conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            href={outboundLinks.research}
            target="_blank"
            rel="noreferrer"
            className={quietOutboundLink}
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Follow the papers →
          </a>
        </motion.div>
      </section>

      {/* Systems Section */}
      <section id="systems" className="py-24 px-8 md:px-16 lg:px-24 relative border-t border-foreground/10">
        <div className="absolute left-4 md:left-8 top-32 text-xs opacity-30" style={{ fontFamily: "'IBM Plex Mono', monospace", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          SYSTEMS
        </div>

        <motion.div
          className="max-w-3xl ml-0 md:ml-12"
          {...fadeInUp}
        >
          <div className="flex items-baseline gap-3 mb-12">
            <span className="text-xs opacity-40" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>§4</span>
            <h2 className="text-sm tracking-widest uppercase opacity-60" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
              Systems
            </h2>
          </div>

          <div className="space-y-12">
            <div className="relative">
              <div className="flex gap-6">
                <span className="text-xs opacity-30 mt-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>[1]</span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 500 }}>
                    Climate Adaptation Decision Platform
                  </h3>
                  <p className="text-lg mb-1 opacity-70 leading-relaxed" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 300 }}>
                    Autonomous Research Intelligence Agent for PFAS Degradation Analysis
                  </p>
                  <p className="text-sm opacity-50 italic mt-3" style={{ fontFamily: "'Courier Prime', monospace" }}>
                    Extract, structure, and evaluate ~2000 candidate pathways with AI-powered evidence grounding in literature
                  </p>
                </div>
              </div>
            </div>

            <div className="relative pt-6 border-t border-foreground/10">
              <div className="flex gap-6">
                <span className="text-xs opacity-30 mt-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>[2]</span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 500 }}>
                    Real-Time Process Monitoring Pipeline
                  </h3>
                  <p className="text-lg mb-1 opacity-70 leading-relaxed" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 300 }}>
                    Streaming data system for identifying outliers in sensor networks
                  </p>
                  <p className="text-sm opacity-50 italic mt-3" style={{ fontFamily: "'Courier Prime', monospace" }}>
                    Catches failures 40 minutes earlier than threshold-based alerts
                  </p>
                </div>
              </div>
            </div>
          </div>
          <a
            href={outboundLinks.systems}
            target="_blank"
            rel="noreferrer"
            className={quietOutboundLink}
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            Browse the code →
          </a>
        </motion.div>
      </section>

      {/* Theater Section */}
      <section id="theater" className="py-24 px-8 md:px-16 lg:px-24 relative border-t border-foreground/10">
        <div className="absolute left-4 md:left-8 top-32 text-xs opacity-30" style={{ fontFamily: "'IBM Plex Mono', monospace", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          THEATER
        </div>

        <motion.div
          className="max-w-3xl ml-0 md:ml-12"
          {...fadeInUp}
        >
          <div className="flex items-baseline gap-3 mb-12">
            <span className="text-xs opacity-40" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>§5</span>
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
            href={outboundLinks.theater}
            target="_blank"
            rel="noreferrer"
            className={quietOutboundLink}
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            See it on stage →
          </a>
        </motion.div>
      </section>

      {/* Closing Section - Script Exit */}
      <section className="py-32 px-8 md:px-16 lg:px-24 min-h-[60vh] flex items-center relative border-t border-foreground/10">
        <div className="absolute left-4 md:left-8 top-32 text-xs opacity-30" style={{ fontFamily: "'IBM Plex Mono', monospace", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          CLOSING
        </div>

        <motion.div
          className="max-w-2xl ml-0 md:ml-12"
          {...fadeInUp}
        >
          <p className="text-xl md:text-2xl leading-relaxed mb-6" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 300 }}>
            If you're working on something that involves navigating complexity—whether that's building systems, telling stories, or trying to understand how things actually work—I'd be curious to hear about it.
          </p>

          <div className="mt-8 text-sm opacity-30 italic" style={{ fontFamily: "'Courier Prime', monospace" }}>
            (The conversation continues elsewhere.)
          </div>

          <div className="mt-12 text-xs opacity-20" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            — END —
          </div>
        </motion.div>
      </section>

      {/* Theme Toggle */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={() => setIsDark(!isDark)}
          className="px-4 py-2 text-xs tracking-wider border border-foreground/20 bg-background/80 backdrop-blur-sm hover:bg-foreground/5 transition-colors duration-300"
          style={{ fontFamily: "'IBM Plex Mono', monospace" }}
        >
          [{isDark ? 'LIGHT' : 'DARK'} MODE]
        </button>
      </div>
    </div>
  );
}
