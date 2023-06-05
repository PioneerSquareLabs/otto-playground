import React from "react";
import Layout from "~/components/Layout";
import "~/styles/globals.css";

const HomePage: React.FC = () => {
  return (
    <Layout>
      <section className="hero">
        <h1>Welcome to Otto</h1>
        <p>An AI-powered development platform</p>
        <button className="cta">Sign Up</button>
      </section>
      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>AI-assisted development</li>
          <li>Project management</li>
          <li>Collaboration tools</li>
        </ul>
      </section>
      <section className="video-demos">
        <h2>Video Demos</h2>
        <iframe
          title="Otto Demo"
          src="https://www.youtube.com/embed/your-video-id"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <ul>
          <li>
            <blockquote>
              "Otto has made my development process faster and more efficient."
            </blockquote>
            <cite>- John Doe</cite>
          </li>
          <li>
            <blockquote>
              "I love how Otto helps me manage my projects and collaborate with
              my team."
            </blockquote>
            <cite>- Jane Smith</cite>
          </li>
        </ul>
      </section>
      <section className="sign-up">
        <h2>Sign Up</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign Up</button>
        </form>
      </section>
    </Layout>
  );
};

export default HomePage;
