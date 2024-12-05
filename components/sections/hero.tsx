import { Button } from '../ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
  <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden bg-background px-4">
      <div className="absolute inset-0 bg-grid-small-black/[0.2] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[40rem] h-[40rem] rounded-full bg-gradient-to-tr from-purple-500/30 to-cyan-500/30 blur-3xl" />
      </div>
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="animate-slide-in">
          <h1 className="text-5xl font-bold sm:text-6xl md:text-7xl">
            Hi, I'm{' '}
            <span className="gradient-text">Vivek Chaturvedi</span>
          </h1>
          <p className="mt-8 text-2xl font-semibold gradient-text animate-fade-in delay-200">
            Software Engineering
          </p>
          <p className="mt-4 text-xl text-muted-foreground animate-fade-in delay-300 max-w-2xl mx-auto">
          I’m a Software Engineer specializing in building and deploying scalable web applications. I handle front and backend development, ensuring seamless user experiences and reliable system performance. From architecture to deployment, I manage the full development lifecycle with a focus on efficiency, reliability, and maintainability.
          </p>
          <div className="mt-8 flex gap-4 justify-center animate-fade-in delay-400">
            <Button size="lg" asChild className="hover-lift">
              <Link href="#contact">
                Get in touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="hover-lift">
              <Link href="#projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}