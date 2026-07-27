import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Hero />
          <About />
          <Skills />
          <FeaturedProjects />
        </Container>
      </main>
      <Footer />
    </>
  );
}
