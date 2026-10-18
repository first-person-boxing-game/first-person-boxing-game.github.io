import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The requested First Person Boxing page could not be found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="site-container grid min-h-[65vh] place-items-center py-20 text-center">
      <div>
        <p className="eyebrow">404 · Page not found</p>
        <h1>This Page Does Not Exist</h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          The link may be outdated or the page may have moved. Explore the current First Person Boxing guides instead.
        </p>
        <Link href="/" className="button-primary mt-8">Back to First Person Boxing Wiki</Link>
      </div>
    </main>
  );
}
