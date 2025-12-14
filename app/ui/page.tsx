import uikit from "@/asset/data/uikit.json";
import CardUIKIT from "@/components/reusable/ui/CardUIKIT";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Showcase",
};

const UI = () => {
  return (
    <main className="mt-10 min-h-screen">
      <h1 className="text-lg lg:text-2xl font-bold">Sharing UI Kit</h1>
      <p className="text-foreground/75">
        I also like to share my UI/UX creations.
      </p>

      <ul className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {[...uikit].reverse().map((ui, idx) => (
          <li key={idx}>
            <CardUIKIT {...ui} key={idx} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default UI;
