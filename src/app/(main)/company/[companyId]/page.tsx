"use client"

import { useState } from "react"
import { Play, FileText, TrendingUp, Users, DollarSign, ArrowRight, Building2, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// ── Mock company data ──────────────────────────────────────────────────────
const company = {
  name: "NovaPulse",
  tagline: "AI-powered energy optimization for commercial buildings",
  description:
    "NovaPulse uses machine learning to cut commercial energy costs by up to 40%. Our platform integrates with existing building systems and delivers instant savings with zero upfront infrastructure cost. We're live in 120+ buildings across North America and growing 30% month over month.",
  sharePrice: 10,
  raiseGoal: 500_000,
  raised: 213_500,
  investors: 248,
  minInvestment: 50,
  equity: 15,
}

// ── Chart data per period ──────────────────────────────────────────────────
type Period = "week" | "month" | "year"

const charts: Record<Period, { labels: string[]; xs: number[]; line: string; area: string }> = {
  week: {
    labels: ["Apr 9", "Apr 10", "Apr 11", "Apr 12", "Apr 13", "Apr 14", "Apr 15"],
    xs: [40, 115, 190, 265, 340, 415, 490],
    line: "M 40 110 L 115 85 L 190 98 L 265 68 L 340 82 L 415 48 L 490 32",
    area: "M 40 130 L 40 110 L 115 85 L 190 98 L 265 68 L 340 82 L 415 48 L 490 32 L 490 130 Z",
  },
  month: {
    // April 2026 — today is Apr 15 (start of week 3). Line stops at today.
    labels: ["Apr 1-7", "Apr 8-14", "Apr 15-21", "Apr 22-28"],
    xs: [40, 190, 340, 490],
    line: "M 40 115 L 190 82 L 340 65",
    area: "M 40 130 L 40 115 L 190 82 L 340 65 L 340 130 Z",
  },
  year: {
    // Today is in April — line stops at Apr's x position
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    xs: [40, 81, 122, 163, 204, 245, 286, 327, 368, 409, 450, 490],
    line: "M 40 124 L 81 108 L 122 116 L 163 82",
    area: "M 40 130 L 40 124 L 81 108 L 122 116 L 163 82 L 163 130 Z",
  },
}

const slides = [
  { label: "Problem",    color: "from-blue-50 to-blue-100",      slide: 1 },
  { label: "Solution",   color: "from-violet-50 to-violet-100",  slide: 2 },
  { label: "Market",     color: "from-emerald-50 to-emerald-100", slide: 3 },
  { label: "Financials", color: "from-amber-50 to-amber-100",    slide: 4 },
  { label: "Team",       color: "from-rose-50 to-rose-100",      slide: 5 },
  { label: "Traction",   color: "from-cyan-50 to-cyan-100",      slide: 6 },
]

// ── Page ───────────────────────────────────────────────────────────────────
export default function CompanyPage() {
  const [period, setPeriod] = useState<Period>("month")
  const [amount, setAmount] = useState("500")
  const [showCheckout, setShowCheckout] = useState(false)
  const [deckOpen, setDeckOpen] = useState(false)
  const [previewSlide, setPreviewSlide] = useState(0)

  const numAmount = Math.max(company.minInvestment, parseFloat(amount) || 0)
  const shares = Math.floor(numAmount / company.sharePrice)
  const fee = numAmount * 0.02
  const total = numAmount + fee
  const fundedPct = Math.round((company.raised / company.raiseGoal) * 100)
  const chart = charts[period]

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 items-start">

          {/* ════════════════════════════════════════
              LEFT COLUMN
          ════════════════════════════════════════ */}
          <div className="space-y-6">

            {/* ── Company identity ── */}
            <div className="flex items-center gap-3">
              <div className="size-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                <Building2 className="size-7 text-blue-500" />
              </div>
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-medium text-foreground leading-tight">
                  {company.name}
                </h1>
                <p className="text-muted-foreground text-sm mt-0.5">{company.tagline}</p>
              </div>
            </div>

            <p className="text-foreground/75 text-sm leading-relaxed">
              {company.description}
            </p>

            {/* ── Founder Video + Pitch Deck ── */}
            <div className="grid grid-cols-1 md:grid-cols-[1.35fr_1fr] gap-4 items-stretch">
              {/* Video column */}
              <div className="flex flex-col">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Message From The Founder
                </h2>
                <div className="relative flex-1 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 aspect-video flex items-center justify-center group cursor-pointer shadow-sm ring-1 ring-foreground/10">
                  <div className="relative flex items-center justify-center">
                    <span
                      className="absolute size-20 rounded-full bg-white/10 animate-ping"
                      style={{ animationDuration: "2.5s" }}
                    />
                    <span
                      className="absolute size-14 rounded-full bg-white/15 animate-ping"
                      style={{ animationDuration: "2.5s", animationDelay: "0.5s" }}
                    />
                    <div className="relative z-10 size-14 rounded-full bg-white/90 group-hover:bg-white transition-colors duration-300 shadow-xl flex items-center justify-center">
                      <Play className="size-5 text-gray-900 fill-gray-900 ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent">
                    <p className="text-white/80 text-sm">Alex Chen, CEO &amp; Co-Founder · 3:42</p>
                  </div>
                </div>
              </div>

              {/* Pitch Deck column */}
              <div className="flex flex-col">
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
                  Pitch Deck
                </h2>
                <div className="flex flex-col flex-1 rounded-2xl border border-border bg-card p-4 shadow-sm ring-1 ring-foreground/10">
                  {/* Slide preview — fills available space */}
                  <div
                    className={cn(
                      "relative flex-1 min-h-0 rounded-xl bg-gradient-to-br flex flex-col items-center justify-center border border-border/60 transition-colors duration-300",
                      slides[previewSlide].color
                    )}
                  >
                    <span className="text-sm font-semibold text-foreground/80">
                      {slides[previewSlide].label}
                    </span>
                    <span className="text-[10px] text-muted-foreground mt-1">
                      Slide {slides[previewSlide].slide}
                    </span>
                  </div>

                  {/* Navigation + View Full at bottom */}
                  <div className="flex items-center justify-between mt-3 gap-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          setPreviewSlide((i) => (i - 1 + slides.length) % slides.length)
                        }
                        className="size-7 rounded-full flex items-center justify-center hover:bg-muted transition-colors text-muted-foreground"
                      >
                        <ChevronLeft className="size-4" />
                      </button>
                      <div className="flex gap-1.5">
                        {slides.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setPreviewSlide(i)}
                            className={cn(
                              "size-1.5 rounded-full transition-all",
                              i === previewSlide ? "bg-foreground w-4" : "bg-muted-foreground/30"
                            )}
                          />
                        ))}
                      </div>
                      <button
                        onClick={() => setPreviewSlide((i) => (i + 1) % slides.length)}
                        className="size-7 rounded-full flex items-center justify-center hover:bg-muted transition-colors text-muted-foreground"
                      >
                        <ChevronRight className="size-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => setDeckOpen(true)}
                      className="inline-flex items-center gap-1.5 h-7 px-3 rounded-full border border-border bg-background hover:bg-muted text-[11px] font-medium transition-colors"
                    >
                      <FileText className="size-3 text-muted-foreground" />
                      View PitchDeck
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Stat pills ── */}
            <div>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: "Raise Goal", value: "$500k",    Icon: DollarSign },
                  { label: "Raised",     value: "$213.5k",  Icon: TrendingUp },
                  { label: "Investors",  value: "248",      Icon: Users },
                ].map(({ label, value, Icon }) => (
                  <Card key={label} size="sm">
                    <CardContent className="py-3">
                      <Icon className="size-3.5 text-muted-foreground mb-1.5" />
                      <p className="text-xl font-semibold leading-none">{value}</p>
                      <p className="text-xs text-muted-foreground mt-1">{label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-muted-foreground font-medium">{fundedPct}% funded</span>
                  <span className="text-muted-foreground">
                    ${company.raised.toLocaleString()} of ${company.raiseGoal.toLocaleString()}
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <div
                    className="h-full bg-blue-500 rounded-full transition-all duration-700"
                    style={{ width: `${fundedPct}%` }}
                  />
                </div>
              </div>
            </div>

            {/* ── Earnings Chart ── */}
            <Card>
              <CardHeader className={cn("border-b flex flex-row items-center justify-between")}>
                <CardTitle className="text-base">Revenue</CardTitle>
                <div className="flex gap-1">
                  {(["week", "month", "year"] as Period[]).map((p) => (
                    <button
                      key={p}
                      onClick={() => setPeriod(p)}
                      className={cn(
                        "px-3 py-1 text-xs rounded-full font-medium capitalize transition-colors",
                        period === p
                          ? "bg-foreground text-background"
                          : "text-muted-foreground hover:bg-muted"
                      )}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="pt-4 pb-2">
                <svg viewBox="0 0 530 148" className="w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {[25, 55, 85, 115].map((y) => (
                    <line key={y} x1="40" y1={y} x2="495" y2={y} stroke="currentColor" strokeOpacity="0.07" strokeWidth="1" />
                  ))}
                  <path d={chart.area} fill="url(#rev_grad)" />
                  <path d={chart.line} stroke="#3B82F6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="miter" />
                  {chart.labels.map((label, i) => (
                    <text key={label} x={chart.xs[i]} y="145" textAnchor="middle" fontSize="9" fill="#94a3b8">
                      {label}
                    </text>
                  ))}
                  <defs>
                    <linearGradient id="rev_grad" x1="0" y1="0" x2="0" y2="130" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#3B82F6" stopOpacity="0.14" />
                      <stop offset="1" stopColor="#3B82F6" stopOpacity="0.01" />
                    </linearGradient>
                  </defs>
                </svg>
              </CardContent>
            </Card>

          </div>

          {/* ════════════════════════════════════════
              RIGHT COLUMN — sticky investment widget
          ════════════════════════════════════════ */}
          <div className="lg:sticky lg:top-24">
            <Card>
              <CardHeader className="border-b">
                <CardTitle className="text-base">Invest in {company.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Share price</span>
                  <span className="font-semibold">${company.sharePrice.toFixed(2)} / share</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Equity offered</span>
                  <span className="font-semibold">{company.equity}%</span>
                </div>

                <div>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-muted-foreground">{fundedPct}% funded</span>
                    <span className="text-muted-foreground">{company.investors} investors</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: `${fundedPct}%` }} />
                  </div>
                </div>

                <div className="h-px bg-border" />

                {!showCheckout && (
                  <>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground block mb-1.5">
                        Investment amount
                      </label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm select-none">$</span>
                        <input
                          type="number"
                          min={company.minInvestment}
                          step={10}
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                          className="w-full pl-7 pr-4 py-2.5 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-colors"
                        />
                      </div>
                      <p className="text-[11px] text-muted-foreground mt-1">Minimum ${company.minInvestment}</p>
                    </div>

                    <div className="rounded-lg bg-muted/50 p-3 space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">You receive</span>
                        <span className="font-semibold text-blue-600">{shares.toLocaleString()} shares</span>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Amount</span>
                        <span>${numAmount.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Platform fee (2%)</span>
                        <span>${fee.toFixed(2)}</span>
                      </div>
                      <div className="h-px bg-border" />
                      <div className="flex justify-between font-semibold">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </>
                )}

                {!showCheckout ? (
                  <div className="group/btn relative inline-flex w-full">
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
                    <button
                      onClick={() => setShowCheckout(true)}
                      className="relative z-10 w-full inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/50 bg-white/40 px-6 text-sm font-medium text-foreground backdrop-blur-2xl shadow-xl transition-all duration-300 hover:bg-white/55 hover:scale-[1.02] active:scale-95"
                    >
                      Invest Now
                      <ArrowRight className="size-4" />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-sm font-semibold">Complete your ${total.toFixed(2)} investment</p>
                    {[
                      { label: "Full name",     type: "text",  placeholder: "Jane Smith" },
                      { label: "Email address", type: "email", placeholder: "jane@example.com" },
                      { label: "Card number",   type: "text",  placeholder: "4242 4242 4242 4242" },
                    ].map(({ label, type, placeholder }) => (
                      <div key={label}>
                        <label className="text-xs font-medium text-muted-foreground block mb-1">{label}</label>
                        <input
                          type={type}
                          placeholder={placeholder}
                          className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-colors placeholder:text-muted-foreground/50"
                        />
                      </div>
                    ))}
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: "Expiry", placeholder: "MM / YY" },
                        { label: "CVC",    placeholder: "123" },
                      ].map(({ label, placeholder }) => (
                        <div key={label}>
                          <label className="text-xs font-medium text-muted-foreground block mb-1">{label}</label>
                          <input
                            type="text"
                            placeholder={placeholder}
                            className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-blue-500/30 focus:border-blue-500 transition-colors placeholder:text-muted-foreground/50"
                          />
                        </div>
                      ))}
                    </div>
                    <button className="w-full h-11 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 active:scale-95 transition-all shadow-md">
                      Confirm ${total.toFixed(2)} Investment
                    </button>
                    <button
                      onClick={() => setShowCheckout(false)}
                      className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors py-1"
                    >
                      ← Back
                    </button>
                  </div>
                )}

                <p className="text-[10px] text-muted-foreground text-center leading-relaxed">
                  By investing you agree to CAPITL&apos;s terms. Investments are not FDIC insured and may lose value.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>

      {/* ════════════════════════════════════════
          PITCH DECK MODAL
      ════════════════════════════════════════ */}
      {deckOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setDeckOpen(false)}
        >
          <div
            className="relative w-full max-w-2xl bg-card rounded-2xl shadow-2xl ring-1 ring-foreground/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <div>
                <h2 className="font-semibold text-base">{company.name} — Pitch Deck</h2>
                <p className="text-xs text-muted-foreground mt-0.5">12 slides</p>
              </div>
              <button
                onClick={() => setDeckOpen(false)}
                className="size-8 rounded-full flex items-center justify-center hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Slides grid */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-4">
                {slides.map(({ label, color, slide }) => (
                  <div
                    key={label}
                    className={cn(
                      "aspect-[4/3] rounded-xl bg-gradient-to-br flex flex-col items-center justify-end p-3 border border-border/60 cursor-pointer hover:shadow-md hover:scale-[1.02] transition-all duration-200",
                      color
                    )}
                  >
                    <span className="text-xs font-semibold text-foreground/70">{label}</span>
                    <span className="text-[10px] text-muted-foreground">{slide} / 12</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Modal footer */}
            <div className="flex items-center justify-end gap-2 px-6 py-4 border-t border-border bg-muted/30">
              <button
                onClick={() => setDeckOpen(false)}
                className="px-4 py-2 text-sm rounded-lg border border-border hover:bg-muted transition-colors"
              >
                Close
              </button>
              <button className="px-4 py-2 text-sm rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity font-medium">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
