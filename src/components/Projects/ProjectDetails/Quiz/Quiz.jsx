import React from "react";
import { Link } from "react-router-dom";
import "./Quiz.css";

export default function Quiz() {
  return (
    <section className="quiz-project">
      <div className="quiz-project-container">
        <div className="quiz-hero">
          <span className="quiz-badge">Featured Project</span>
          <h1 className="quiz-title">Cryptic Quiz Challenge</h1>
          <p className="quiz-subtitle">
            An interactive puzzle-based quiz I created for friends to combine
            fun, curiosity, and small technical challenges across decoding,
            Enigma-inspired codebreaking, quantum optics, and steganography.
          </p>
        </div>

        <div className="quiz-meta-grid">
          <div className="quiz-meta-card">
            <h3>Role</h3>
            <p>Developer / Concept Creator</p>
          </div>

          <div className="quiz-meta-card">
            <h3>Stack</h3>
            <p>React, JavaScript, CSS, Python</p>
          </div>

          <div className="quiz-meta-card">
            <h3>Focus</h3>
            <p>Interactive learning, puzzle design, experimentation</p>
          </div>
        </div>

        <div className="quiz-content-grid">
          <div className="quiz-main">
            <section className="quiz-section">
              <h2>Overview</h2>
              <p>
                This project is an interactive quiz and puzzle experience that I
                created for friends. The goal was not to build a standard quiz,
                but something more playful, memorable, and curiosity-driven.
              </p>
              <p>
                Instead of using only classic question-and-answer patterns, I
                designed the project as a small exploration space where players
                can engage with unusual ideas in a light and accessible way. It
                combines entertainment with experimentation and turns technical
                topics into something more interactive.
              </p>

              <div className="quiz-overview-action">
                <div className="quiz-overview-text">
                  <h3>Try the Quiz</h3>
                  <p>
                    The project can also be explored directly through the live
                    quiz interface. Open the interactive experience and work
                    through the different challenges yourself. The quiz is in German, so if you don’t speak German, you might find it difficult to give it a go.
                  </p>
                </div>

                <Link to="/diary" className="hero-diary-button">
                  <span>Open the</span>
                  <span>Quiz</span>
                  <span>Challenge</span>
                </Link>
              </div>
            </section>

        <div className="quiz-side-card">
            <h3>Challenge Info</h3>
                <ul>
                    <li>Estimated time: 8–10 hours</li>
                    <li>Difficulty: Medium</li>
                    <li>Topics: Crypto, Stego, Quantum basics</li>
                </ul>
        </div>

            <section className="quiz-section">
              <h2>Concept</h2>
              <p>
                The quiz combines classic interaction with small challenge-based
                tasks. Players do not just select answers, but also explore
                puzzles inspired by technical and scientific topics that would
                not usually appear in a casual quiz environment.
              </p>
              <p>
                The intention was to make the experience feel personal and fun
                for friends while also using it as a way to experiment with new
                ideas. I liked the challenge of building something that feels
                playful on the surface, but still contains meaningful concepts
                underneath.
              </p>
            </section>

            <section className="quiz-section">
              <h2>Topics Included</h2>
              <p>
                The project includes simple decoding tasks, small
                Enigma-inspired codebreaking elements, introductory quantum
                optics ideas, and lightweight steganography concepts. Each topic
                was presented in a simplified and approachable format so that it
                feels interesting rather than overwhelming.
              </p>
              <p>
                This mix gave the quiz a stronger identity than a normal trivia
                app. It became less about general knowledge and more about
                curiosity, pattern recognition, and discovering unfamiliar
                concepts through interaction.
              </p>
            </section>

            <section className="quiz-section">
              <h2>Technical Implementation</h2>
              <p>
                The application was built with React and structured into
                reusable components so that different sections, puzzles, and
                interactions could be handled in a clean way. State management
                was used to control progress, responses, and transitions between
                the different parts of the experience.
              </p>
              <p>
                Building the project helped me practice dynamic rendering, event
                handling, component organization, and user-flow design. It also
                showed how even a relatively small web project benefits from
                clear structure and modular thinking.
              </p>
            </section>

            <section className="quiz-section">
              <h2>What I Learned</h2>
              <p>
                Through this project, I learned more than just React mechanics.
                I also learned how to turn technical interests into something
                engaging and understandable for other people. Designing the quiz
                for friends forced me to think more about clarity, pacing, and
                how difficult something should feel.
              </p>
              <p>
                I especially liked the idea of using code as a medium for
                exploration. The project showed me that web development can be
                a good way to share curiosity and present unusual topics in a
                more memorable and interactive format.
              </p>
            </section>

            <section className="quiz-section">
              <h2>Next Steps</h2>
              <p>
                In the future, I would like to expand the project with more
                puzzle types, stronger visual feedback, smoother transitions,
                and a more polished overall presentation. Features like hints,
                score tracking, timers, and categories would make the experience
                feel even more complete.
              </p>
              <p>
                Long term, I can imagine using this type of project as a
                reusable format for interactive mini-learning experiences that
                combine problem solving, creativity, and technical topics in a
                lightweight but engaging way.
              </p>
            </section>
          </div>

          <aside className="quiz-sidebar">
            <div className="quiz-side-card">
              <h3>Highlights</h3>
              <ul>
                <li>Built for friends</li>
                <li>Interactive puzzle-based format</li>
                <li>Simple decoding challenges</li>
                <li>Enigma-inspired codebreaking</li>
                <li>Introductory quantum optics</li>
                <li>Basic steganography concepts</li>
              </ul>
            </div>

            <div className="quiz-side-card">
              <h3>Project Goals</h3>
              <p>
                Create a fun and unusual interactive experience, explore new
                ideas through code, and make technical concepts feel more
                accessible in a playful setting.
              </p>
            </div>

            <div className="quiz-side-card">
              <h3>Live Experience</h3>
              <p>
                The project is not only described here as a portfolio entry, but
                can also be explored directly through its interactive quiz page.
              </p>

              <Link to="/diary" className="quiz-button">
                Open Quiz Page
              </Link>
            </div>

            <div className="quiz-side-card">
              <h3> Stego Code</h3>
              <a
                href="https://github.com/milan-bueki/steganography"
                target="_blank"
                rel="noopener noreferrer"
                className="quiz-github-link"
              >
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 
                  0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13
                  -.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07
                  -.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08
                  -.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82a7.62 7.62 0 012 0c1.53-1.04 2.2-.82 
                  2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 
                  3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 
                  8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>

                <span>View code on GitHub</span>
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}