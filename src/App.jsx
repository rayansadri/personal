import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Replace these placeholders with the real artist details before launch.
const artist = {
  name: "Artist Name",
  city: "Your City",
  email: "booking@artiststudio.com",
  instagram: "@artistname",
  tiktok: "@artistname",
};

// Replace image URLs with real tattoo portfolio photography when available.
const portfolioItems = [
  {
    title: "Botanical collarbone piece",
    category: "Fine Line",
    tag: "Fine Line",
    caption: "Soft movement designed around the natural line of the shoulder.",
    image:
      "https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Wildflower forearm study",
    category: "Floral",
    tag: "Floral",
    caption: "Layered stems and negative space for a light, organic composition.",
    image:
      "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Handwritten keepsake",
    category: "Script",
    tag: "Script",
    caption: "Personal lettering refined for flow, scale, and placement.",
    image:
      "https://images.unsplash.com/photo-1562962230-16e4623d36e6?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[5/6]",
  },
  {
    title: "Moonlit figure",
    category: "Illustrative",
    tag: "Illustrative",
    caption: "An intimate black ink piece with quiet narrative detail.",
    image:
      "https://images.unsplash.com/photo-1542727365-19732a80dcfd?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Negative space moth",
    category: "Blackwork",
    tag: "Blackwork",
    caption: "Graphic contrast balanced with delicate interior texture.",
    image:
      "https://images.unsplash.com/photo-1612454376902-577cd469d008?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[3/5]",
  },
  {
    title: "Tiny heirloom symbol",
    category: "Fine Line",
    tag: "Micro Realism",
    caption: "Small scale work with clear detail and careful restraint.",
    image:
      "https://images.unsplash.com/photo-1601848714157-d845bb5c11ff?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[1/1]",
  },
  {
    title: "Peony rib composition",
    category: "Floral",
    tag: "Floral",
    caption: "A body-led floral design with softness, depth, and air.",
    image:
      "https://images.unsplash.com/photo-1590246814883-9a273a3d5c34?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[4/5]",
  },
  {
    title: "Quiet mantra",
    category: "Script",
    tag: "Lettering",
    caption: "A minimal phrase placed to feel private and intentional.",
    image:
      "https://images.unsplash.com/photo-1541121514895-0f36e7d38d14?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[5/7]",
  },
  {
    title: "Ink study sleeve detail",
    category: "Blackwork",
    tag: "Blackwork",
    caption: "Bold texture and contrast without overpowering the body.",
    image:
      "https://images.unsplash.com/photo-1590246815117-be2a82e6d085?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[3/4]",
  },
  {
    title: "Mythic line illustration",
    category: "Illustrative",
    tag: "Illustrative",
    caption: "Story, symbolism, and placement brought into one composition.",
    image:
      "https://images.unsplash.com/photo-1607278204950-bd9aa08d1d52?auto=format&fit=crop&w=900&q=85",
    aspect: "aspect-[4/5]",
  },
];

const filters = ["All", "Fine Line", "Floral", "Script", "Illustrative", "Blackwork"];

const values = [
  {
    title: "Intentional design",
    text: "Every detail is shaped around your references, story, and anatomy.",
  },
  {
    title: "Clean linework",
    text: "Delicate marks, steady contrast, and a disciplined visual finish.",
  },
  {
    title: "Calm private experience",
    text: "A quiet studio appointment with space to ask, adjust, and breathe.",
  },
];

const styles = [
  {
    title: "Fine Line",
    text: "Delicate, precise, minimal pieces with soft visual weight.",
  },
  {
    title: "Floral and Botanical",
    text: "Organic compositions inspired by movement, balance, and nature.",
  },
  {
    title: "Script and Lettering",
    text: "Personal words, names, and phrases designed with flow and placement in mind.",
  },
  {
    title: "Illustrative Blackwork",
    text: "Bold visual storytelling using contrast, texture, and shape.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Send your idea",
    text: "Share your concept, placement, size, references, and preferred dates.",
  },
  {
    number: "02",
    title: "Design direction",
    text: "We refine the style, composition, and placement so it fits your body naturally.",
  },
  {
    number: "03",
    title: "Appointment day",
    text: "You arrive prepared, we review the stencil, and make final adjustments together.",
  },
  {
    number: "04",
    title: "Aftercare",
    text: "You leave with clear healing instructions and support if you have questions.",
  },
];

const testimonials = [
  {
    quote:
      "She made the whole process feel calm and collaborative. The final piece felt exactly like me.",
    name: "Mara K.",
  },
  {
    quote: "The linework is so clean, and the design fit my body better than I imagined.",
    name: "J. Rivera",
  },
  {
    quote: "I came in with a rough idea and left with something deeply personal.",
    name: "A. Chen",
  },
];

const faqs = [
  {
    question: "How do I book?",
    answer:
      "Fill out the request form with your idea, placement, size, and references. You will receive a follow-up with next steps.",
  },
  {
    question: "Do you take custom designs?",
    answer:
      "Yes. Most work is custom and designed around your story, body, and preferred aesthetic.",
  },
  {
    question: "Do you do cover ups?",
    answer:
      "Some cover ups are possible. Clear photos and an honest description help determine if the project is a fit.",
  },
  {
    question: "How should I prepare for my appointment?",
    answer:
      "Arrive rested, hydrated, and fed. Avoid alcohol beforehand and wear clothing that gives easy access to the placement.",
  },
  {
    question: "How much does a tattoo cost?",
    answer:
      "Pricing depends on size, detail, placement, and session length. You will receive guidance after your request is reviewed.",
  },
  {
    question: "Can I bring references?",
    answer:
      "Absolutely. References are encouraged and help clarify mood, style, composition, and details you want to avoid.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Please give as much notice as possible. Deposits and rescheduling policies are shared before an appointment is confirmed.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

function App() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const filteredPortfolio = useMemo(() => {
    if (activeFilter === "All") {
      return portfolioItems;
    }

    return portfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  function handleBookingSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="grain min-h-screen overflow-hidden bg-[#070605] text-[#f4eee5]">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(124,46,38,0.28),transparent_32%),radial-gradient(circle_at_80%_0%,rgba(216,183,143,0.16),transparent_28%),linear-gradient(180deg,#070605_0%,#11100e_48%,#070605_100%)]" />

      <Header />
      <Hero />
      <Portfolio
        activeFilter={activeFilter}
        filteredPortfolio={filteredPortfolio}
        setActiveFilter={setActiveFilter}
      />
      <ArtistStory />
      <SignatureStyles />
      <Process />
      <Booking onSubmit={handleBookingSubmit} submitted={submitted} />
      <Testimonials />
      <FAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <FinalCTA />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="absolute left-0 right-0 top-0 z-40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
        <a href="#top" className="group inline-flex items-center gap-3">
          <span className="h-8 w-8 rounded-full border border-[#d8b78f]/40 bg-[#f4eee5]/5 shadow-[0_0_35px_rgba(216,183,143,0.16)]" />
          <span className="text-xs font-semibold uppercase tracking-[0.34em] text-[#f4eee5]/80">
            {artist.name}
          </span>
        </a>
        <div className="hidden items-center gap-8 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#f4eee5]/58 md:flex">
          <a className="transition hover:text-[#f4eee5]" href="#work">
            Work
          </a>
          <a className="transition hover:text-[#f4eee5]" href="#artist">
            Artist
          </a>
          <a className="transition hover:text-[#f4eee5]" href="#process">
            Process
          </a>
          <a className="transition hover:text-[#f4eee5]" href="#booking">
            Booking
          </a>
        </div>
        <a
          href="#booking"
          className="rounded-full border border-[#d8b78f]/35 bg-[#d8b78f]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f4eee5] transition hover:border-[#d8b78f] hover:bg-[#d8b78f] hover:text-[#100d0b]"
        >
          Inquire
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen px-5 pb-20 pt-28 sm:px-8 lg:px-10">
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/75 to-transparent" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 pt-10 lg:pt-20"
        >
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.42em] text-[#d8b78f]">
            Private tattoo studio / {artist.city}
          </p>
          <h1 className="font-editorial max-w-4xl text-6xl font-semibold leading-[0.88] tracking-[-0.06em] text-[#f7efe5] sm:text-7xl md:text-8xl lg:text-[8.6rem]">
            Custom tattoos with intention, detail, and soul.
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#d8d0c5]/76 sm:text-lg">
            Fine line, illustrative, and meaningful tattoo work designed around your story,
            your body, and your aesthetic.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton href="#booking">Book a consultation</PrimaryButton>
            <SecondaryButton href="#work">View work</SecondaryButton>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 border-y border-[#f4eee5]/10 py-5 text-center sm:text-left">
            {["Fine line", "Custom only", "By appointment"].map((item) => (
              <div key={item} className="border-r border-[#f4eee5]/10 last:border-r-0 sm:px-5">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#f4eee5]/42">
                  Studio note
                </p>
                <p className="mt-2 text-sm text-[#f4eee5]/82">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-[560px] lg:mr-0 lg:pt-14"
        >
          <div className="absolute -left-6 top-1/3 z-20 hidden rounded-full border border-[#f4eee5]/12 bg-[#0f0d0b]/80 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#f4eee5]/78 shadow-2xl backdrop-blur md:block">
            Custom designs
          </div>
          <div className="absolute -right-3 top-16 z-20 rounded-full border border-[#d8b78f]/25 bg-[#d8b78f]/12 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#f4eee5]/78 shadow-2xl backdrop-blur">
            Private studio
          </div>
          <div className="absolute bottom-16 left-5 z-20 rounded-full border border-[#f4eee5]/12 bg-black/45 px-4 py-3 text-xs uppercase tracking-[0.2em] text-[#f4eee5]/78 shadow-2xl backdrop-blur">
            {artist.city} based
          </div>

          <div className="relative overflow-hidden rounded-[2.2rem] border border-[#f4eee5]/12 bg-[#15110f] p-3 shadow-[0_35px_120px_rgba(0,0,0,0.55)]">
            <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_18%_10%,rgba(255,255,255,0.22),transparent_22%),linear-gradient(180deg,rgba(0,0,0,0.08),rgba(0,0,0,0.7))]" />
            <img
              // Replace with a vertical hero photo of the artist's tattoo work.
              src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?auto=format&fit=crop&w=1200&q=90"
              alt="Close-up placeholder of fine line tattoo work"
              className="h-[620px] w-full rounded-[1.65rem] object-cover grayscale-[20%] saturate-[0.8]"
            />
          </div>

          <div className="absolute -bottom-8 -right-8 -z-10 h-52 w-52 rounded-full bg-[#8d2f2b]/30 blur-3xl" />
          <div className="absolute -left-10 top-16 -z-10 h-72 w-72 rounded-full bg-[#d8b78f]/10 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}

function Portfolio({ activeFilter, filteredPortfolio, setActiveFilter }) {
  return (
    <Section id="work" className="pt-12">
      <SectionHeader eyebrow="Portfolio" title="Selected Work" align="between">
        <p className="max-w-xl text-sm leading-7 text-[#d8d0c5]/68">
          A quiet collection of custom pieces, composed for skin, scale, and personal meaning.
        </p>
      </SectionHeader>

      <div className="mb-10 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] transition ${
              activeFilter === filter
                ? "border-[#d8b78f] bg-[#d8b78f] text-[#0d0a08]"
                : "border-[#f4eee5]/12 bg-[#f4eee5]/5 text-[#f4eee5]/58 hover:border-[#f4eee5]/35 hover:text-[#f4eee5]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="columns-1 gap-5 sm:columns-2 lg:columns-3">
        <AnimatePresence mode="popLayout">
          {filteredPortfolio.map((item) => (
            <PortfolioCard key={item.title} item={item} />
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

function PortfolioCard({ item }) {
  return (
    <motion.article
      layout
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      exit={{ opacity: 0, y: 18 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="group mb-5 break-inside-avoid overflow-hidden rounded-[1.7rem] border border-[#f4eee5]/10 bg-[#f4eee5]/[0.035] p-2 shadow-[0_20px_70px_rgba(0,0,0,0.26)]"
    >
      <div className={`relative overflow-hidden rounded-[1.25rem] ${item.aspect}`}>
        <img
          src={item.image}
          alt={`${item.title} placeholder`}
          className="h-full w-full object-cover opacity-[0.88] grayscale-[18%] saturate-[0.82] transition duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/18 to-transparent" />
        <div className="absolute left-4 top-4 rounded-full border border-[#f4eee5]/14 bg-black/35 px-3 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#f4eee5]/82 backdrop-blur">
          {item.tag}
        </div>
        <div className="absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <p className="font-editorial text-2xl font-semibold text-[#fff8ef]">{item.title}</p>
          <p className="mt-2 text-sm leading-6 text-[#e6dcd0]/74">{item.caption}</p>
        </div>
      </div>
    </motion.article>
  );
}

function ArtistStory() {
  return (
    <Section id="artist" className="py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
        <FadeIn className="relative">
          <div className="absolute -left-8 -top-8 h-44 w-44 rounded-full bg-[#d8b78f]/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[#f4eee5]/10 bg-[#15110f] p-3">
            <img
              // Replace with a warm portrait or studio process image of the artist.
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1100&q=86"
              alt="Artist studio portrait placeholder"
              className="h-[560px] w-full rounded-[1.45rem] object-cover grayscale-[25%] saturate-[0.72]"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.42em] text-[#d8b78f]">
            Meet the Artist
          </p>
          <h2 className="font-editorial text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-[#fff8ef] sm:text-6xl md:text-7xl">
            Tattoos that feel personal before they feel decorative.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-[#d8d0c5]/76">
            I design tattoos that feel personal before they feel decorative. Every piece
            starts with a conversation, your references, your story, and the feeling you
            want to carry with you.
          </p>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}

function SignatureStyles() {
  return (
    <Section className="py-20">
      <SectionHeader eyebrow="Approach" title="Signature Styles">
        <p className="max-w-xl text-sm leading-7 text-[#d8d0c5]/68">
          Refined tattoo work with enough restraint to age beautifully and enough edge to
          feel unmistakably yours.
        </p>
      </SectionHeader>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {styles.map((style, index) => (
          <StyleCard key={style.title} index={index} {...style} />
        ))}
      </div>
    </Section>
  );
}

function Process() {
  return (
    <Section id="process" className="py-20">
      <SectionHeader eyebrow="Process" title="How it works" align="between">
        <p className="max-w-lg text-sm leading-7 text-[#d8d0c5]/68">
          A clear path from first idea to healed piece, with thoughtful communication at
          every step.
        </p>
      </SectionHeader>

      <div className="relative">
        <div className="absolute left-4 top-8 hidden h-[calc(100%-4rem)] w-px bg-gradient-to-b from-[#d8b78f]/0 via-[#d8b78f]/45 to-[#d8b78f]/0 md:block" />
        <div className="grid gap-4">
          {processSteps.map((step, index) => (
            <ProcessStep key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function Booking({ onSubmit, submitted }) {
  return (
    <section
      id="booking"
      className="relative mx-3 my-20 overflow-hidden rounded-[2rem] border border-[#d8b78f]/18 bg-[#120f0d] px-5 py-16 shadow-[0_35px_120px_rgba(0,0,0,0.42)] sm:mx-6 sm:px-8 lg:mx-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_0%,rgba(216,183,143,0.18),transparent_28%),radial-gradient(circle_at_90%_18%,rgba(112,36,32,0.34),transparent_25%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr]">
        <FadeIn>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.42em] text-[#d8b78f]">
            Booking
          </p>
          <h2 className="font-editorial text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-[#fff8ef] sm:text-6xl md:text-7xl">
            Start your tattoo request
          </h2>
          <p className="mt-7 max-w-md text-base leading-8 text-[#d8d0c5]/72">
            Share the shape of the idea. The goal is not to have everything solved - just
            enough detail to begin designing with care.
          </p>
          <div className="mt-10 rounded-[1.5rem] border border-[#f4eee5]/10 bg-black/20 p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#f4eee5]/44">
              Response note
            </p>
            <p className="mt-3 text-sm leading-7 text-[#f4eee5]/72">
              Custom tattoo work by appointment only. For urgent scheduling, email{" "}
              <a className="text-[#d8b78f] underline-offset-4 hover:underline" href={`mailto:${artist.email}`}>
                {artist.email}
              </a>
              .
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.12}>
          <form
            onSubmit={onSubmit}
            className="rounded-[1.7rem] border border-[#f4eee5]/12 bg-[#080706]/76 p-4 shadow-2xl backdrop-blur md:p-7"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Input label="Name" name="name" placeholder="Your name" required />
              <Input label="Email" name="email" type="email" placeholder="you@email.com" required />
              <Input label="Phone optional" name="phone" placeholder="+1 555 000 0000" />
              <Input label="Placement" name="placement" placeholder="Inner arm, ribs, ankle..." />
              <Input label="Approximate size" name="size" placeholder="2 inches, palm size..." />
              <Select
                label="Preferred style"
                name="style"
                options={["Fine Line", "Floral", "Script", "Illustrative", "Blackwork", "Not sure yet"]}
              />
              <Select
                label="Budget range"
                name="budget"
                options={["$150 - $300", "$300 - $600", "$600 - $1,000", "$1,000+", "Need guidance"]}
              />
              <Input label="Preferred dates" name="dates" placeholder="Weekends, late June..." />
              <Textarea
                label="Tattoo idea"
                name="idea"
                placeholder="Tell me what you want to carry, where it should live, and what it should feel like."
              />
              <div className="md:col-span-2">
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-2xl border border-dashed border-[#f4eee5]/18 bg-[#f4eee5]/5 px-4 py-4 text-left text-sm text-[#f4eee5]/66 transition hover:border-[#d8b78f]/60 hover:bg-[#d8b78f]/8"
                >
                  <span>Upload references placeholder</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#d8b78f]">Browse</span>
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-[#f4eee5] px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-[#100d0b] shadow-[0_18px_60px_rgba(216,183,143,0.22)] transition hover:bg-[#d8b78f]"
            >
              Send request
            </button>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  className="mt-5 rounded-2xl border border-[#d8b78f]/35 bg-[#d8b78f]/12 px-4 py-4 text-sm leading-6 text-[#f7efe5]"
                >
                  Request received. The artist will review your idea and follow up soon.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <Section className="py-20">
      <SectionHeader eyebrow="Client words" title="Words from clients" />
      <div className="grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <FadeIn key={testimonial.name} delay={index * 0.08}>
            <article className="h-full rounded-[1.5rem] border border-[#f4eee5]/10 bg-[#f4eee5]/[0.035] p-7">
              <p className="font-editorial text-3xl leading-tight text-[#fff8ef]">"</p>
              <p className="mt-1 text-base leading-8 text-[#d8d0c5]/78">{testimonial.quote}</p>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.24em] text-[#d8b78f]">
                {testimonial.name}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function FAQ({ openFaq, setOpenFaq }) {
  return (
    <Section className="py-20">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <FadeIn>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.42em] text-[#d8b78f]">
            Before you book
          </p>
          <h2 className="font-editorial text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-[#fff8ef] sm:text-6xl">
            Clear answers for the first step.
          </h2>
        </FadeIn>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openFaq === index}
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="px-3 pb-8 sm:px-6 lg:px-10">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.4rem] border border-[#f4eee5]/12 bg-[#11100e] px-6 py-24 text-center shadow-[0_35px_120px_rgba(0,0,0,0.45)] sm:px-10">
        <img
          // Replace with a moody healed-tattoo or studio-light background image.
          src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=1800&q=88"
          alt="Abstract tattoo studio background placeholder"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.22] grayscale"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(216,183,143,0.16),transparent_30%),linear-gradient(180deg,rgba(7,6,5,0.62),rgba(7,6,5,0.92))]" />
        <FadeIn className="relative mx-auto max-w-4xl">
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.42em] text-[#d8b78f]">
            The next mark
          </p>
          <h2 className="font-editorial text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-[#fff8ef] sm:text-6xl md:text-7xl">
            Ready to turn your idea into something permanent?
          </h2>
          <div className="mt-10 flex justify-center">
            <PrimaryButton href="#booking">Book a consultation</PrimaryButton>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-[#f4eee5]/10 pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-editorial text-4xl font-semibold text-[#fff8ef]">{artist.name}</p>
          <p className="mt-3 text-sm text-[#f4eee5]/54">Custom tattoo work by appointment only.</p>
          <p className="mt-2 text-sm text-[#f4eee5]/44">Studio location: {artist.city}</p>
        </div>
        <div className="flex flex-col gap-3 text-sm text-[#f4eee5]/58 md:items-end">
          <div className="flex flex-wrap gap-4">
            <a href="https://instagram.com" className="transition hover:text-[#d8b78f]">
              Instagram {artist.instagram}
            </a>
            <a href="https://tiktok.com" className="transition hover:text-[#d8b78f]">
              TikTok {artist.tiktok}
            </a>
            <a href={`mailto:${artist.email}`} className="transition hover:text-[#d8b78f]">
              {artist.email}
            </a>
          </div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#f4eee5]/34">
            Copyright {new Date().getFullYear()} {artist.name}
          </p>
        </div>
      </div>
    </footer>
  );
}

function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`px-5 sm:px-8 lg:px-10 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function SectionHeader({ eyebrow, title, children, align = "start" }) {
  return (
    <FadeIn
      className={`mb-10 ${
        align === "between"
          ? "flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          : ""
      }`}
    >
      <div>
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.42em] text-[#d8b78f]">
          {eyebrow}
        </p>
        <h2 className="font-editorial text-5xl font-semibold leading-[0.95] tracking-[-0.045em] text-[#fff8ef] sm:text-6xl md:text-7xl">
          {title}
        </h2>
      </div>
      {children}
    </FadeIn>
  );
}

function FadeIn({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function PrimaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full bg-[#f4eee5] px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-[#100d0b] shadow-[0_18px_60px_rgba(216,183,143,0.2)] transition hover:-translate-y-0.5 hover:bg-[#d8b78f] hover:shadow-[0_24px_70px_rgba(216,183,143,0.28)]"
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-[#f4eee5]/16 bg-[#f4eee5]/5 px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-[#f4eee5] transition hover:-translate-y-0.5 hover:border-[#d8b78f]/70 hover:bg-[#d8b78f]/10"
    >
      {children}
    </a>
  );
}

function ValueCard({ title, text }) {
  return (
    <article className="rounded-[1.25rem] border border-[#f4eee5]/10 bg-[#f4eee5]/[0.035] p-5">
      <div className="mb-5 h-px w-14 bg-[#d8b78f]/60" />
      <h3 className="font-editorial text-2xl font-semibold text-[#fff8ef]">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-[#d8d0c5]/66">{text}</p>
    </article>
  );
}

function StyleCard({ title, text, index }) {
  return (
    <FadeIn delay={index * 0.06}>
      <article className="group relative h-full overflow-hidden rounded-[1.55rem] border border-[#f4eee5]/10 bg-[#f4eee5]/[0.035] p-7 transition duration-500 hover:-translate-y-1 hover:border-[#d8b78f]/30 hover:bg-[#f4eee5]/[0.055]">
        <div className="absolute right-5 top-5 h-20 w-20 rounded-full border border-[#d8b78f]/15 transition group-hover:scale-110" />
        <div className="relative mb-12 h-12 w-20">
          <span className="absolute left-0 top-5 h-px w-20 rotate-[-12deg] bg-[#d8b78f]/70" />
          <span className="absolute left-3 top-7 h-px w-14 rotate-[16deg] bg-[#f4eee5]/24" />
        </div>
        <h3 className="font-editorial text-3xl font-semibold leading-tight text-[#fff8ef]">{title}</h3>
        <p className="mt-5 text-sm leading-7 text-[#d8d0c5]/68">{text}</p>
      </article>
    </FadeIn>
  );
}

function ProcessStep({ step, index }) {
  return (
    <FadeIn delay={index * 0.06}>
      <article className="relative grid gap-5 rounded-[1.45rem] border border-[#f4eee5]/10 bg-[#f4eee5]/[0.035] p-5 transition hover:border-[#d8b78f]/28 md:grid-cols-[6rem_1fr] md:p-7 md:pl-14">
        <div className="absolute left-3 top-8 hidden h-3 w-3 rounded-full bg-[#d8b78f] shadow-[0_0_0_8px_rgba(216,183,143,0.08)] md:block" />
        <p className="font-editorial text-5xl font-semibold leading-none text-[#d8b78f]/80">
          {step.number}
        </p>
        <div>
          <h3 className="font-editorial text-3xl font-semibold text-[#fff8ef]">{step.title}</h3>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#d8d0c5]/68">{step.text}</p>
        </div>
      </article>
    </FadeIn>
  );
}

function Input({ label, name, type = "text", placeholder, required = false }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#f4eee5]/44">
        {label}
      </span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl border border-[#f4eee5]/10 bg-[#f4eee5]/[0.045] px-4 py-3.5 text-sm text-[#fff8ef] outline-none transition placeholder:text-[#f4eee5]/28 focus:border-[#d8b78f]/65 focus:bg-[#f4eee5]/[0.07]"
      />
    </label>
  );
}

function Select({ label, name, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#f4eee5]/44">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="w-full rounded-2xl border border-[#f4eee5]/10 bg-[#15110f] px-4 py-3.5 text-sm text-[#fff8ef] outline-none transition focus:border-[#d8b78f]/65"
      >
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

function Textarea({ label, name, placeholder }) {
  return (
    <label className="block md:col-span-2">
      <span className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#f4eee5]/44">
        {label}
      </span>
      <textarea
        name={name}
        placeholder={placeholder}
        rows="5"
        className="w-full resize-none rounded-2xl border border-[#f4eee5]/10 bg-[#f4eee5]/[0.045] px-4 py-3.5 text-sm leading-7 text-[#fff8ef] outline-none transition placeholder:text-[#f4eee5]/28 focus:border-[#d8b78f]/65 focus:bg-[#f4eee5]/[0.07]"
      />
    </label>
  );
}

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <FadeIn>
      <article className="overflow-hidden rounded-[1.3rem] border border-[#f4eee5]/10 bg-[#f4eee5]/[0.035]">
        <button
          type="button"
          onClick={onClick}
          className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left"
          aria-expanded={isOpen}
        >
          <span className="font-editorial text-2xl font-semibold text-[#fff8ef]">{faq.question}</span>
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#f4eee5]/12 text-[#d8b78f]">
            {isOpen ? "-" : "+"}
          </span>
        </button>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <p className="px-5 pb-5 text-sm leading-7 text-[#d8d0c5]/68">{faq.answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </FadeIn>
  );
}

export default App;
