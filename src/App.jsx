import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Replace these placeholders with the real artist name, city, Instagram, and booking email.
const artist = {
  name: "Artist Name",
  city: "Your City",
  instagram: "@artistname",
  email: "booking@artiststudio.com",
};

// Replace these image URLs with real tattoo photography, healed work, flash sheets, and studio details.
const images = {
  heroBody:
    "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1500&q=90",
  heroFlash:
    "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=900&q=88",
  heroStudio:
    "https://images.unsplash.com/photo-1542727365-19732a80dcfd?auto=format&fit=crop&w=800&q=88",
  artistNote:
    "https://images.unsplash.com/photo-1590246815117-be2a82e6d085?auto=format&fit=crop&w=1200&q=88",
};

const filters = ["All", "Fine line", "Floral", "Blackwork", "Script", "Symbols"];

const portfolio = [
  {
    number: "001",
    title: "Rib flower study",
    category: "Floral",
    tag: "Floral",
    placement: "Ribs",
    caption: "A stem drawn to move with breath.",
    image:
      "https://images.unsplash.com/photo-1590246814883-9a273a3d5c34?auto=format&fit=crop&w=1200&q=88",
    layout: "md:col-span-2 md:row-span-2",
    media: "aspect-[4/5] md:h-full",
  },
  {
    number: "002",
    title: "Tiny omen",
    category: "Symbols",
    tag: "Symbol",
    placement: "Wrist",
    caption: "Small, sharp, personal.",
    image:
      "https://images.unsplash.com/photo-1601848714157-d845bb5c11ff?auto=format&fit=crop&w=900&q=88",
    layout: "md:col-span-1",
    media: "aspect-square",
  },
  {
    number: "003",
    title: "Script fragment",
    category: "Script",
    tag: "Script",
    placement: "Collarbone",
    caption: "Words placed like a secret.",
    image:
      "https://images.unsplash.com/photo-1541121514895-0f36e7d38d14?auto=format&fit=crop&w=900&q=88",
    layout: "md:col-span-1 md:row-span-2",
    media: "aspect-[3/5] md:h-full",
  },
  {
    number: "004",
    title: "Black moth",
    category: "Blackwork",
    tag: "Blackwork",
    placement: "Upper arm",
    caption: "Heavy wings, quiet center.",
    image:
      "https://images.unsplash.com/photo-1612454376902-577cd469d008?auto=format&fit=crop&w=900&q=88",
    layout: "md:col-span-1",
    media: "aspect-[4/5]",
  },
  {
    number: "005",
    title: "Fine line shoulder",
    category: "Fine line",
    tag: "Fine line",
    placement: "Shoulder",
    caption: "Restraint, skin, negative space.",
    image:
      "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=90",
    layout: "md:col-span-2",
    media: "aspect-[16/9]",
  },
  {
    number: "006",
    title: "Strange little thing",
    category: "Symbols",
    tag: "Symbol",
    placement: "Ankle",
    caption: "Drawn like a found mark.",
    image:
      "https://images.unsplash.com/photo-1607278204950-bd9aa08d1d52?auto=format&fit=crop&w=900&q=88",
    layout: "md:col-span-1",
    media: "aspect-square",
  },
  {
    number: "007",
    title: "Botanical wrap",
    category: "Floral",
    tag: "Floral",
    placement: "Forearm",
    caption: "Leaves built around the arm, not pasted onto it.",
    image:
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1100&q=88",
    layout: "md:col-span-1 md:row-span-2",
    media: "aspect-[3/5] md:h-full",
  },
  {
    number: "008",
    title: "Ink field",
    category: "Blackwork",
    tag: "Blackwork",
    placement: "Back",
    caption: "Texture made from pressure and pause.",
    image:
      "https://images.unsplash.com/photo-1590246815117-be2a82e6d085?auto=format&fit=crop&w=1200&q=88",
    layout: "md:col-span-2",
    media: "aspect-[16/10]",
  },
  {
    number: "009",
    title: "Name as artifact",
    category: "Script",
    tag: "Script",
    placement: "Inner arm",
    caption: "Lettering with room to breathe.",
    image:
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=900&q=88",
    layout: "md:col-span-1",
    media: "aspect-[4/5]",
  },
  {
    number: "010",
    title: "Soft black line",
    category: "Fine line",
    tag: "Fine line",
    placement: "Hip",
    caption: "Barely there until it matters.",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1100&q=88",
    layout: "md:col-span-1",
    media: "aspect-square",
  },
  {
    number: "011",
    title: "Palm sized bloom",
    category: "Floral",
    tag: "Floral",
    placement: "Thigh",
    caption: "A flower that knows its weight.",
    image:
      "https://images.unsplash.com/photo-1542727365-19732a80dcfd?auto=format&fit=crop&w=1100&q=88",
    layout: "md:col-span-2",
    media: "aspect-[16/9]",
  },
  {
    number: "012",
    title: "Private symbol",
    category: "Symbols",
    tag: "Symbol",
    placement: "Sternum",
    caption: "Unreadable to strangers. Exact to you.",
    image:
      "https://images.unsplash.com/photo-1601848714157-d845bb5c11ff?auto=format&fit=crop&w=900&q=88",
    layout: "md:col-span-1",
    media: "aspect-[4/5]",
  },
];

const flash = [
  { name: "Wilted lily", size: "3-5 in", status: "Available", shape: "flower" },
  { name: "Watching eye", size: "2-4 in", status: "Available", shape: "eye" },
  { name: "Soft snake", size: "5-7 in", status: "Claimed", shape: "snake" },
  { name: "Eight point star", size: "2 in", status: "Available", shape: "star" },
  { name: "Open hand", size: "4-6 in", status: "Available", shape: "hand" },
  { name: "Little signal", size: "2-3 in", status: "Available", shape: "symbol" },
];

const ritual = [
  {
    number: "01",
    title: "Send the idea",
    text: "Your references, words, placement, size, and the feeling behind it.",
  },
  {
    number: "02",
    title: "Shape the mark",
    text: "I sketch around the body, not just the image.",
  },
  {
    number: "03",
    title: "Sit for it",
    text: "We place, adjust, breathe, and make the final call together.",
  },
  {
    number: "04",
    title: "Heal it right",
    text: "You leave with aftercare, expectations, and support.",
  },
];

const rules = [
  "Custom work only",
  "No direct copies of another artist's tattoo",
  "Deposits hold the appointment",
  "Come fed, rested, and hydrated",
  "Touch ups are discussed after healing",
  "Respect the time, the skin, and the process",
];

const fade = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [submitted, setSubmitted] = useState(false);

  const filteredPortfolio = useMemo(() => {
    if (activeFilter === "All") {
      return portfolio;
    }

    return portfolio.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="paper-site min-h-screen overflow-x-hidden bg-[#f5efe4] text-[#191512]">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_12%_10%,rgba(159,44,30,0.13),transparent_26%),radial-gradient(circle_at_88%_4%,rgba(168,128,70,0.16),transparent_24%),linear-gradient(180deg,#fbf7ef_0%,#f1e7d8_54%,#f8f2e8_100%)]" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(90deg,rgba(25,21,18,0.055)_1px,transparent_1px),linear-gradient(180deg,rgba(25,21,18,0.045)_1px,transparent_1px)] bg-[size:92px_92px]" />

      <SideNav />
      <StickyBooking />
      <FloatingArchiveLabels />

      <HeroPoster />
      <WorkArchive
        activeFilter={activeFilter}
        filteredPortfolio={filteredPortfolio}
        setActiveFilter={setActiveFilter}
      />
      <AvailableFlash />
      <ArtistNote />
      <BookingRitual />
      <BookingForm onSubmit={handleSubmit} submitted={submitted} />
      <StudioRules />
      <FinalPoster />
      <Footer />
    </main>
  );
}

function SideNav() {
  return (
    <nav className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-5 text-[0.62rem] font-black uppercase tracking-[0.28em] text-[#191512]/42 lg:flex">
      <span className="h-16 w-px bg-[#191512]/25" />
      <a className="vertical-label transition hover:text-[#9f2c1e]" href="#archive">
        Archive
      </a>
      <a className="vertical-label transition hover:text-[#9f2c1e]" href="#flash">
        Flash
      </a>
      <a className="vertical-label transition hover:text-[#9f2c1e]" href="#request">
        Request
      </a>
      <span className="h-16 w-px bg-[#191512]/25" />
    </nav>
  );
}

function StickyBooking() {
  return (
    <a
      href="#request"
      className="fixed bottom-4 right-4 z-50 rotate-[-1.5deg] border border-[#191512] bg-[#9f2c1e] px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-[#fffaf1] shadow-[7px_7px_0_rgba(25,21,18,0.2)] transition hover:rotate-0 hover:bg-[#191512] sm:bottom-6 sm:right-6"
    >
      Start a request
    </a>
  );
}

function FloatingArchiveLabels() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 hidden overflow-hidden text-[0.62rem] font-black uppercase tracking-[0.3em] text-[#191512]/10 md:block">
      <span className="absolute left-[8%] top-[24%] rotate-[-18deg]">archive 009</span>
      <span className="absolute right-[8%] top-[36%] rotate-[12deg]">custom only</span>
      <span className="absolute bottom-[22%] left-[18%] rotate-[8deg]">no copy paste</span>
    </div>
  );
}

function HeroPoster() {
  return (
    <section id="top" className="relative px-4 py-5 sm:px-6 lg:px-10">
      <div className="premium-frame relative mx-auto grid min-h-[calc(100vh-2.5rem)] max-w-7xl grid-cols-6 grid-rows-[auto_1fr_auto] overflow-hidden bg-[#fbf7ef]/90 p-4 shadow-[0_30px_90px_rgba(55,43,31,0.16)] sm:p-6 lg:grid-cols-12 lg:p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_18%,rgba(159,44,30,0.12),transparent_22%),linear-gradient(135deg,rgba(25,21,18,0.035)_0_1px,transparent_1px_18px)]" />
        <InkLine className="absolute right-5 top-16 z-20 h-32 w-32 text-[#9f2c1e]/65" />

        <div className="relative z-20 col-span-6 flex items-start justify-between lg:col-span-12">
          <a href="#top" className="stamp rotate-[-1deg]">
            {artist.name} / {artist.city}
          </a>
          <div className="hidden text-right text-[0.62rem] font-black uppercase tracking-[0.28em] text-[#191512]/55 sm:block">
            custom tattoo work
            <br />
            private archive
          </div>
        </div>

        <div className="relative z-10 col-span-6 row-start-2 mt-8 grid grid-cols-6 gap-4 lg:col-span-12 lg:grid-cols-12 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, rotate: -2, y: 20 }}
            animate={{ opacity: 1, rotate: -1.2, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="image-mat relative col-span-6 h-[58vh] min-h-[420px] overflow-hidden bg-[#faf4e9] p-3 shadow-[20px_24px_50px_rgba(55,43,31,0.16)] lg:col-span-7"
          >
            <img
              src={images.heroBody}
              alt="Large cropped tattoo body closeup placeholder"
              className="h-full w-full object-cover grayscale contrast-110 saturate-[0.8]"
            />
            <div className="absolute inset-3 bg-gradient-to-t from-[#191512]/58 via-transparent to-transparent" />
            <span className="stamp absolute left-6 top-6 rotate-[-3deg] bg-[#fbf7ef]/90">
              CUSTOM ONLY
            </span>
            <span className="absolute bottom-6 right-6 bg-[#fbf7ef] px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#191512]">
              fine line / blackwork
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: 4, y: 34 }}
            animate={{ opacity: 1, rotate: 2.2, y: 0 }}
            transition={{ duration: 0.75, delay: 0.16, ease: "easeOut" }}
            className="relative col-span-4 col-start-2 -mt-12 border border-[#191512]/18 bg-[#efe1cb] p-3 shadow-[12px_16px_34px_rgba(55,43,31,0.16)] sm:col-span-3 lg:col-span-3 lg:col-start-8 lg:mt-24"
          >
            <Tape className="left-1/2 top-[-16px] -translate-x-1/2 rotate-[2deg]" />
            <img
              src={images.heroFlash}
              alt="Scanned flash sheet placeholder"
              className="aspect-[4/5] w-full object-cover grayscale contrast-110 mix-blend-multiply"
            />
            <p className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#191512]/70">
              flash sheet / scanned copy
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, rotate: -6, y: -10 }}
            animate={{ opacity: 1, rotate: -4, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: "easeOut" }}
            className="relative col-span-3 col-start-4 -mt-6 border border-[#191512]/16 bg-[#fbf7ef] p-3 shadow-[12px_16px_30px_rgba(55,43,31,0.18)] lg:col-span-2 lg:col-start-11 lg:mt-8"
          >
            <Tape className="right-4 top-[-14px] rotate-[-9deg]" />
            <img
              src={images.heroStudio}
              alt="Tiny studio detail placeholder"
              className="aspect-square w-full object-cover grayscale contrast-110"
            />
            <span className="absolute -bottom-4 left-4 border border-[#191512]/18 bg-[#fbf7ef] px-2 py-1 text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#9f2c1e]">
              by appointment
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="relative z-30 col-span-6 -mt-8 lg:absolute lg:bottom-4 lg:left-[42%] lg:w-[56%]"
          >
            <h1 className="font-editorial text-[22vw] font-black uppercase leading-[0.72] tracking-[-0.09em] text-[#191512] sm:text-[17vw] lg:text-[11rem]">
              Skin remembers.
            </h1>
            <p className="mt-5 max-w-xl bg-[#fbf7ef]/88 p-3 text-base leading-7 text-[#191512]/78 shadow-[0_12px_35px_rgba(55,43,31,0.1)] backdrop-blur-sm sm:text-lg">
              Custom tattoo work shaped through conversation, placement, restraint, and
              instinct.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a className="raw-button bg-[#9f2c1e] text-[#fffaf1]" href="#request">
                Start a request
              </a>
              <a className="raw-button bg-[#fbf7ef] text-[#191512]" href="#archive">
                Enter the archive
              </a>
            </div>
          </motion.div>
        </div>

        <div className="relative z-20 col-span-6 row-start-3 mt-8 flex flex-col gap-4 border-t border-[#191512]/12 pt-4 text-[0.68rem] font-black uppercase tracking-[0.25em] text-[#191512]/54 sm:flex-row sm:items-end sm:justify-between lg:col-span-12">
          <p className="max-w-sm rotate-[-1deg] bg-[#efe1cb] px-3 py-2 text-[#191512] shadow-[0_8px_20px_rgba(55,43,31,0.08)]">
            custom only / by appointment / no copy paste work
          </p>
          <p className="sm:text-right">Fine line, blackwork, symbols, florals, and strange little things.</p>
        </div>
      </div>
    </section>
  );
}

function WorkArchive({ activeFilter, filteredPortfolio, setActiveFilter }) {
  return (
    <section id="archive" className="relative px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionKicker label="work archive" number="012 marks" />
        <div className="mb-8 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <h2 className="font-editorial text-6xl font-black uppercase leading-[0.78] tracking-[-0.075em] text-[#191512] sm:text-8xl lg:text-9xl">
            Archive of marks
          </h2>
          <div className="lg:pt-6">
            <p className="max-w-2xl text-lg leading-8 text-[#191512]/68">
              Cropped skin, healed lines, flash fragments, and the small decisions that
              make a piece feel inevitable.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`archive-filter ${
                    activeFilter === filter
                      ? "border-[#9f2c1e] bg-[#9f2c1e] text-[#fffaf1]"
                      : "border-[#191512]/24 bg-[#fbf7ef]/60 text-[#191512]/68 hover:border-[#9f2c1e] hover:text-[#9f2c1e]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div layout className="grid auto-rows-[210px] grid-cols-1 gap-4 md:grid-cols-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item) => (
              <ArchivePiece key={item.number} item={item} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ArchivePiece({ item }) {
  return (
    <motion.article
      layout
      variants={fade}
      initial="hidden"
      whileInView="visible"
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={`group image-mat relative cursor-crosshair overflow-hidden bg-[#fbf7ef] p-2 shadow-[0_18px_45px_rgba(55,43,31,0.12)] ${item.layout}`}
    >
      <img
        src={item.image}
        alt={`${item.title} tattoo placeholder`}
        className={`h-full w-full object-cover grayscale contrast-110 saturate-[0.78] transition duration-700 group-hover:scale-105 group-hover:grayscale-0 ${item.media}`}
      />
      <div className="absolute inset-2 bg-gradient-to-t from-[#191512]/82 via-transparent to-transparent opacity-75" />
      <div className="absolute left-4 top-4 flex gap-2">
        <span className="bg-[#fbf7ef] px-2 py-1 font-mono text-[0.58rem] font-black text-[#191512]">
          {item.number}
        </span>
        <span className="border border-[#fbf7ef]/70 bg-[#191512]/58 px-2 py-1 text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#fbf7ef]">
          {item.tag}
        </span>
      </div>
      <div className="absolute inset-x-4 bottom-4 translate-y-4 border border-[#fbf7ef]/28 bg-[#fbf7ef]/92 p-3 opacity-0 shadow-[0_12px_30px_rgba(25,21,18,0.12)] backdrop-blur-sm transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <p className="font-editorial text-2xl font-black leading-none text-[#191512]">{item.title}</p>
        <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-[#9f2c1e]">
          {item.placement}
        </p>
        <p className="mt-2 text-sm leading-6 text-[#191512]/68">{item.caption}</p>
      </div>
    </motion.article>
  );
}

function AvailableFlash() {
  return (
    <section id="flash" className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionKicker label="sketchbook" number="available concepts" />
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h2 className="font-editorial text-6xl font-black uppercase leading-[0.78] tracking-[-0.075em] text-[#191512] sm:text-8xl">
            Available flash
          </h2>
          <p className="max-w-md text-sm leading-7 text-[#191512]/62">
            Scanned placeholders for now. Swap these with real flash sheets, line art, or
            photographed sketchbook pages.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {flash.map((item, index) => (
            <FlashCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlashCard({ item, index }) {
  const claimed = item.status === "Claimed";

  return (
    <FadeIn delay={index * 0.05}>
      <article className="paper-card group relative min-h-[360px] rotate-[0.3deg] bg-[#fbf7ef] p-5 text-[#191512] shadow-[0_18px_45px_rgba(55,43,31,0.12)] transition hover:rotate-0 hover:-translate-y-1">
        <Tape className="left-8 top-[-14px] rotate-[-8deg]" />
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#191512]/56">
              concept {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-editorial text-4xl font-black leading-none">{item.name}</h3>
          </div>
          <span
            className={`stamp border-[#191512]/30 bg-transparent ${
              claimed ? "text-[#191512]/38 line-through" : "text-[#9f2c1e]"
            }`}
          >
            {item.status}
          </span>
        </div>
        <div className="my-8 grid place-items-center">
          <FlashDrawing shape={item.shape} className="h-36 w-36 text-[#191512]" />
        </div>
        <div className="mt-auto flex items-end justify-between border-t border-[#191512]/18 pt-4">
          <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-[#191512]/68">
            size suggestion
            <br />
            <span className="text-base font-black text-[#191512]">{item.size}</span>
          </p>
          <button
            type="button"
            disabled={claimed}
            className="border border-[#191512] px-3 py-2 text-[0.65rem] font-black uppercase tracking-[0.18em] transition enabled:hover:bg-[#191512] enabled:hover:text-[#fbf7ef] disabled:cursor-not-allowed disabled:opacity-40"
          >
            Claim this
          </button>
        </div>
      </article>
    </FadeIn>
  );
}

function ArtistNote() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <FadeIn className="relative order-2 lg:order-1">
          <div className="absolute -left-4 top-8 z-10 rotate-[-5deg] bg-[#9f2c1e] px-3 py-2 text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#fffaf1]">
            studio mirror / placeholder
          </div>
          <div className="image-mat relative bg-[#fbf7ef] p-3 shadow-[0_22px_60px_rgba(55,43,31,0.14)]">
            <img
              src={images.artistNote}
              alt="Candid studio process placeholder"
              className="aspect-[4/5] w-full object-cover grayscale contrast-110 saturate-[0.78]"
            />
          </div>
        </FadeIn>

        <FadeIn className="order-1 lg:order-2">
          <SectionKicker label="artist note" number="not a bio" />
          <h2 className="font-editorial text-6xl font-black uppercase leading-[0.78] tracking-[-0.075em] text-[#191512] sm:text-8xl">
            Artist note
          </h2>
          <p className="mt-8 max-w-2xl text-2xl leading-10 text-[#191512]/82">
            I care about tattoos that feel quiet, strange, personal, and properly placed.
            The goal is not to decorate skin. The goal is to make something that feels like
            it already belonged there.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {["No copy paste work", "Placement matters", "Small details age loudly"].map((principle) => (
              <div
                key={principle}
                className="min-h-32 border border-[#191512]/14 bg-[#fbf7ef]/62 p-4 text-[0.78rem] font-black uppercase leading-6 tracking-[0.2em] text-[#191512]/66 shadow-[0_14px_35px_rgba(55,43,31,0.08)]"
              >
                <span className="mb-5 block h-px w-12 bg-[#9f2c1e]" />
                {principle}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function BookingRitual() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-5xl">
        <SectionKicker label="process" number="printed instruction sheet" />
        <div className="paper-card relative rotate-[-0.3deg] bg-[#fffaf1] p-5 text-[#191512] shadow-[0_24px_70px_rgba(55,43,31,0.13)] sm:p-8">
          <Tape className="right-12 top-[-14px] rotate-[4deg]" />
          <h2 className="font-editorial text-6xl font-black uppercase leading-[0.78] tracking-[-0.075em] sm:text-8xl">
            The ritual
          </h2>
          <div className="mt-10 divide-y divide-[#191512]/16 border-y border-[#191512]/22">
            {ritual.map((step) => (
              <div key={step.number} className="grid gap-5 py-6 sm:grid-cols-[6rem_1fr]">
                <p className="font-editorial text-5xl font-black text-[#9f2c1e]">{step.number}</p>
                <div>
                  <h3 className="font-editorial text-3xl font-black uppercase leading-none">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-[#191512]/68">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingForm({ onSubmit, submitted }) {
  return (
    <section id="request" className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <FadeIn>
          <SectionKicker label="intake card" number="booking" />
          <h2 className="font-editorial text-6xl font-black uppercase leading-[0.78] tracking-[-0.075em] text-[#191512] sm:text-8xl">
            Request a piece
          </h2>
          <p className="mt-7 max-w-md text-lg leading-8 text-[#191512]/70">
            Send the messy version. The idea does not need to be perfect yet.
          </p>
          <p className="mt-8 rotate-[-1.2deg] border border-[#191512]/14 bg-[#fbf7ef]/72 p-4 font-mono text-xs uppercase leading-6 tracking-[0.18em] text-[#191512]/55 shadow-[0_14px_35px_rgba(55,43,31,0.08)]">
            Requests are reviewed for fit, placement, scale, and timing. Custom tattoo
            work by appointment only.
          </p>
        </FadeIn>

        <FadeIn delay={0.08}>
          <form
            onSubmit={onSubmit}
            className="paper-card bg-[#fffaf1] p-4 shadow-[0_24px_70px_rgba(55,43,31,0.12)] sm:p-6"
          >
            <div className="grid gap-x-5 gap-y-6 md:grid-cols-2">
              <RawInput label="Name" name="name" required />
              <RawInput label="Email" name="email" type="email" required />
              <RawInput label="Instagram" name="instagram" placeholder="@handle" />
              <RawInput label="Placement" name="placement" placeholder="ribs / forearm / ankle" />
              <RawInput label="Approximate size" name="size" placeholder="2 inches / palm size" />
              <RawSelect
                label="Style"
                name="style"
                options={["Fine line", "Floral", "Blackwork", "Script", "Symbols", "Not sure"]}
              />
              <RawSelect
                label="Budget range"
                name="budget"
                options={["$150 - $300", "$300 - $600", "$600 - $1,000", "$1,000+", "Need guidance"]}
              />
              <RawInput label="Preferred dates" name="dates" placeholder="weekdays / late June" />
              <RawTextarea
                label="Idea"
                name="idea"
                placeholder="Tell me the references, the feeling, what it should not be, and where it should live."
              />
              <div className="md:col-span-2">
                <button
                  type="button"
                  className="w-full border border-dashed border-[#191512]/24 bg-transparent px-3 py-4 text-left font-mono text-xs uppercase tracking-[0.18em] text-[#191512]/50 transition hover:border-[#9f2c1e] hover:text-[#9f2c1e]"
                >
                  Reference upload placeholder / attach images later
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="mt-7 w-full border border-[#9f2c1e] bg-[#9f2c1e] px-5 py-4 text-sm font-black uppercase tracking-[0.24em] text-[#fffaf1] shadow-[8px_8px_0_rgba(25,21,18,0.13)] transition hover:bg-[#191512]"
            >
              Send the request
            </button>
            <AnimatePresence>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  className="mt-5 border border-[#9f2c1e]/45 bg-[#9f2c1e]/8 p-4 text-sm leading-7 text-[#191512]"
                >
                  Received. I'll review the idea and respond if it feels aligned.
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

function StudioRules() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn className="premium-frame bg-[#fbf7ef]/72 p-5 shadow-[0_18px_45px_rgba(55,43,31,0.1)] sm:p-8">
            <SectionKicker label="studio wall" number="read first" />
            <h2 className="font-editorial text-6xl font-black uppercase leading-[0.78] tracking-[-0.075em] text-[#191512] sm:text-8xl">
              Before you write
            </h2>
          </FadeIn>
          <FadeIn delay={0.08} className="paper-card bg-[#efe1cb] p-5 text-[#191512] shadow-[0_18px_45px_rgba(55,43,31,0.12)]">
            <ul className="divide-y divide-[#191512]/18">
              {rules.map((rule, index) => (
                <li key={rule} className="flex gap-4 py-4">
                  <span className="font-mono text-xs font-black text-[#9f2c1e]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-lg font-black uppercase leading-6 tracking-[-0.02em]">
                    {rule}
                  </span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function FinalPoster() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-10">
      <div className="relative mx-auto min-h-[520px] max-w-7xl overflow-hidden bg-[#191512] p-6 text-[#fffaf1] shadow-[0_34px_100px_rgba(55,43,31,0.24)] sm:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_22%,rgba(159,44,30,0.38),transparent_22%),linear-gradient(120deg,rgba(255,250,241,0.08)_0_1px,transparent_1px_20px)]" />
        <InkLine className="absolute bottom-10 right-8 h-56 w-56 text-[#c79a54]/65" />
        <div className="relative z-10 flex min-h-[440px] flex-col justify-between">
          <span className="stamp w-fit rotate-[-3deg] border-[#fffaf1]/28 text-[#fffaf1]">final note</span>
          <div>
            <h2 className="font-editorial max-w-5xl text-6xl font-black uppercase leading-[0.78] tracking-[-0.075em] sm:text-8xl lg:text-[9rem]">
              Bring the idea. I'll shape the mark.
            </h2>
            <a className="raw-button mt-10 inline-flex bg-[#fffaf1] text-[#191512]" href="#request">
              Start a request
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 pb-10 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-[#191512]/16 pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-editorial text-4xl font-black uppercase text-[#191512]">{artist.name}</p>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-[#191512]/46">
            {artist.city} / custom tattoo work
          </p>
        </div>
        <div className="flex flex-col gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[#191512]/56 md:items-end">
          <div className="flex flex-wrap gap-4">
            <a className="hover:text-[#9f2c1e]" href="https://instagram.com">
              Instagram {artist.instagram}
            </a>
            <a className="hover:text-[#9f2c1e]" href={`mailto:${artist.email}`}>
              {artist.email}
            </a>
            <a className="hover:text-[#9f2c1e]" href="#request">
              Booking
            </a>
          </div>
          <p>Copyright {new Date().getFullYear()} / custom tattoo work</p>
        </div>
        <p className="vertical-label hidden text-[0.62rem] font-black uppercase tracking-[0.28em] text-[#191512]/35 lg:block">
          custom tattoo work
        </p>
      </div>
    </footer>
  );
}

function SectionKicker({ label, number }) {
  return (
    <div className="mb-5 flex flex-wrap items-center gap-3 font-mono text-[0.62rem] font-black uppercase tracking-[0.24em] text-[#191512]/46">
      <span className="text-[#9f2c1e]">{label}</span>
      <span className="h-px w-10 bg-[#191512]/24" />
      <span>{number}</span>
    </div>
  );
}

function FadeIn({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      variants={fade}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.55, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function RawInput({ label, name, type = "text", placeholder = "", required = false }) {
  return (
    <label className="block">
      <span className="form-label">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="raw-field"
      />
    </label>
  );
}

function RawSelect({ label, name, options }) {
  return (
    <label className="block">
      <span className="form-label">{label}</span>
      <select name={name} defaultValue="" className="raw-field">
        <option value="" disabled>
          Select one
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function RawTextarea({ label, name, placeholder }) {
  return (
    <label className="block md:col-span-2">
      <span className="form-label">{label}</span>
      <textarea name={name} placeholder={placeholder} rows="6" className="raw-field resize-none leading-7" />
    </label>
  );
}

function Tape({ className = "" }) {
  return <span className={`absolute z-20 h-7 w-24 bg-[#fffaf1]/76 opacity-80 mix-blend-screen ${className}`} />;
}

function InkLine({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <motion.path
        d="M23 136C49 69 86 150 109 80C127 26 169 41 176 93C184 154 111 180 69 145C39 119 73 92 101 115"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="9 12"
        initial={{ pathLength: 0, opacity: 0.25 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
      <path d="M51 44L57 58L72 61L59 69L61 84L50 74L36 81L43 66L32 55L47 57L51 44Z" stroke="currentColor" />
      <circle cx="148" cy="142" r="18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function FlashDrawing({ shape, className = "" }) {
  const common = "currentColor";

  return (
    <svg className={className} viewBox="0 0 160 160" fill="none" aria-hidden="true">
      {shape === "flower" && (
        <>
          <path d="M79 139C82 107 82 79 80 54" stroke={common} strokeWidth="3" strokeLinecap="round" />
          <path d="M80 58C52 45 49 18 76 25C84 27 84 46 80 58Z" stroke={common} strokeWidth="3" />
          <path d="M83 58C112 43 116 18 89 25C80 27 79 46 83 58Z" stroke={common} strokeWidth="3" />
          <path d="M80 76C53 76 44 101 65 107C78 111 83 89 80 76Z" stroke={common} strokeWidth="3" />
          <path d="M83 78C111 78 119 103 98 109C85 113 80 91 83 78Z" stroke={common} strokeWidth="3" />
        </>
      )}
      {shape === "eye" && (
        <>
          <path d="M22 82C49 43 111 43 138 82C111 118 49 118 22 82Z" stroke={common} strokeWidth="3" />
          <circle cx="80" cy="82" r="21" stroke={common} strokeWidth="3" />
          <circle cx="80" cy="82" r="7" fill={common} />
          <path d="M78 18V38M78 126V146M34 34L48 50M126 34L112 50" stroke={common} strokeWidth="3" strokeLinecap="round" />
        </>
      )}
      {shape === "snake" && (
        <>
          <path d="M82 20C116 34 54 59 88 81C126 106 45 119 77 143" stroke={common} strokeWidth="4" strokeLinecap="round" />
          <path d="M86 20L103 25L91 36" stroke={common} strokeWidth="3" strokeLinecap="round" />
          <circle cx="91" cy="27" r="2" fill={common} />
        </>
      )}
      {shape === "star" && (
        <>
          <path d="M80 16L91 65L140 80L91 95L80 144L69 95L20 80L69 65L80 16Z" stroke={common} strokeWidth="3" />
          <path d="M80 45V115M45 80H115" stroke={common} strokeWidth="2" />
        </>
      )}
      {shape === "hand" && (
        <>
          <path d="M48 80V45C48 36 61 36 61 45V73V34C61 24 75 24 75 34V72V29C75 19 90 20 90 30V74V42C90 33 104 34 104 43V91L111 78C116 69 129 76 124 87L108 123C102 137 91 144 76 144C59 144 48 132 48 113V80Z" stroke={common} strokeWidth="3" />
          <path d="M63 106C74 103 87 104 99 111" stroke={common} strokeWidth="3" strokeLinecap="round" />
        </>
      )}
      {shape === "symbol" && (
        <>
          <path d="M28 101C52 45 110 45 132 101" stroke={common} strokeWidth="3" strokeLinecap="round" />
          <path d="M50 101C63 75 97 75 110 101" stroke={common} strokeWidth="3" strokeLinecap="round" />
          <path d="M80 25V135M53 52L107 108M107 52L53 108" stroke={common} strokeWidth="3" strokeLinecap="round" />
          <circle cx="80" cy="80" r="11" stroke={common} strokeWidth="3" />
        </>
      )}
    </svg>
  );
}

export default App;
