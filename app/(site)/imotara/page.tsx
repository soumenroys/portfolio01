// /app/(site)/imotara/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Imotara — Philanthropic Initiative | Soumen Roy",
  description:
    "Imotara is a privacy-first AI emotional wellness companion founded by Soumen Roy — a philanthropic initiative to improve mental health and help younger generations build healthier relationships with technology.",
  openGraph: {
    title: "Imotara — Philanthropic Initiative | Soumen Roy",
    description:
      "A privacy-first emotional wellness companion built to counter AI over-reliance and support mental health — especially for Gen Z and Gen Alpha.",
    url: "https://soumenroy.com/imotara",
    type: "website",
  },
};

const designPrinciples = [
  {
    heading: "Calm technology, not addictive technology",
    body: "Every interaction is designed to reduce anxiety, not amplify it. No algorithmic feeds, no engagement streaks, no dopamine loops — just a quiet space for reflection and emotional clarity.",
  },
  {
    heading: "Data sovereignty as a human right",
    body: "User data lives locally by default. Cloud sync requires explicit opt-in. Every record can be exported or deleted on demand. Technology that profits from emotional data is technology misaligned with human dignity.",
  },
  {
    heading: "AI as a scaffold, not a crutch",
    body: "Imotara's AI guides users toward self-awareness, not dependency. The goal is to build emotional vocabulary and resilience — so the tool becomes less necessary over time, not more.",
  },
  {
    heading: "Radical accessibility across languages and borders",
    body: "Mental health support should not be a privilege of English speakers. Imotara supports 22 languages — including 9 Indian regional languages — with native-script emotion detection and crisis support.",
  },
  {
    heading: "Safety-first architecture for vulnerable users",
    body: "The platform includes crisis detection, escalation paths, and content moderation designed specifically for younger users who may be experiencing distress and lack the language to ask for help.",
  },
  {
    heading: "Offline resilience for underserved communities",
    body: "Core capabilities work without internet connectivity. Local AI fallbacks ensure that a child in a low-connectivity area still has access to emotional support — without their data ever leaving their device.",
  },
];

const platformPillars = [
  {
    label: "Web Application",
    detail: "Next.js · Supabase · OpenAI + Gemini fallback · Razorpay (donations)",
  },
  {
    label: "Mobile (iOS & Android)",
    detail: "React Native · Expo · Offline-first · Voice input & TTS · Push notifications",
  },
  {
    label: "AI Orchestration",
    detail: "Multilingual emotion analysis · Companion memory · Crisis detection · Response personalisation",
  },
  {
    label: "Privacy Architecture",
    detail: "Local-first storage · Consent-gated cloud sync · Full data export & deletion · No ad targeting",
  },
];

const languages = [
  "Bengali", "Hindi", "Tamil", "Telugu", "Kannada",
  "Malayalam", "Gujarati", "Punjabi", "Odia", "Marathi",
  "Arabic", "Chinese", "Japanese", "Spanish", "French",
  "German", "Portuguese", "Russian", "Indonesian", "Hebrew",
  "English", "+ more",
];

export default function ImotaraPage() {
  return (
    <div className="max-w-6xl mx-auto py-12 px-6">

      {/* ── Header ─────────────────────────────────────────────────── */}
      <header className="mb-10">
        <div className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
          Philanthropic Initiative · Founded by Soumen Roy
        </div>
        <h1 className="text-3xl font-bold text-accent">Imotara</h1>
        <p className="mt-1 text-lg text-slate-400 font-medium">
          An Emotion-Aware Companion for Human Flourishing
        </p>
        <p className="mt-4 text-slate-300 max-w-3xl leading-relaxed">
          Imotara is a privacy-first AI emotional wellness companion — a philanthropic initiative I
          founded to address a quiet but growing crisis: the erosion of genuine emotional intelligence
          and authentic human connection in an age of algorithmic dependency, particularly among
          children and younger generations.
        </p>
      </header>

      {/* ── The Challenge ───────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-accent">The Challenge We Must Address</h2>
        <p className="mt-3 text-slate-300 leading-relaxed">
          We have built remarkable AI systems — and in doing so, created a generation that increasingly
          outsources its inner life to them. Gen Z and Gen Alpha have grown up entirely surrounded by
          algorithmic content, AI assistants, and social platforms engineered for maximum engagement.
          The consequence is not just screen addiction — it is a deeper fragility: a reduced capacity
          to sit with discomfort, name emotions, or navigate difficulty without an external prompt.
        </p>
        <p className="mt-3 text-slate-300 leading-relaxed">
          The mental health data is stark. Anxiety, loneliness, and emotional dysregulation among
          young people are at generational highs — yet the dominant technological response has been
          to offer more AI, more engagement, more algorithmic mediation. This is the wrong answer.
          The right answer is technology that teaches humans to need it less.
        </p>
        <p className="mt-3 text-slate-300 leading-relaxed">
          That conviction is the foundation of Imotara.
        </p>
      </section>

      {/* ── Origin Story ────────────────────────────────────────────── */}
      <section className="mb-10 rounded-xl border border-white/10 bg-gradient-to-b from-transparent to-white/2 p-6">
        <h2 className="text-2xl font-semibold text-accent">Where This Began</h2>
        <p className="mt-4 text-slate-300 leading-relaxed">
          Imotara was not born in a boardroom. It began in a quieter place — in the concern of two
          mothers, Saswati and Parbati, who noticed what no report card could show: a child smiling
          less, a door closing faster, a growing silence that didn't have words.
        </p>
        <p className="mt-3 text-slate-300 leading-relaxed">
          They didn't want a perfect child. They wanted a safe one. They wished there was a gentle
          space where feelings could be spoken without fear, without judgement, without turning into
          a fight. That wish became the seed of this initiative.
        </p>
        <p className="mt-4 text-slate-400 italic text-sm leading-relaxed">
          "For Saswati. For Parbati. For every parent who loves deeply — and every child who needs
          a place to breathe."
        </p>
        <p className="mt-4 text-slate-300 leading-relaxed">
          As a technology leader who has spent 28+ years building platforms at scale, I recognised
          both the technical possibility and the moral responsibility. The same architecture patterns
          that power enterprise data platforms — local-first storage, privacy by design, scalable
          multilingual processing — could be turned toward a more fundamental challenge: helping human
          beings understand themselves.
        </p>
      </section>

      {/* ── What Imotara Is ─────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-accent">What Imotara Is</h2>
        <p className="mt-3 text-slate-300 leading-relaxed">
          Imotara is a gentle, emotion-aware companion — designed to listen quietly, reflect softly,
          and grow with a user's inner world over time. It is available as both a web application and
          native mobile apps (iOS and Android). It supports 22 languages with native-script emotion
          detection, works fully offline for core features, and is built without ads, without
          engagement manipulation, and without paywalls on essential support.
        </p>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/3 p-4">
            <div className="font-medium text-slate-200 text-sm mb-2">Chat & Reflection</div>
            <p className="text-sm text-slate-400 leading-relaxed">
              A private, non-judgemental space to express thoughts and feelings. The AI listens,
              helps users name emotions they may not have words for, and responds with calm, contextual
              support — not prescriptions or platitudes.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/3 p-4">
            <div className="font-medium text-slate-200 text-sm mb-2">Emotional History & Patterns</div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Users can track emotional patterns over time — building self-awareness through a personal
              timeline of moods, reflections, and insights. Trends, not diagnoses. Patterns, not labels.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/3 p-4">
            <div className="font-medium text-slate-200 text-sm mb-2">Daily Growth Prompts</div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Guided daily reflection prompts designed for intentional inner work — not viral challenges
              or social performance. Growth measured privately, for the individual alone.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/3 p-4">
            <div className="font-medium text-slate-200 text-sm mb-2">Crisis Safety Layer</div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Multilingual crisis detection with appropriate escalation paths. Designed with care for
              younger and vulnerable users who may be in genuine distress — in their own language.
            </p>
          </div>
        </div>
      </section>

      {/* ── Design Philosophy ────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-accent">Design Philosophy</h2>
        <p className="mt-2 text-slate-400">
          The principles that govern how Imotara is built — and what it deliberately refuses to become.
        </p>
        <div className="mt-5 grid sm:grid-cols-2 gap-4">
          {designPrinciples.map((item) => (
            <div key={item.heading} className="rounded-xl border border-white/10 bg-white/3 p-4">
              <div className="font-medium text-slate-200 text-sm mb-1">{item.heading}</div>
              <p className="text-sm text-slate-400 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Technical Foundation ─────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-accent">Technical Foundation</h2>
        <p className="mt-3 text-slate-300 leading-relaxed">
          Imotara is engineered with the same standards I apply to enterprise platforms — privacy by
          design, offline resilience, multi-region scalability, and thoughtful AI orchestration. The
          architecture separates emotional processing from data storage, ensuring user conversations
          are never used for training or monetisation.
        </p>
        <div className="mt-5 grid sm:grid-cols-2 gap-4">
          {platformPillars.map((p) => (
            <div key={p.label} className="rounded-xl border border-white/10 bg-white/3 p-4">
              <div className="font-medium text-slate-200 text-sm mb-1">{p.label}</div>
              <p className="text-sm text-slate-400 leading-relaxed">{p.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Language Reach ───────────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-accent">Reaching Across Languages</h2>
        <p className="mt-3 text-slate-300 leading-relaxed">
          Mental health support should not be a privilege of those who speak English. Imotara's
          emotion detection, reflection prompts, and crisis support are built natively for 22
          languages — with particular depth for Indian regional languages, ensuring that children
          across the subcontinent can express themselves in the tongue they think and dream in.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {languages.map((lang) => (
            <span
              key={lang}
              className="px-3 py-1 rounded-full text-xs border border-white/10 bg-white/3 text-slate-300"
            >
              {lang}
            </span>
          ))}
        </div>
      </section>

      {/* ── Philanthropic Model ──────────────────────────────────────── */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-accent">A Philanthropic, Not Commercial, Model</h2>
        <p className="mt-3 text-slate-300 leading-relaxed">
          Imotara is deliberately structured to resist the incentives that corrupt most consumer
          technology. There are no ads. There is no engagement optimisation. The core emotional
          support experience has no paywall. Donations are strictly optional and never influence
          what any user can access.
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2 text-slate-400">
          <li><strong className="text-slate-300">No paywall on emotional support.</strong> Every core feature — chat, history, reflection prompts, crisis support — is free and ungated.</li>
          <li><strong className="text-slate-300">Donations fund reach, not features.</strong> Optional contributions help expand language support, maintain offline capabilities, and keep servers running — not unlock premium tiers.</li>
          <li><strong className="text-slate-300">No data monetisation, ever.</strong> Emotional conversations are the most intimate form of human expression. They are not an asset class.</li>
          <li><strong className="text-slate-300">Open to partnerships with schools, NGOs, and mental health organisations</strong> who share the mission of making emotional wellness accessible to all young people.</li>
        </ul>
      </section>

      {/* ── Why This Matters Now ────────────────────────────────────── */}
      <section className="mb-10 rounded-xl border border-white/10 bg-gradient-to-b from-transparent to-white/2 p-6">
        <h2 className="text-2xl font-semibold text-accent">Why This Matters — Now</h2>
        <p className="mt-3 text-slate-300 leading-relaxed">
          The leaders who built the internet did not fully anticipate the social consequences of
          algorithmic engagement. We are living with those consequences today — in youth mental
          health statistics, in declining attention spans, in a generation that finds it harder to
          be alone with their thoughts than any generation before them.
        </p>
        <p className="mt-3 text-slate-300 leading-relaxed">
          Those of us who understand how these systems work — who have built data platforms,
          designed AI pipelines, and led technology organisations — carry a specific responsibility.
          We cannot simply build more powerful systems and leave the consequences to be sorted out
          later. We must also build systems that repair, that restore, that serve human flourishing
          rather than merely human attention.
        </p>
        <p className="mt-3 text-slate-300 leading-relaxed">
          Imotara is my attempt to honour that responsibility — by applying the same engineering
          rigour and strategic clarity I bring to enterprise transformation, toward a goal that is
          entirely non-commercial: helping a child find words for what they feel, in the language
          they speak, on the device they have, wherever they are.
        </p>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <div className="mt-8 rounded-xl border border-white/10 p-6 bg-gradient-to-b from-transparent to-white/2">
        <h3 className="text-lg font-semibold">Interested in partnering or learning more?</h3>
        <p className="mt-2 text-slate-300">
          If you represent a school, mental health NGO, research institution, or community
          organisation and want to explore how Imotara could support the young people in your
          care — I would be glad to speak with you.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-accent text-white font-medium hover:opacity-95 transition"
          >
            Get in touch
          </Link>
          <a
            href="https://imotara.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 text-sm hover:bg-white/5 transition"
          >
            Visit Imotara →
          </a>
        </div>
      </div>

    </div>
  );
}
