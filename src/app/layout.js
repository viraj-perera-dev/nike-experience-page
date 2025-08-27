import localFont from 'next/font/local'
import "./globals.css";
import LenisProvider from './components/LenisProvider';
import { Analytics } from "@vercel/analytics/next"

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
  title: "Viraj Perera - Nike Experience | Creative Developer & 3D Designer",
  description: "Creative front-end developer specializing in modern web experiences with GSAP animations, React Three Fiber 3D graphics, and cutting-edge UI/UX design. Explore my Nike-inspired portfolio of interactive digital experiences.",
  keywords: "front-end developer, 3D web developer, React Three Fiber, GSAP animations, modern UI/UX, creative developer, portfolio, web developer, 3D graphics, interactive design, Next.js developer, Nike experience",
  authors: [{ name: "Viraj Perera" }],
  creator: "Viraj Perera",
  publisher: "Viraj Perera",
  openGraph: {
    title: "Viraj Perera - Nike Experience | Creative Developer & 3D Designer",
    description: "Creative front-end developer specializing in modern web experiences with GSAP animations, React Three Fiber 3D graphics, and cutting-edge UI/UX design.",
    url: 'https://nike-experience-website.vercel.app/',
    siteName: 'Nike Experience',
    images: [
      {
        url: 'https://nike-experience-website.vercel.app/preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Viraj Perera - Nike Experience Portfolio Preview',
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Viraj Perera - Nike Experience | Creative Developer',
    description: 'Creative front-end developer specializing in modern web experiences with GSAP animations and React Three Fiber 3D graphics.',
    images: ['https://nike-experience-website.vercel.app/preview.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': 160,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${PPNeueMachina.variable} ${SaolStandard.variable} antialiased overflow-x-hidden bg-white`}
      >	
        <LenisProvider>
            {children}
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}
