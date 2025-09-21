"use client";

import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";

function formatYearDuration() {
  const startDate = new Date(2023, 6, 1); // July 1, 2023 (months are 0-indexed)
  const currentDate = new Date();

  const totalMonths =
    (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
    (currentDate.getMonth() - startDate.getMonth());
  const totalYears = Math.floor(totalMonths / 12);

  if (totalYears === 0) {
    return "Less than 1 year";
  } else if (totalMonths % 12 === 0) {
    return `${totalYears} ${totalYears === 1 ? "year" : "years"}`;
  } else {
    return `${totalYears}+ years`;
  }
}

const HeadContent = () => {
  const [emoji, setEmoji] = useState("😎😋👊🙏✅🔥😁😭🦦🤖");

  useEffect(() => {
    // @ts-ignore
    const shuffled = [...emoji].sort(() => Math.random() - 0.5).join("");
    setEmoji(shuffled);
  }, []);

  return (
    <section>
      <h1 className="text-lg lg:text-2xl font-bold">Adi Cahya Saputra</h1>
      <p className="text-sm lg:text-base text-foreground/60">{emoji}</p>

      <p className="mt-2 text-foreground/75">
        Self-taught developer with {formatYearDuration()} of hands-on
        experience. <br />
        Currently working as a full-stack developer and UI/UX Designer.
      </p>
    </section>
  );
};

export default HeadContent;
