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
  Building2,
  MapPin,
  Star,
  ChevronDown,
  Check,
  Activity,
  BadgeCheck,
  DollarSign,
} from "lucide-react";
import heroImg from "@/assets/hero-ambulance.jpg";
import interiorImg from "@/assets/ambulance-interior.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "DepokCare Ambulance — Layanan Ambulance 24 Jam Depok & Jabodetabek" },
      {
        name: "description",
        content:
          "Layanan ambulance 24 jam di Depok & Jabodetabek. Transport pasien, rujukan RS, standby event. Armada lengkap, tim profesional, respon cepat.",
      },
    ],
  }),
});

const WA_NUMBER = "6281234567890";
const waLink = `https://wa.me/${WA_NUMBER}`;

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

function Logo() {
  return (
    <a href="#beranda" className="flex items-center gap-2.5">
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow shadow-[0_8px_20px_-6px_oklch(0.55_0.18_250/0.5)]">
        <HeartPulse className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
      </div>
      <div className="leading-tight">
        <div className="text-base font-bold tracking-tight text-foreground">DepokCare</div>
        <div className="text-[10px] font-medium uppercase tracking-[0.15em] text-muted-foreground">
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
            Siaga 24 jam • Depok & Jabodetabek
          </p>
        </aside>
      </div>
    </>
  );
}

function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden">
      {/* skyline silhouette */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/40 via-background to-background" />
        <svg
          className="absolute bottom-0 left-0 w-full text-primary/5"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0 180h60v-40h40v-60h30v40h50v-80h40v60h35v-30h45v50h40v-70h50v40h45v-50h40v80h55v-30h35v50h45v-90h40v60h40v-40h45v70h50v-30h40v50h45v-60h40v40h45v-50h35v80h45v-40h40v60h45v-20h45v40H0z"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-semibold text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
            </span>
            Siaga 24 Jam — Depok & Jabodetabek
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Layanan{" "}
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Ambulance 24 Jam
            </span>{" "}
            untuk Depok & Jabodetabek
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground lg:text-lg">
            Transport pasien, rujukan rumah sakit, standby event, hingga antar jemput pasien.
            Armada lengkap dan tim medis berpengalaman, siap melayani kapan pun Anda butuh.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-glow px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_12px_30px_-10px_oklch(0.55_0.18_250/0.55)] transition hover:opacity-95"
            >
              <Ambulance className="h-4 w-4" />
              Pesan Sekarang
            </a>
            <a
              href="#layanan"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-foreground transition hover:bg-accent"
            >
              Lihat Layanan
            </a>
          </div>

          <div className="mt-8 grid w-full max-w-lg grid-cols-3 gap-3">
            {[
              { icon: Clock, label: "24 Jam Siaga" },
              { icon: Zap, label: "Respon Cepat" },
              { icon: ShieldCheck, label: "Aman & Nyaman" },
            ].map((b) => (
              <div
                key={b.label}
                className="flex flex-col items-center gap-2 rounded-2xl border border-border/70 bg-card/70 px-3 py-4 text-center backdrop-blur"
              >
                <b.icon className="h-5 w-5 text-primary" />
                <span className="text-xs font-semibold text-foreground">{b.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-12 lg:mt-0">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-primary-glow/10 to-transparent blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-white/60 bg-white shadow-[0_30px_80px_-20px_oklch(0.55_0.18_250/0.35)]">
            <img
              src={heroImg}
              alt="Ambulance DepokCare dengan tim paramedis profesional"
              width={1536}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur md:flex md:items-center md:gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Activity className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Rata-rata respon</div>
              <div className="text-sm font-bold text-foreground">≤ 15 menit</div>
            </div>
          </div>
          <div className="absolute -right-3 -top-3 hidden rounded-2xl border border-border bg-card/95 p-4 shadow-xl backdrop-blur md:flex md:items-center md:gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-whatsapp/10">
              <BadgeCheck className="h-5 w-5 text-whatsapp" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Tim Tersertifikasi</div>
              <div className="text-sm font-bold text-foreground">100% Profesional</div>
            </div>
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
      value: "(021) 8888-1212",
      sub: "Hotline Operasional",
      href: "tel:+62218881212",
      tone: "primary",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Reservasi",
      value: "0812-3456-7890",
      sub: "Respon < 5 menit",
      href: waLink,
      tone: "whatsapp",
    },
    {
      icon: Info,
      title: "Info Layanan",
      value: "info@depokcare.id",
      sub: "Konsultasi & tarif",
      href: "mailto:info@depokcare.id",
      tone: "accent",
    },
  ];
  return (
    <section id="kontak" className="mx-auto -mt-6 max-w-7xl px-4 lg:-mt-14 lg:px-8">
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((it) => (
          <a
            key={it.title}
            href={it.href}
            target={it.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 shadow-[0_10px_30px_-15px_oklch(0.55_0.18_250/0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-15px_oklch(0.55_0.18_250/0.35)]"
          >
            <div className="flex items-start gap-4">
              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                  it.tone === "whatsapp"
                    ? "bg-whatsapp/10 text-whatsapp"
                    : it.tone === "accent"
                    ? "bg-accent text-primary"
                    : "bg-primary/10 text-primary"
                }`}
              >
                <it.icon className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {it.title}
                </div>
                <div className="mt-1 truncate text-lg font-bold text-foreground">{it.value}</div>
                <div className="text-xs text-muted-foreground">{it.sub}</div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Benefits() {
  const items = [
    { icon: Wrench, title: "Peralatan Lengkap", desc: "Standar medis terkini" },
    { icon: Users, title: "Tim Profesional", desc: "Paramedis berpengalaman" },
    { icon: Zap, title: "Respon Cepat", desc: "Siaga di seluruh Jabodetabek" },
    { icon: HeartPulse, title: "Kenyamanan Pasien", desc: "Aman & ramah keluarga" },
  ];
  return (
    <section className="mx-auto mt-16 max-w-7xl px-4 lg:mt-24 lg:px-8">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((b) => (
          <div
            key={b.title}
            className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary/30 hover:bg-gradient-to-br hover:from-card hover:to-accent/40"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary-glow/10 text-primary">
              <b.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-base font-bold text-foreground">{b.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      id: "pasien",
      title: "Ambulance Pasien",
      short: "Antar jemput pasien dengan aman dan nyaman.",
    },
    { id: "rujukan", title: "Rujukan RS", short: "Transfer antar rumah sakit." },
    { id: "event", title: "Standby Event", short: "Siaga di acara & kegiatan." },
    { id: "luar", title: "Luar Kota", short: "Layanan jarak jauh ke luar kota." },
  ];
  const [active, setActive] = useState("pasien");
  const current = services.find((s) => s.id === active)!;

  const detail: Record<string, { desc: string; bullets: string[] }> = {
    pasien: {
      desc: "Layanan antar jemput pasien dari rumah ke fasilitas kesehatan dan sebaliknya. Didukung tenaga medis terlatih, stretcher modern, serta peralatan oksigen dan monitor vital pasien.",
      bullets: [
        "Tenaga paramedis on-board",
        "Stretcher & kursi roda tersedia",
        "Oksigen & monitor vital",
        "Tarif transparan tanpa biaya tersembunyi",
      ],
    },
    rujukan: {
      desc: "Layanan rujukan antar rumah sakit di Jabodetabek dengan koordinasi dokumen dan kondisi pasien yang terjaga sepanjang perjalanan.",
      bullets: [
        "Koordinasi dokumen medis",
        "Pendamping medis siap",
        "Peralatan ICU on-call",
        "Respon cepat 24 jam",
      ],
    },
    event: {
      desc: "Siaga ambulance untuk event olahraga, konser, acara perusahaan, hingga kegiatan komunitas — lengkap dengan tim P3K.",
      bullets: [
        "Standby on-site",
        "Tim medis P3K",
        "Paket fleksibel per jam / harian",
        "Dokumentasi laporan medis",
      ],
    },
    luar: {
      desc: "Antar jemput pasien ke luar kota dengan armada terawat, sopir berpengalaman, dan paramedis pendamping.",
      bullets: [
        "Armada AC & long-distance ready",
        "Driver & paramedis bergantian",
        "Rute teroptimasi",
        "Asuransi perjalanan",
      ],
    },
  };
  const d = detail[active];

  return (
    <section id="layanan" className="mx-auto mt-20 max-w-7xl px-4 lg:mt-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Layanan Kami
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Solusi medis transport yang lengkap
        </h2>
        <p className="mt-3 text-muted-foreground">
          Pilih layanan sesuai kebutuhan Anda — semua siaga 24 jam.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[280px_1fr]">
        {/* sidebar tabs */}
        <div className="flex flex-row gap-2 overflow-x-auto lg:flex-col">
          {services.map((s) => {
            const isActive = active === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`group flex w-full shrink-0 items-start gap-3 rounded-2xl border p-4 text-left transition ${
                  isActive
                    ? "border-primary/30 bg-gradient-to-br from-primary to-primary-glow text-primary-foreground shadow-[0_15px_30px_-12px_oklch(0.55_0.18_250/0.5)]"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                    isActive ? "bg-white/20" : "bg-primary/10 text-primary"
                  }`}
                >
                  <Ambulance className="h-5 w-5" />
                </div>
                <div>
                  <div className={`text-sm font-bold ${isActive ? "" : "text-foreground"}`}>
                    {s.title}
                  </div>
                  <div
                    className={`mt-0.5 text-xs ${
                      isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                    }`}
                  >
                    {s.short}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* detail */}
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[0_20px_50px_-20px_oklch(0.55_0.18_250/0.2)]">
          <div className="grid lg:grid-cols-2">
            <img
              src={interiorImg}
              alt="Interior ambulance modern"
              width={1024}
              height={768}
              loading="lazy"
              className="h-56 w-full object-cover lg:h-full"
            />
            <div className="p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-foreground">{current.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d.desc}</p>
              <ul className="mt-5 grid gap-2.5">
                {d.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-foreground">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-primary-glow px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_25px_-8px_oklch(0.55_0.18_250/0.5)] transition hover:opacity-95"
              >
                Pesan Layanan Ini
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const partners = [
    "RS Permata Depok",
    "RS Citra Medika Depok",
    "RS Hermina Depok",
    "Klinik Sehat Depok",
    "RSUD Kota Depok",
  ];
  return (
    <section id="armada" className="mx-auto mt-20 max-w-7xl px-4 lg:mt-28 lg:px-8">
      <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-accent/30 p-8 lg:p-10">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Dipercaya Oleh
          </span>
          <h2 className="mt-2 text-2xl font-bold text-foreground lg:text-3xl">
            Mitra Rumah Sakit & Klinik
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {partners.map((p) => (
            <div
              key={p}
              className="flex items-center gap-2 rounded-xl border border-border/70 bg-card px-4 py-3.5 text-center"
            >
              <Building2 className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-xs font-semibold text-foreground lg:text-sm">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AreaService() {
  const areas = ["Depok", "Jakarta", "Bogor", "Tangerang", "Bekasi", "Tangsel"];
  return (
    <section id="area" className="mx-auto mt-20 max-w-7xl px-4 lg:mt-28 lg:px-8">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Area Layanan
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">
            Menjangkau seluruh Jabodetabek
          </h2>
          <p className="mt-3 text-muted-foreground">
            Berbasis di Depok dengan unit siaga tersebar untuk respon cepat di setiap wilayah.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {areas.map((a) => (
              <span
                key={a}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary"
              >
                <MapPin className="h-3.5 w-3.5" />
                {a}
              </span>
            ))}
          </div>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/5 via-card to-accent/30 p-8">
          <div className="grid grid-cols-3 gap-3">
            {areas.map((a, i) => (
              <div
                key={a}
                className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-border/60 bg-card/80 p-5 backdrop-blur ${
                  i === 0 ? "ring-2 ring-primary/40" : ""
                }`}
              >
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-sm font-bold text-foreground">{a}</span>
                {i === 0 && (
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    HQ
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const items = [
    {
      name: "Ibu Rina",
      city: "Depok",
      rating: 5,
      text: "Pelayanannya cepat dan sangat membantu saat kondisi darurat di tengah malam.",
    },
    {
      name: "Bapak Andi",
      city: "Bekasi",
      rating: 5,
      text: "Armada bersih, perawat ramah, dan proses rujukan berjalan lancar.",
    },
    {
      name: "Bapak Dedi",
      city: "Tangerang",
      rating: 5,
      text: "Driver profesional dan perjalanan nyaman. Pasien sampai dengan aman.",
    },
  ];
  return (
    <section id="testimoni" className="mx-auto mt-20 max-w-7xl px-4 lg:mt-28 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Testimoni Pelanggan
        </span>
        <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">
          Kepercayaan yang kami jaga
        </h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {items.map((t) => (
          <div
            key={t.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-[0_10px_30px_-15px_oklch(0.55_0.18_250/0.2)]"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < t.rating ? "fill-primary text-primary" : "text-border"
                  }`}
                />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
              &ldquo;{t.text}&rdquo;
            </p>
            <div className="mt-5 border-t border-border pt-4">
              <div className="text-sm font-bold text-foreground">{t.name}</div>
              <div className="text-xs text-muted-foreground">{t.city}</div>
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
    <section id="driver" className="mx-auto mt-20 max-w-7xl px-4 lg:mt-28 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          Tim Driver Profesional
        </span>
        <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">
          Berpengalaman & Tersertifikasi
        </h2>
      </div>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {drivers.map((d, i) => (
          <div
            key={d.name}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6"
          >
            <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-gradient-to-br from-primary/15 to-primary-glow/15 blur-2xl" />
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-lg font-bold text-primary-foreground shadow-lg">
                {d.name
                  .split(" ")
                  .map((s) => s[0])
                  .slice(0, 2)
                  .join("")}
              </div>
              <div>
                <div className="text-base font-bold text-foreground">{d.name}</div>
                <div className="text-sm text-muted-foreground">{d.age} tahun</div>
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                <BadgeCheck className="h-3 w-3" />
                Tersertifikasi & Terlatih
              </span>
              {i % 2 === 0 && (
                <span className="inline-flex items-center gap-1 rounded-full bg-whatsapp/10 px-2.5 py-1 text-[11px] font-semibold text-whatsapp">
                  <ShieldCheck className="h-3 w-3" />
                  Mengutamakan Keselamatan
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    { icon: Clock, label: "24/7 Siaga" },
    { icon: Users, label: "Tenaga Medis Berpengalaman" },
    { icon: Wrench, label: "Armada Lengkap & Terawat" },
    { icon: DollarSign, label: "Harga Transparan" },
    { icon: ShieldCheck, label: "Keselamatan Pasien" },
  ];
  return (
    <section className="mx-auto mt-20 max-w-7xl px-4 lg:mt-28 lg:px-8">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-glow p-8 text-primary-foreground lg:p-12">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative">
          <h2 className="max-w-xl text-3xl font-bold lg:text-4xl">
            Kenapa Memilih DepokCare Ambulance?
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
            {items.map((it) => (
              <div
                key={it.label}
                className="flex flex-col items-center gap-3 rounded-2xl border border-white/20 bg-white/10 p-5 text-center backdrop-blur"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20">
                  <it.icon className="h-5 w-5" />
                </div>
                <span className="text-xs font-semibold leading-snug lg:text-sm">{it.label}</span>
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
      a: "Ya, DepokCare Ambulance siaga 24/7 termasuk hari libur. Hubungi WhatsApp atau telepon kami kapan saja.",
    },
    {
      q: "Apakah melayani seluruh Jabodetabek?",
      a: "Ya, kami melayani Depok, Jakarta, Bogor, Tangerang, Tangsel, dan Bekasi dengan unit siaga di beberapa titik.",
    },
    {
      q: "Apakah bisa untuk rujukan rumah sakit?",
      a: "Tentu. Kami mendukung rujukan antar RS dengan koordinasi dokumen medis dan pendamping paramedis.",
    },
    {
      q: "Apakah bisa booking untuk event?",
      a: "Bisa. Tersedia paket standby per jam atau harian untuk event olahraga, konser, dan acara perusahaan.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="mx-auto mt-20 max-w-3xl px-4 lg:mt-28 lg:px-8">
      <div className="text-center">
        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          FAQ
        </span>
        <h2 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">
          Pertanyaan yang sering diajukan
        </h2>
      </div>
      <div className="mt-8 space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className={`overflow-hidden rounded-2xl border transition ${
                isOpen
                  ? "border-primary/30 bg-gradient-to-br from-card to-accent/30 shadow-[0_10px_30px_-15px_oklch(0.55_0.18_250/0.25)]"
                  : "border-border bg-card"
              }`}
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="text-sm font-semibold text-foreground lg:text-base">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-primary transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-to-b from-background to-accent/30">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
              Layanan ambulance 24 jam berbasis Depok yang melayani seluruh Jabodetabek.
              Profesional, cepat, dan terpercaya.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-whatsapp px-5 py-3 text-sm font-semibold text-whatsapp-foreground shadow-lg transition hover:opacity-95"
            >
              <MessageCircle className="h-4 w-4" />
              Hubungi WhatsApp
            </a>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">Area Layanan</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Depok (HQ)</li>
              <li>Jakarta</li>
              <li>Bogor</li>
              <li>Tangerang & Tangsel</li>
              <li>Bekasi</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-foreground">Kontak</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> (021) 8888-1212
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-primary" /> 0812-3456-7890
              </li>
              <li className="flex items-center gap-2">
                <Info className="h-4 w-4 text-primary" /> info@depokcare.id
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} DepokCare Ambulance. Semua hak dilindungi.</p>
          <p>Made with care in Depok</p>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <QuickContact />
        <Benefits />
        <Services />
        <Partners />
        <AreaService />
        <Testimonials />
        <Drivers />
        <WhyChoose />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
