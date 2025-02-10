import FAQs from "@/sections/FAQs";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Projects from "@/sections/Projects";
import Testimonials from "@/sections/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Minimal Portfolio",
  description: "Explore projects, designs, and experiences crafted with creativity and code.",
  openGraph: {
    title: "Home - Minimal Portfolio",
    description: "Explore projects, designs, and experiences crafted with creativity and code.",
    url: "https://nighte-minimal-portfolio.vercel.app",
  },
};

function Home() {

  return (
    <main>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Jannick Pedersen",
            url: "https://nighte-minimal-portfolio.vercel.app",
            sameAs: [
              //"https://linkedin.com/in/yourprofile",
              "https://github.com/JannickPepe",
            ],
          }),
        }}
      />

      {/* Sections */}
      <Header />
      <Hero />
      <Intro />
      <Projects />
      <Testimonials />
      <FAQs />
    </main>
  )
}

export default Home;
