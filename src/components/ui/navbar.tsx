import Link from "next/link"

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/capitl-icon.png"
            alt="CAPITL icon"
            style={{ height: 32, width: 32, objectFit: "contain" }}
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/capitl-logo.png"
            alt="CAPITL"
            style={{ height: 28, width: "auto", filter: "brightness(0)" }}
          />
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/marketplace"
            className="inline-flex h-9 items-center justify-center rounded-full bg-gray-900 px-5 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            See Sample Marketplace
          </Link>
          <Link
            href="/company/novapulse"
            className="inline-flex h-9 items-center justify-center rounded-full bg-gray-900 px-5 text-sm font-medium text-white transition-colors hover:bg-gray-700"
          >
            See sample page
          </Link>
          <Link
            href="/login"
            className="inline-flex h-9 items-center justify-center rounded-full border border-gray-200 bg-white px-5 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-50 hover:border-gray-300"
          >
            Log In
          </Link>
        </div>
      </div>
    </header>
  )
}
