# Sneakers Product Showcase

Un sito web moderno e interattivo per la presentazione di prodotti Nike, sviluppato con Next.js e caratterizzato da animazioni fluide, un'esperienza 3D immersiva e design responsive.

![Screenshot Homepage](./screenshots/herosection.png)
*Homepage con hero section e effetto glitch*

## 🚀 Demo Live

[demo](https://nike-experience-website.vercel.app/)

## 📋 Indice

- [Caratteristiche Principali](#-caratteristiche-principali)
- [Tecnologie Utilizzate](#-tecnologie-utilizzate)
- [Struttura del Progetto](#-struttura-del-progetto)
- [Installazione](#-installazione)
- [Architettura e Scelte Tecniche](#-architettura-e-scelte-tecniche)
- [Sezioni del Sito](#-sezioni-del-sito)
- [Performance e Ottimizzazioni](#-performance-e-ottimizzazioni)
- [Responsività](#-responsività)
- [Problemi Noti e Miglioramenti Futuri](#-problemi-noti-e-miglioramenti-futuri)
- [Processo di Sviluppo](#-processo-di-sviluppo)

## ✨ Caratteristiche Principali

- **Navigazione SPA**: Routing senza ricaricamento di pagina tramite Next.js App Router
- **Animazioni Fluide**: Implementate con Framer Motion e custom easing curves
- **Esperienza 3D**: Modello 3D interattivo con React Three Fiber e controlli GSAP
- **Realtà Aumentata**: Visualizzazione AR per dispositivi mobile
- **Smooth Scrolling**: Implementato con Lenis per un'esperienza di navigazione fluida
- **Slider Circolare**: Carosello custom con infinite loop
- **Design Responsive**: Ottimizzato per tutti i dispositivi
- **Gestione Dati**: Contenuti dinamici tramite file JSON statici

![Screenshot Experience 3D](./screenshots/experience.png)
*Sezione Experience con modello 3D interattivo*

## 🛠 Tecnologie Utilizzate

### Core Technologies
- **Next.js 14**: Framework React con App Router
- **React 18**: Libreria per l'interfaccia utente

### Animazioni e Interazioni
- **Framer Motion**: Animazioni fluide e transizioni
- **Lenis**: Smooth scrolling
- **GSAP**: Animazioni del modello 3D (performance ottimizzate)

### Modello 3D 
- **React Three Fiber**: Integrazione Three.js con React

### Styling
- **Tailwind CSS**: Framework CSS utility-first
- **Custom CSS**: Animazioni e effetti speciali

### Sviluppo e Versionamento
- **GitHub**: Repository hosting
- **Vercel**: Hosting e deploy

![Screenshot Carousel](./screenshots/carosello.jpg)
*Carosello circolare con animazioni Framer Motion*

## 📁 Struttura del Progetto

```
nike-experience-page/
├── public/
│   └── assets/
│       ├── images/
│       ├── videos/
│       └── models/
│   
├── src/
│   ├── app/
│   │   ├── experience/page.jsx
│   │   ├── shop/page.jsx
│   │   ├── global.css
│   │   ├── page.js
│   │   └── layout.js
│   │   
│   ├── components/
│   │   ├── experience/
│   │   ├── shop/
│   │   ├── homepage/
│   │   └── other components...
│   │   
│   └── assets/
│       ├── fonts/
│       └── product.json
│       
└── package.json
```

## 🚀 Installazione

### Prerequisiti
- Node.js 18.x o superiore
- npm o yarn

### Setup del progetto

```bash
# Clona il repository
git clone https://github.com/viraj-perera-dev/nike-experience-page.git
cd nike-experience-page

# Installa le dipendenze
npm install
# oppure
yarn install

# Avvia il server di sviluppo
npm run dev
# oppure
yarn dev
```

Il sito sarà disponibile su [http://localhost:3000](http://localhost:3000)

## 🏗 Architettura e Scelte Tecniche

### Next.js App Router
Ho scelto Next.js 14 con App Router per:
- **Routing automatico**: Navigazione SPA senza configurazione manuale
- **Server Components**: Miglior performance e SEO
- **File-based routing**: Struttura intuitiva e scalabile

### Framer Motion vs altre librerie
**Motivazioni della scelta:**
- **Performance**: Ottimizzazioni hardware acceleration
- **Flessibilità**: Controllo granulare delle animazioni
- **Gesture support**: Drag, hover, tap nativi

### GSAP per il 3D
Per il controllo del modello 3D ho preferito GSAP a Framer Motion perché:
- **Prestazioni superiori**: Ottimizzato per animazioni complesse
- **Controllo preciso**: Timeline e tweening avanzati
- **Compatibilità Three.js**: Integrazione consolidata


![Screenshot Products](./screenshots/products.png)
*Pagina prodotti con dati dinamici da JSON*

## 🎨 Sezioni del Sito

### Hero Section
- **Effetto Glitch**: Animazione custom con Framer Motion
- **Video Background**: Caricamento progressivo con loading state
- **Call-to-Action**: Transizioni fluide verso il contenuto

### Carosello Circolare
- **Infinite Loop**: Implementazione custom con Framer Motion

### Sezione con Galleria Animata
- **Parallax Effects**: Movimento differenziato degli elementi
- **Custom Easing**: Curve di animazione create con [cubic-bezier.com](https://cubic-bezier.com/)
- **Staggered Animation**: Animazioni sequential degli elementi

### Experience 3D
- **Interazione on scroll**: Rotazioni zoome e movimenti gestiti con lo scroll trigger
- **Lighting Setup**: Illuminazione realistica
- **AR Integration**: Visualizzazione in realtà aumentata (mobile)
- **Performance Optimization**: GSAP per ottimizzazione performance

![Screenshot Mobile](./screenshots/mobile1.png)

## ⚡ Performance e Ottimizzazioni

### Implementate
- **Image Optimization**: Next.js Image component 
- **Smooth Scrolling**: Utilizzo della libreria Lenis

### Da Implementare
- **Ottimizzazione Immagini**: Conversione WebP/AVIF
- **Video Compression**: Riduzione dimensioni video

## 📱 Responsività

Il sito è completamente responsive con:
- **Breakpoints Tailwind**: sm, md, lg, xl, 2xl
- **Mobile-First**: Design ottimizzato per mobile
- **AR Support**: Realtà aumentata per dispositivi compatibili

## 🚨 Problemi Noti e Miglioramenti Futuri

### Limitazioni Attuali
1. **Tempo di Sviluppo**: Progetto sviluppato principalmente nei weekend
2. **Ottimizzazioni Media**: Immagini e video non completamente ottimizzati
3. **Transizioni Navigazione**: Possibili miglioramenti nella fluidità
4. **Code Refactoring**: Necessari commenti più dettagliati e miglioramenti del codice
5. **Miglioramento SEO**: Migliorare la seo utilizzando meta tags e graphQL

## 🔄 Processo di Sviluppo

### Pianificazione
Il progetto è stato suddiviso in task giornalieri:

**Giorno 1**: Setup e Assets
- Raccolta e organizzazione assets
- Setup Next.js e configurazione base
- Struttura componenti iniziale

**Giorno 2**: Sviluppo Statico
- Implementazione layout base
- Creazione componenti UI
- Styling responsive

**Giorno 3**: Animazioni
- Integrazione Framer Motion
- Sviluppo carosello custom
- Effetti hero section

**Giorno 3/4**: Esperienza 3D
- Setup React Three Fiber
- Implementazione modello 3D
- Integrazione AR

**Giorno 4**: Rifinitura
- Testing responsive
- Ottimizzazioni finali
- Documentazione

### Metodologia
- **Mobile-First**: Sviluppo responsivo dalla base
- **Progressive Enhancement**: Funzionalità base + miglioramenti


## 🙏 Risorse

- **React-three-fiber Community**: Per la documentazione eccellente
- **Framer Motion**: Per l'API intuitiva
- **Next.js Team**: Per il framework potente e flessibile
- **Cubic Bezier**: Per lo strumento di curve personalizzate
- **GSAP**: Per lo strumento di curve personalizzate
- **Lenis**: Per lo strumento di curve personalizzate
- **Tailwind CSS**: Per gestire lo stile e la responsività


