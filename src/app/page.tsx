import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { SOCIALS } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-6 pb-8 md:pb-12 md:pt-10 lg:py-32">
      <div className="container mt-6 flex max-w-5xl flex-col items-center gap-4 text-center xl:mt-0">
        <div className="flex items-center space-x-2">
          {SOCIALS.map((social) => (
            <Link
              key={social.label}
              href={social.path}
              rel="noreferrer"
              target="_blank"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "text-primary px-0 hover:bg-primary transition-colors rounded-full p-2 size-8 bg-primary/80",
              )}
            >
              <social.icon className="size-6" />
              <span className="sr-only">{social.label}</span>
            </Link>
          ))}
        </div>
        <h1 className="text-3xl capitalize sm:text-5xl md:text-6xl lg:text-7xl">
          A personal Blog template using{" "}
          <span className="font-code text-yellow-300">Mdx</span> and{" "}
          <span className="font-code text-primary">NextJs14</span>
        </h1>
        <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <div className="space-x-4">
          <Link
            href="/blog"
            className={cn(
              buttonVariants({ size: "lg", variant: "secondary" }),
              "border",
            )}
          >
            🎉My Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
