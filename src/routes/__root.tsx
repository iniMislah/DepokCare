import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

const SITE_URL = "https://jabodetabekcare.com";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/#business`,
      name: "Jabodetabek Care Ambulance",
      url: SITE_URL,
      description:
        "Layanan ambulans dan transportasi medis 24 jam untuk wilayah Jakarta, Bogor, Depok, Tangerang, Bekasi, dan sekitarnya.",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "Kampung Bulak Cakar, Gang Sawo, Bumi Sawangan Indah 2, No. 21, RT 005/005, Pengasinan, Kec. Sawangan",
        addressLocality: "Depok",
        addressRegion: "Jawa Barat",
        postalCode: "16518",
        addressCountry: "ID",
      },
      hasMap:
        "https://maps.app.goo.gl/jWyYE7vEirAbdEsW6?g_st=aw",
      areaServed: [
        {
          "@type": "City",
          name: "Jakarta",
        },
        {
          "@type": "City",
          name: "Bogor",
        },
        {
          "@type": "City",
          name: "Depok",
        },
        {
          "@type": "City",
          name: "Tangerang",
        },
        {
          "@type": "City",
          name: "Bekasi",
        },
      ],
      sameAs: [
        "https://www.instagram.com/ambulance.jabodetabekcare",
        "https://www.tiktok.com/@ambulance.nauval24jam",
      ],
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#ambulance-service`,
      name: "Layanan Ambulans Jabodetabek Care",
      serviceType: "Layanan ambulans dan transportasi medis",
      provider: {
        "@id": `${SITE_URL}/#business`,
      },
      areaServed: [
        {
          "@type": "City",
          name: "Jakarta",
        },
        {
          "@type": "City",
          name: "Bogor",
        },
        {
          "@type": "City",
          name: "Depok",
        },
        {
          "@type": "City",
          name: "Tangerang",
        },
        {
          "@type": "City",
          name: "Bekasi",
        },
      ],
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: SITE_URL,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Jabodetabek Care Ambulance",
      publisher: {
        "@id": `${SITE_URL}/#business`,
      },
      inLanguage: "id-ID",
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>

        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Page not found
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back
          home.
        </p>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },

      // Primary SEO
      {
        title: "Jabodetabek Care Ambulance | Layanan Ambulans 24 Jam",
      },
      {
        name: "description",
        content:
          "Jabodetabek Care menyediakan layanan ambulans dan transportasi medis 24 jam untuk Jakarta, Bogor, Depok, Tangerang, Bekasi, dan sekitarnya.",
      },
      {
        name: "author",
        content: "Jabodetabek Care Ambulance",
      },
      {
        name: "robots",
        content: "index, follow",
      },

      // Open Graph
      {
        property: "og:title",
        content: "Jabodetabek Care Ambulance | Layanan Ambulans 24 Jam",
      },
      {
        property: "og:description",
        content:
          "Layanan ambulans dan transportasi medis 24 jam untuk wilayah Jakarta, Bogor, Depok, Tangerang, Bekasi, dan sekitarnya.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: `${SITE_URL}/`,
      },
      {
        property: "og:site_name",
        content: "Jabodetabek Care Ambulance",
      },
      {
        property: "og:locale",
        content: "id_ID",
      },

      // Twitter / social preview
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Jabodetabek Care Ambulance | Layanan Ambulans 24 Jam",
      },
      {
        name: "twitter:description",
        content:
          "Layanan ambulans dan transportasi medis 24 jam untuk wilayah Jabodetabek.",
      },
    ],

    links: [
      // Canonical
      {
        rel: "canonical",
        href: `${SITE_URL}/`,
      },

      // Font optimization
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300..800;1,300..800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),

  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <HeadContent />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}