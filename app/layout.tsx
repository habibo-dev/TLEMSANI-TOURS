import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tlemsani Tours | TTS Voyages – Agence de voyages et tourisme',
  description: 'TTS Voyages – Tlemsani Tours, agence de voyages et tourisme : billetterie, hôtels, voyages organisés, voyages à la carte, Omra, croisières et événements.',
  openGraph: { title: 'Tlemsani Tours | TTS Voyages', description: 'Votre voyage commence ici.', type: 'website' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}