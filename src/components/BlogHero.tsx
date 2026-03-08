import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface BlogHeroProps {
  label: string;
  title: string;
  description: string;
  breadcrumbLabel: string;
}

const BlogHero = ({ label, title, description, breadcrumbLabel }: BlogHeroProps) => (
  <section className="relative bg-hero overflow-hidden">
    <div className="absolute inset-0 opacity-[0.06] pointer-events-none" aria-hidden="true">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent blur-3xl -translate-y-1/2 translate-x-1/2" />
    </div>
    <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-primary-foreground/40" />
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/blog" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-primary-foreground/40" />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-primary-foreground/80">{breadcrumbLabel}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <p className="font-sans text-xs font-medium uppercase tracking-[0.2em] text-accent mb-4 flex items-center gap-3 animate-fade-up">
        <span className="w-8 h-px bg-accent/60" />
        {label}
      </p>
      <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-primary-foreground tracking-tight leading-tight animate-fade-up [animation-delay:100ms]">
        {title}
      </h1>
      <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl animate-fade-up [animation-delay:200ms]">
        {description}
      </p>
    </div>
  </section>
);

export default BlogHero;
