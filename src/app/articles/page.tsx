export default function ArticlesPage() {
const articles = [
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

      {/* FOLLOW ME ON MEDIUM BUTTON */}
      <div className="flex justify-center mt-8">
        <a
          href="https://medium.com/@deethinks"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-violet-600 text-white font-semibold rounded-xl shadow hover:bg-violet-700 transition"
        >
          Follow me on Medium →
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
