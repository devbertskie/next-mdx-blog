/* eslint-disable no-new-func */
import { cn } from "@/lib/utils";
import React, { HTMLAttributes } from "react";
import * as runtime from "react/jsx-runtime";

import Image from "next/image";

const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

type ComponentsProps = HTMLAttributes<HTMLElement>;

const components = {
  h1: ({ className, ...props }: ComponentsProps) => (
    <h1
      className={cn(
        "mt-2 scroll-m-20 text-4xl font-bold text-primary tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h2: ({ className, ...props }: ComponentsProps) => (
    <h2
      className={cn(
        "mt-10 scroll-m-20 border-b pb-1 text-3xl font-semibold text-primary tracking-tight first:mt-0",
        className,
      )}
      {...props}
    />
  ),
  h3: ({ className, ...props }: ComponentsProps) => (
    <h3
      className={cn(
        "mt-8 scroll-m-20 text-2xl font-semibold text-primary tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h4: ({ className, ...props }: ComponentsProps) => (
    <h4
      className={cn(
        "mt-8 scroll-m-20 text-xl font-semibold text-primary tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h5: ({ className, ...props }: ComponentsProps) => (
    <h5
      className={cn(
        "mt-8 scroll-m-20 text-lg font-semibold text-primary tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  h6: ({ className, ...props }: ComponentsProps) => (
    <h6
      className={cn(
        "mt-8 scroll-m-20 text-base font-semibold text-primary tracking-tight",
        className,
      )}
      {...props}
    />
  ),
  a: ({ className, ...props }: ComponentsProps) => (
    <a
      className={cn(
        "font-medium underline text-primary underline-offset-4",
        className,
      )}
      {...props}
    />
  ),
  p: ({ className, ...props }: ComponentsProps) => (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: ComponentsProps) => (
    <ul className={cn("my-6 ml-6 list-disc", className)} {...props} />
  ),
  ol: ({ className, ...props }: ComponentsProps) => (
    <ol className={cn("my-6 ml-6 list-decimal", className)} {...props} />
  ),
  li: ({ className, ...props }: ComponentsProps) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  blockquote: ({ className, ...props }: ComponentsProps) => (
    <blockquote
      className={cn(
        "[&>*]:text-muted-foreground mt-6 border-l-2 pl-6 italic",
        className,
      )}
      {...props}
    />
  ),
  img: ({
    className,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img className={cn("rounded-md border", className)} alt={alt} {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-4 md:my-8" {...props} />,
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-6 w-full overflow-y-auto">
      <table className={cn("w-full", className)} {...props} />
    </div>
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr
      className={cn("even:bg-secondary m-0 border-t p-0", className)}
      {...props}
    />
  ),
  th: ({ className, ...props }: ComponentsProps) => (
    <th
      className={cn(
        "border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  td: ({ className, ...props }: ComponentsProps) => (
    <td
      className={cn(
        "border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
        className,
      )}
      {...props}
    />
  ),
  pre: ({ className, ...props }: ComponentsProps) => (
    <pre
      className={cn(
        "mb-4 mt-6 overflow-x-auto text-sm  rounded-lg border !bg-secondary py-4",
        className,
      )}
      {...props}
    />
  ),
  code: ({ className, ...props }: ComponentsProps) => (
    <code
      className={cn(
        "relative rounded border px-[0.3rem] py-[0.2rem] !bg-secondary font-code font-light !text-sm",
        className,
      )}
      {...props}
    />
  ),
  Image,
};

interface MdxProps {
  code: string;
  components?: Record<string, React.ComponentType>;
}

export function MDXContent({ code, components }: MdxProps) {
  const Component = useMDXComponent(code);
  return <Component components={{ Image, ...components }} />;
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return (
    <div>
      <Component components={components} />
    </div>
  );
}
