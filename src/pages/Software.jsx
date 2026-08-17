import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackButton from '../components/BackButton';
import FieldBackground from '../components/FieldBackground';
import { projects } from '../data/projects';
import { experience, skills, education, activities } from '../data/experience';
import './Software.css';

export default function Software() {
  const [activeId, setActiveId] = useState(projects[0]?.id ?? null);
  const active = projects.find((p) => p.id === activeId);

  return (
    <div className="software">
      <FieldBackground color="#4fd1ff" density={0.00005} linkDistance={120} interactive={false} speed={0.5} />
      <BackButton />

      <div className="software-content">
        <header className="software-header">
          <span className="software-eyebrow">Engineering</span>
          <h1 className="software-title">Software</h1>
          <p className="software-subtitle">
            Full-stack and AI-focused engineer building LLM-powered systems, RESTful APIs, and
            production web applications — end to end, under real constraints.
          </p>
          <div className="skills-row">
            {skills.map((skill) => (
              <span key={skill} className="skill-chip">{skill}</span>
            ))}
          </div>
        </header>

        <section className="software-section">
          <h2 className="section-heading">Experience</h2>
          <div className="experience-list">
            {experience.map((role) => (
              <div key={role.id} className="experience-item">
                <div className="experience-item-header">
                  <div>
                    <span className="experience-role">{role.role}</span>
                    <span className="experience-org"> — {role.org}</span>
                  </div>
                  <span className="experience-dates">{role.dates}</span>
                </div>
                <ul className="experience-bullets">
                  {role.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="software-section">
          <h2 className="section-heading">Projects</h2>
          <div className="software-layout">
            <ul className="project-list">
              {projects.map((project) => (
                <li key={project.id}>
                  <button
                    className={`project-list-item ${project.id === activeId ? 'is-active' : ''}`}
                    onClick={() => setActiveId(project.id)}
                  >
                    <span className="project-list-title">{project.title}</span>
                    <span className="project-list-tagline">{project.tagline}</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="project-detail">
              <AnimatePresence mode="wait">
                {active && (
                  <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="project-detail-header">
                      <h3>{active.title}</h3>
                      {active.year && <span className="project-detail-year">{active.year}</span>}
                    </div>
                    <p className="project-detail-tagline">{active.tagline}</p>
                    <p className="project-detail-description">{active.description}</p>
                    <div className="project-detail-stack">
                      {active.stack.map((tech) => (
                        <span key={tech} className="stack-chip">{tech}</span>
                      ))}
                    </div>
                    {(active.links?.repo || active.links?.demo) && (
                      <div className="project-detail-links">
                        {active.links.repo && (
                          <a href={active.links.repo} target="_blank" rel="noreferrer">Code &rarr;</a>
                        )}
                        {active.links.demo && (
                          <a href={active.links.demo} target="_blank" rel="noreferrer">Live &rarr;</a>
                        )}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <footer className="software-footer">
          <div className="software-footer-education">
            <span className="software-footer-label">Education</span>
            <span>{education.school}</span>
            <span className="software-footer-dim">{education.degree} &middot; {education.date}</span>
          </div>
          <div className="software-footer-activities">
            <span className="software-footer-label">Leadership &amp; Activities</span>
            {activities.map((line) => (
              <span key={line} className="software-footer-dim">{line}</span>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
