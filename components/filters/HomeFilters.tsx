"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, useSearchParams } from "next/navigation";

import { twMerge } from "tailwind-merge";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";
import { log } from "console";

const filters = [
  { name: "React", value: "react" },
  { name: "TypeScript", value: "typescript" },
  // { name: "Newest", value: "newest" },
  // { name: "Popular", value: "popular" },
  // { name: "Unanswered", value: "unanswered" },
  // { name: "Recommended", value: "recommended" },
];

const HomeFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const filterParam = searchParams.get("filter");
  const [active, setActive] = useState(filterParam || "");

  const handleTypeClick = (filter: string) => {
    let newUrl = "";
    if (filter === active) {
      setActive("");
      newUrl = removeKeysFromUrlQuery({
        params: searchParams.toString(),
        keysToRemove: ["filter"],
      });
    } else {
      console.log("THIS ->", searchParams);
      setActive(filter);
      newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: "filter",
        value: filter.toLowerCase(),
      });
    }

    router.push(newUrl, { scroll: false });
  };
  return (
    <div className="flex gap-2 mt-5">
      {filters.map((filter) => (
        <Button
          key={filter.name}
          className={twMerge(
            "text-sm",
            active === filter.value ? "bg-amber-200" : "bg-white"
          )}
          onClick={() => handleTypeClick(filter.value)}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
