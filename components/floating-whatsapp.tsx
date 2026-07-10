"use client"

import { Icon } from "@iconify/react"
import { CONTACT } from "@/lib/data"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 300)
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (pathname === "/linkbio" || pathname === "/curriculo") return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          href={CONTACT.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Falar no WhatsApp"
          className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_8px_24px_rgba(37,99,235,0.4)] transition-colors hover:bg-blue-500 print:hidden"
        >
          <Icon icon="mdi:whatsapp" className="size-8" />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
