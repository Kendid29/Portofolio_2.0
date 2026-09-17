import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);
  
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <main className="flex min-h-screen flex-col overflow-hidden bg-[var(--color-canvas)] pb-24">
        <Section className="pt-24 md:pt-32 pb-12">
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/#works">
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to Works
            </Link>
          </Button>
          
          <div className="space-y-6 max-w-4xl">
            <Badge variant="primary">{project.category}</Badge>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold uppercase text-[var(--color-obsidian)] drop-shadow-[2px_2px_0px_var(--color-on-surface)]">
              {project.title}
            </h1>
            <p className="font-body text-xl md:text-2xl font-medium text-[var(--color-obsidian)]">
              {project.description}
            </p>
          </div>
        </Section>
        
        {/* Project Cover */}
        <Section className="py-0">
           <div className="relative w-full aspect-video border-[4px] border-[var(--color-obsidian)] shadow-[var(--shadow-neo-lg)] bg-[var(--color-surface-container)] overflow-hidden">
             <Image
               src={project.cover}
               alt={`${project.title} Cover`}
               fill
               priority
               className="object-cover object-top"
             />
           </div>
        </Section>

        <Section className="py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-12">
              <div className="space-y-4">
                <h3 className="font-display text-2xl font-bold uppercase border-b-[3px] border-[var(--color-obsidian)] pb-2 inline-block">The Challenge</h3>
                <p className="font-body text-lg">{project.challenge}</p>
              </div>
              
              <div className="space-y-4">
                <h3 className="font-display text-2xl font-bold uppercase border-b-[3px] border-[var(--color-obsidian)] pb-2 inline-block">Key Learnings</h3>
                <p className="font-body text-lg">{project.learning}</p>
              </div>

              <div className="space-y-6">
                <h3 className="font-display text-2xl font-bold uppercase border-b-[3px] border-[var(--color-obsidian)] pb-2 inline-block">Key Features</h3>
                <ul className="space-y-4 font-body text-lg">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="font-mono font-bold">{i + 1}.</span>
                      <div>
                        <strong>{feature.title}:</strong> {feature.description}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-[var(--color-white)] p-6 border-[3px] border-[var(--color-obsidian)] shadow-[var(--shadow-neo-sm)] space-y-4">
                <div>
                  <h4 className="font-mono text-sm font-bold uppercase opacity-60">Role</h4>
                  <p className="font-body font-bold">{project.role}</p>
                </div>
                <div>
                  <h4 className="font-mono text-sm font-bold uppercase opacity-60">Technologies</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="default">{tech}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        
        {/* Gallery */}
        <Section className="py-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((img, i) => (
               <div key={i} className="relative aspect-video border-[4px] border-[var(--color-obsidian)] shadow-[var(--shadow-neo-md)] bg-[var(--color-surface-container)] overflow-hidden">
                 <Image
                   src={img}
                   alt={`${project.title} Screenshot ${i + 1}`}
                   fill
                   className="object-cover object-top hover:scale-105 transition-transform duration-300"
                 />
               </div>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}
