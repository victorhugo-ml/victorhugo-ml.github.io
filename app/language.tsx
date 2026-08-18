"use client";

import { useEffect, useState } from "react";

export type Locale = "pt" | "en" | "es";

const languageTags: Record<Locale, string> = {
  pt: "pt-BR",
  en: "en",
  es: "es",
};

export function usePortfolioLanguage(titles: Record<Locale, string>) {
  const [locale, setLocale] = useState<Locale>("pt");

  useEffect(() => {
    const saved = window.localStorage.getItem("vh-portfolio-language");
    if (saved === "pt" || saved === "en" || saved === "es") {
      document.documentElement.lang = languageTags[saved];
      document.title = titles[saved];
      const timer = window.setTimeout(() => setLocale(saved), 0);
      return () => window.clearTimeout(timer);
    }
  }, [titles]);

  function changeLanguage(nextLocale: Locale) {
    setLocale(nextLocale);
    document.documentElement.lang = languageTags[nextLocale];
    document.title = titles[nextLocale];
    window.localStorage.setItem("vh-portfolio-language", nextLocale);
  }

  return { locale, changeLanguage };
}

export function LanguageSwitcher({
  locale,
  onChange,
}: {
  locale: Locale;
  onChange: (locale: Locale) => void;
}) {
  return (
    <div className="language-switcher" aria-label="Language selector">
      {(["pt", "en", "es"] as Locale[]).map((language) => (
        <button
          key={language}
          type="button"
          aria-pressed={locale === language}
          onClick={() => onChange(language)}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
