'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="px-4">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Get in Touch</h2>
          <p className="mb-8 text-muted-foreground">
            I'm always open to new opportunities and collaborations. Feel free to
            reach out!
          </p>
          <Button size="lg" asChild>
            <Link href="mailto:hello@johndoe.dev">
              Send me an email
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}