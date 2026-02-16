import { useEffect, useMemo, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

export default function App() {
  const sections = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "experience", label: "Experience" },
    ],
    []
  );

  const [active, setActive] = useState("home");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY + 140;
      let current = "home";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) current = s.id;
      }
      setActive(current);
    };

    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [sections]);

  const projects = useMemo(
    () => [
      {
        chip: "Final Year • Group",
        title: "AIMERS — Virtual Interview Platform (Frontend)",
        desc: "Built responsive UI flow, dashboards, components and screens during internship/group work using React/Next.js and Bootstrap.",
        stack: ["React", "Next.js", "Bootstrap", "CSS", "JavaScript"],
        github: "https://github.com/yaqoobmomen-debug/Aimers",
        live: "https://aimers-jet.vercel.app/",
      },
      {
        chip: "ML / NLP",
        title: "YouTube Video Summarization",
        desc: "Summarizes YouTube content into readable notes and key highlights using NLP-based processing.",
        stack: ["Python", "NLP", "Pandas", "TensorFlow"],
        github: "https://github.com/your-username/youtube-summarization",
        live: "",
      },
      {
        chip: "Frontend",
        title: "Portflow — Portfolio Website",
        desc: "A modern single-page portfolio with smooth scrolling, section-based flow, and responsive Bootstrap layout.",
        stack: ["React", "Bootstrap", "CSS", "JavaScript"],
        github: "https://github.com/yaqoobmomen-debug/Portflow",
        live: "https://yaqoobportflow.vercel.app/",
      },
    ],
    []
  );

  return (
    <div >
      <nav className="navbar navbar-expand-lg navbar-light sticky-top pf-nav">
        <div className="container-fluid pf-wide">
          <div className="pf-wrap d-flex align-items-center w-100">
            <button
              className="navbar-brand pf-brand btn btn-link p-0 text-decoration-none"
              onClick={() => scrollTo("home")}
              type="button"
            >
              Yaqoob Momen <span className="pf-dot">.</span>
            </button>

            <button
              className="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#pfNav"
              aria-controls="pfNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="pfNav">
              <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-1">
                {sections.map((s) => (
                  <li className="nav-item" key={s.id}>
                    <button
                      className={`nav-link pf-link ${active === s.id ? "active" : ""}`}
                      onClick={() => scrollTo(s.id)}
                      type="button"
                    >
                      {s.label}
                    </button>
                  </li>
                ))}

                <li className="nav-item ms-lg-2">
                  <button
                    className="btn btn-outline-dark btn-sm px-3"
                    data-bs-toggle="modal"
                    data-bs-target="#contactModal"
                    type="button"
                  >
                    Contact Info
                  </button>
                </li>

                
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="pf-hero">
        <div className="container-fluid pf-wide">
          <div className="pf-wrap">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <p className="pf-kicker mb-2">Frontend Developer • React • Next.js • Bootstrap</p>

                <h1 className="pf-title mb-3">
                  Hi, I’m <span className="pf-highlight">Yaqoob Momen</span>
                  <br />
                  I build clean, responsive frontends.
                </h1>

                <p className="pf-sub mb-4">
                  Currently doing a full-stack internship and focusing on frontend development using React, Next.js,
                  JavaScript, CSS and Bootstrap.
                </p>

                <div className="d-flex flex-wrap gap-2">
                  <button className="btn btn-primary px-4" onClick={() => scrollTo("projects")} type="button">
                    View Projects
                  </button>

                  <button
                    className="btn btn-outline-dark px-4"
                    data-bs-toggle="modal"
                    data-bs-target="#contactModal"
                    type="button"
                  >
                    Contact Info
                  </button>
                </div>

                <div className="pf-stats mt-4">
                  <div className="pf-stat">
                    <div className="pf-stat-num">React</div>
                    <div className="pf-stat-text">Component UI</div>
                  </div>
                  <div className="pf-stat">
                    <div className="pf-stat-num">Next.js</div>
                    <div className="pf-stat-text">App Pages</div>
                  </div>
                  <div className="pf-stat">
                    <div className="pf-stat-num">Bootstrap</div>
                    <div className="pf-stat-text">Responsive</div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="pf-card p-4">
                  <div className="pf-badge">Internship Work</div>
                  <h5 className="fw-bold mb-2">Current Focus</h5>
                  <p className="text-muted mb-3">
                    Building frontend screens, dashboards, and reusable components with modern UI patterns.
                  </p>

                  <div className="pf-list">
                    <div className="pf-item">
                      <span className="pf-dot-sm" /> Responsive layout (Bootstrap + CSS)
                    </div>
                    <div className="pf-item">
                      <span className="pf-dot-sm" /> Forms + validation + UI states
                    </div>
                    <div className="pf-item">
                      <span className="pf-dot-sm" /> Smooth navigation + section flow
                    </div>
                  </div>

                  <button className="btn btn-dark w-100 mt-3" onClick={() => scrollTo("projects")} type="button">
                    See Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="pf-section">
        <div className="container-fluid pf-wide">
          <div className="pf-wrap">
            <div className="row g-4 align-items-start">
              <div className="col-lg-5">
                <h2 className="pf-h2">About</h2>
                <p className="text-muted mb-0">
                  Final-year AI & Data Science student. Currently in a full-stack internship with frontend focus.
                </p>
              </div>
              <div className="col-lg-7">
                <div className="card border-0 shadow-sm p-4 pf-lift">
                  <p className="mb-2">
                    I build responsive, modern UIs in React/Next.js and enjoy turning designs into clean components.
                  </p>
                  <p className="mb-0">
                    I’ve worked on AIMERS (Virtual Interview Platform) frontend, plus ML projects like YouTube video
                    summarization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="pf-section pf-soft">
        <div className="container-fluid pf-wide">
          <div className="pf-wrap">
            <h2 className="pf-h2">Skills</h2>
            <p className="text-muted">Frontend stack I’m working with.</p>

            <div className="row g-3 mt-2">
              {[
                { title: "Frontend", tags: ["React", "Next.js", "JavaScript", "HTML", "CSS"] },
                { title: "UI / Styling", tags: ["Bootstrap", "Responsive UI", "Flex/Grid", "Animations"] },
                { title: "Other", tags: ["Git/GitHub", "REST Basics", "Debugging"] },
              ].map((box) => (
                <div className="col-lg-4" key={box.title}>
                  <div className="card border-0 shadow-sm p-4 h-100 pf-lift">
                    <h5 className="fw-bold mb-3">{box.title}</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {box.tags.map((t) => (
                        <span className="badge rounded-pill text-bg-light border" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="pf-section">
        <div className="container-fluid pf-wide">
          <div className="pf-wrap">
            <div className="d-flex align-items-end justify-content-between flex-wrap gap-2">
              <div>
                <h2 className="pf-h2">Projects</h2>
                <p className="text-muted mb-0">My featured work (frontend + ML projects).</p>
              </div>
            </div>

            <div className="row g-3 mt-2">
              {projects.map((p) => (
                <div className="col-lg-4" key={p.title}>
                  <div className="card border-0 shadow-sm p-4 h-100 pf-lift d-flex flex-column">
                    <div className="pf-chip mb-3">{p.chip}</div>

                    <h5 className="fw-bold">{p.title}</h5>
                    <p className="text-muted">{p.desc}</p>

                    <div className="d-flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span className="badge rounded-pill text-bg-light border" key={t}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex gap-2 mt-auto pt-3">
                      {p.github && (
                        <a className="btn btn-outline-dark btn-sm" href={p.github} target="_blank" rel="noreferrer">
                          GitHub
                        </a>
                      )}
                      {p.live ? (
                        <a className="btn btn-primary btn-sm" href={p.live} target="_blank" rel="noreferrer">
                          Live
                        </a>
                      ) : (
                        <button className="btn btn-primary btn-sm" type="button" disabled>
                          Live
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="pf-section pf-soft">
        <div className="container-fluid pf-wide">
          <div className="pf-wrap">
            <h2 className="pf-h2">Experience</h2>

            <div className="card border-0 shadow-sm p-4 mt-3 pf-lift">
              <h5 className="fw-bold mb-1">Full-Stack Internship (Frontend Focus)</h5>
              <div className="text-muted mb-3">React • Next.js • Bootstrap • CSS • JavaScript</div>
              <ul className="mb-0">
                <li>Built responsive pages and reusable UI components.</li>
                <li>Worked on forms, validations, and UI interactions.</li>
                <li>Integrated frontend screens with basic APIs (where needed).</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-4 text-center text-muted">
        <div className="container-fluid pf-wide">
          <div className="pf-wrap">© 2026 Yaqoob Momen • Frontend Portfolio</div>
        </div>
      </footer>

      {/* MODAL */}
      <div
        className="modal fade"
        id="contactModal"
        tabIndex="-1"
        aria-labelledby="contactModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content pf-modal">
            <div className="modal-header">
              <h5 className="modal-title fw-bold" id="contactModalLabel">
                Contact Information
              </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>

            <div className="modal-body">
              <p><b>Email:</b> yaqoobmomen@gmail.com</p>
              <p><b>Phone:</b> +91 97631 99604</p>
              <p><b>LinkedIn:</b> https://www.linkedin.com/in/yaqoob-momen/</p>
              <p><b>GitHub:</b> https://github.com/yaqoobmomen-debug</p>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-outline-dark" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
