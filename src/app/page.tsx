"use client"

import { useState, Suspense, lazy, useEffect } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Navbar } from "@/components/ui/navbar"

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

export default function Home() {
  const router = useRouter()
  const [selected, setSelected]     = useState<"raise" | "invest" | null>(null)
  const [textOut, setTextOut]       = useState(false)
  const [heroIn, setHeroIn]         = useState(false)
  const [navIn, setNavIn]           = useState(false)
  const [raiseHover, setRaiseHover] = useState(false)
  const [investHover, setInvestHover] = useState(false)

  // Prefetch raise page so navigation is instant
  useEffect(() => { router.prefetch("/raise") }, [router])

  const handleRaise = () => {
    if (selected) return
    setTextOut(true)
    setSelected("raise")
    setTimeout(() => { setHeroIn(true); setNavIn(true) }, 420)
    // Navigate once animation has fully settled — raise page is pre-fetched
    setTimeout(() => router.push("/raise"), 1400)
  }

  const expanding = selected === "raise"
  const collapsing = selected === "invest"

  return (
    <div className="h-screen relative bg-background overflow-hidden">

      {/* ── Navbar slides down when hero is visible ── */}
      <div
        style={{
          opacity: navIn ? 1 : 0,
          transform: navIn ? "translateY(0)" : "translateY(-12px)",
          transition: "opacity 0.5s ease, transform 0.5s ease",
          pointerEvents: navIn ? "all" : "none",
        }}
      >
        <Navbar />
      </div>

      {/* ── Outer layout shell ── */}
      <div
        className="absolute inset-0 flex flex-col"
        style={{
          paddingTop:    expanding ? 76  : 0,
          paddingRight:  16,
          paddingBottom: expanding ? 48  : 16,
          paddingLeft:   16,
          transition: "padding-top 0.75s cubic-bezier(0.4,0,0.2,1), padding-bottom 0.75s cubic-bezier(0.4,0,0.2,1)",
        }}
      >

        {/* ── Logo — collapses upward ── */}
        <div
          style={{
            flexShrink: 0,
            maxHeight: textOut ? 0 : 96,
            opacity: textOut ? 0 : 1,
            overflow: "hidden",
            transition: "max-height 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease",
          }}
        >
          <div className="flex justify-center items-center py-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/capitl-logo.png"
              alt="CAPITL"
              style={{ height: 48, width: "auto", filter: "brightness(0)" }}
            />
          </div>
        </div>

        {/* ── Box row ── */}
        <div
          className="flex min-h-0 overflow-hidden"
          style={{
            flex: 1,
            gap: expanding ? 0 : 16,
            transition: "gap 0.75s cubic-bezier(0.4,0,0.2,1)",
          }}
        >

          {/* ════════════════════════════════════
              RAISE BOX — becomes the hero
          ════════════════════════════════════ */}
          <div
            className="relative overflow-hidden bg-card min-w-0"
            style={{
              flex: expanding ? 1 : collapsing ? 0 : 1,
              cursor: expanding ? "default" : "pointer",
              border: "1px solid var(--border)",
              borderRadius: 40,
              transition: "flex 0.75s cubic-bezier(0.4,0,0.2,1)",
            }}
            onClick={handleRaise}
            onMouseEnter={() => setRaiseHover(true)}
            onMouseLeave={() => setRaiseHover(false)}
          >
            {/* Shader — single instance, always running */}
            <Suspense fallback={<div className="absolute inset-0 bg-muted/20" />}>
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  opacity: raiseHover && !selected ? 0.35 : 0.55,
                  transition: "opacity 0.3s ease",
                  maskImage:
                    "radial-gradient(ellipse 55% 45% at 50% 50%, transparent 30%, black 75%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 55% 45% at 50% 50%, transparent 30%, black 75%)",
                }}
              >
                <Dithering
                  colorBack="#00000000"
                  colorFront="#3B82F6"
                  shape="warp"
                  type="4x4"
                  speed={(raiseHover || heroIn) ? 0.6 : 0.2}
                  className="size-full"
                  minPixelRatio={1}
                />
              </div>
            </Suspense>

            {/* ── Split card text (fades out) ── */}
            <div
              className="absolute inset-0 z-10 flex items-center justify-center"
              style={{
                opacity: textOut ? 0 : 1,
                transform: textOut ? "translateY(10px)" : "translateY(0)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
                pointerEvents: textOut ? "none" : "all",
              }}
            >
              <div className="flex flex-col items-center text-center px-10 select-none gap-4">
                <span
                  className="font-serif font-medium text-foreground leading-tight"
                  style={{ fontSize: "clamp(2rem, 4.5vw, 5rem)" }}
                >
                  I want to raise
                </span>
                <Image
                  src="/capitl-logo.png"
                  alt="Capitl"
                  width={320}
                  height={96}
                  className="brightness-0 w-auto"
                  style={{ height: "clamp(2.5rem, 6vw, 6rem)" }}
                />
              </div>
            </div>

            {/* ── Hero content (fades in) ── */}
            <div
              className="absolute inset-0 z-10 flex items-center justify-center"
              style={{
                opacity: heroIn ? 1 : 0,
                transform: heroIn ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 0.65s ease, transform 0.65s ease",
                pointerEvents: heroIn ? "all" : "none",
              }}
            >
              <div className="relative px-6 w-full max-w-6xl mx-auto text-center flex flex-col items-center">
                <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-8 leading-[1.05]">
                  Raising Capital <br />
                  <span className="text-foreground/80">Without Being Public</span>
                </h2>

                <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mb-12 leading-relaxed">
                  As a founder you always had to rely on VC&apos;s, or Private Investors to raise money
                  for your project. What if you had the power to decide how much you are raising, how
                  much % you want to give, and you can have your audience and network become your
                  investors.{" "}
                  <span className="whitespace-nowrap">
                    That is what{" "}
                    <Image
                      src="/capitl-logo.png"
                      alt="Capitl"
                      width={60}
                      height={20}
                      className="inline-block w-auto brightness-0 opacity-60"
                      style={{ height: "1.2em", verticalAlign: "middle", marginBottom: "0.15em" }}
                    />{" "}
                    does
                  </span>
                </p>

                <button className="group relative inline-flex h-14 items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-12 text-base font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95 hover:ring-4 hover:ring-primary/20">
                  <span className="relative z-10">Start Raising</span>
                  <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>

          {/* ════════════════════════════════════
              INVEST BOX
          ════════════════════════════════════ */}
          <div
            className="relative overflow-hidden rounded-[40px] bg-card min-w-0"
            style={{
              flex: collapsing ? 1 : expanding ? 0 : 1,
              cursor: "pointer",
              border: "1px solid var(--border)",
              opacity: expanding ? 0 : 1,
              transition: "flex 0.75s cubic-bezier(0.4,0,0.2,1), opacity 0.3s ease",
            }}
            onMouseEnter={() => setInvestHover(true)}
            onMouseLeave={() => setInvestHover(false)}
          >
            <Suspense fallback={<div className="absolute inset-0 bg-muted/20" />}>
              <div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                  opacity: investHover ? 0.35 : 0.55,
                  transition: "opacity 0.3s ease",
                  maskImage:
                    "radial-gradient(ellipse 60% 55% at 50% 50%, transparent 25%, black 72%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 60% 55% at 50% 50%, transparent 25%, black 72%)",
                }}
              >
                <Dithering
                  colorBack="#00000000"
                  colorFront="#22C55E"
                  shape="warp"
                  type="4x4"
                  speed={investHover ? 0.6 : 0.2}
                  className="size-full"
                  minPixelRatio={1}
                />
              </div>
            </Suspense>

            <div
              className="absolute inset-0 z-10 flex items-center justify-center"
              style={{
                opacity: textOut ? 0 : 1,
                transform: textOut ? "translateY(10px)" : "translateY(0)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
              }}
            >
              <span
                className="font-serif font-medium text-foreground leading-tight text-center px-10 select-none"
                style={{ fontSize: "clamp(2rem, 4.5vw, 5rem)" }}
              >
                I want to Invest<br />into startups
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
