import { Intro, FeaturedWorks } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className="px-[148px] overflow-hidden">
      <Intro />
      <FeaturedWorks />
    </main>
  );
}
