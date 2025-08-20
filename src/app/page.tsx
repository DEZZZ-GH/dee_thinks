// app/page.tsx
// Single-page MVP for your self-mastery ebook (purple theme, minimal + sharp)

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-widest text-neutral-400">Ebook</p>
            {/* Keep title placeholder for now (you said we’ll lock titles later) */}
            <h1 className="mt-3 text-4xl font-semibold md:text-6xl">
              [Your Ebook Title]
            </h1>
            <p className="mt-4 max-w-xl text-neutral-300">
              Not therapy—tactics. Break the loops, own your mind, run your life.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="https://gumroad.com/l/PRODUCT_ID" /* TODO: replace with your real link */
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-violet-600 px-5 py-3 font-medium hover:bg-violet-500 transition focus:outline-none focus:ring-2 focus:ring-violet-500/60"
              >
                Get the ebook
              </a>
              <a
                href="#learn"
                className="rounded-xl border border-neutral-800 px-5 py-3 hover:border-neutral-600 transition focus:outline-none focus:ring-2 focus:ring-neutral-600/40"
              >
                What you’ll learn
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-3">
              <img
                src="/cover.png"
                alt="Ebook cover"
                className="w-full max-w-sm mx-auto rounded-xl shadow-lg"
              />
            </div>
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-violet-600/20 blur-2xl"
            />
          </div>
        </div>
      </section>

      {/* WHO IT’S FOR */}
      <section
  id="who"
  className="mx-auto max-w-6xl px-6 py-20 border-t border-neutral-900 text-center"
>
  <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block">
    Who it’s for
    <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-violet-600"></div>
  </h2>
  <p className="mt-4 max-w-2xl mx-auto text-neutral-400">
    This book is built for people ready to confront the chaos and take control.
  </p>
  <ul className="mt-12 grid gap-8 text-neutral-300 md:grid-cols-2 lg:grid-cols-3">


          <Li icon={<IconBrain />}>
            People who <b className="text-neutral-100 font-medium">feel everything too deeply</b> and want control—not numbness.
          </Li>
          <Li icon={<IconLoop />}>
            Overthinkers with <b className="text-neutral-100 font-medium">high standards</b> stuck in loops.
          </Li>
          <Li icon={<IconBolt />}>
            Builders/students/creators juggling <b className="text-neutral-100 font-medium">school, side projects, or work</b>.
          </Li>
          <Li icon={<IconGears />}>
            Those who want <b className="text-neutral-100 font-medium">protocols, not pep talks</b>—clear steps, daily reps.
          </Li>
          <Li icon={<IconNoise />}>
            Anyone ready to <b className="text-neutral-100 font-medium">cut dopamine noise</b> and rebuild discipline.
          </Li>
          <Li icon={<IconCheck />}>
            Readers who prefer <b className="text-neutral-100 font-medium">direct, practical, no-BS</b> guidance.
          </Li>
        </ul>
      </section>

      {/* WHAT YOU’LL LEARN (5 clusters) */}
      <section
  id="learn"
  className="mx-auto max-w-6xl px-6 py-20 border-t border-neutral-900 text-center"
>
  <h2 className="text-3xl md:text-4xl font-bold tracking-tight inline-block">
    What you’ll learn
    <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-violet-600"></div>
  </h2>
  <p className="mt-4 max-w-2xl mx-auto text-neutral-400">
    Core lessons distilled from the book, grouped into 5 powerful themes.
  </p>
  <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <Card
            icon={<IconMind />}
            title="Mind & Subconscious"
            bullets={[
              "Rewrite limiting beliefs.",
              "Run your mind, don’t be run by it.",
              "Handle the Resistance Phase."
            ]}
          />
          <Card
            icon={<IconMoon />}
            title="Dreams & Identity"
            bullets={[
              "Decode dreams (real, not Pinterest).",
              "Blend into your higher self.",
              "Clarity > control > execution."
            ]}
          />
          <Card
            icon={<IconHeart />}
            title="Emotions & Triggers"
            bullets={[
              "Biology & chemistry you can hack.",
              "Stop reliving old pain.",
              "Weapons for emotional control."
            ]}
          />
          <Card
            icon={<IconTrap />}
            title="Modern Traps"
            bullets={[
              "Escape comparison + perfection theater.",
              "Kill ‘I’m bored’ in a world of tools.",
              "Silence as power."
            ]}
          />
          <Card
            icon={<IconClock />}
            title="Power & Time"
            bullets={[
              "Money mindset without clichés.",
              "Time as non-negotiable.",
              "Use darkness without glorifying pain."
            ]}
          />
        </div>
      </section>

      {/* 3 BENEFITS */}
      <section className="mx-auto max-w-6xl px-6 py-14 border-t border-neutral-900">
        <h2 className="text-2xl md:text-3xl font-semibold">What you get (in outcomes)</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Benefit
            icon={<IconEye />}
            title="Clarity"
            text="See through lies & traps. Name the loop. Break it."
          />
          <Benefit
            icon={<IconControl />}
            title="Control"
            text="Protocols over moods. Emotions on your terms."
          />
          <Benefit
            icon={<IconCrown />}
            title="Dominance"
            text="Identity strong enough to execute, daily."
          />
        </div>
      </section>

      {/* SAMPLE (optional; safe even if cover.jpg duplicates) */}
      <section className="mx-auto max-w-6xl px-6 py-14 border-t border-neutral-900">
        <h2 className="text-2xl md:text-3xl font-semibold">Inside the book</h2>
        <p className="mt-3 text-neutral-300">Raw. Annotated. No recycled self-help.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Shot src="/cover.jpg" alt="Sample spread 1" />
          <Shot src="/cover.jpg" alt="Sample spread 2" />
          <Shot src="/cover.jpg" alt="Sample spread 3" />
        </div>
      </section>

      {/* FAQ (native disclosure for a11y) */}
      <section className="mx-auto max-w-6xl px-6 py-14 border-t border-neutral-900">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
        <div className="mt-6 space-y-3">
          <Faq q="Is this therapy?" a="No. It’s tactics. Clear systems and confrontations you can apply daily." />
          <Faq q="Can I use this while studying/working?" a="Yes. It’s built for overloaded people balancing school, work, and life." />
          <Faq q="How is this different from typical self-help?" a="No fake positivity. No fluff. Raw, direct, practical steps that compound." />
          <Faq q="How long is the book?" a="Long enough to change how you move; short enough to finish and apply." />
        </div>
      </section>

      {/* COMING SOON */}
      <section className="mx-auto max-w-6xl px-6 py-14 border-t border-neutral-900">
        <h2 className="text-2xl md:text-3xl font-semibold">Coming soon</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Coming title="Blog" />
          <Coming title="Courses" />
          <Coming title="Guides" />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-neutral-900">
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/50 p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Stop surviving. Start mastering.
          </h3>
          <p className="mt-3 text-neutral-300">
            Read it, use it, and you won’t move the same again.
          </p>
          <a
            href="https://gumroad.com/l/PRODUCT_ID" /* TODO: replace */
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-xl bg-violet-600 px-6 py-3 font-medium hover:bg-violet-500 transition focus:outline-none focus:ring-2 focus:ring-violet-500/60"
          >
            Get the ebook
          </a>
        </div>
        <p className="mt-6 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Dee — All rights reserved.
        </p>
      </section>
    </main>
  );
}

/* ---------- Small UI building blocks (pure Tailwind, no deps) ---------- */

function Li({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 rounded-xl border border-neutral-900 bg-neutral-900/40 p-4">
      <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600/15 text-violet-400">
        {icon}
      </span>
      <span>{children}</span>
    </li>
  );
}

function Card({
  icon,
  title,
  bullets,
}: {
  icon: React.ReactNode;
  title: string;
  bullets: string[];
}) {
  return (
    <div className="h-full rounded-2xl border border-neutral-900 bg-neutral-900/40 p-5">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600/15 text-violet-400">
          {icon}
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <ul className="mt-4 space-y-2 text-neutral-300">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-violet-500/80"></span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Benefit({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-neutral-900 bg-neutral-900/40 p-6">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/15 text-violet-400">
          {icon}
        </span>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="mt-3 text-neutral-300">{text}</p>
    </div>
  );
}

function Shot({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-2xl border border-neutral-900 bg-neutral-900/40 p-3">
      <div className="rounded-xl border border-neutral-800 bg-neutral-950 p-2">
        <img src={src} alt={alt} className="mx-auto w-full rounded-lg" />
      </div>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-2xl border border-neutral-900 bg-neutral-900/40 p-4 open:bg-neutral-900/60">
      <summary className="cursor-pointer list-none text-base font-medium [&::-webkit-details-marker]:hidden">
        <div className="flex items-center justify-between gap-4">
          <span>{q}</span>
          <span aria-hidden className="text-neutral-500">+</span>
        </div>
      </summary>
      <p className="mt-3 text-neutral-300">{a}</p>
    </details>
  );
}

/* ---------- Minimal inline icons (no packages) ---------- */

function IconBrain() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M9 2a3 3 0 0 0-3 3v1a3 3 0 0 0-2 2.82V10a3 3 0 0 0 2 2.83V14a3 3 0 0 0 3 3h1v-1a3 3 0 0 1 3-3h1V9a3 3 0 0 0-3-3H9V5a3 3 0 0 0-3-3h3Z" />
      <path d="M15 2a3 3 0 0 1 3 3v1a3 3 0 0 1 2 2.82V10a3 3 0 0 1-2 2.83V14a3 3 0 0 1-3 3h-1v-1a3 3 0 0 0-3-3h-1V9a3 3 0 0 1 3-3h1V5a3 3 0 0 1 3-3h-3Z" />
    </svg>
  );
}

function IconLoop() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M17 1v4H7a6 6 0 0 0 0 12h2v-2H7a4 4 0 0 1 0-8h10v4l5-5-5-5ZM7 19v4h10a6 6 0 0 0 0-12h-2v2h2a4 4 0 0 1 0 8H7v-4l-5 5 5 5Z" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M11 21h-1l1-7H7l6-11h1l-1 7h4l-6 11Z" />
    </svg>
  );
}

function IconGears() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 8a4 4 0 1 0 .001 8.001A4 4 0 0 0 12 8Zm9 4a1 1 0 0 0-.76-.97l-1.89-.5a7.97 7.97 0 0 0-.64-1.55l1.12-1.6a1 1 0 0 0-.1-1.28l-1.42-1.42a1 1 0 0 0-1.28-.1l-1.6 1.12a7.97 7.97 0 0 0-1.55-.64l-.5-1.89A1 1 0 0 0 12 3h-2a1 1 0 0 0-.97.76l-.5 1.89c-.54.16-1.06.38-1.55.64L5.38 5.17a1 1 0 0 0-1.28.1L2.68 6.69a1 1 0 0 0-.1 1.28l1.12 1.6c-.26.49-.48 1.01-.64 1.55l-1.89.5A1 1 0 0 0 1 12v2c0 .46.31.86.76.97l1.89.5c.16.54.38 1.06.64 1.55l-1.12 1.6a1 1 0 0 0 .1 1.28l1.42 1.42c.36.36.92.4 1.28.1l1.6-1.12c.49.26 1.01.48 1.55.64l.5 1.89c.11.45.51.76.97.76h2c.46 0 .86-.31.97-.76l.5-1.89c.54-.16 1.06-.38 1.55-.64l1.6 1.12c.36.3.92.26 1.28-.1l1.42-1.42a1 1 0 0 0 .1-1.28l-1.12-1.6c.26-.49.48-1.01.64-1.55l1.89-.5c.45-.11.76-.51.76-.97v-2Z" />
    </svg>
  );
}

function IconNoise() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M3 4h18v2H3V4Zm0 7h18v2H3v-2Zm0 7h18v2H3v-2Z" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17Z" />
    </svg>
  );
}

function IconMind() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2a8 8 0 0 0-8 8v8h5v4h6v-4h3a2 2 0 0 0 2-2V9a7 7 0 0 0-7-7h-1Z" />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 21s-6.716-4.855-9.193-7.332a5.5 5.5 0 0 1 7.778-7.778L12 7.305l1.415-1.415a5.5 5.5 0 0 1 7.778 7.778C18.716 16.145 12 21 12 21Z" />
    </svg>
  );
}

function IconTrap() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 2 1 21h22L12 2Zm0 4.8 7.2 12.4H4.8L12 6.8Z" />
    </svg>
  );
}

function IconClock() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22Zm1 11h6v2h-8V6h2v6Z" />
    </svg>
  );
}

function IconEye() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M12 5C7 5 2.73 8.11 1 12c1.73 3.89 6 7 11 7s9.27-3.11 11-7c-1.73-3.89-6-7-11-7Zm0 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10Z" />
    </svg>
  );
}

function IconControl() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M4 6h16v2H4zM4 11h10v2H4zM4 16h6v2H4z" />
    </svg>
  );
}

function IconCrown() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M5 19h14v2H5v-2Zm14-9-4 3-3-6-3 6-4-3-2 9h18l-2-9Z" />
    </svg>
  );
}

function Coming({ title }: { title: string }) {
  return (
    <div className="rounded-2xl border border-neutral-900 bg-neutral-900/40 p-6 text-center">
      <div className="inline-flex rounded-full bg-neutral-800 px-3 py-1 text-xs text-neutral-300">
        Coming soon
      </div>
      <h3 className="mt-3 text-lg font-semibold text-neutral-200">{title}</h3>
      <p className="mt-2 text-sm text-neutral-400">Arriving after launch</p>
    </div>
  );
}
 
