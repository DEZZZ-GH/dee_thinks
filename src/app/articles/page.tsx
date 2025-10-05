export default function ArticlesPage() {
const articles = [
 {title: "Goldfish Have a Longer Career Plan Than You Do",
  desc: "Everywhere you go, attention feels like it’s on clearance sale. Scroll feeds, push alerts, dopamine quick hits. We treat our brains like fast-food joints: serve it cheap, serve it quick, keep it coming. Then...",
  image: "/articles/article9.webp",
  link: "https://medium.com/@deethinks/goldfish-have-a-longer-career-plan-than-you-do-d6e976950922",
  keywords: [
  "attention span",
  "digital distraction",
  "short attention span",
  "social media addiction",
  "dopamine detox",
  "screen time effects",
  "how to focus better",
  "distraction recovery",
  "mental clutter",
  "internet rewired brain",
  "attention economy",
  "reclaim focus",
  "deep work habits",
  "dopamine loop",
  "phone addiction",
  "focus and productivity",
  "digital overload",
  "how to stop scrolling",
  "retrain your brain",
  "information overload",
  "why can’t I focus",
  "modern attention crisis",
  "break social media habits",
  "internet and mental health",
  "discipline and focus"
]
},
  {
    title: "The Dark Side of Self-Improvement",
    desc: "Self-improvement sounds harmless, who wouldn’t want to be a better version of themselves? But once you scratch past the shiny covers of self-help books and motivational posts, the picture gets uglier....",
    image: "/articles/article8.jpg",
    link: "https://medium.com/@deethinks/the-dark-side-of-self-improvement-f536bc5d9695",
keywords: [
  "child emotional abuse",
  "long term trauma",
  "childhood mental health",
  "abuse impact",
  "toxic stress",
  "childhood emotional abuse effects",
  "long term psychological effects",
  "mental health after trauma",
  "trauma recovery",
  "emotional neglect in childhood",
  "adverse childhood experiences",
  "complex trauma",
  "healing from child abuse",
  "symptoms of childhood trauma",
  "emotional wounds",
  "abuse survivors mental health",
  "toxic relationships and childhood",
  "trauma therapy",
  "shame and childhood abuse",
  "impact of emotional neglect",
  "PTSD from childhood",
  "recovery from toxic stress",
  "attachment trauma",
  "intergenerational trauma",
  "emotional resilience"
]
  },
  {
    title: "The Ego Prison",
    desc: "We like to believe the “self” is who we really are. But most of the time, it’s just the ego running the show, this fragile construct of memory, fear, comparison, and performance. The ego gives us an identity, but...",
    image: "/articles/article5.jpg",
    link: "https://medium.com/@deethinks/the-ego-prison-a616efa698af",
    keywords: ["ego psychology", "subconscious mind", "identity defense", "psychological freedom", "ego balance"]
  }, 
  {
    title: "Welcome to the Chaos: Why Everything Feels Broken?",
    desc: "We’re running on empty. Working harder, hustling faster, and burning out sooner than any generation before us...",
    image: "/articles/article1.jpg",
    link: "https://medium.com/@deethinks/welcome-to-the-chaos-why-everything-feels-broken-57294eaff4d3",
    keywords: ["burnout recovery", "modern burnout", "life collapse", "emotional chaos", "meaninglessness"]
  },
  {
    title: "When Happiness Feels Like a Death Sentence",
    desc: "Not everyone fears death for the same reason. For some, the fear isn’t about leaving life behind. It isn’t about the unknown...",
    image: "/articles/article2.jpg",
    link: "https://medium.com/@deethinks/when-happiness-feels-like-a-death-sentence-8fc8c4f922fe",
    keywords: ["existential dread", "fear of happiness", "emotional numbness", "mental health paradox", "self-belief crisis"]
  },
  {
    title: "The Psychological Impact of Abuse on a Child",
    desc: "The psychological impact of severe and repeated physical abuse on a child is profound and multifaceted, affecting their emotional, cognitive, social, and neurological development...",
    image: "/articles/article3.jpg",
    link: "https://medium.com/@deethinks/the-psychological-impact-of-abuse-on-a-child-244f39b5c38a",
    keywords: ["child emotional abuse", "long term trauma", "childhood mental health", "abuse impact", "toxic stress"]
  },
  {
    title: "Am I Overreacting for Hating Comforting Replies?",
    desc: "I’ve noticed something about myself that doesn’t seem to line up with how most people work. Whenever I share something bad that happened, I don’t want comfort or sympathy...",
    image: "/articles/article4.jpg",
    link: "https://medium.com/@deethinks/am-i-overreacting-for-hating-comforting-replies-3acfb087cc49",
    keywords: ["emotional reactions", "boundary with comfort", "adult trauma", "comfort replies", "emotional honesty"]
  },
  {
    title: "DEATH ISN’T SCARY, IT’S JUST A REALLY SHITTY PLOT TWIST",
    desc: "Let’s cut the bullshit. You’re not curled up in bed at 3AM because you’re scared of dying. You’re wide awake because death isn’t terrifying — it’s fucking lazy writing....",
    image: "/articles/article6.webp",
    link: "https://medium.com/@deethinks/death-isnt-scary-it-s-just-a-really-shitty-plot-twist-2f061ede8ab3",
    keywords: ["existential questions", "fear of death", "emotional numbness", "life meaning crisis", "mental health reflection"]
  }, 
  {
    title: "Why you can’t sit still: it’s not ADHD, it’s Survival Mode",
    desc: "That constant need to move, scroll, do—it’s not laziness or ADHD. It’s a nervous system that never got to feel safe...",
    image: "/articles/article7.webp",
    link: "https://medium.com/@deethinks/why-you-cant-sit-still-it-s-not-adhd-it-s-survival-mode-cc908974c3b8",
    keywords: [
  "ADHD survival mode", 
  "nervous system dysregulation", 
  "restlessness", 
  "constant alert", 
  "chronic stress", 
  "overwhelm coping", 
  "trauma response", 
  "mental fatigue", 
  "anxiety restlessness"
]

  }, 
  {
    title: "Your Brain is Not Broken, It’s Been Hacked",
    desc: "Stop calling yourself lazy. Stop calling yourself inconsistent, unmotivated, or weak. Because here’s the truth no one with a “productivity” podcast will tell you: You’ve been engineered to fail...",
    image: "/articles/article10.jpg",
    link: "https://medium.com/@deethinks/your-brain-is-not-broken-its-been-hacked-b4b77b3bc53f",
    keywords: [
  "brain hacked",
  "digital brain hacking",
  "internet rewiring brain",
  "how tech rewired your mind",
  "attention hijacked",
  "reclaim your mind",
  "focus in digital age",
  "neurohacking",
  "mental manipulation online",
  "distraction hacking",
  "recover from brain hacking",
  "digital overload brain",
  "mental clutter from tech",
  "brain manipulation social media",
  "why my brain feels broken",
  "fix attention hacking",
  "internet mind control",
  "hack your brain back",
  "restore concentration",
  "heal digital brain"
]
  }, 
{
    title: "They’re Not Just Spying on You, They’re Preying on You",
    desc: "You think you’re using Google. You’re wrong. Google is using you, your fears, your bad habits, even your half-formed thoughts, as raw material for the most profitable deception in history. ...",
    image: "/articles/article11.jpg",
    link: "https://medium.com/@deethinks/theyre-not-just-spying-on-you-they-re-preying-on-you-f3268343afdb",
  keywords: [
  "digital surveillance",
  "internet privacy",
  "they’re spying on you",
  "online tracking",
  "data harvesting mental health",
  "tech predation",
  "how tech watches you",
  "privacy hacked",
  "corporate surveillance",
  "digital predators",
  "social media tracking",
  "data extraction",
  "force mined your attention",
  "you are data",
  "how companies track you",
  "mind hacking privacy",
  "internet spies",
  "behavioral tracking",
  "surveillance capitalism",
  "your data is prey",
  "psychographic targeting",
  "algorithmic predation",
  "you’re being watched online",
  "digital manipulation",
  "data surveillance effects"
]
  }, 
{
    title: "The Lie You’ve Been Told About “Finding Yourself”",
    desc: "Spoiler alert: There is no “real you” to uncover. Just the person reading these words right now....",
    image: "/articles/article12.webp",
    link: "https://medium.com/@deethinks/the-lie-youve-been-told-about-finding-yourself-97499a281793",
    keywords: [
  "finding yourself myth",
  "identity search lie",
  "self discovery lie",
  "who am I truth",
  "stop looking for yourself",
  "identity crisis",
  "fake self narrative",
  "creating identity",
  "self realization path",
  "your true self doesn’t exist",
  "authentic identity",
  "finding meaning",
  "identity beyond labels",
  "reinvent yourself",
  "make your own identity",
  "letting go of identity search",
  "self construction",
  "becoming not discovering",
  "personal growth mindset",
  "identity myth debunked"
]
 }, 
 {
    title: "Uni feels like a joke compared to money, because your brain is trying to stay alive, not get an A.",
    desc: "Your system isn’t confused. It’s choosing survival. And right now, money = freedom = safety....",
    image: "/articles/article13.jpg",
    link: "https://medium.com/@deethinks/youre-not-lazy-you-re-in-survival-mode-d7b1d5a32a49",
    keywords: [
  "not lazy survival mode",
  "you’re not lazy",
  "survival mode mindset",
  "trauma disguised as laziness",
  "nervous system and motivation",
  "burnout vs laziness",
  "how to escape survival mode",
  "healing from exhaustion",
  "understanding fatigue brain",
  "motivation blocked by trauma",
  "reset nervous system",
  "reclaim energy focus",
  "mental shutdown patterns",
  "not broken just overwhelmed",
  "chronic stress fatigue",
  "invisible load survival mode",
  "executive dysfunction trauma",
  "rest resistance survival",
  "trauma productivity block",
  "emotional exhaustion mindset"
] }, 
];

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      {/* HEADER */}
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
        Articles
        <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-violet-600"></div>
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-neutral-400 text-center">
        What I don’t say out loud, I put here. Updated as I publish new work.
      </p>

{/* BUTTONS SECTION */}
<div className="flex justify-center mt-6 gap-3 flex-wrap sm:flex-nowrap">
  {/* FOLLOW ME ON MEDIUM BUTTON */}
  <a
    href="https://medium.com/@deethinks"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-xl shadow hover:bg-violet-700 transition"
  >
    Follow me on Medium →
  </a>

  {/* BUY MY EBOOK BUTTON */}
  <a
    href="https://deethinks.gumroad.com/l/CtrlAltGrow"
    target="_blank"
    rel="noopener noreferrer"
    className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-xl shadow hover:bg-orange-700 transition"
  >
    Get eBook →
  </a>
</div>

      {/* ARTICLES GRID */}
      <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, idx) => (
          <a
            key={idx}
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-900 rounded-2xl overflow-hidden shadow hover:shadow-lg hover:-translate-y-1 transition flex flex-col"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold mb-2">{article.title}</h3>
              <p className="text-neutral-400 text-sm flex-1">{article.desc}</p>
              <span className="mt-4 text-violet-400 font-medium">
                Read more →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
