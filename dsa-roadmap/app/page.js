import PhaseRoadmap from './components/PhaseRoadmap';
import ContactForm from './components/ContactForm';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <>
      <ScrollReveal />

      {/* NAV */}
      <nav>
        <a className="nav-logo" href="#"><span>DSA</span> Mastery</a>
        <ul className="nav-links">
          <li><a href="#roadmap">Roadmap</a></li>
          <li><a href="#topics">Topics</a></li>
          <li><a href="#resources">Resources</a></li>
          <li><a href="#tips">Tips</a></li>
          <li><a href="#contact" className="nav-cta">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-grid" />
        <div className="hero-glow" />
        <div className="hero-glow2" />
        <div className="hero-content">
          <div className="hero-tag">Structured DSA Roadmap 2025</div>
          <h1>
            Master DSA.
            <span className="line2">Crack Any Interview.</span>
          </h1>
          <p className="hero-sub">
            A structured roadmap from Arrays to Hard LeetCode problems.
            Every topic, every pattern, curated problems per phase — no fluff, no randomness.
          </p>
          <div className="hero-actions">
            <a href="#roadmap" className="btn btn-primary">Start the Roadmap →</a>
            <a href="#tips" className="btn btn-ghost">Pro Tips</a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">150+</div>
              <div className="stat-label">Curated Problems</div>
            </div>
            <div>
              <div className="stat-num">4</div>
              <div className="stat-label">Progressive Phases</div>
            </div>
            <div>
              <div className="stat-num">18–23</div>
              <div className="stat-label">Weeks to Hard Level</div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap">
        <div className="section-tag">Roadmap</div>
        <h2 className="section-title reveal">Phase-by-Phase Breakdown</h2>
        <p className="section-desc reveal">
          Each phase builds on the previous. Don&apos;t skip ahead — the sequence is intentional.
          Problems are ordered by difficulty within each topic.
        </p>
        <PhaseRoadmap />
      </section>

      {/* TOPICS OVERVIEW */}
      <section id="topics">
        <div className="section-tag">Overview</div>
        <h2 className="section-title reveal">All Topic Areas</h2>
        <p className="section-desc reveal">
          A bird&apos;s-eye view of every category you need to master. Click the roadmap tabs above for the full problem list per topic.
        </p>
        <div className="overview-grid">
          {[
            { icon: '🌱', title: 'Arrays & Two Pointers', desc: 'The starting point. Prefix sums, sliding window, and in-place manipulation form the backbone of most interview problems.', phase: 'Phase 1', cls: 'ov1', badge: 'rgba(0,212,170,0.1)', badgeColor: 'var(--teal)' },
            { icon: '🔍', title: 'Binary Search', desc: 'Not just sorted arrays — applied to search spaces, answer ranges, and rotated arrays. Often missed by beginners.', phase: 'Phase 1', cls: 'ov1', badge: 'rgba(0,212,170,0.1)', badgeColor: 'var(--teal)' },
            { icon: '🔗', title: 'Linked Lists', desc: 'Fast & slow pointers, reversals, merging. Simple concept with tricky edge cases — master in-place operations.', phase: 'Phase 2', cls: 'ov2', badge: 'rgba(155,89,182,0.15)', badgeColor: 'var(--purple)' },
            { icon: '🌲', title: 'Trees & BST', desc: 'DFS, BFS, path problems, and serialization. 25% of coding interviews involve trees. Know all 4 traversals cold.', phase: 'Phase 2', cls: 'ov2', badge: 'rgba(155,89,182,0.15)', badgeColor: 'var(--purple)' },
            { icon: '🕸', title: 'Graphs', desc: 'Grid traversal, adjacency lists, cycle detection, topological sort. The most versatile topic — connects everything.', phase: 'Phase 3', cls: 'ov3', badge: 'rgba(255,107,53,0.12)', badgeColor: 'var(--accent2)' },
            { icon: '🧮', title: 'Dynamic Programming', desc: '1D/2D DP, knapsack, LCS, LIS, interval DP. Identify subproblems → write recurrence → memoize → tabulate.', phase: 'Phase 3', cls: 'ov3', badge: 'rgba(255,107,53,0.12)', badgeColor: 'var(--accent2)' },
            { icon: '💀', title: 'Advanced Structures', desc: 'Segment trees, tries, monotonic stacks, Union Find. These distinguish candidates who clear hard rounds.', phase: 'Phase 4', cls: 'ov4', badge: 'rgba(255,71,87,0.1)', badgeColor: 'var(--hard)' },
            { icon: '⚡', title: 'Bit Manipulation & Math', desc: 'XOR tricks, power of two checks, GCD, prime sieves. Small topic — big impact on hard problems.', phase: 'Phase 4', cls: 'ov4', badge: 'rgba(255,71,87,0.1)', badgeColor: 'var(--hard)' },
          ].map((card) => (
            <div key={card.title} className={`overview-card ${card.cls} reveal`}>
              <div className="ov-icon">{card.icon}</div>
              <div className="ov-title">{card.title}</div>
              <div className="ov-desc">{card.desc}</div>
              <span className="ov-badge" style={{ background: card.badge, color: card.badgeColor }}>{card.phase}</span>
            </div>
          ))}
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources">
        <div className="section-tag">Resources</div>
        <h2 className="section-title reveal">Best Learning Platforms</h2>
        <p className="section-desc reveal">
          These are the highest-signal resources available. Avoid tutorial hell — spend 70% of your time solving, 30% watching explanations.
        </p>
        <div className="resources-grid">
          {[
            { icon: '⌨', name: 'LeetCode', desc: 'Primary practice ground — 2500+ problems, company tags, weekly contests', url: 'https://leetcode.com' },
            { icon: '🗺', name: 'NeetCode Roadmap', desc: 'Curated 150 problems with video solutions — the most efficient path', url: 'https://neetcode.io/roadmap' },
            { icon: '📚', name: "Striver's A2Z DSA", desc: 'Most popular DSA course in India — Hindi/English, extremely thorough', url: 'https://takeuforward.org/strivers-a2z-dsa-course' },
            { icon: '📖', name: 'CP-Algorithms', desc: 'Deep technical explanations of every algorithm with proofs', url: 'https://cp-algorithms.com' },
            { icon: '👁', name: 'VisuAlgo', desc: 'Watch algorithms execute step-by-step — essential for visual learners', url: 'https://visualgo.net' },
            { icon: '🏆', name: 'Codeforces', desc: 'Competitive programming contests — once you reach Phase 3+', url: 'https://codeforces.com' },
            { icon: '▶', name: 'NeetCode (YouTube)', desc: 'Best video explanations for LeetCode — clean, concise, pattern-focused', url: 'https://www.youtube.com/@NeetCode' },
            { icon: '▶', name: 'take U forward', desc: "Striver's YouTube — comprehensive Hindi/English DSA walkthroughs", url: 'https://www.youtube.com/@takeUforward' },
          ].map((res) => (
            <a key={res.name} className="res-card reveal" href={res.url} target="_blank" rel="noopener noreferrer">
              <div className="res-icon">{res.icon}</div>
              <div>
                <div className="res-name">{res.name}</div>
                <div className="res-desc">{res.desc}</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* TIPS */}
      <section id="tips">
        <div className="section-tag">Strategy</div>
        <h2 className="section-title reveal">Pro Tips to Reach Hard Level</h2>
        <p className="section-desc reveal">
          The difference between someone who plateaus at medium and someone who crushes hards is mostly strategy, not intelligence.
        </p>
        <div className="tips-grid">
          {[
            { n: '01', text: <><strong>Solve by pattern, not randomly.</strong> &ldquo;Two Sum → 3Sum → Container with Water&rdquo; is a learning arc. Random shuffling wastes months.</> },
            { n: '02', text: <><strong>2–3 problems daily beats weekend marathons.</strong> Spaced repetition matters. Your brain consolidates patterns during sleep.</> },
            { n: '03', text: <><strong>After solving, always read top solutions.</strong> Your O(n²) may pass, but you need to see the O(n) approach — that&apos;s where the learning is.</> },
            { n: '04', text: <><strong>Attempt every hard for 30 min first.</strong> The struggle before the hint builds the intuition that makes the next hard problem easier.</> },
            { n: '05', text: <><strong>For DP: learn the 4-step framework.</strong> Identify subproblems → write recurrence → memoize top-down → convert to bottom-up tabulation.</> },
            { n: '06', text: <><strong>Do LeetCode weekly contests from Phase 2.</strong> Timed pressure simulates real interviews. Your rank will improve dramatically month over month.</> },
            { n: '07', text: <><strong>Re-solve problems you got wrong, after 3 days.</strong> If you can&apos;t reproduce the solution cold, you don&apos;t actually know it yet.</> },
            { n: '08', text: <><strong>Write your solution before running it.</strong> Mentally trace through edge cases. This builds the debugging instinct that matters in interviews.</> },
          ].map((tip) => (
            <div key={tip.n} className="tip-card reveal">
              <div className="tip-num">{tip.n}</div>
              <div className="tip-text">{tip.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="contact-wrap">
          <div className="contact-info reveal">
            <div className="section-tag">Get in touch</div>
            <h2>Have questions<br />about DSA? <span>Let&apos;s talk.</span></h2>
            <p>
              Whether you&apos;re stuck on a problem, need guidance on which phase to focus on,
              or want to discuss your learning progress — feel free to reach out.
            </p>
            <div className="contact-detail">
              <div className="cd-icon">✉</div>
              <div>
                <div className="cd-label">// email</div>
                <div className="cd-value">your-new-email@gmail.com</div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="cd-icon">📍</div>
              <div>
                <div className="cd-label">// location</div>
                <div className="cd-value">Hyderabad, Telangana, India</div>
              </div>
            </div>
            <div className="contact-detail">
              <div className="cd-icon">⏱</div>
              <div>
                <div className="cd-label">// response time</div>
                <div className="cd-value">Usually within 24 hours</div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo">DSA Mastery</div>
        <div className="footer-copy">Built for learners who want to go from zero to hard — one pattern at a time.</div>
        <div className="footer-links">
          <a href="#roadmap">Roadmap</a>
          <a href="#resources">Resources</a>
          <a href="#contact">Contact</a>
          <a href="https://leetcode.com" target="_blank" rel="noopener noreferrer">LeetCode ↗</a>
        </div>
      </footer>
    </>
  );
}
