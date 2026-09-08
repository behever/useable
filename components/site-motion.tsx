"use client";
import { useEffect } from "react";

export function SiteMotion() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;
    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            target.classList.remove("reveal-waiting");
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.08 },
    );
    elements.forEach((element) => {
      // Content starts visible. Only off-screen elements get an entrance.
      if (element.getBoundingClientRect().top > window.innerHeight) {
        element.classList.add("reveal-waiting");
        observer.observe(element);
      }
    });
    const showAll = () => {
      if (preference.matches) {
        observer.disconnect();
        elements.forEach((element) =>
          element.classList.remove("reveal-waiting"),
        );
      }
    };
    preference.addEventListener("change", showAll);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", showAll);
      elements.forEach((element) => element.classList.remove("reveal-waiting"));
    };
  }, []);
  return null;
}
