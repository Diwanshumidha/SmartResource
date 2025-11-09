"use client";

import { useEffect, useMemo, useState } from "react";
import * as cheerio from "cheerio";

import { Tree } from "./Tree";
import { TOC } from "@/lib/blogs/renderer";

const TableOfContent = ({ toc }: { toc: TOC }) => {
  const activeId = useActiveItem(toc.map((t) => t.id));
  return (<div className="pt-10">
    <h2 className="text-lg text-foreground font-bold leading-7 tracking-wider">Table of Contents</h2>
    <Tree tree={toc} activeItem={activeId} />
    </div>)
};

export default TableOfContent;

function useActiveItem(itemIds: (string | undefined)[]) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Function to find the element closest to the middle of the viewport
    const findClosestToMiddle = () => {
      const viewportHeight = window.innerHeight;
      const middle = viewportHeight / 2;
      
      let closestId = "";
      let closestDistance = Infinity;

      itemIds.forEach((id) => {
        if (!id) return;

        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementMiddle = rect.top + rect.height / 2;
          const distanceToMiddle = Math.abs(elementMiddle - middle);

          // Update the closestId if the current element is closer to the middle
          if (distanceToMiddle < closestDistance) {
            closestId = id;
            closestDistance = distanceToMiddle;
          }
        }
      });

      setActiveId(closestId);
    };

    // IntersectionObserver callback
    const observer = new IntersectionObserver(
      (entries) => {
        // Call findClosestToMiddle when any of the entries change
        findClosestToMiddle();
      },
      { threshold: [0.5] } // Adjust threshold as needed
    );

    // Observe each element with the given IDs
    itemIds.forEach((id) => {
      if (!id) return;

      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    // Initial check to set the active ID
    findClosestToMiddle();

    return () => {
      // Cleanup: Unobserve elements
      itemIds.forEach((id) => {
        if (!id) return;

        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [itemIds]);

  return activeId;
}

