import { ArrowRight } from "lucide-react"
import { useState, Suspense, lazy } from "react"
import Image from "next/image"

const Dithering = lazy(() =>
  import("@paper-design/shaders-react").then((mod) => ({ default: mod.Dithering }))
)

export function CTASection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="pt-3 pb-12 w-full flex justify-center items-center px-4 md:px-6 lg:px-8">
      <div
        className="w-full max-w-[1600px] relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden rounded-[48px] border border-border bg-card shadow-sm min-h-[700px] md:min-h-[860px] flex flex-col items-center justify-center duration-500">
          <Suspense fallback={<div className="absolute inset-0 bg-muted/20" />}>
            <div
              className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-40"
              style={{
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
                speed={isHovered ? 0.6 : 0.2}
                className="size-full"
                minPixelRatio={1}
              />
            </div>
          </Suspense>

          <div className="relative z-10 px-6 w-full max-w-6xl mx-auto text-center flex flex-col items-center">
            <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-8 leading-[1.05] whitespace-nowrap">
              Raising Capital <br />
              <span className="text-foreground/80">Without Being Public</span>
            </h2>

            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mb-12 leading-relaxed">
              As a founder you always had to rely on VC&apos;s, or Private Investors to raise money for your
              project. What if you had the power to decide how much you are raising, how much % you want
              to give, and you can have your audience and network become your investors.{" "}
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

            <div className="group/btn relative inline-flex">
              {/* Rotating blue border glow — visible on hover */}
              <div className="absolute -inset-[1.5px] rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
                <div
                  className="absolute animate-spin"
                  style={{
                    inset: "-100%",
                    animationDuration: "3s",
                    background: "conic-gradient(from 0deg, transparent 0%, transparent 60%, #60A5FA 78%, #3B82F6 90%, #60A5FA 100%)",
                  }}
                />
              </div>
              <button className="group relative z-10 inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/50 bg-white/40 px-12 text-base font-medium text-foreground backdrop-blur-2xl shadow-xl transition-all duration-300 hover:bg-white/55 hover:border-white/70 hover:scale-105 active:scale-95">
                <span className="relative z-10">Start Raising</span>
                <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
