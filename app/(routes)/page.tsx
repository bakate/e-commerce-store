import Footer from "@/components/footer";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main>
      <ModeToggle />
      <h1 className="text-4xl font-bold text-center">
        Welcome to{" "}
        <a className="text-blue-600" href="https://nextjs.org">
          Next.js!
        </a>
      </h1>

      <Footer />
    </main>
  );
}
