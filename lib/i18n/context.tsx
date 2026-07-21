"use client"

import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import { translations, type Locale, type Translations } from "@/lib/i18n/translations"

interface I18nContextValue {
  locale: Locale
  t: Translations
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt-BR")

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
  }, [])

  const toggleLocale = useCallback(() => {
    setLocaleState((prev) => (prev === "pt-BR" ? "en-US" : "pt-BR"))
  }, [])

  return (
    <I18nContext.Provider value={{ locale, t: translations[locale], setLocale, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used inside <I18nProvider>")
  return ctx
}
