'use client';

import { Code2, Globe, Rocket, Brain, Terminal, Server } from 'lucide-react';
import { FeatureCard } from '@/components/about/feature-card';
import { SkillProgress } from '@/components/about/skill-progress';
import { ExperienceTimeline } from '@/components/about/experience-timeline';
import { skillsWithLevels, experience } from '@/lib/data';

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-muted/50 px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold">About Me</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            I'm a passionate Full Stack Developer with over 5 years of experience,
            dedicated to creating exceptional digital experiences.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard
            icon={Code2}
            title="Full Stack Development"
            description="End-to-end application development with modern technologies and best practices."
          />
          <FeatureCard
            icon={Globe}
            title="Responsive Design"
            description="Creating beautiful, responsive interfaces that work across all devices."
          />
          <FeatureCard
            icon={Rocket}
            title="Performance Optimization"
            description="Building high-performance applications with optimal load times."
          />
          <FeatureCard
            icon={Brain}
            title="Problem Solving"
            description="Analytical approach to solving complex technical challenges."
          />
          <FeatureCard
            icon={Terminal}
            title="Clean Code"
            description="Writing maintainable, scalable, and well-documented code."
          />
          <FeatureCard
            icon={Server}
            title="DevOps"
            description="Setting up CI/CD pipelines and managing cloud infrastructure."
          />
        </div>

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h3 className="mb-8 text-2xl font-semibold">Technical Expertise</h3>
            <div className="space-y-6">
              {skillsWithLevels.map((skill, index) => (
                <SkillProgress
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  index={index}
                />
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-8 text-2xl font-semibold">Work Experience</h3>
            <ExperienceTimeline items={experience} />
          </div>
        </div>
      </div>
    </section>
  );
}