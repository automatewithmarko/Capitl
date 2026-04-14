import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="bg-background py-16 md:py-28">
      <div className="mx-auto max-w-3xl lg:max-w-5xl px-6">

        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed">
            You decide how much you want to raise and you decide how much equity you want to give to the people who invest. You get your own landing page where people can come and invest into your product. The money comes directly to you, and your investors are paid out monthly. It all happens automatically through{" "}
            <Image
              src="/capitl-logo.png"
              alt="Capitl"
              width={60}
              height={20}
              className="inline-block w-auto brightness-0 opacity-60"
              style={{ height: "1.1em", verticalAlign: "middle", marginBottom: "0.1em" }}
            />
          </p>
        </div>

        <div className="relative">
          <div className="relative z-10 grid grid-cols-6 gap-3">

            {/* Card 1 — You Set The Terms */}
            <Card className="relative col-span-full flex overflow-hidden lg:col-span-2">
              <CardContent className="relative m-auto size-fit pt-6 pb-8 text-center">
                <div className="relative flex h-24 w-56 items-center justify-center mx-auto">
                  <svg
                    className="text-muted absolute inset-0 size-full"
                    viewBox="0 0 254 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                      fill="currentColor"
                    />
                  </svg>
                  <div className="relative z-10 text-center">
                    <span className="block text-4xl font-semibold leading-none">$250k</span>
                    <span className="block text-2xl font-medium text-muted-foreground mt-1">for 50%</span>
                  </div>
                </div>
                <h3 className="mt-6 text-center text-2xl font-semibold">Your Terms</h3>
                <p className="mt-2 text-muted-foreground text-base max-w-[260px] mx-auto">
                  You decide how much you want to get and how much you want to give.
                </p>
              </CardContent>
            </Card>

            {/* Card 2 — Connect Stripe */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                  {/* Pulsing rings */}
                  <span className="absolute inline-flex size-24 rounded-full bg-[#635BFF]/20 animate-ping" style={{ animationDuration: "2s" }} />
                  <span className="absolute inline-flex size-16 rounded-full bg-[#635BFF]/15 animate-ping" style={{ animationDuration: "2s", animationDelay: "0.4s" }} />
                  {/* Logo */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/stripe-emblem.png"
                    alt="Stripe"
                    className="relative z-10 size-20 rounded-full object-cover"
                  />
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h3 className="text-2xl font-semibold">Connect Stripe</h3>
                  <p className="text-muted-foreground text-base max-w-[260px] mx-auto">
                    Connect your Stripe to share your earnings and receive investments effortlessly with full transparency.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 3 — Live Fundraising Progress */}
            <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2">
              <CardContent className="pt-6">
                <div className="px-2 lg:px-4">
                  <svg
                    className="w-full"
                    viewBox="0 0 386 123"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Area fill under the rising curve */}
                    <path
                      d="M3 123 L3 110 C15 113 28 108 45 105 C60 102 70 110 88 104 C105 98 112 88 130 84 C148 80 158 90 175 82 C192 74 198 65 216 58 C232 52 242 60 260 50 C276 41 284 30 305 24 C322 19 338 26 355 18 C367 13 376 11 383 9 L383 123 Z"
                      fill="url(#hiw_grad1)"
                    />
                    {/* Rising stroke line */}
                    <path
                      className="text-blue-500"
                      d="M3 110 C15 113 28 108 45 105 C60 102 70 110 88 104 C105 98 112 88 130 84 C148 80 158 90 175 82 C192 74 198 65 216 58 C232 52 242 60 260 50 C276 41 284 30 305 24 C322 19 338 26 355 18 C367 13 376 11 383 9"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <defs>
                      <linearGradient id="hiw_grad1" x1="3" y1="10" x2="3" y2="123" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#3B82F6" stopOpacity="0.18" />
                        <stop offset="1" stopColor="#3B82F6" stopOpacity="0.02" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="relative z-10 mt-6 space-y-2 text-center">
                  <h3 className="text-2xl font-semibold">Live Progress Dashboard</h3>
                  <p className="text-muted-foreground text-base max-w-[260px] mx-auto">
                    Watch investments roll in real-time. Track your raise, investor count, and momentum.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Card 4 — Share With Your Network */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border items-center justify-center before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                    <TrendingUp className="size-5" strokeWidth={1.2} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold">Share With Your Audience</h3>
                    <p className="text-muted-foreground text-base">
                      Generate your own custom landing page and share it with your network. Anyone can visit, see your raise, and purchase equity directly.
                    </p>
                  </div>
                </div>
                <div className="rounded-tl-(--radius) relative -mb-6 -mr-6 mt-6 h-fit border-l border-t p-6 sm:ml-6">
                  <div className="absolute left-3 top-2 flex gap-1">
                    <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10" />
                    <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10" />
                    <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10" />
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2 rounded-lg border bg-muted/30 px-3 py-2">
                      <div className="size-2 rounded-full bg-blue-500" />
                      <span className="text-xs font-mono text-muted-foreground truncate">capitl.app/raise/your-campaign</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {[
                        { label: "Investors", value: "248" },
                        { label: "Raised", value: "$182k" },
                        { label: "Days Left", value: "14" },
                      ].map((stat) => (
                        <div key={stat.label} className="rounded-lg border bg-muted/20 px-2 py-3">
                          <p className="text-sm font-semibold">{stat.value}</p>
                          <p className="text-[10px] text-muted-foreground">{stat.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Card 5 — Your Investors */}
            <Card className="relative col-span-full overflow-hidden lg:col-span-3">
              <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                  <div className="relative flex aspect-square size-12 rounded-full border items-center justify-center before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
                    <Users className="size-5" strokeWidth={1.2} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold">Your Network Becomes Investors</h3>
                    <p className="text-muted-foreground text-base">
                      Anyone can invest — no accreditation required. Build a cap table of people who genuinely believe in you.
                    </p>
                  </div>
                </div>
                <div className="before:bg-border relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px sm:-my-6 sm:-mr-6">
                  <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                    <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                      <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">Alex K. · $500</span>
                      <div className="ring-background size-7 ring-4 rounded-full overflow-hidden bg-blue-100 flex items-center justify-center">
                        <span className="text-xs font-medium text-blue-700">AK</span>
                      </div>
                    </div>
                    <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
                      <div className="ring-background size-8 ring-4 rounded-full overflow-hidden bg-violet-100 flex items-center justify-center">
                        <span className="text-xs font-medium text-violet-700">SR</span>
                      </div>
                      <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">Sara R. · $1,000</span>
                    </div>
                    <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                      <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">Jamie L. · $250</span>
                      <div className="ring-background size-7 ring-4 rounded-full overflow-hidden bg-emerald-100 flex items-center justify-center">
                        <span className="text-xs font-medium text-emerald-700">JL</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </section>
  )
}
