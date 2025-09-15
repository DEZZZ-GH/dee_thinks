export default function ArticlesPage() {
const articles = [
  {
    title: "Welcome to the Chaos: Why Everything Feels Broken?",
    desc: "We’re running on empty. Working harder, hustling faster, and burning out sooner than any generation before us...",
    image: "/articles/article1.jpg",
    link: "https://medium.com/@deethinks/welcome-to-the-chaos-why-everything-feels-broken-57294eaff4d3"
  },
  {
    title: "When Happiness Feels Like a Death Sentence",
    desc: "We’re running on empty. Working harder, hustling faster, and burning out sooner than any generation before us...",
    image: "/articles/article2.jpg",
    link: "https://medium.com/@deethinks/when-happiness-feels-like-a-death-sentence-8fc8c4f922fe"
  },
  {
    title: "The Psychological Impact of Abuse on a Child",
    desc: "The psychological impact of severe and repeated physical abuse on a child is profound and multifaceted, affecting their emotional, cognitive, social, and neurological development...",
    image: "/articles/article3.jpg",
    link: "https://medium.com/@deethinks/the-psychological-impact-of-abuse-on-a-child-244f39b5c38a"
  },
  {
    title: "Am I Overreacting for Hating Comforting Replies?",
    desc: "I’ve noticed something about myself that doesn’t seem to line up with how most people work. Whenever I share something bad that happened, I don’t want comfort or sympathy...",
    image: "/articles/article4.jpg",
    link: "https://medium.com/@deethinks/am-i-overreacting-for-hating-comforting-replies-3acfb087cc49"
  }
  // 👉 Add more articles here as you publish
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
