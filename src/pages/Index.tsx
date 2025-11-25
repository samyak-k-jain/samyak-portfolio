import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
// import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet";

/**
 * Index Page - Main Portfolio Page
 * Contains all sections of the portfolio website
 * Includes SEO meta tags and structured data
 */
const Index = () => {
  // Structured data for SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Samyak Jain",
    jobTitle: "Full Stack Developer",
    description:
      "Full Stack Developer with 3 years of experience building scalable web applications using Java, Spring Boot, React, Kafka, and cloud platforms.",
    url: window.location.origin,
    sameAs: [
      "https://www.linkedin.com/in/samyak-jain-2550831a8/",
      "https://github.com/your-username",
    ],
    knowsAbout: [
      "Java",
      "Spring Boot",
      "React",
      "Microservices",
      "Kafka",
      "Cloud Computing",
      "Full Stack Development",
    ],
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Samyak Jain - Full Stack Developer | Java, Spring Boot, React</title>
        <meta
          name="description"
          content="Full Stack Developer with 3 years of experience in Java, Spring Boot, React, and microservices. View my portfolio of scalable web applications and cloud solutions."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, Java Developer, Spring Boot, React, Microservices, Kafka, Portfolio, Samyak Jain"
        />
        <meta name="author" content="Samyak Jain" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Samyak Jain - Full Stack Developer" />
        <meta
          property="og:description"
          content="Full Stack Developer specializing in Java, Spring Boot, React, and microservices architecture."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.origin} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Samyak Jain - Full Stack Developer" />
        <meta
          name="twitter:description"
          content="Full Stack Developer with expertise in Java, Spring Boot, and React."
        />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Page Layout */}
      <div className="min-h-screen">
        <Header />
        <main id="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          {/* <Experience /> */}
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
