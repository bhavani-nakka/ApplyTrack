
import React from 'react';
import './App.css';
import ApplicationTracker from './ApplicationTracker';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <a href="#" className="brand">
          <span className="brand-icon">A</span>
          ApplyTrack<span className="brand-dot">.</span>
        </a>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#tracker">My Tracker</a>
        </div>

        <a href="#tracker" className="nav-button">
          Get Started <span>↗</span>
        </a>
      </nav>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="live-dot"></span>
              YOUR CAREER JOURNEY, ORGANIZED
            </div>

            <h1>
              Every opportunity.
              <br />
              <span>One clear journey.</span>
            </h1>

            <p className="hero-description">
              From internships to scholarships, keep every application
              organized, track your progress, and stay one step ahead
              of your next big opportunity.
            </p>

            <div className="hero-actions">
              <a href="#tracker" className="primary-button">
                Explore My Tracker <span>→</span>
              </a>
              <a href="#features" className="secondary-button">
                Discover Features
              </a>
            </div>

            <div className="hero-note">
              <span>✦</span> Built for students. Designed for progress.
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow"></div>

            <div className="floating-tag tag-top">
              <span className="tag-icon purple">✦</span>
              Stay organized
            </div>

            <div className="preview-card">
              <div className="preview-header">
                <div>
                  <p className="preview-label">YOUR JOURNEY</p>
                  <h3>Application overview</h3>
                </div>
                <span className="preview-menu">•••</span>
              </div>

              <div className="preview-progress">
                <div className="progress-info">
                  <span>Application progress</span>
                  <strong>75%</strong>
                </div>
                <div className="progress-track">
                  <div className="progress-fill"></div>
                </div>
              </div>

              <div className="preview-divider"></div>

              <div className="preview-item">
                <div className="company-symbol symbol-one">I</div>
                <div className="company-info">
                  <strong>Infosys</strong>
                  <span>Software Internship</span>
                </div>
                <span className="preview-status review">In Review</span>
              </div>

              <div className="preview-item">
                <div className="company-symbol symbol-two">G</div>
                <div className="company-info">
                  <strong>Google</strong>
                  <span>Student Program</span>
                </div>
                <span className="preview-status selected">Selected</span>
              </div>

              <div className="preview-item">
                <div className="company-symbol symbol-three">M</div>
                <div className="company-info">
                  <strong>Microsoft</strong>
                  <span>Summer Internship</span>
                </div>
                <span className="preview-status applied">Applied</span>
              </div>

              <div className="preview-footer">
                <span>Keep moving forward</span>
                <span>✦</span>
              </div>
            </div>

            <div className="floating-tag tag-bottom">
              <span className="tag-icon green">✓</span>
              Progress, at a glance
            </div>
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <span className="section-eyebrow">A SMARTER WAY TO APPLY</span>
            <h2>Everything in its <span>right place.</span></h2>
            <p>
              Spend less time managing applications and more time
              preparing for the opportunities ahead.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <div className="feature-icon icon-purple">▤</div>
              <h3>All in one place</h3>
              <p>
                Keep internships, jobs, scholarships and hackathons
                together in one organized space.
              </p>
              <span className="feature-number">01</span>
            </article>

            <article className="feature-card">
              <div className="feature-icon icon-peach">◷</div>
              <h3>Track every update</h3>
              <p>
                Follow each application from submission to review
                and final selection.
              </p>
              <span className="feature-number">02</span>
            </article>

            <article className="feature-card">
              <div className="feature-icon icon-green">⌁</div>
              <h3>Never miss a deadline</h3>
              <p>
                Record important dates and keep upcoming application
                deadlines within reach.
              </p>
              <span className="feature-number">03</span>
            </article>
          </div>
        </section>

        <section className="tracker-wrapper" id="tracker">
          <div className="tracker-intro">
            <span className="section-eyebrow">YOUR PERSONAL WORKSPACE</span>
            <h2>Let's track your <span>next opportunity.</span></h2>
            <p>Add an application, update its status, and keep your journey moving.</p>
          </div>

          <ApplicationTracker />
        </section>

        <section className="closing-section">
          <div>
            <span className="section-eyebrow">YOUR NEXT CHAPTER STARTS HERE</span>
            <h2>Small steps. <span>Big possibilities.</span></h2>
            <p>Stay consistent, stay prepared, and make every application count.</p>
          </div>
          <a href="#tracker" className="primary-button">
            Back to My Tracker <span>↑</span>
          </a>
        </section>
      </main>

      <footer className="footer">
        <a href="#" className="brand">
          <span className="brand-icon">A</span>
          ApplyTrack<span className="brand-dot">.</span>
        </a>
        <p>Made for students building their future. <span>✦</span></p>
        <span className="footer-copy">© 2026 ApplyTrack</span>
      </footer>
    </div>
  );
}

export default App;
