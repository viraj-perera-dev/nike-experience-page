import localFont from 'next/font/local'
import "./globals.css";
import LenisProvider from './components/LenisProvider';

const PPNeueMachina = localFont({
  src: [
    {
      path: './assets/fonts/PPNeueMachina-InktrapLight.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: './assets/fonts/PPNeueMachina-InktrapRegular.ttf',
      weight: '600',
      style: 'normal'
    },
    {
      path: './assets/fonts/PPNeueMachina-InktrapMedium.ttf',
      weight: '700',
      style: 'normal'
    }
  ],
  display: 'swap',
  variable: '--font-pp-neue-machina'
});

const SaolStandard = localFont({
  src: './assets/fonts/SaolStandard-LightItalic.otf',
  display: 'swap',
  variable: '--font-saol-standard'
});

export const metadata = {
  title: {
    default: "Viraj Perera - Creative Developer & 3D Designer",
    template: "Nike Experience"
  },
  description: "Creative front-end developer specializing in modern web experiences with GSAP animations, React Three Fiber 3D graphics, and cutting-edge UI/UX design. Explore my portfolio of interactive digital experiences.",
  keywords: [
    "front-end developer",
    "3D web developer", 
    "React Three Fiber",
    "GSAP animations",
    "modern UI/UX",
    "creative developer",
    "portfolio",
    "web developer",
    "3D graphics",
    "interactive design",
    "Next.js developer"
  ],
  authors: [{ name: "Viraj Perera" }],
  creator: "Viraj Perera",
  publisher: "Viraj Perera",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://nike-experience-website.vercel.app/'), // Replace with your actual domain
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'en': '/en',
    },
  },
  openGraph: {
    title: "Viraj Perera - Creative Developer & 3D Designer",
    description: "Creative front-end developer specializing in modern web experiences with GSAP animations, React Three Fiber 3D graphics, and cutting-edge UI/UX design.",
    url: 'https://nike-experience-website.vercel.app/', // Replace with your actual domain
    siteName: 'Nike Experience',
    images: [
      {
        url: 'https://nike-experience-website.vercel.app/preview.jpg', // You'll need to create this image (1200x630px recommended)
        width: 1200,
        height: 630,
        alt: 'Viraj Perera - Creative Developer Portfolio',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Viraj Perera - Creative Developer & 3D Designer',
    description: 'Creative front-end developer specializing in modern web experiences with GSAP animations, React Three Fiber 3D graphics, and cutting-edge UI/UX design.',
    images: ['https://nike-experience-website.vercel.app/preview.jpg'], // 1200x675px recommended for large image card
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': 'standard',
      'max-image-preview': 'large',
      'max-snippet': 160,
    },
  },
  other: {
    'theme-color': '#ffffff',
    'color-scheme': 'light',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Nike Experience',
    'application-name': 'Nike Experience',
    'mobile-web-app-capable': 'yes',
    'msapplication-TileColor': '#ffffff',
    'msapplication-config': '/browserconfig.xml',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Viraj Perera',
              url: 'https://nike-experience-website.vercel.app/',
              jobTitle: 'Creative Front-end Developer',
              description: 'Creative front-end developer specializing in modern web experiences with GSAP animations, React Three Fiber 3D graphics, and cutting-edge UI/UX design.',
              knowsAbout: [
                'React',
                'Next.js',
                'Three.js',
                'React Three Fiber',
                'GSAP',
                'JavaScript',
                'TypeScript',
                'UI/UX Design',
                '3D Web Development',
                'Frontend Development'
              ],
              sameAs: [
                'https://github.com/viraj-perera-dev',
                'https://www.linkedin.com/in/viraj-perera/',
              ]
            })
          }}
        />

      </head>
      <body
        className={`${PPNeueMachina.variable} ${SaolStandard.variable} antialiased overflow-x-hidden bg-white`}
      >	
        <LenisProvider>
            {children}
        </LenisProvider>
      </body>
    </html>
  );
}
