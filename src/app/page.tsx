import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <section className="space-y-6 pb-8 md:pb-12 md:pt-10 lg:py-32">
      <div className="container flex max-w-5xl flex-col items-center gap-4 text-center">
        <Link
          href={siteConfig.social.twitter}
          className="bg-muted px-4 py-1.5 text-sm font-normal transition-colors hover:text-primary"
        >
          Follow along on Twitter
        </Link>
        <h1 className="text-3xl capitalize sm:text-5xl md:text-6xl lg:text-7xl">
          A personal Blog powered by{" "}
          <span className="text-yellow-300">MDX</span> and{" "}
          <span className="text-primary">NextJs 14</span>
        </h1>
        <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {siteConfig.description}
        </p>
        <div className="space-x-4">
          <Link
            href="/blog"
            className={cn(buttonVariants({ size: "default" }))}
          >
            My Blog
          </Link>
          <Link
            href="/collab"
            className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
          >
            Let&apos;s Collab🎉
          </Link>
        </div>
      </div>
    </section>
  );
}
