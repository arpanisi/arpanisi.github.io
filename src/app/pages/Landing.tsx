import { motion } from "framer-motion";
import { Link } from "react-router";
import { outboundLinks } from "../outboundLinks";

export default function Landing() {
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
          <Link
            to="/about"
            className="text-xs tracking-[0.2em] opacity-40 hover:opacity-70 transition-opacity duration-300 relative group"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            ABOUT ME
            <span className="absolute bottom-0 left-0 w-0 h-px bg-foreground opacity-0 group-hover:w-full group-hover:opacity-40 transition-all duration-300"></span>
          </Link>
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
            RESEARCH MISSION
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl leading-[1.2] mb-8"
            style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 400 }}
          >
            AI models are getting more capable faster than anyone is getting better at knowing when to trust them.
          </h1>
          <div className="text-sm opacity-30 border-l-2 border-foreground/20 pl-4 italic inline-block" style={{ fontFamily: "'Courier Prime', monospace" }}>
            Post-training · Mechanistic Interpretability · Long-Horizon Agents
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
            held-out benchmark, real results
          </div>

          <p className="text-xl md:text-2xl leading-relaxed mb-6" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 300 }}>
            My research closes the gap by <span className="border-b border-foreground/30">post-training language models on scarce, high-stakes, structured-judgment tasks</span>, then proving mechanistically, not just statistically, that the training changed the model for the right reasons, extending toward long-horizon agentic reasoning.
          </p>

          <p className="text-xl md:text-2xl leading-relaxed italic opacity-70" style={{ fontFamily: "'Courier Prime', monospace" }}>
            The best fine-tuned checkpoint reached 100% valid structured output on held-out data, and an 8B model outperformed a 32B model from the same family. Parameter count wasn't the deciding factor, the training was.
          </p>

          {/* Annotation */}
          <div className="mt-6 text-xs opacity-40 flex items-start gap-2" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            <span>→</span>
            <span>That result held up under causal testing, not just a benchmark score.</span>
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
            A model that scores better without a traceable internal cause is a model you're trusting on faith. That's not good enough.
          </p>

          <div className="mt-8 text-xs opacity-30 italic" style={{ fontFamily: "'Courier Prime', monospace" }}>
            A causal evidence-deletion test changed 47% of this model's assessments, versus 0% for non-evidence controls.
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
            Right now: post-training methodology for scarce-data, high-stakes tasks, paired with a standing mechanistic-interpretability verification layer that checks the work, extending toward long-horizon agentic reasoning.
          </p>

          {/* Handwritten-style note */}
          <div className="pl-6 border-l-2 border-foreground/20 text-base opacity-60 leading-relaxed" style={{ fontFamily: "'Courier Prime', monospace" }}>
            The work sits at the intersection of post-training, interpretability, and long-horizon agentic reasoning, treated as one problem, not three.
          </div>

          <div className="mt-4 text-xs opacity-30" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            [100% valid structured output · 8B outperforms 32B · 1.66× representation shift · 47% evidence-deletion effect]
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
                    Post-Training for Structured Expert Judgment
                  </h3>
                  <p className="text-lg mb-1 opacity-70 leading-relaxed" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 300 }}>
                    Completion-Masked SFT + Profile-Conditioned GRPO, Verified with Mechanistic Interpretability
                  </p>
                  <p className="text-sm opacity-50 italic mt-3" style={{ fontFamily: "'Courier Prime', monospace" }}>
                    Fine-tuned an 8B open-weight model to reach 100% valid structured output on a held-out expert-assessment benchmark, outperforming a 32B model from the same family
Verified with a shared, fixed-basis sparse autoencoder reused across every checkpoint: evidence-deletion and direct latent edits changed 47% and 41% of structured assessments, versus 0% for non-evidence controls
                  </p>
                  <a
                    href={outboundLinks.sftGrpoRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 text-xs tracking-[0.1em] opacity-50 hover:opacity-80 hover:underline underline-offset-4 transition-opacity duration-300"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    View the code →
                  </a>
                </div>
              </div>
            </div>

            <div className="relative pt-6 border-t border-foreground/10">
              <div className="flex gap-6">
                <span className="text-xs opacity-30 mt-1" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>[2]</span>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl mb-2" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 500 }}>
                    Evidence-Grounded Retrieval for Unstructured Data
                  </h3>
                  <p className="text-lg mb-1 opacity-70 leading-relaxed" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 300 }}>
                    Keeping a Language Model Strictly Downstream of Computed Evidence
                  </p>
                  <p className="text-sm opacity-50 italic mt-3" style={{ fontFamily: "'Courier Prime', monospace" }}>
                    A retrieval and scoring pipeline that screens thousands of candidate hypotheses per run, ranks them by statistical fit and literature similarity, and only then lets a language model explain what's already been computed — it explains evidence, it doesn't generate it
The system's own most important finding: semantic similarity is not the same as evidence support
                  </p>
                  <a
                    href={outboundLinks.pfasAriaRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-4 text-xs tracking-[0.1em] opacity-50 hover:opacity-80 hover:underline underline-offset-4 transition-opacity duration-300"
                    style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                  >
                    View the code →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Closing Section */}
      <section className="py-32 px-8 md:px-16 lg:px-24 min-h-[60vh] flex items-center relative border-t border-foreground/10">
        <div className="absolute left-4 md:left-8 top-32 text-xs opacity-30" style={{ fontFamily: "'IBM Plex Mono', monospace", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          CLOSING
        </div>

        <motion.div
          className="max-w-2xl ml-0 md:ml-12"
          {...fadeInUp}
        >
          <p className="text-xl md:text-2xl leading-relaxed mb-10" style={{ fontFamily: "'Crimson Pro', serif", fontWeight: 300 }}>
            If you're working on post-training, interpretability, or long-horizon agentic systems, and want to see the actual results, not just a benchmark score, I'd be glad to talk.
          </p>

          <div className="flex flex-wrap gap-x-8 gap-y-3" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            <a
              href={outboundLinks.contactEmail}
              className="text-sm tracking-wide opacity-60 hover:opacity-100 hover:underline underline-offset-4 transition-opacity duration-300"
            >
              Email
            </a>
            <a
              href={outboundLinks.contactLinkedin}
              target="_blank"
              rel="noreferrer"
              className="text-sm tracking-wide opacity-60 hover:opacity-100 hover:underline underline-offset-4 transition-opacity duration-300"
            >
              LinkedIn
            </a>
            <a
              href={outboundLinks.contactGithub}
              target="_blank"
              rel="noreferrer"
              className="text-sm tracking-wide opacity-60 hover:opacity-100 hover:underline underline-offset-4 transition-opacity duration-300"
            >
              GitHub
            </a>
            <a
              href={outboundLinks.contactScholar}
              target="_blank"
              rel="noreferrer"
              className="text-sm tracking-wide opacity-60 hover:opacity-100 hover:underline underline-offset-4 transition-opacity duration-300"
            >
              Scholar
            </a>
          </div>

          <Link
            to="/about"
            className="inline-block mt-10 text-sm tracking-[0.18em] opacity-40 hover:opacity-70 hover:underline underline-offset-4 transition-opacity duration-300"
            style={{ fontFamily: "'IBM Plex Mono', monospace" }}
          >
            More about me →
          </Link>

          <div className="mt-12 text-xs opacity-20" style={{ fontFamily: "'IBM Plex Mono', monospace" }}>
            — END —
          </div>
        </motion.div>
      </section>
    </div>
  );
}
