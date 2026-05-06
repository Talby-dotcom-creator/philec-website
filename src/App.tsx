import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Check,
  ChevronDown,
  Clock3,
  Factory,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Why Philec", href: "#why-philec" },
  { label: "Areas Covered", href: "#areas" },
  { label: "Contact", href: "#contact" },
];

const trustCards = [
  { title: "NAPIT Approved", icon: BadgeCheck },
  { title: "20+ Years' Experience", icon: Clock3 },
  { title: "Fully Insured", icon: ShieldCheck },
  { title: "Local Hertfordshire Electrician", icon: MapPin },
];

const services = [
  {
    title: "Domestic Electrical Work",
    description:
      "Reliable help for homes, from repairs and lighting upgrades to consumer units, inspection and testing.",
    icon: Home,
    points: ["Repairs and fault finding", "Lighting and sockets", "Testing and upgrades"],
  },
  {
    title: "Commercial Electrical Services",
    description:
      "Practical electrical installation, inspection and maintenance for shops, offices, landlords and local businesses.",
    icon: Building2,
    points: ["Installations and inspection", "Maintenance support", "Landlord and business work"],
  },
  {
    title: "Industrial Electrical Work",
    description:
      "Straightforward electrical support for industrial premises, including testing, maintenance and remedial work.",
    icon: Factory,
    points: ["Installation and testing", "Maintenance and remedials", "Practical site support"],
  },
];

const features = [
  "Established local electrical contractor",
  "Clear, honest advice",
  "Safe and compliant workmanship",
  "Domestic, commercial and industrial experience",
  "Tidy, professional finish",
  "Easy to contact directly",
];

const areas = [
  "Hemel Hempstead",
  "Watford",
  "St Albans",
  "Berkhamsted",
  "Kings Langley",
  "Abbots Langley",
  "Radlett",
  "Bushey",
  "Hertfordshire",
];

import LogoSvg from "./logo.svg";

function Logo() {
  return (
    <a href="#top" className="group flex min-w-0 flex-1 items-center gap-3 sm:gap-4 lg:flex-none" aria-label="PHILEC home">
      <span className="relative grid h-12 w-12 shrink-0 place-items-center overflow-hidden border border-slate-200 bg-white shadow-[0_14px_36px_rgba(15,23,42,0.1)] sm:h-14 sm:w-14">
        <img
          src={LogoSvg}
          alt="PHILEC logo"
          className="relative h-9 w-9 drop-shadow-sm sm:h-10 sm:w-10"
        />
      </span>
      <span className="min-w-0 leading-none">
        <span className="block font-display text-xl font-extrabold tracking-[0.14em] text-navy transition group-hover:text-blue-600 sm:text-2xl sm:tracking-[0.16em]">
          PHILEC
        </span>
        <span className="mt-1.5 block truncate text-[0.58rem] font-bold uppercase tracking-[0.14em] text-slate-500 min-[390px]:text-[0.64rem] sm:mt-2 sm:text-[0.69rem] sm:tracking-[0.2em]">
          Phil Rees Electrical Contractor
        </span>
      </span>
    </a>
  );
}

function ButtonLink({
  children,
  href,
  variant = "primary",
  className = "",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "dark";
  className?: string;
}) {
  const styles = {
    primary: "bg-gold text-navy hover:bg-white hover:text-navy",
    secondary: "border border-blue-200 bg-white text-navy hover:border-blue-600 hover:text-blue-600",
    dark: "bg-navy text-white hover:bg-blue-600 hover:text-white",
  };

  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 px-5 py-3 text-sm font-bold transition ${styles[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-5 lg:flex xl:gap-8" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-slateBody transition hover:text-blue-600">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 xl:flex">
          <ButtonLink href="tel:07863327300" variant="dark">
            <Phone size={16} aria-hidden="true" />
            Call Phil
          </ButtonLink>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center border border-slate-200 bg-white text-navy shadow-sm transition hover:border-blue-600 hover:text-blue-600 lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 pb-5 pt-3 shadow-premium lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="min-h-11 px-2 py-3 text-base font-semibold text-navy"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <ButtonLink href="tel:07863327300" variant="dark" className="mt-2">
              <Phone size={16} aria-hidden="true" />
              Call Phil
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-gradient-to-br from-white via-soft to-blue-50 pt-24 text-navy sm:pt-32 lg:pt-36">
      <div className="electrical-grid absolute inset-0 opacity-90" aria-hidden="true" />
      <div className="line-pattern absolute inset-0 opacity-80" aria-hidden="true" />
      <div className="absolute right-[8%] top-28 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-blue-500/35 to-transparent" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-8 px-4 pb-14 sm:gap-10 sm:px-6 sm:pb-20 lg:grid-cols-[1.02fr_0.78fr] lg:items-center lg:px-8 lg:pb-24">
        <div className="min-w-0 max-w-4xl">
          <motion.p
            initial={false}
            className="mb-4 inline-flex max-w-full items-center gap-2 border border-blue-200 bg-white px-3 py-2 text-[0.66rem] font-bold uppercase tracking-[0.1em] text-blue-600 shadow-sm sm:mb-5 sm:text-xs sm:tracking-[0.22em]"
          >
            <Sparkles size={14} aria-hidden="true" />
            <span className="truncate sm:hidden">Direct Service • Hemel Based</span>
            <span className="hidden sm:inline">Direct Personal Service • Hemel Hempstead Based</span>
          </motion.p>
          <motion.h1
            initial={false}
            className="font-display text-[2.05rem] font-extrabold leading-[1.06] tracking-normal text-navy min-[390px]:text-[2.16rem] sm:text-[3.35rem] md:text-[3.65rem] lg:text-[4.05rem]"
          >
            Electrical work done properly — by the person you speak to.
          </motion.h1>
          <motion.p
            initial={false}
            className="mt-4 flex items-center gap-2 text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-slate-500 sm:mt-5 sm:text-sm sm:tracking-[0.18em]"
          >
            <MapPin size={16} className="text-blue-600" aria-hidden="true" />
            <span className="truncate">Hemel Hempstead • Watford • Hertfordshire</span>
          </motion.p>
          <motion.p
            initial={false}
            className="mt-5 max-w-3xl text-base leading-7 text-slateBody sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl"
          >
            PHILEC is run by Phil Rees, a local electrical contractor providing domestic, commercial and
            industrial electrical services across Hemel Hempstead, Watford and Hertfordshire.
          </motion.p>
          <motion.p
            initial={false}
            className="mt-5 block max-w-full border-l-2 border-blue-600 bg-white px-4 py-3 text-sm font-extrabold leading-6 text-navy shadow-sm sm:inline-block sm:px-5 sm:text-base sm:leading-7"
          >
            No call centres. No confusing handovers. Speak directly to Phil.
          </motion.p>
          <motion.div
            initial={false}
            className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row"
          >
            <ButtonLink href="tel:07863327300" className="w-full shadow-[0_18px_44px_rgba(212,160,23,0.2)] sm:w-auto">
              <Phone size={18} aria-hidden="true" />
              Call 07863 327300
            </ButtonLink>
            <ButtonLink href="#contact" variant="dark" className="w-full sm:w-auto">
              Request a Quote
              <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
          </motion.div>
          <motion.div
            initial={false}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm font-semibold text-slateBody sm:mt-12"
          >
            {["NAPIT Approved", "20+ Years' Experience", "Domestic", "Commercial", "Industrial"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 bg-blue-600" aria-hidden="true" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={false}
          className="relative block min-w-0"
          aria-label="PHILEC service summary"
        >
          <div className="absolute -left-3 top-7 hidden h-32 w-32 border border-blue-200 sm:block lg:-left-6 lg:top-10 lg:h-40 lg:w-40" aria-hidden="true" />
          <div className="relative border border-slate-200 bg-white p-5 shadow-premium sm:p-7 lg:p-8">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-slate-200 pb-5 sm:mb-8 sm:pb-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">PHILEC</p>
                <p className="mt-2 font-display text-2xl font-extrabold text-navy sm:text-3xl">Phil Rees</p>
              </div>
              <span className="grid h-12 w-12 shrink-0 place-items-center bg-blue-50 text-blue-600 sm:h-14 sm:w-14">
                <ShieldCheck size={28} aria-hidden="true" />
              </span>
            </div>
            <div className="space-y-3 sm:space-y-4">
              {["Local Hertfordshire electrician", "Domestic, commercial and industrial", "Work carried out safely and to current standards", "Call, email or request a quote directly"].map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center bg-blue-50 text-blue-600">
                    <Check size={15} aria-hidden="true" />
                  </span>
                  <p className="font-semibold leading-7 text-slateBody">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 bg-soft p-4 sm:mt-9 sm:p-5">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500 sm:text-sm sm:tracking-[0.18em]">Speak directly to Phil</p>
              <a href="tel:07863327300" className="mt-2 flex min-h-11 items-center gap-3 font-display text-xl font-extrabold text-navy hover:text-blue-600 sm:text-2xl">
                <Phone size={22} aria-hidden="true" />
                07863 327300
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section aria-label="Trust points" className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-7 min-[414px]:grid-cols-2 sm:gap-4 sm:px-6 sm:py-8 lg:grid-cols-4 lg:px-8">
        {trustCards.map(({ title, icon: Icon }) => (
          <div key={title} className="flex min-h-[88px] items-center gap-3 border border-slate-200 bg-white p-4 shadow-sm sm:gap-4 sm:p-5">
            <span className="grid h-11 w-11 shrink-0 place-items-center bg-blue-50 text-blue-600">
              <Icon size={21} aria-hidden="true" />
            </span>
            <p className="font-display text-sm font-extrabold leading-5 text-navy sm:text-base">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-soft py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="section-kicker">Services</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-navy sm:text-5xl">Electrical services for homes, businesses and industrial premises.</h2>
        </div>
        <div className="mt-9 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map(({ title, description, icon: Icon, points }, index) => (
            <motion.article
              key={title}
              whileHover={reduceMotion ? undefined : { y: -6 }}
              transition={reduceMotion ? undefined : { type: "spring", stiffness: 260, damping: 22 }}
              className={`group flex h-full flex-col border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-premium sm:p-6 lg:p-7 ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="mb-6 flex items-center justify-between sm:mb-8">
                <span className="grid h-12 w-12 place-items-center bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white sm:h-14 sm:w-14">
                  <Icon size={25} aria-hidden="true" />
                </span>
                <Zap className="text-slate-200 transition group-hover:text-blue-500" size={22} aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-extrabold text-navy sm:text-2xl">{title}</h3>
              <p className="mt-4 leading-7 text-slateBody">{description}</p>
              <ul className="mt-6 space-y-3">
                {points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm font-semibold text-slateBody">
                    <Check className="mt-0.5 shrink-0 text-blue-600" size={17} aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-extrabold text-navy transition hover:text-blue-600">
                Discuss this service
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyPhilec() {
  return (
    <section id="why-philec" className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-9 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div>
          <p className="section-kicker">Why PHILEC</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-navy sm:text-5xl">
            Electrical work done properly, with experience you can trust.
          </h2>
          <p className="mt-5 text-base leading-7 text-slateBody sm:mt-6 sm:text-lg sm:leading-8">
            Choosing an electrician is about more than price. You need someone reliable, properly qualified,
            insured and trusted to work safely in your home or business. PHILEC combines over 20 years of
            experience with a straightforward, professional approach.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {features.map((feature) => (
            <div key={feature} className="flex min-h-[88px] items-start gap-4 border border-slate-200 bg-soft p-4 sm:p-5">
              <span className="grid h-9 w-9 shrink-0 place-items-center bg-white text-blue-600">
                <Check size={18} aria-hidden="true" />
              </span>
              <p className="font-bold leading-6 text-navy">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UrgentCallout() {
  return (
    <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border border-blue-200 bg-blue-50 p-5 sm:gap-8 sm:p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="section-kicker">Urgent faults</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-navy sm:text-4xl">Need an electrician urgently?</h2>
          <p className="mt-4 text-base leading-7 text-slateBody sm:text-lg sm:leading-8">
            If you have loss of power, tripping circuits, damaged fittings or an urgent electrical fault,
            contact Phil for advice.
          </p>
        </div>
        <ButtonLink href="tel:07863327300" className="w-full shrink-0 sm:w-auto">
          <Phone size={18} aria-hidden="true" />
          Call 07863 327300
        </ButtonLink>
      </div>
    </section>
  );
}

function AreasCovered() {
  return (
    <section id="areas" className="bg-soft py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="section-kicker">Areas Covered</p>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-navy sm:text-5xl">Local electrical contractor across Hertfordshire.</h2>
          </div>
          <p className="text-base leading-7 text-slateBody sm:text-lg sm:leading-8">
            Based in Hemel Hempstead, PHILEC serves homes and businesses across Hertfordshire and surrounding areas.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-2.5 sm:mt-10 sm:gap-3">
          {areas.map((area) => (
            <span key={area} className="border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-navy shadow-sm sm:px-4">
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div className="border border-slate-200 bg-white p-5 text-navy shadow-premium sm:p-10">
          <p className="section-kicker">Contact</p>
          <h2 className="font-display text-3xl font-extrabold leading-tight sm:text-5xl">Contact Phil Rees</h2>
          <p className="mt-5 text-base leading-7 text-slateBody sm:text-lg sm:leading-8">
            For electrical installations, testing, maintenance, repairs or urgent support, get in touch today.
          </p>
          <div className="mt-7 space-y-4 sm:mt-9 sm:space-y-5">
            <ContactLine icon={Zap} label="Website" href="http://www.philec.co.uk" value="www.philec.co.uk" />
            <ContactLine icon={Mail} label="Email" href="mailto:phil@philec.co.uk" value="phil@philec.co.uk" />
            <ContactLine icon={Phone} label="Telephone" href="tel:01442393595" value="01442 393595" />
            <ContactLine icon={Phone} label="Mobile" href="tel:07863327300" value="07863 327300" />
          </div>
        </div>

        <NetlifyContactForm />
      </div>
    </section>
  );
}

function ContactLine({
  icon: Icon,
  label,
  href,
  value,
}: {
  icon: typeof Phone;
  label: string;
  href: string;
  value: string;
}) {
  return (
    <a href={href} className="flex min-h-11 items-center gap-3 text-navy transition hover:text-blue-600 sm:gap-4">
      <span className="grid h-11 w-11 shrink-0 place-items-center bg-blue-50 text-blue-600">
        <Icon size={19} aria-hidden="true" />
      </span>
      <span>
        <span className="block text-xs font-bold uppercase tracking-[0.18em] text-slate-500">{label}</span>
        <span className="mt-1 block break-words font-semibold">{value}</span>
      </span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-navy pb-32 pt-10 text-white sm:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:px-8">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-[0.12em]">PHILEC</p>
          <p className="mt-2 text-sm font-semibold text-slate-300">Phil Rees Electrical Contractor</p>
          <p className="mt-5 text-sm text-slate-300">Domestic • Commercial • Industrial</p>
          <p className="mt-2 text-sm text-slate-300">Hemel Hempstead • Watford • Hertfordshire</p>
        </div>
        <div className="text-sm text-slate-300 lg:text-right">
          <p>
            <a className="hover:text-blue-300" href="mailto:phil@philec.co.uk">phil@philec.co.uk</a> •{" "}
            <a className="hover:text-blue-300" href="tel:07863327300">07863 327300</a>
          </p>
          <p className="mt-3">© {new Date().getFullYear()} PHILEC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className="pb-16 sm:pb-0">
        <Hero />
        <TrustBar />
        <Services />
        <WhyPhilec />
        <UrgentCallout />
        <AreasCovered />
        <Contact />
      </main>
      <Footer />
      <nav
        className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-[1fr_auto] border-t border-slate-200 bg-white/95 p-2 shadow-[0_-12px_40px_rgba(13,27,45,0.12)] backdrop-blur sm:hidden"
        aria-label="Quick contact"
      >
        <a
          href="tel:07863327300"
          className="flex min-h-11 items-center justify-center gap-2 bg-gold px-4 text-sm font-extrabold text-navy transition hover:bg-amber-300"
          aria-label="Call Phil on 07863 327300"
        >
          <Phone size={18} aria-hidden="true" />
          Call Phil
        </a>
        <a
          href="mailto:phil@philec.co.uk"
          className="ml-2 grid h-11 w-11 place-items-center border border-slate-200 bg-white text-blue-600 transition hover:border-blue-600"
          aria-label="Email Phil"
        >
          <Mail size={18} aria-hidden="true" />
        </a>
      </nav>
    </>
  );
}
