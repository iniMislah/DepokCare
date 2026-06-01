import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  Info,
  Menu,
  X,
  Clock,
  Zap,
  ShieldCheck,
  Wrench,
  Users,
  HeartPulse,
  Ambulance,
  MapPin,
  Star,
  ChevronDown,
  ChevronUp,
  BadgeCheck,
  DollarSign,
  Instagram,
  Facebook,
  Youtube,
  Send,
  ArrowRight,
  CheckCircle2,
  MessageSquare,
} from "lucide-react";
import heroImg from "@/assets/vvipmedis.jpeg";

const SITE_URL = "https://jabodetabekcare.netlify.app/";
const SITE_NAME = "Jabodetabek Care Ambulance";
const SITE_IMAGE = `${SITE_URL}images/LogoBrand.png`;
const SEO_TITLE =
  "Jabodetabek Care Ambulance | Sewa Ambulance & Ambulan Jabodetabek 24 Jam";
const SEO_DESCRIPTION =
  "Jabodetabek Care Ambulance melayani sewa ambulance, ambulan, dan ambulans 24 jam untuk Jabodetabek, Depok, Bogor, Kabupaten Bogor, Jakarta, Bekasi, dan Tangerang. Tersedia medical evakuasi, transport pasien, kontrol/check up, standby event, home care, mobil jenazah VVIP, peti jenazah, dan cargo jenazah.";
const SEO_KEYWORDS =
  "sewa ambulance jabodetabek, ambulance jabodetabek, ambulan jabodetabek, ambulans jabodetabek, mobil ambulance jabodetabek, ambulance depok, sewa ambulance depok, ambulan depok, ambulans depok, ambulance bogor, sewa ambulance bogor, ambulance kabupaten bogor, sewa ambulance kabupaten bogor, ambulance jakarta, ambulance bekasi, ambulance tangerang, ambulance 24 jam, ambulance medical evakuasi, ambulance evakuasi medis, ambulance vvip medis, ambulance transport pasien, transport pasien, pasien kontrol, check up pasien, standby event ambulance, ambulance standby event, home care, ambulance jenazah, mobil jenazah vvip, sewa mobil jenazah, peti jenazah, cargo jenazah, pengiriman jenazah";
const WA_PHONE_INTL = "628979455048";
const waLink = `https://wa.me/${WA_PHONE_INTL}`;
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  image: SITE_IMAGE,
  telephone: `+${WA_PHONE_INTL}`,
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "$$",
  areaServed: [
    "Jabodetabek",
    "Depok",
    "Kota Bogor",
    "Kabupaten Bogor",
    "Jakarta",
    "Bekasi",
    "Tangerang",
  ],
  serviceType: [
    "Ambulance medical evakuasi",
    "Ambulan transport pasien",
    "Ambulans 24 jam",
    "Pasien kontrol check up",
    "Standby event ambulance",
    "Home care",
    "Mobil jenazah VVIP",
    "Peti jenazah",
    "Cargo jenazah",
  ],
  description:
    "Layanan sewa ambulance, ambulan, dan ambulans 24 jam untuk wilayah Jabodetabek, Depok, Bogor, Kabupaten Bogor, Jakarta, Bekasi, dan Tangerang. Melayani medical evakuasi, transport pasien, kontrol/check up, standby event, home care, layanan kedukaan, mobil jenazah VVIP, peti jenazah, dan cargo jenazah.",
};

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: SEO_TITLE },
      {
        name: "description",
        content: SEO_DESCRIPTION,
      },
      { name: "keywords", content: SEO_KEYWORDS },
      { property: "og:title", content: SEO_TITLE },
      {
        property: "og:description",
        content:
          "Layanan ambulance, ambulan, dan ambulans 24 jam untuk Jabodetabek, Depok, Bogor, Kabupaten Bogor, Jakarta, Bekasi, dan Tangerang. Melayani medical evakuasi, transport pasien, standby event, home care, mobil jenazah, peti jenazah, dan cargo jenazah.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:image", content: SITE_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SEO_TITLE },
      {
        name: "twitter:description",
        content:
          "Sewa ambulance, ambulan, dan ambulans Jabodetabek 24 jam untuk medical evakuasi, transport pasien, standby event, home care, mobil jenazah, peti jenazah, dan cargo jenazah.",
      },
      { name: "twitter:image", content: SITE_IMAGE },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "icon", href: "/images/LogoBrand.png", type: "image/png" },
      { rel: "apple-touch-icon", href: "/images/LogoBrand.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(structuredData),
      },
    ],
  }),
});

const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Armada", href: "#armada" },
  { label: "Area Layanan", href: "#area" },
  { label: "Driver", href: "#driver" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
];

function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#beranda" className="flex items-center gap-3">
      <img src="/images/LogoBrand.png" alt="Logo Jabodetabek Care Ambulance" className="h-16 w-16 rounded-xl" />
      <div className="leading-tight">
        <div className={`text-xl font-bold tracking-tight ${light ? "text-white" : "text-foreground"}`}>Jabodetabek Care</div>
        <div className={`text-xs font-medium uppercase tracking-[0.15em] ${light ? "text-white/60" : "text-muted-foreground"}`}>
          Ambulance
        </div>
      </div>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* Top Bar / Social Media Bar */}
      <div className="bg-gradient-to-r from-[#0369A1] to-[#0284C7] text-white text-[11px] font-semibold py-2.5 px-4 lg:px-8 border-b border-[#0284C7]/20 relative z-50">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="hidden sm:inline">24 Jam Siaga &bull; Homebase Kab Bogor &bull; Melayani Jabodetabek</span>
            <span className="sm:hidden">24 Jam &bull; Kab Bogor &amp; Jabodetabek</span>
          </div>
          <div className="hidden sm:flex items-center gap-3.5">
            <span className="text-white/80">Follow Us:</span>
            <div className="flex items-center gap-2">
              <a href="#" className="hover:text-[#EAF4FF] transition-colors" aria-label="Instagram">
                <Instagram className="h-3.5 w-3.5" />
              </a>
              <span className="h-3 w-px bg-white/20" />
              <a href="#" className="hover:text-[#EAF4FF] transition-colors" aria-label="Facebook">
                <Facebook className="h-3.5 w-3.5" />
              </a>
              <span className="h-3 w-px bg-white/20" />
              <a href="#" className="hover:text-[#EAF4FF] transition-colors" aria-label="Telegram">
                <Send className="h-3.5 w-3.5" />
              </a>
              <span className="h-3 w-px bg-white/20" />
              <a href="#" className="hover:text-[#EAF4FF] transition-colors" aria-label="YouTube">
                <Youtube className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:h-20 lg:px-8">
          {/* Mobile hamburger left */}
          <button
            onClick={() => setOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-card/60 text-foreground transition hover:bg-accent lg:hidden"
            aria-label="Buka menu"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div className="hidden lg:block">
            <Logo />
          </div>
          <div className="lg:hidden">
            <Logo />
          </div>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-accent hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-xl bg-whatsapp px-4 py-2.5 text-sm font-semibold text-whatsapp-foreground shadow-[0_8px_20px_-6px_oklch(0.65_0.17_150/0.5)] transition hover:opacity-90 lg:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Hubungi WhatsApp
          </a>

          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-whatsapp text-whatsapp-foreground shadow-[0_8px_20px_-6px_oklch(0.65_0.17_150/0.5)] lg:hidden"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-foreground/30 backdrop-blur-md transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <aside
          className={`absolute left-0 top-0 h-full w-[82%] max-w-sm border-r border-white/40 bg-white/70 p-6 shadow-2xl backdrop-blur-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between">
            <Logo />
            <button
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/60 bg-card/60"
              aria-label="Tutup"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-1">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-foreground/90 transition hover:bg-primary/10 hover:text-primary"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-whatsapp px-4 py-3.5 text-sm font-semibold text-whatsapp-foreground shadow-lg"
          >
            <MessageCircle className="h-4 w-4" />
            Hubungi WhatsApp
          </a>
          <p className="mt-6 text-xs text-muted-foreground">
            Siaga 24 jam & Jabodetabek
          </p>
        </aside>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-surface">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Ambulance VVIP medis Jabodetabek Care" className="h-full w-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/40 to-transparent md:from-white/75 md:via-white/45 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-16 md:py-24 lg:py-32">
        <div className="max-w-2xl">
          <div className="mb-6 flex flex-wrap gap-2">
            {[
              { i: Clock, t: "24 Jam Siaga" },
              { i: HeartPulse, t: "Respon Cepat" },
              { i: ShieldCheck, t: "Aman & Nyaman" },
            ].map(({ i: Icon, t }) => (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-[#DCEBFA] bg-white/90 px-3 py-1.5 text-xs font-semibold text-[#0F172A] shadow-sm backdrop-blur"
              >
                <Icon className="h-3.5 w-3.5 text-primary" /> {t}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-extrabold leading-[1.05] text-[#0F172A] sm:text-5xl lg:text-6xl">
            Layanan Ambulance{" "}
            <span className="text-primary">24 Jam</span> untuk Area{" "}
            <span className="text-primary">Jabodetabek</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#475569] sm:text-lg">
            Jabodetabek Care Ambulance melayani sewa ambulance, ambulan, dan ambulans 24 jam untuk medical evakuasi, transport pasien, kontrol/check up, standby event, home care, mobil jenazah VVIP, peti jenazah, dan cargo jenazah.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-glow px-6 py-3.5 font-semibold text-white shadow-xl shadow-primary/30 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <MessageCircle className="h-5 w-5" /> Pesan Sekarang
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center gap-2 rounded-xl border border-[#DCEBFA] bg-white px-6 py-3.5 font-semibold text-[#0F172A] transition-all hover:border-primary hover:text-primary"
            >
              Lihat Layanan <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {[
              { i: Clock, t: "Respon <= 10 menit" },
              { i: BadgeCheck, t: "Tim Berpengalaman" },
              { i: ShieldCheck, t: "24/7 Siaga" },
            ].map(({ i: Icon, t }) => (
              <div
                key={t}
                className="flex items-center gap-2 rounded-xl border border-[#DCEBFA] bg-white/90 px-3 py-3 shadow-sm backdrop-blur"
              >
                <Icon className="h-4 w-4 shrink-0 text-primary" />
                <span className="text-xs font-semibold leading-tight text-[#0F172A]">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickContact() {
  const items = [
    {
      icon: Phone,
      title: "Telepon Booking",
      value: "0898-7593-648",
      sub: "Hotline Operasional 24 Jam",
      href: "tel:+628987593648",
      tone: "primary",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Reservasi",
      value: "0897-9455-048",
      sub: "Respon Cepat < 5 Menit",
      href: waLink,
      tone: "whatsapp",
    },
    {
      icon: Info,
      title: "Info Layanan",
      value: "Konsultasi via WhatsApp",
      sub: "Konsultasi & Estimasi Tarif",
      href: waLink,
      tone: "accent",
    },
  ];

  return (
    <section id="kontak" className="relative z-20 mx-auto -mt-10 max-w-7xl px-4 lg:-mt-16 lg:px-8">
      <div className="rounded-[2rem] border border-[#DCEBFA] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] p-4 shadow-[0_20px_50px_-20px_oklch(0.55_0.18_250/0.28)] sm:p-6">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it) => (
            <a
              key={it.title}
              href={it.href}
              target={it.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group relative block overflow-hidden rounded-[1.5rem] border border-[#DCEBFA] bg-white p-6 shadow-[0_10px_35px_-10px_oklch(0.55_0.18_250/0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0284C7]/50 hover:shadow-[0_20px_45px_-12px_oklch(0.55_0.18_250/0.14)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.10),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10 flex items-center gap-5">
                <div
                  className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
                    it.tone === "whatsapp"
                      ? "bg-whatsapp/10 text-whatsapp group-hover:bg-whatsapp group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_oklch(0.65_0.17_150/0.4)]"
                      : it.tone === "accent"
                      ? "bg-amber-50 text-amber-600 group-hover:bg-amber-500 group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(245,158,11,0.4)]"
                      : "bg-[#EAF4FF] text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_oklch(0.55_0.18_250/0.4)]"
                  }`}
                >
                  <it.icon className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-extrabold uppercase tracking-widest text-[#475569]">
                    {it.title}
                  </div>
                  <div className="mt-1.5 truncate text-lg lg:text-xl font-extrabold text-[#0F172A] transition-colors duration-300 group-hover:text-primary">
                    {it.value}
                  </div>
                  <div className="mt-1 text-xs font-bold text-slate-400">{it.sub}</div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: Wrench, title: "Peralatan Lengkap", desc: "Dilengkapi fasilitas medis modern standar rumah sakit terkini." },
    { icon: Users, title: "Tim Profesional", desc: "Dokter, perawat, dan driver medis berlisensi dan berpengalaman." },
    { icon: Zap, title: "Respon Cepat", desc: "Dispatser/admin siaga 24 jam dengan unit ambulance terdekat di wilayah Anda." },
    { icon: HeartPulse, title: "Kenyamanan Pasien", desc: "Prioritas kenyamanan medis dengan pendampingan ramah keluarga." },
  ];

  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 lg:mt-32 lg:px-8">
      <div className="rounded-[2rem] border border-[#DCEBFA] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] p-4 shadow-[0_20px_50px_-20px_oklch(0.55_0.18_250/0.28)] sm:p-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((b) => (
            <div
              key={b.title}
              className="group relative overflow-hidden rounded-[1.5rem] border border-[#DCEBFA] bg-white p-6 shadow-[0_10px_35px_-12px_oklch(0.55_0.18_250/0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0284C7]/45 hover:shadow-[0_20px_45px_-14px_oklch(0.55_0.18_250/0.16)]"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.10),transparent_45%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF4FF] text-primary transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-primary-glow group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_oklch(0.55_0.18_250/0.4)]">
                  <b.icon className="h-6.5 w-6.5 transition-transform duration-300 group-hover:rotate-6" strokeWidth={2} />
                </div>

                <h3 className="mt-5 text-base font-extrabold text-[#0F172A] transition-colors duration-300 group-hover:text-primary">{b.title}</h3>
                <p className="mt-2 text-sm font-semibold leading-relaxed text-[#475569]">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const imageAltBySrc: Record<string, string> = {
  "/images/transportmedis.jpg": "Ambulance medical evakuasi Jabodetabek",
  "/images/Interior.jpg": "Interior ambulance VVIP medis",
  "/images/standbyevent.jpg": "Ambulance standby event Jabodetabek",
  "/images/unit.jpg": "Ambulance transport pasien Jabodetabek",
  "/images/petivvip.jpg": "Interior mobil jenazah VVIP",
  "/images/petijenazah.jpg": "Peti jenazah Jabodetabek Care",
  "/images/vvipjenazah.jpg": "Mobil jenazah VVIP Jabodetabek",
  "/images/vvipmedis.jpg": "Ambulance VVIP medis Jabodetabek Care",
};

function Services() {
  const services = [
    {
      id: "medical-evakuasi",
      title: "Ambulance Medical Evakuasi",
      category: "Layanan Medis",
      desc: "Layanan evakuasi pasien dengan fasilitas medis lengkap, pendampingan tim berpengalaman, dan armada siaga 24 jam.",
      image: "/images/transportmedis.jpg",
      benefits: [
        "Fasilitas medis lengkap untuk kebutuhan evakuasi",
        "Didukung driver dan tim berpengalaman",
        "Cocok untuk kondisi darurat dan rujukan pasien",
      ],
      waMessage: "Saya ingin bertanya tentang layanan Ambulance Medical Evakuasi Full Medis.",
    },
    {
      id: "kontrol-checkup",
      title: "Pasien Kontrol / Check Up",
      category: "Layanan Medis",
      desc: "Antar jemput pasien untuk kontrol rutin, check up, terapi, atau pemeriksaan ke rumah sakit dan klinik.",
      image: "/images/Interior.jpg",
      benefits: [
        "Cocok untuk kontrol rutin dan pemeriksaan pasien",
        "Perjalanan pasien lebih aman dan nyaman",
        "Jadwal dapat disesuaikan dengan kebutuhan keluarga",
      ],
      waMessage: "Saya ingin bertanya tentang layanan Pasien Kontrol / Check Up.",
    },
    {
      id: "standby-event",
      title: "Standby Event",
      category: "Layanan Medis",
      desc: "Ambulance siaga untuk mendukung kebutuhan medis pada event, kegiatan olahraga, acara perusahaan, komunitas, dan kegiatan publik.",
      image: "/images/standbyevent.jpg",
      benefits: [
        "Ambulance standby selama acara berlangsung",
        "Mendukung kebutuhan pertolongan pertama",
        "Cocok untuk event kecil hingga besar",
      ],
      waMessage: "Saya ingin bertanya tentang layanan Standby Event.",
    },
    {
      id: "home-care",
      title: "Home Care",
      category: "Layanan Medis",
      desc: "Layanan perawatan kesehatan di rumah untuk membantu kebutuhan pasien tanpa harus selalu datang ke fasilitas kesehatan.",
      image: "/images/unit.jpg",
      benefits: [
        "Pelayanan kesehatan langsung di rumah",
        "Lebih nyaman untuk pasien dan keluarga",
        "Dapat dikonsultasikan sesuai kebutuhan pasien",
      ],
      waMessage: "Saya ingin bertanya tentang layanan Home Care.",
    },
    {
      id: "kedukaan",
      title: "Kedukaan Muslim / Non-Muslim",
      category: "Layanan Kedukaan",
      desc: "Layanan pendampingan kebutuhan kedukaan untuk keluarga muslim maupun non-muslim dengan proses yang tertib dan penuh hormat.",
      image: "/images/petivvip.jpg",
      benefits: [
        "Melayani kebutuhan kedukaan keluarga",
        "Dukungan untuk muslim dan non-muslim",
        "Koordinasi layanan lebih mudah dan tertata",
      ],
      waMessage: "Saya ingin bertanya tentang layanan Kedukaan Muslim / Non-Muslim.",
    },
    {
      id: "peti-jenazah",
      title: "Peti Jenazah",
      category: "Layanan Kedukaan",
      desc: "Penyediaan peti jenazah sesuai kebutuhan keluarga dengan pilihan yang dapat dikonsultasikan terlebih dahulu.",
      image: "/images/petijenazah.jpg",
      benefits: [
        "Pilihan peti sesuai kebutuhan keluarga",
        "Dapat dikonsultasikan dengan admin",
        "Mendukung proses kedukaan dengan lebih tertata",
      ],
      waMessage: "Saya ingin bertanya tentang layanan Peti Jenazah.",
    },
    {
      id: "cargo-jenazah",
      title: "Cargo Jenazah",
      category: "Layanan Kedukaan",
      desc: "Layanan pengurusan dan pengantaran jenazah untuk kebutuhan luar kota atau pengiriman tertentu sesuai prosedur.",
      image: "/images/vvipjenazah.jpg",
      benefits: [
        "Mendukung pengiriman jenazah luar kota",
        "Koordinasi kebutuhan dokumen",
        "Dibantu oleh tim berpengalaman",
      ],
      waMessage: "Saya ingin bertanya tentang layanan Cargo Jenazah.",
    },
  ];

  const [activeTab, setActiveTab] = useState<string>(services[0]?.id ?? "");
  const activeService = services.find((service) => service.id === activeTab) ?? services[0];

  return (
    <section id="layanan" className="mx-auto mt-20 max-w-7xl px-4 lg:mt-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary tracking-wide">
          Layanan Utama Kami
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
          Layanan Ambulance &amp; Pendukung Kedukaan
        </h2>
        <p className="mt-3 text-[#475569] font-semibold max-w-lg mx-auto">
          Kami siap melayani kebutuhan medical evakuasi, kontrol pasien, standby event, home care, hingga layanan kedukaan dan pengurusan jenazah.
        </p>
      </div>

      <div className="hidden pt-10 lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="col-span-4 flex flex-col gap-3">
          {services.map((service) => {
            const isSelected = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex flex-col rounded-2xl border p-5 text-left transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "scale-[1.02] border-transparent bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] text-white shadow-lg shadow-sky-200/50"
                    : "border-sky-100 bg-white text-[#0F172A] hover:border-[#0284C7]/50 hover:bg-[#F8FBFF]"
                }`}
              >
                <span className={`mb-3 inline-flex w-fit rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
                  isSelected ? "bg-white/20 text-white" : "bg-sky-50 text-sky-700"
                }`}>
                  {service.category}
                </span>
                <span className="mb-1 text-lg font-extrabold">{service.title}</span>
                <span className={`text-xs leading-relaxed ${isSelected ? "text-sky-100" : "text-slate-500"}`}>
                  {service.desc}
                </span>
              </button>
            );
          })}
        </div>

        <div className="col-span-4 overflow-hidden rounded-3xl border border-sky-100 shadow-md bg-slate-100">
          {activeService.image ? (
            <div className="relative h-full min-h-[360px]">
              <img
                src={activeService.image}
                alt={imageAltBySrc[activeService.image] ?? activeService.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0F172A]/75 via-transparent to-transparent p-6">
                <div className="text-left text-white">
                  <span className="mb-2 inline-block rounded-md bg-[#0284C7] px-2 py-1 text-[10px] font-bold uppercase tracking-wider">
                    Steril & Bersih
                  </span>
                  <p className="text-sm font-semibold">Standardisasi Medis Internasional</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative h-full min-h-[360px]" />
          )}
        </div>

        <div className="col-span-4 flex flex-col justify-between rounded-3xl border border-sky-100 bg-[#F8FBFF] p-8 text-left shadow-sm">
          <div className="space-y-6">
            <div>
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em] text-[#0284C7]">
                Detil Layanan Aktif
              </span>
              <span className="mb-3 inline-flex rounded-full bg-sky-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-sky-700">
                {activeService.category}
              </span>
              <h3 className="text-2xl font-extrabold text-[#0F172A]">{activeService.title}</h3>
            </div>

            <p className="text-sm leading-relaxed font-medium text-slate-600">{activeService.desc}</p>

            <div className="space-y-3">
              <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#0F172A]">
                Keuntungan Layanan:
              </span>
              <ul className="space-y-2.5">
                {activeService.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0284C7]" />
                    <span className="font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="border-t border-sky-100 pt-6">
            <a
              href={`${waLink}?text=${encodeURIComponent(activeService.waMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#16A34A] px-4 py-3.5 font-bold text-white shadow-lg transition duration-300 hover:bg-[#15803D]"
            >
              <MessageSquare className="h-5 w-5 fill-white" />
              <span>Pesan Layanan Ini</span>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 pt-10 lg:hidden">
        {services.map((service) => {
          const isSelected = activeTab === service.id;
          return (
            <div
              key={service.id}
              className={`overflow-hidden rounded-2xl border bg-white transition duration-300 ${
                isSelected ? "border-[#0284C7] shadow-md shadow-sky-100" : "border-sky-100"
              }`}
            >
              <button
                onClick={() => setActiveTab(service.id)}
                className={`flex w-full items-center justify-between p-5 text-left ${
                  isSelected ? "bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] text-white" : "text-[#0F172A]"
                }`}
              >
                <span className="flex min-w-0 flex-col gap-2">
                  <span className={`inline-flex w-fit rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
                    isSelected ? "bg-white/20 text-white" : "bg-sky-50 text-sky-700"
                  }`}>
                    {service.category}
                  </span>
                  <span className="text-base font-extrabold md:text-lg">{service.title}</span>
                </span>
                {isSelected ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-[#0284C7]" />
                )}
              </button>

              {isSelected && (
                <div className="space-y-5 p-5">
                  <p className="text-sm leading-relaxed text-slate-600">{service.desc}</p>

                  {service.image ? (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-inner">
                      <img
                        src={service.image}
                        alt={imageAltBySrc[service.image] ?? service.title}
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[#0F172A]/10" />
                    </div>
                  ) : (
                    <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 shadow-inner" />
                  )}

                  <div className="space-y-2">
                    <span className="block text-xs font-bold uppercase tracking-[0.2em] text-[#0F172A]">
                      Keuntungan Layanan:
                    </span>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#0284C7]" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={`${waLink}?text=${encodeURIComponent(service.waMessage)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#16A34A] px-4 py-3 font-bold text-white shadow-lg transition duration-300 hover:bg-[#15803D]"
                  >
                    <MessageSquare className="h-4 w-4 fill-white" />
                    <span>Pesan Layanan Ini</span>
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Gallery() {
  const categories = ["Semua", "Armada", "Interior", "Dokumentasi", "Event"];
  const [selected, setSelected] = useState("Semua");

  const galleryItems = [
    {
      id: 1,
      title: "Mobil Jenazah VVIP",
      category: "Armada",
      image: "/images/vvipjenazah.jpg",
      spec: "Armada jenazah VVIP untuk kebutuhan pengantaran jenazah dengan kabin bersih, nyaman, dan tertata.",
    },
    {
      id: 2,
      title: "Interior Mobil Jenazah VVIP",
      category: "Interior",
      image: "/images/petivvip.jpg",
      spec: "Interior kabin mobil jenazah yang bersih, rapi, dan disiapkan untuk perjalanan pengantaran jenazah.",
    },
    {
      id: 3,
      title: "Ambulance VVIP Medis",
      category: "Armada",
      image: "/images/vvipmedis.jpg",
      spec: "Ambulance VVIP medis dengan fasilitas pendukung untuk evakuasi, rujukan, dan transport pasien.",
    },
    {
      id: 4,
      title: "Interior Ambulance VVIP Medis",
      category: "Interior",
      image: "/images/Interior.jpg",
      spec: "Interior ambulance medis dengan ruang pasien, stretcher, oksigen, dan perlengkapan pendukung perjalanan.",
    },
    {
      id: 5,
      title: "Peti Jenazah",
      category: "Dokumentasi",
      image: "/images/petijenazah.jpg",
      spec: "Penyediaan peti jenazah sesuai kebutuhan keluarga dengan pilihan yang dapat dikonsultasikan terlebih dahulu.",
    },
    {
      id: 6,
      title: "Ambulance Transport",
      category: "Armada",
      image: "/images/unit.jpg",
      spec: "Armada ambulance transport untuk antar jemput pasien, kontrol rutin, dan perjalanan menuju fasilitas kesehatan.",
    },
    {
      id: 7,
      title: "Transport Medis",
      category: "Dokumentasi",
      image: "/images/transportmedis.jpg",
      spec: "Dokumentasi layanan transport medis untuk pasien dengan pendampingan dan armada yang sesuai kebutuhan.",
    },
    {
      id: 8,
      title: "Standby Event",
      category: "Event",
      image: "/images/standbyevent.jpg",
      spec: "Ambulance standby untuk mendukung kebutuhan medis pada event, acara perusahaan, komunitas, dan kegiatan publik.",
    },
  ];

  const filtered = selected === "Semua" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selected);

  return (
    <section id="armada" className="relative mt-20 overflow-hidden px-4 lg:mt-32 lg:px-8">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#E0F2FE]/35 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#F8FBFF]/90 to-transparent" />
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#DCEBFA] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] p-6 shadow-[0_20px_50px_-20px_oklch(0.55_0.18_250/0.28)] sm:p-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary tracking-wide">
            Galeri Kegiatan &amp; Fasilitas
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
            Galeri Kegiatan &amp; Fasilitas
          </h2>
          <p className="mt-3 text-[#475569] font-semibold max-w-lg mx-auto">
            Beberapa dokumentasi armada dan layanan ambulance kami di lapangan.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {categories.map((c) => {
            const isActive = selected === c;
            return (
              <button
                key={c}
                onClick={() => setSelected(c)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-[#0284C7] text-white shadow-[0_12px_28px_-10px_rgba(2,132,199,0.45)] scale-[1.03]"
                    : "border border-[#DCEBFA] bg-white text-[#475569] hover:border-[#0284C7]/40 hover:text-[#0284C7]"
                }`}
              >
                {c}
              </button>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-[1.6rem] border border-[#DCEBFA] bg-white shadow-[0_10px_35px_-12px_oklch(0.55_0.18_250/0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-[#0284C7]/40"
            >
              <div className="relative aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={imageAltBySrc[item.image] ?? item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-all duration-500 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-14 bg-[linear-gradient(180deg,transparent_0%,rgba(15,23,42,0.2)_100%)]" />
              </div>

              <div className="p-4 sm:p-4">
                <span className="inline-flex rounded-full bg-sky-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-sky-700">
                  {item.category}
                </span>
                <h4 className="mt-3 text-sm font-extrabold text-slate-900 leading-snug">{item.title}</h4>
                <p className="mt-2 text-[12px] font-medium leading-relaxed text-slate-600">{item.spec}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AreaService() {
  const areas = [
    { name: "Kab Bogor / Kabupaten Bogor", isHomebase: true },
    { name: "Depok" },
    { name: "Jakarta" },
    { name: "Bogor / Kota Bogor" },
    { name: "Tangerang" },
    { name: "Bekasi" },
    { name: "Nasional via Cargo" },
  ];

  return (
    <section id="area" className="w-full bg-[linear-gradient(180deg,#F8FBFF_0%,#FFFFFF_65%,#F8FBFF_100%)] py-16 lg:py-24 border-y border-[#DCEBFA]/50">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-[#DCEBFA] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] shadow-[0_20px_50px_-20px_oklch(0.55_0.18_250/0.28)]">
          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#0284C7]/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-sky-200/30 blur-3xl" />
          <div className="relative p-8 text-center lg:p-12">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary tracking-wide">
              Area Layanan Kami
            </span>
            <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-[#0F172A] sm:text-3xl">
              Homebase Kab Bogor, Siaga untuk Jabodetabek
            </h2>
            <p className="mt-3 text-sm font-semibold text-[#475569] max-w-3xl mx-auto">
              Jabodetabek Care Ambulance melayani kebutuhan ambulance, ambulan, dan ambulans 24 jam untuk wilayah Depok, Kota Bogor, Kabupaten Bogor, Jakarta, Bekasi, Tangerang, dan seluruh area Jabodetabek. Layanan tersedia untuk medical evakuasi, transport pasien, kontrol rumah sakit, check up, standby event, home care, layanan kedukaan, mobil jenazah VVIP, peti jenazah, dan cargo jenazah.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {areas.map((a) => {
                if (a.isHomebase) {
                  return (
                    <div
                      key={a.name}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0369A1] to-[#0284C7] px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_30px_-10px_rgba(2,132,199,0.45)] transition-all duration-300 hover:scale-[1.02] cursor-default"
                    >
                      <MapPin className="h-4.5 w-4.5" strokeWidth={2.5} />
                      <span>{a.name}</span>
                      <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wide">
                        Homebase
                      </span>
                    </div>
                  );
                }

                return (
                  <div
                    key={a.name}
                    className="inline-flex items-center gap-2 rounded-full border border-[#DCEBFA] bg-white px-5 py-3 text-sm font-bold text-[#475569] transition-all duration-300 hover:border-primary/50 hover:bg-[#EAF4FF] hover:text-primary cursor-default group"
                  >
                    <MapPin className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
                    <span>{a.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-gradient-to-r from-[#0369A1] to-[#0284C7] px-6 py-4.5 text-center text-sm font-bold text-white tracking-wide border-t border-primary/10">
            <span className="inline-flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white"></span>
              </span>
              Homebase Kab Bogor - Melayani seluruh Jabodetabek &amp; sekitarnya
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function BookingProcess() {
  const steps = [
    {
      title: "Hubungi Admin",
      description: "Klik tombol WhatsApp atau telepon untuk menghubungi tim CS siaga kami.",
    },
    {
      title: "Kirim Lokasi & Tujuan",
      description: "Informasikan detail lokasi jemput, rumah sakit tujuan, dan kondisi umum pasien.",
    },
    {
      title: "Konfirmasi & Estimasi",
      description: "Admin membantu menentukan jenis armada medis sesuai estimasi tarif transparan.",
    },
    {
      title: "Ambulance Berangkat",
      description: "Tim medis dan armada meluncur cepat menuju lokasi penjemputan terkonfirmasi.",
    },
  ];

  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 lg:mt-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary tracking-wide">
          Alur Pemesanan
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
          Alur Pemesanan Ambulance
        </h2>
        <p className="mt-3 text-[#475569] font-semibold max-w-lg mx-auto">
          Ikuti 4 langkah sederhana berikut untuk mendapatkan penanganan cepat dari tim dispatser/admin kami.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-[2rem] border border-[#DCEBFA] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] p-6 shadow-[0_20px_50px_-20px_oklch(0.55_0.18_250/0.28)] sm:p-8">
        <div className="relative hidden lg:grid lg:grid-cols-4 lg:gap-6">
          <div className="absolute top-10 left-[12.5%] right-[12.5%] z-0 h-0.5 bg-sky-100" />

          {steps.map((step, index) => (
            <div key={step.title} className="group relative z-10 rounded-[1.5rem] border border-[#DCEBFA] bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#0284C7]/45 hover:shadow-[0_20px_35px_-16px_oklch(0.55_0.18_250/0.16)]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EAF4FF] text-lg font-extrabold text-[#0284C7] shadow-md transition duration-300 group-hover:bg-[#0284C7] group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <h3 className="mt-4 text-base font-bold text-[#0F172A]">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#475569]">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="relative flex max-w-2xl flex-col space-y-4 lg:hidden">
          {steps.map((step, index) => (
            <div key={step.title} className="group relative z-10 flex items-start gap-4 rounded-[1.4rem] border border-[#DCEBFA] bg-white p-4 transition-all duration-300 hover:border-[#0284C7]/45 hover:shadow-[0_20px_35px_-16px_oklch(0.55_0.18_250/0.16)]">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF4FF] text-sm font-extrabold text-[#0284C7] transition duration-300 group-hover:bg-[#0284C7] group-hover:text-white">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0F172A]">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-[#475569]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      name: "Fauzi Ikhsan",
      city: "Depok",
      rating: 5,
      text: "Pelayanannya cepat dan sangat membantu saat kondisi darurat di tengah malam.",
    },
    {
      name: "Muhammad Dhafa",
      city: "Ciomas",
      rating: 5,
      text: "Armada bersih, driver ramah, dan proses rujukan berjalan lancar.",
    },
    {
      name: "Reksa Prayoga",
      city: "Kota Bogor",
      rating: 5,
      text: "Driver profesional dan perjalanan nyaman. Pasien sampai dengan aman.",
    },
  ];

  return (
    <section id="testimoni" className="mx-auto mt-20 max-w-7xl px-4 lg:mt-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary tracking-wide">
          Testimoni
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
          Kepercayaan yang Kami Jaga
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {items.map((t) => (
          <div
            key={t.name}
            className="group relative flex flex-col rounded-[1.6rem] border border-[#DCEBFA] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] p-7 shadow-[0_10px_35px_-12px_oklch(0.55_0.18_250/0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0284C7]/45 hover:shadow-[0_20px_45px_-14px_oklch(0.55_0.18_250/0.16)]"
          >
            <div className="flex items-center justify-between">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4.5 w-4.5 ${i < t.rating ? "fill-amber-400 text-amber-400" : "text-slate-200"}`}
                  />
                ))}
              </div>
              <svg className="h-7 w-7 text-primary/10 transition-colors duration-300 group-hover:text-primary/20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>

            <p className="mt-5 flex-1 text-sm font-semibold leading-relaxed text-slate-600 italic">
              &ldquo;{t.text}&rdquo;
            </p>

            <div className="mt-6 border-t border-slate-100 pt-4">
              <span className="text-sm font-extrabold text-[#0F172A] transition-colors duration-300 group-hover:text-primary">{t.name}</span>
              <span className="mt-0.5 block text-xs font-semibold text-slate-400">{t.city}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Drivers() {
  const drivers = [
    { name: "Rizky Pratama", age: 32 },
    { name: "Dedi Saputra", age: 41 },
    { name: "Fajar Hidayat", age: 29 },
  ];

  return (
    <section id="driver" className="mx-auto mt-20 max-w-7xl px-4 lg:mt-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary tracking-wide">
          Tim Driver Medis
        </span>
        <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
          Berpengalaman &amp; Tersertifikasi
        </h2>
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {drivers.map((d) => (
          <div
            key={d.name}
            className="group relative overflow-hidden rounded-[1.6rem] border border-[#DCEBFA] bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_100%)] p-6 shadow-[0_10px_35px_-12px_oklch(0.55_0.18_250/0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#0284C7]/45 hover:shadow-[0_20px_45px_-14px_oklch(0.55_0.18_250/0.16)]"
          >
            <div className="absolute right-0 top-0 h-28 w-28 -translate-y-8 translate-x-8 rounded-full bg-gradient-to-br from-primary/10 to-primary-glow/10 blur-2xl transition-transform duration-500 group-hover:scale-110 pointer-events-none" />

            <div className="relative z-10 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-lg font-extrabold text-white shadow-md transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_8px_20px_-6px_oklch(0.55_0.18_250/0.45)]">
                {d.name
                  .split(" ")
                  .map((s) => s[0])
                  .slice(0, 2)
                  .join("")}
              </div>

              <div>
                <h3 className="text-base font-extrabold text-[#0F172A] transition-colors duration-300 group-hover:text-primary">{d.name}</h3>
                <p className="mt-0.5 text-xs font-bold text-slate-400">Driver Medis • {d.age} Tahun</p>
              </div>
            </div>

            <div className="relative z-10 mt-6 flex flex-wrap gap-2 border-t border-slate-100 pt-4">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-primary/5 px-2.5 py-1 text-[10px] font-bold text-primary">
                <BadgeCheck className="h-3.5 w-3.5" />
                Tersertifikasi &amp; Terlatih
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-whatsapp/10 bg-whatsapp/5 px-2.5 py-1 text-[10px] font-bold text-whatsapp">
                <ShieldCheck className="h-3.5 w-3.5" />
                Mengutamakan Keselamatan
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    { icon: Clock, label: "24/7 Siaga Darurat", desc: "Tim dispatser/admin & paramedis siap melayani kapan saja dibutuhkan." },
    { icon: Users, label: "Tim Berpengalaman", desc: "Didukung driver dan tim lapangan berpengalaman untuk memastikan layanan cepat, aman, dan nyaman." },
    { icon: Wrench, label: "Armada Medis Lengkap", desc: "Unit ambulance bersih, steril, dan dilengkapi peralatan penunjang hidup." },
    { icon: DollarSign, label: "Harga Transparan", desc: "Estimasi biaya jelas di awal pemesanan tanpa biaya tersembunyi." },
    { icon: ShieldCheck, label: "Keselamatan Utama", desc: "Fokus keselamatan pasien dengan SOP medis ketat sepanjang jalan." },
  ];
  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 lg:mt-32 lg:px-8">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#0284C7] via-primary to-[#0369A1] p-8 text-primary-foreground lg:p-14 shadow-[0_20px_50px_-20px_oklch(0.55_0.18_250/0.4)]">
        {/* Decorative background vectors/shapes */}
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.12),transparent_70%)] pointer-events-none" />

        <div className="relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-white/15 px-3.5 py-1 text-xs font-bold text-white tracking-wide uppercase mb-3">
              Keunggulan Utama
            </span>
            <h2 className="text-3xl font-extrabold lg:text-4xl text-white tracking-tight leading-tight">
              Kenapa Memilih Jabodetabek Care Ambulance?
            </h2>
            <p className="text-white/80 font-semibold mt-3 text-sm lg:text-base leading-relaxed">
              Kami berkomitmen memberikan layanan transportasi medis yang cepat, aman, dan profesional untuk Kab Bogor &amp; seluruh Jabodetabek.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {items.map((it) => (
              <div
                key={it.label}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:border-white/25 hover:shadow-lg cursor-default"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <it.icon className="h-6.5 w-6.5" strokeWidth={2} />
                </div>
                <div>
                  <span className="block text-sm font-extrabold text-white leading-snug">{it.label}</span>
                  <span className="block text-[11px] font-semibold text-white/70 mt-1.5 leading-relaxed">{it.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Apakah layanan tersedia 24 jam?",
      a: "Ya, Jabodetabek Care Ambulance siaga 24/7 termasuk hari libur nasional. Hubungi WhatsApp atau telepon kami kapan saja.",
    },
    {
      q: "Apakah melayani seluruh Jabodetabek?",
      a: "Ya, kami melayani Depok, Kota Bogor, Kabupaten Bogor, Jakarta, Bekasi, Tangerang, dan seluruh Jabodetabek.",
    },
    {
      q: "Apakah bisa untuk rujukan rumah sakit?",
      a: "Tentu. Kami mendukung rujukan antar rumah sakit dengan koordinasi dokumen medis lengkap dan pendampingan paramedis.",
    },
    {
      q: "Apakah bisa booking untuk event?",
      a: "Bisa. Tersedia paket standby per jam atau harian untuk event olahraga, konser, gathering, dan acara perusahaan.",
    },
    {
      q: "Bagaimana cara mendapatkan estimasi biaya?",
      a: "Anda dapat menghubungi tim admin kami melalui WhatsApp dengan menyertakan lokasi penjemputan, tujuan, dan jenis armada yang dibutuhkan untuk mendapatkan estimasi tarif transparan di awal.",
    },
    {
      q: "Apakah tersedia layanan mobil jenazah dan peti jenazah?",
      a: "Ya, kami melayani kebutuhan kedukaan, mobil jenazah VVIP, peti jenazah, dan cargo jenazah dengan koordinasi yang dapat dikonsultasikan melalui WhatsApp.",
    },
    {
      q: "Apakah melayani ambulan atau ambulans selain ambulance?",
      a: "Ya, layanan kami juga dikenal sebagai ambulance, ambulan, atau ambulans 24 jam untuk transport pasien, evakuasi medis, standby event, dan layanan kedukaan di area Jabodetabek.",
    },
    {
      q: "Apakah melayani Kabupaten Bogor?",
      a: "Ya, homebase kami berada di Kab Bogor dan melayani Kabupaten Bogor, Kota Bogor, Depok, Jakarta, Bekasi, Tangerang, dan seluruh Jabodetabek.",
    },
  ];

  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="w-full bg-[#F4F9FF] py-20 lg:py-32 border-t border-[#DCEBFA]/50">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center">
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
            FAQ
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0F172A] sm:text-4xl">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-3 text-sm font-semibold leading-relaxed text-[#475569] sm:text-base">
            Belum menemukan jawaban? Hubungi tim kami via WhatsApp.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-[#0284C7] shadow-[0_12px_24px_-10px_rgba(2,132,199,0.12)]"
                    : "border-[#DCEBFA] hover:border-[#0284C7]/40"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span className="text-sm font-bold text-[#0F172A] sm:text-base">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#0284C7] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-[#475569] sm:px-6">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-32 border-t border-white/10 bg-gradient-to-b from-[#082F49] to-[#075985] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#0284C7] to-[#0EA5E9]">
                <Ambulance className="h-5 w-5 text-white" />
              </span>
              <span className="leading-tight">
                <span className="block text-base font-extrabold">Jabodetabek Care Ambulance</span>
                <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">AMBULANCE</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Kami menyediakan layanan sewa Ambulance VIP 24 jam dengan fasilitas medis lengkap, didukung driver berpengalaman dan profesional untuk memastikan perjalanan pasien tetap aman, nyaman, dan responsif dalam kondisi mendesak.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[var(--whatsapp)] px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              Chat WhatsApp
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/90">Area Layanan</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#0284C7]" /> Kab Bogor (HQ)
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#0284C7]" /> Jakarta
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#0284C7]" /> Bogor
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#0284C7]" /> Depok
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#0284C7]" /> Tangerang
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#0284C7]" /> Bekasi
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/90">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {navItems.slice(0, 6).map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="transition-colors hover:text-white">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white/90">Kontak</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-[#0284C7]" />
                +628987593648
              </li>
              <li className="flex items-start gap-2">
                <MessageCircle className="mt-0.5 h-4 w-4 text-[#0284C7]" />
                0897-9455-048
              </li>
              <li className="flex items-start gap-2">
                <Info className="mt-0.5 h-4 w-4 text-[#0284C7]" />
                Konsultasi via WhatsApp
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 text-[#0284C7]" />
                24 Jam Setiap Hari
              </li>
            </ul>

            <div className="mt-4 flex gap-2">
              {[Instagram, Facebook, Send, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="social"
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/10 transition-colors hover:bg-white/20"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[oklch(0.15_0.04_260)]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-white/60 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Jabodetabek Care Ambulance. Semua hak dilindungi.</p>
          <p>Homebase Kab Bogor &bull; Melayani Jabodetabek 24 Jam</p>
        </div>
      </div>
    </footer>
  );
}

function SectionSpacer() {
  return (
    <div
      className="relative w-full overflow-hidden bg-[linear-gradient(180deg,#FFFFFF_0%,#F8FBFF_55%,#FFFFFF_100%)]"
      aria-hidden="true"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#93C5FD]/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#BFDBFE]/60 to-transparent" />
      <div className="mx-auto flex h-20 items-center justify-center sm:h-24 lg:h-28">
        <div className="h-1.5 w-28 rounded-full bg-gradient-to-r from-[#E0F2FE]/80 via-[#0284C7]/40 to-[#E0F2FE]/80 blur-[0.5px]" />
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans">
      <Header />
      <main>
        <Hero />
        <QuickContact />
        <Benefits />
        <Services />
        <Gallery />
        <AreaService />
        <BookingProcess />
        <Testimonials />
        <Drivers />
        <WhyChoose />
        <SectionSpacer />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
