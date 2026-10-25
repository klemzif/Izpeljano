import { h, Fragment } from "preact"
/** @jsx h */
/** @jsxFrag Fragment */
import {
  QuartzComponent,
  QuartzComponentConstructor,
  QuartzComponentProps,
} from "@quartz-community/types"

interface Options {
  exclude: string[]
  wide: string[]
}

const defaultOptions: Options = { exclude: [], wide: [] }

const GLYPHS: Record<string, string> = {
  "Mehanika-in-termodinamika": "Δ",
  Matematika: "∂",
  "Osnove-elektrotehnike": "∂",
  Fizika: "ψ",
  Algebra: "∄",
  Default: "∫",
}

const hue = (s: string) => {
  let h = 0
  for (const c of s) h = (h * 31 + c.charCodeAt(0)) % 360
  return h
}

const FolderGrid: QuartzComponentConstructor<Options> = (userOpts?: Partial<Options>) => {
  const opts = { ...defaultOptions, ...userOpts }

  const Component: QuartzComponent = ({ fileData, allFiles }: QuartzComponentProps) => {
    if (fileData.slug !== "index" && fileData.slug !== "") return null

    const folders = new Map<string, any[]>()
    for (const f of allFiles) {
      const parts = (f.slug ?? "").split("/")
      if (
        parts.length < 2 ||
        opts.exclude.includes(parts[0]) ||
        parts[0].toLowerCase().includes("tags") ||
        parts[0].startsWith(".")
      )
        continue

      if (!folders.has(parts[0])) folders.set(parts[0], [])
      folders.get(parts[0])!.push(f)
    }

    const entries = [...folders.entries()].sort((a, b) => a[0].localeCompare(b[0]))
    const totalEntries = entries.length

    return (
      <div class="landing-wrapper">
        <header class="hero-section">
          <h1 class="hero-title">Izpeljano.</h1>
          <p class="hero-tagline">
            Pregled fizikalnih in matematičnih vsebin, razvrščenih po tematskih sklopih.
          </p>
        </header>

        <nav class="fg-grid" aria-label="Subjects">
          {entries.map(([name, files], i) => {
            const idx = files.find((f) => f.slug === `${name}/index`)
            const notes = files.filter((f) => f.slug !== `${name}/index`)

            const recent = [...notes]
              .sort((a, b) => {
                const dateA = a.dates?.modified?.getTime() ?? 0
                const dateB = b.dates?.modified?.getTime() ?? 0
                return dateB - dateA
              })
              .slice(0, 3)

            const title = idx?.frontmatter?.title ?? name
            const glyph = GLYPHS[name] || idx?.frontmatter?.icon || GLYPHS["Default"]
            const isWide = totalEntries <= 2 || opts.wide.includes(name)

            return (
              <a
                class={`fg-card${isWide ? " fg-wide" : ""}`}
                style={`--h:${hue(name)}`}
                href={`./${name}/`}
              >
                <span class="fg-glyph" aria-hidden="true">
                  {glyph}
                </span>
                <div class="fg-content">
                  <h2>{title}</h2>
                  <p class="fg-count">{notes.length} zapiskov</p>
                  <ul class="fg-recent">
                    {notes.length > 0 ? (
                      recent.map((n) => (
                        <li>
                          {n.frontmatter?.title ?? n.slug?.split("/").pop() ?? "Brez naslova"}
                        </li>
                      ))
                    ) : (
                      <li class="empty">Zapiski v pripravi...</li>
                    )}
                  </ul>
                </div>
              </a>
            )
          })}

          {totalEntries < 3 && (
            <div class="fg-card placeholder">
              <div class="fg-content">
                <h2>Prihajajoči predmeti...</h2>
                <p class="fg-count">V pripravi</p>
              </div>
            </div>
          )}
        </nav>

        <footer class="custom-landing-footer">
          <p>© {new Date().getFullYear()} Izpeljano • klemzif • CC BY-SA 4.0</p>
        </footer>
      </div>
    )
  }

  Component.css = `
.landing-wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 5rem 1.5rem;
}

.hero-section {
    margin-bottom: 5rem;
}

.hero-title {
    font-size: clamp(3rem, 8vw, 4.8rem);
    line-height: 1.05;
    font-weight: 800;
    letter-spacing: -0.05em;
    color: var(--dark);
    margin-bottom: 1.5rem;
}

.hero-tagline {
    font-size: 1.4rem;
    opacity: 0.6;
    max-width: 550px;
    line-height: 1.4;
}

.fg-grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(280px, auto);
}

.fg-card { 
  --bgc: oklch(28% .06 var(--h));
  --gc: oklch(75% .14 var(--h));
  --tc: oklch(98% .01 var(--h));
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2.5rem;
  border-radius: 32px;
  background: var(--bgc);
  color: var(--tc)!important;
  text-decoration: none!important;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

:root[saved-theme="light"] .fg-card {
    --bgc: oklch(94% .03 var(--h));
    --gc: oklch(55% .18 var(--h));
    --tc: oklch(15% .08 var(--h));
}

.fg-card.placeholder { 
  background: transparent;
  border: 2px dashed var(--lightgray);
  color: var(--gray)!important; 
  justify-content: center;
  align-items: center;
  text-align: center;
}

.fg-wide {
    grid-column: span 2;
}

.fg-glyph { 
  position: absolute;
  top: -0.05em;
  right: -0.05em;
  z-index: 1;
  font-size: 16rem;
  font-weight: 900;
  color: var(--gc);
  opacity: 0.3;
  pointer-events: none; 
  transition: all 0.5s ease;
  font-family: monospace;
}
.fg-card:hover {
    transform: scale(1.02);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
}

.fg-card:hover .fg-glyph {
    transform: rotate(-12deg) scale(1.1);
    opacity: 0.45;
}

.fg-content {
    z-index: 2;
    position: relative;
}

.fg-card h2 {
    margin: 0;
    font-size: 2.3rem;
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
}

.fg-count {
    margin: 0.4rem 0 1.5rem;
    font-size: 1.1rem;
    opacity: 0.7;
    font-weight: 500;
}

.fg-recent {
    list-style: none;
    margin: 0;
    padding: 1.2rem 0 0;
    border-top: 1px solid rgba(255,255,255,0.12);
}

:root[saved-theme="light"] .fg-recent {
    border-top-color: rgba(0,0,0,0.08);
}

.fg-recent li {
    font-size: 1rem;
    opacity: 0.85;
    margin-bottom: 0.4rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.fg-recent li.empty {
    opacity: 0.4;
    font-style: italic;
}

@media(max-width: 900px) { 
    .fg-grid {
        grid-template-columns: 1fr 1fr;
    }
    .fg-wide {
        grid-column: span 2;
    }
}

@media(max-width: 600px) { 
    .fg-grid {
        grid-template-columns: 1fr;
    } 
    .fg-wide { 
        grid-column: auto;
    }
}

.custom-landing-footer {
  margin-top: 6rem;
  padding-top: 2rem;
  border-top: 1px solid var(--lightgray);
  text-align: center;
  opacity: 0.5;
  font-size: 0.9rem;
}

.custom-landing-footer a {
  color: var(--dark);
  text-decoration: underline;
  font-weight: 600;
}

.custom-landing-footer a:hover {
  opacity: 0.8;
}
`

  return Component
}

export default FolderGrid
