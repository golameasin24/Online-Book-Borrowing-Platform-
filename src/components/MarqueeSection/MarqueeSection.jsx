import Marquee from "react-fast-marquee";

const books_news = [
  {
    _id: "1",
    title:
      "Top 10 Online Browsing Platforms to Discover Your Next Favorite Book",
  },
  {
    _id: "2",
    title:
      "How Smart Filtering Tools Make Browsing Through Thousands of Books Effortless",
  },
  {
    _id: "3",
    title: "The Ultimate Guide to Browsing Rare and Out-of-Print Books Online",
  },
  {
    _id: "4",
    title:
      "Why Readers Prefer Browsing Book Catalogs Digitally Before Buying Physical Copies",
  },
  {
    _id: "5",
    title:
      "New AI-Powered Recommendation Features Introduced for Book Browsing Enthusiasts",
  },
  {
    _id: "6",
    title:
      "The Joy of Digital Book Browsing: How Virtual Shelves Replicate the Library Experience",
  },
  {
    _id: "7",
    title:
      "How to Keep Track of Your Browsing History Across Multiple Online Book Stores",
  },
  {
    _id: "8",
    title:
      "5 Hidden UI Tips for Seamlessly Browsing Graphic Novels and Comic Books Online",
  },
  {
    _id: "9",
    title:
      "The Growing Trend of Social Book Browsing: Finding Books Through Reader Communities",
  },
  {
    _id: "10",
    title:
      "How to Safe-Browse Kids' Educational Books and Interactive Material Safely",
  },
];

const MarqueeSection = () => {
  return (
    <div className="container mx-auto  my-8 px-4">
      <div className="relative flex items-center overflow-hidden rounded-xl border border-green-950 bg-card/50 shadow-xs backdrop-blur-md">
        <div className="z-10 flex items-center bg-green-800 dark:bg-white dark:text-slate-800 px-4 py-3 font-semibold text-xs tracking-wider text-white uppercase select-none md:text-sm shadow-md">
          <span className="mr-2 flex h-2 w-2 rounded-full bg-white animate-pulse" />
          Trending
        </div>

        <div className="relative w-full overflow-hidden py-1">
          <Marquee
            speed={50}
            pauseOnHover={true}
            gradient={true}
            gradientColor="var(--card)"
            gradientWidth={40}
          >
            {books_news.map((bn) => (
              <span
                key={bn._id}
                className="mx-6 flex items-center gap-3 font-medium text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-green-500 dark:bg-white" />
                {bn.title}
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default MarqueeSection;
