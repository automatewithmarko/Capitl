"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import {
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
  Sparkles,
  ArrowUpRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// ── Types ─────────────────────────────────────────────────────────────
type Company = {
  slug: string
  name: string
  tagline: string
  industry: string
  raised: number
  goal: number
  investors: number
  verified?: boolean
  logo: string
}

type SortOption = "most-funded" | "newest" | "highest-goal"

// ── Mock data (real companies used as placeholders) ───────────────────
const companies: Company[] = [
  { slug: "anthropic", name: "Anthropic", tagline: "AI research and products that put safety at the frontier",
    industry: "AI", raised: 8_200_000, goal: 10_000_000, investors: 1289, verified: true, logo: "/logos/anthropic.png" },
  { slug: "figure", name: "Figure", tagline: "General-purpose humanoid robots for the real world",
    industry: "Robotics", raised: 675_000, goal: 1_500_000, investors: 341, verified: true, logo: "/logos/figure.png" },
  { slug: "impossible", name: "Impossible Foods", tagline: "Plant-based meat, indistinguishable from the real thing",
    industry: "Climate", raised: 2_100_000, goal: 4_000_000, investors: 1247, verified: true, logo: "/logos/impossible.png" },
  { slug: "oscar", name: "Oscar Health", tagline: "Tech-first health insurance that actually feels human",
    industry: "Health", raised: 890_000, goal: 2_000_000, investors: 612, verified: true, logo: "/logos/oscar.png" },
  { slug: "stripe", name: "Stripe", tagline: "Payments infrastructure for the internet",
    industry: "Fintech", raised: 5_400_000, goal: 8_000_000, investors: 2103, verified: true, logo: "/logos/stripe.png" },
  { slug: "bowery", name: "Bowery Farming", tagline: "Vertical farming, 100x more productive per acre of land",
    industry: "Agritech", raised: 340_000, goal: 600_000, investors: 289, verified: true, logo: "/logos/bowery.png" },
  { slug: "flexport", name: "Flexport", tagline: "Global logistics platform for modern freight and trade",
    industry: "Supply Chain", raised: 1_250_000, goal: 2_500_000, investors: 542, verified: true, logo: "/logos/flexport.png" },
  { slug: "notion", name: "Notion", tagline: "The connected workspace where better, faster work happens",
    industry: "Consumer", raised: 720_000, goal: 1_200_000, investors: 876, verified: true, logo: "/logos/notion.png" },
  { slug: "ginkgo", name: "Ginkgo Bioworks", tagline: "Programming cells to grow better products",
    industry: "Biotech", raised: 1_890_000, goal: 3_500_000, investors: 445, verified: true, logo: "/logos/ginkgo.png" },
]

const categories = ["All", "AI", "Climate", "Health", "Fintech", "Consumer", "Biotech", "Agritech", "Robotics", "Supply Chain"] as const

// ── Helpers ───────────────────────────────────────────────────────────
const fmtK = (n: number) =>
  n >= 1_000_000 ? `${(n / 1_000_000).toFixed(n % 1_000_000 === 0 ? 0 : 1)}M` : `${Math.round(n / 1000)}k`

// ── Page ──────────────────────────────────────────────────────────────
export default function MarketplacePage() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState<string>("All")
  const [sort, setSort] = useState<SortOption>("most-funded")

  const filtered = useMemo(() => {
    let list = companies
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(
        (c) => c.name.toLowerCase().includes(q) || c.tagline.toLowerCase().includes(q)
      )
    }
    if (category !== "All") {
      list = list.filter((c) => c.industry.toLowerCase().includes(category.toLowerCase()))
    }
    const sorted = [...list]
    switch (sort) {
      case "most-funded":  sorted.sort((a, b) => b.raised - a.raised); break
      case "highest-goal": sorted.sort((a, b) => b.goal - a.goal); break
      case "newest": /* preserve original order */ break
    }
    return sorted
  }, [search, category, sort])

  const gridCompanies = filtered

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10">

        {/* ════════════════════════════════════════
            HERO
        ════════════════════════════════════════ */}
        <section className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="font-serif text-4xl md:text-6xl font-medium tracking-tight text-foreground leading-[1.05]">
            Back the companies <br className="hidden md:block" />
            building what&apos;s next.
          </h1>
          <p className="text-muted-foreground text-base md:text-lg mt-5 leading-relaxed">
            Every listing on CAPITL is vetted, verified, and SEC-registered. Invest from as little as $50 and become a shareholder in the startups shaping tomorrow.
          </p>

          {/* Search bar */}
          <div className="mt-8 relative max-w-xl mx-auto">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search companies, industries, keywords…"
              className="w-full h-12 pl-12 pr-5 rounded-full border border-border bg-card text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Trust strip */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-6 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="size-3.5 text-blue-500" /> SEC regulated
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sparkles className="size-3.5 text-amber-500" /> 500+ vetted startups
            </span>
            <span className="inline-flex items-center gap-1.5">
              <TrendingUp className="size-3.5 text-emerald-500" /> $42M+ raised
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Users className="size-3.5 text-violet-500" /> 15,000+ investors
            </span>
          </div>
        </section>

        {/* ════════════════════════════════════════
            FILTER BAR
        ════════════════════════════════════════ */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          {/* Category chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 -mx-1 px-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "shrink-0 h-8 px-3.5 rounded-full text-xs font-semibold transition-colors",
                  category === cat
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-muted/70 hover:text-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Sort dropdown */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-xs text-muted-foreground">Sort by</span>
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortOption)}
                className="h-8 pl-3.5 pr-8 rounded-full bg-muted text-xs font-semibold text-foreground border-none focus:outline-none focus:ring-2 focus:ring-blue-500/30 appearance-none cursor-pointer"
              >
                <option value="most-funded">Most Funded</option>
                <option value="newest">Newest</option>
                <option value="highest-goal">Highest Goal</option>
              </select>
              <svg
                className="absolute right-2.5 top-1/2 -translate-y-1/2 size-3 text-muted-foreground pointer-events-none"
                viewBox="0 0 12 12" fill="none"
              >
                <path d="M3 5 L6 8 L9 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════════
            GRID
        ════════════════════════════════════════ */}
        {gridCompanies.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-muted-foreground">No companies match your filters.</p>
            <button
              onClick={() => { setSearch(""); setCategory("All") }}
              className="mt-3 text-sm font-semibold text-blue-600 hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gridCompanies.map((c) => {
              const pct = Math.round((c.raised / c.goal) * 100)
              return (
                <Link key={c.slug} href="/company/novapulse" className="group block">
                  <Card className="h-full transition-all duration-200 group-hover:ring-foreground/20 group-hover:-translate-y-0.5">
                    <CardContent className="pt-4 pb-5 space-y-3">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="size-10 rounded-xl border border-border bg-white flex items-center justify-center shrink-0 overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={c.logo} alt={`${c.name} logo`} className="size-8 object-contain" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-1.5">
                              <h3 className="font-serif font-semibold text-base leading-tight truncate">{c.name}</h3>
                              {c.verified && <ShieldCheck className="size-3.5 text-blue-500 shrink-0" />}
                            </div>
                            <span className="text-[11px] text-muted-foreground">{c.industry}</span>
                          </div>
                        </div>
                        <ArrowUpRight className="size-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                      </div>

                      {/* Tagline */}
                      <p className="text-sm text-muted-foreground leading-snug line-clamp-2 min-h-[2.5rem]">
                        {c.tagline}
                      </p>

                      {/* Progress */}
                      <div>
                        <div className="flex justify-between text-xs mb-1.5">
                          <span className="font-semibold text-foreground">{pct}% funded</span>
                          <span className="text-muted-foreground inline-flex items-center gap-1">
                            <Users className="size-3" /> {c.investors}
                          </span>
                        </div>
                        <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>

                      {/* Raised / Goal */}
                      <div className="flex items-baseline justify-between pt-1 border-t border-border">
                        <div className="pt-2">
                          <span className="text-lg font-semibold">${fmtK(c.raised)}</span>
                          <span className="text-xs text-muted-foreground"> / ${fmtK(c.goal)}</span>
                        </div>
                        <span className="text-[11px] text-muted-foreground pt-2">raised</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        )}

        {/* Footer spacing */}
        <div className="h-16" />
      </div>
    </div>
  )
}
