export type Lang = "en" | "fr" | "de" | "nl";

export const languages: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
  { code: "nl", label: "NL" },
];

export const content = {
  en: {
    brand: "PlatinumStar IPTV",
    nav: {
      home: "Home",
      experience: "Experience",
      categories: "Library",
      devices: "Devices",
      setup: "Setup",
      reseller: "Reseller",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      badge: "Premium cinematic streaming setup",
      title: "Movie, series and live screen setup for Europe",
      subtitle:
        "PlatinumStar IPTV helps users set up their Smart TV, Fire TV, Android TV, mobile and desktop screens with a clean cinematic experience.",
      primary: "Get Setup Support",
      secondary: "Become a Reseller",
      note: "France, Germany and the Netherlands focused support. No public pricing on the website.",
    },
    popup: {
      title: "Contact us and earn with your own reseller setup",
      text:
        "Start your own reseller flow with PlatinumStar IPTV. Send us a message and learn how to build a private partner setup for European customers.",
      button: "Contact on WhatsApp",
      close: "Close",
    },
    strip: [
      "Movie experience",
      "Series-ready setup",
      "Smart TV support",
      "Fire TV guidance",
      "Mobile viewing",
      "Reseller access",
    ],
    experience: {
      badge: "Experience",
      title: "A richer screen experience, built around setup and support",
      text:
        "The page is designed for users who want a polished entertainment flow. The focus is compatibility, device setup, fast guidance and a premium visual experience.",
      cards: [
        {
          title: "Cinema-style landing",
          text: "Dark visuals, motion effects and screen-focused sections create a premium entertainment feeling from the first visit.",
        },
        {
          title: "Movie & series direction",
          text: "The design clearly communicates a viewing experience without relying on risky channel or platform names.",
        },
        {
          title: "Support-first conversion",
          text: "Every key section guides the visitor toward WhatsApp contact, device setup or reseller application.",
        },
        {
          title: "Europe-focused flow",
          text: "Language, copy and support messages are prepared for France, Germany and the Netherlands.",
        },
      ],
    },
    categories: {
      badge: "Library Feel",
      title: "Built for entertainment screens",
      text:
        "The structure gives visitors the feeling of a modern movie and series platform while keeping the site focused on setup, support and compatibility.",
      items: [
        "Movie nights",
        "Series watching",
        "Family screens",
        "Live entertainment",
        "Multi-device use",
        "Travel viewing",
      ],
    },
    devices: {
      badge: "Devices",
      title: "Compatible with popular home and mobile screens",
      text:
        "Prepared for the devices people already use at home, at work or while travelling.",
      items: [
        "Samsung Smart TV",
        "LG Smart TV",
        "Android TV",
        "Fire TV Stick",
        "iPhone & iPad",
        "Android Phone",
        "Windows PC",
        "MacBook",
      ],
    },
    setup: {
      badge: "Setup Flow",
      title: "Simple onboarding from contact to screen",
      steps: [
        {
          title: "Send your country and device",
          text: "Message us on WhatsApp with your country and the screen or device you want to set up.",
        },
        {
          title: "Receive the correct setup path",
          text: "We guide you through the suitable player and setup process for your device.",
        },
        {
          title: "Complete your screen setup",
          text: "Finish the guided setup and start using your screen with a smoother entertainment flow.",
        },
      ],
    },
    reseller: {
      badge: "Reseller Program",
      title: "Build your own PlatinumStar reseller business",
      text:
        "A private partner path for people who want to manage customer setup requests, onboarding and support across Europe.",
      points: [
        "Private reseller application",
        "No public pricing on the website",
        "European customer support flow",
        "France, Germany and Netherlands focus",
        "WhatsApp-based onboarding",
        "Premium brand presentation",
      ],
      primary: "Apply for Reseller Access",
      secondary: "Contact Partnership Team",
    },
    why: {
      badge: "Why PlatinumStar",
      title: "Designed to look premium, convert fast and stay clean",
      items: [
        {
          title: "More detailed landing page",
          text: "Multiple sections, visual panels, cinematic cards and motion effects prevent the homepage from looking empty.",
        },
        {
          title: "Mobile-first structure",
          text: "Menus, buttons, cards and popup are prepared to work cleanly on phones.",
        },
        {
          title: "Language-based contact",
          text: "WhatsApp messages change by selected language so the user reaches you with the right context.",
        },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          q: "Do you show prices on the website?",
          a: "No. Setup and reseller details are handled privately through WhatsApp contact.",
        },
        {
          q: "Which countries are the main focus?",
          a: "The main focus is France, Germany and the Netherlands.",
        },
        {
          q: "Which devices are supported?",
          a: "Smart TV, Fire TV, Android TV, iOS, Android, Windows and Mac devices are supported.",
        },
        {
          q: "How does reseller contact work?",
          a: "You contact us on WhatsApp, share your country and request reseller access.",
        },
      ],
    },
    reviews: {
      badge: "Reviews",
      title: "A premium flow for users and partners",
      items: [
        {
          name: "Customer from Germany",
          text: "The page felt premium and the setup direction was easy to understand.",
        },
        {
          name: "User from France",
          text: "The support flow was simple. I sent my device model and received guidance.",
        },
        {
          name: "Partner from Netherlands",
          text: "The reseller presentation looks clean and serious for European customers.",
        },
      ],
    },
    contact: {
      badge: "Contact",
      title: "Ready to set up your screen or reseller access?",
      text:
        "Send your country, device model or reseller request on WhatsApp. We will guide you with the right next step.",
      button: "Message on WhatsApp",
    },
    whatsapp:
      "Hello, I want PlatinumStar IPTV setup or reseller information. My country is ... and my device/request is ...",
    popupWhatsapp:
      "Hello, I want to earn with PlatinumStar IPTV reseller setup. My country is ...",
  },

  fr: {
    brand: "PlatinumStar IPTV",
    nav: {
      home: "Accueil",
      experience: "Expérience",
      categories: "Bibliothèque",
      devices: "Appareils",
      setup: "Installation",
      reseller: "Revendeur",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      badge: "Installation streaming cinématique premium",
      title: "Installation films, séries et écrans live pour l’Europe",
      subtitle:
        "PlatinumStar IPTV aide les utilisateurs à configurer Smart TV, Fire TV, Android TV, mobile et ordinateur avec une expérience visuelle premium.",
      primary: "Obtenir de l’aide",
      secondary: "Devenir revendeur",
      note: "Support orienté France, Allemagne et Pays-Bas. Aucun prix public sur le site.",
    },
    popup: {
      title: "Contactez-nous et gagnez avec votre propre activité revendeur",
      text:
        "Lancez votre parcours revendeur avec PlatinumStar IPTV. Envoyez-nous un message pour découvrir comment créer une activité partenaire privée en Europe.",
      button: "Contact WhatsApp",
      close: "Fermer",
    },
    strip: [
      "Expérience cinéma",
      "Séries sur écran",
      "Support Smart TV",
      "Guide Fire TV",
      "Visionnage mobile",
      "Accès revendeur",
    ],
    experience: {
      badge: "Expérience",
      title: "Une expérience écran plus riche, centrée sur l’installation",
      text:
        "La page est pensée pour une expérience divertissement premium avec compatibilité, installation, accompagnement rapide et présentation visuelle forte.",
      cards: [
        {
          title: "Landing style cinéma",
          text: "Visuels sombres, effets de mouvement et sections écran donnent une impression premium dès l’arrivée.",
        },
        {
          title: "Orientation films & séries",
          text: "Le design montre clairement une expérience de visionnage sans utiliser de noms de plateformes sensibles.",
        },
        {
          title: "Conversion par support",
          text: "Chaque section dirige vers WhatsApp, l’installation de l’appareil ou la demande revendeur.",
        },
        {
          title: "Flux orienté Europe",
          text: "Les textes et messages sont préparés pour la France, l’Allemagne et les Pays-Bas.",
        },
      ],
    },
    categories: {
      badge: "Ambiance bibliothèque",
      title: "Conçu pour les écrans de divertissement",
      text:
        "La structure donne l’impression d’une plateforme moderne de films et séries tout en restant centrée sur l’installation et le support.",
      items: [
        "Soirées films",
        "Séries",
        "Écrans famille",
        "Divertissement live",
        "Multi-appareils",
        "Visionnage en voyage",
      ],
    },
    devices: {
      badge: "Appareils",
      title: "Compatible avec les écrans populaires",
      text:
        "Préparé pour les appareils utilisés à la maison, au travail ou en déplacement.",
      items: [
        "Samsung Smart TV",
        "LG Smart TV",
        "Android TV",
        "Fire TV Stick",
        "iPhone & iPad",
        "Téléphone Android",
        "PC Windows",
        "MacBook",
      ],
    },
    setup: {
      badge: "Installation",
      title: "Un parcours simple du contact à l’écran",
      steps: [
        {
          title: "Envoyez votre pays et appareil",
          text: "Écrivez-nous sur WhatsApp avec votre pays et l’appareil à configurer.",
        },
        {
          title: "Recevez le bon parcours",
          text: "Nous vous guidons avec le lecteur et la méthode adaptés à votre appareil.",
        },
        {
          title: "Terminez votre configuration",
          text: "Finalisez l’installation guidée et commencez votre expérience écran.",
        },
      ],
    },
    reseller: {
      badge: "Programme revendeur",
      title: "Lancez votre activité revendeur PlatinumStar",
      text:
        "Un parcours privé pour gérer les demandes clients, l’installation et le support en Europe.",
      points: [
        "Demande revendeur privée",
        "Aucun prix public sur le site",
        "Flux de support client européen",
        "Focus France, Allemagne et Pays-Bas",
        "Onboarding via WhatsApp",
        "Présentation de marque premium",
      ],
      primary: "Demander un accès revendeur",
      secondary: "Contacter l’équipe partenaire",
    },
    why: {
      badge: "Pourquoi PlatinumStar",
      title: "Pensé pour être premium, clair et efficace",
      items: [
        {
          title: "Page plus détaillée",
          text: "Plusieurs sections, cartes visuelles et effets évitent une page vide ou trop simple.",
        },
        {
          title: "Mobile d’abord",
          text: "Menus, boutons, cartes et popup sont adaptés aux téléphones.",
        },
        {
          title: "Contact par langue",
          text: "Les messages WhatsApp changent selon la langue sélectionnée.",
        },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Questions fréquentes",
      items: [
        {
          q: "Les prix sont-ils affichés ?",
          a: "Non. Les détails d’installation et revendeur sont traités en privé via WhatsApp.",
        },
        {
          q: "Quels pays sont ciblés ?",
          a: "La France, l’Allemagne et les Pays-Bas.",
        },
        {
          q: "Quels appareils sont compatibles ?",
          a: "Smart TV, Fire TV, Android TV, iOS, Android, Windows et Mac.",
        },
        {
          q: "Comment fonctionne le contact revendeur ?",
          a: "Vous nous contactez sur WhatsApp et demandez l’accès revendeur.",
        },
      ],
    },
    reviews: {
      badge: "Avis",
      title: "Un flux premium pour utilisateurs et partenaires",
      items: [
        {
          name: "Client en Allemagne",
          text: "La présentation est premium et le parcours d’installation est clair.",
        },
        {
          name: "Utilisateur en France",
          text: "Le support est simple. J’ai envoyé mon modèle d’appareil et reçu l’aide.",
        },
        {
          name: "Partenaire aux Pays-Bas",
          text: "La présentation revendeur est propre et sérieuse pour les clients européens.",
        },
      ],
    },
    contact: {
      badge: "Contact",
      title: "Prêt pour votre écran ou accès revendeur ?",
      text:
        "Envoyez votre pays, votre modèle d’appareil ou votre demande revendeur sur WhatsApp.",
      button: "Message WhatsApp",
    },
    whatsapp:
      "Bonjour, je souhaite des informations PlatinumStar IPTV pour installation ou revendeur. Mon pays est ... et ma demande/appareil est ...",
    popupWhatsapp:
      "Bonjour, je souhaite gagner avec l’activité revendeur PlatinumStar IPTV. Mon pays est ...",
  },

  de: {
    brand: "PlatinumStar IPTV",
    nav: {
      home: "Start",
      experience: "Erlebnis",
      categories: "Mediathek",
      devices: "Geräte",
      setup: "Einrichtung",
      reseller: "Reseller",
      faq: "FAQ",
      contact: "Kontakt",
    },
    hero: {
      badge: "Premium Cinematic Streaming Setup",
      title: "Film-, Serien- und Screen-Setup für Europa",
      subtitle:
        "PlatinumStar IPTV hilft Nutzern bei der Einrichtung von Smart TV, Fire TV, Android TV, Mobilgeräten und Desktop mit einem hochwertigen visuellen Erlebnis.",
      primary: "Einrichtungshilfe erhalten",
      secondary: "Reseller werden",
      note: "Fokus auf Frankreich, Deutschland und die Niederlande. Keine öffentlichen Preise auf der Website.",
    },
    popup: {
      title: "Kontaktieren Sie uns und verdienen Sie mit Ihrem eigenen Reseller-Setup",
      text:
        "Starten Sie Ihren eigenen Reseller-Ablauf mit PlatinumStar IPTV. Schreiben Sie uns und erfahren Sie mehr über private Partneroptionen für Europa.",
      button: "Per WhatsApp kontaktieren",
      close: "Schließen",
    },
    strip: [
      "Film-Erlebnis",
      "Serien-Setup",
      "Smart TV Support",
      "Fire TV Anleitung",
      "Mobiles Streaming",
      "Reseller-Zugang",
    ],
    experience: {
      badge: "Erlebnis",
      title: "Ein hochwertiges Screen-Erlebnis rund um Setup und Support",
      text:
        "Die Seite ist für Nutzer gedacht, die ein sauberes Entertainment-Erlebnis mit starker Optik, Kompatibilität und Support wollen.",
      cards: [
        {
          title: "Landingpage im Kino-Stil",
          text: "Dunkle Visuals, Bewegungseffekte und Screen-Sektionen sorgen für einen Premium-Eindruck.",
        },
        {
          title: "Film- & Serienrichtung",
          text: "Das Design zeigt ein klares Unterhaltungserlebnis ohne sensible Plattformnamen.",
        },
        {
          title: "Support-first Conversion",
          text: "Jeder Bereich führt zu WhatsApp, Geräteeinrichtung oder Reseller-Anfrage.",
        },
        {
          title: "Europa-Fokus",
          text: "Texte und Kontaktmeldungen sind für Frankreich, Deutschland und die Niederlande vorbereitet.",
        },
      ],
    },
    categories: {
      badge: "Mediathek-Gefühl",
      title: "Gebaut für Entertainment-Bildschirme",
      text:
        "Die Struktur vermittelt den Eindruck einer modernen Film- und Serienplattform, bleibt aber auf Setup und Support fokussiert.",
      items: [
        "Filmabende",
        "Serien schauen",
        "Familienbildschirme",
        "Live-Unterhaltung",
        "Multi-Geräte-Nutzung",
        "Unterwegs schauen",
      ],
    },
    devices: {
      badge: "Geräte",
      title: "Kompatibel mit beliebten Heim- und Mobilgeräten",
      text:
        "Vorbereitet für Geräte, die Menschen zu Hause, bei der Arbeit oder unterwegs nutzen.",
      items: [
        "Samsung Smart TV",
        "LG Smart TV",
        "Android TV",
        "Fire TV Stick",
        "iPhone & iPad",
        "Android-Smartphone",
        "Windows-PC",
        "MacBook",
      ],
    },
    setup: {
      badge: "Setup Flow",
      title: "Einfacher Ablauf vom Kontakt bis zum Bildschirm",
      steps: [
        {
          title: "Land und Gerät senden",
          text: "Schreiben Sie uns per WhatsApp mit Ihrem Land und Gerät.",
        },
        {
          title: "Richtigen Setup-Weg erhalten",
          text: "Wir führen Sie durch den passenden Player- und Einrichtungsprozess.",
        },
        {
          title: "Screen-Setup abschließen",
          text: "Schließen Sie die geführte Einrichtung ab und starten Sie Ihr Erlebnis.",
        },
      ],
    },
    reseller: {
      badge: "Reseller-Programm",
      title: "Starten Sie Ihr PlatinumStar Reseller-Geschäft",
      text:
        "Ein privater Partnerweg für Kundensetup, Onboarding und Support in Europa.",
      points: [
        "Private Reseller-Anfrage",
        "Keine öffentlichen Preise",
        "Europäischer Kundensupport-Ablauf",
        "Fokus Frankreich, Deutschland, Niederlande",
        "WhatsApp-Onboarding",
        "Premium-Markenauftritt",
      ],
      primary: "Reseller-Zugang beantragen",
      secondary: "Partnerteam kontaktieren",
    },
    why: {
      badge: "Warum PlatinumStar",
      title: "Premium-Look, schnelle Conversion und saubere Struktur",
      items: [
        {
          title: "Mehr Details auf der Startseite",
          text: "Mehrere Sektionen, visuelle Panels und Motion-Effekte verhindern eine leere einfache Seite.",
        },
        {
          title: "Mobile-first Struktur",
          text: "Menüs, Buttons, Karten und Popup sind für Smartphones vorbereitet.",
        },
        {
          title: "Sprachbasierter Kontakt",
          text: "WhatsApp-Nachrichten ändern sich je nach ausgewählter Sprache.",
        },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Häufige Fragen",
      items: [
        {
          q: "Werden Preise auf der Website angezeigt?",
          a: "Nein. Setup- und Reseller-Details werden privat über WhatsApp besprochen.",
        },
        {
          q: "Welche Länder stehen im Fokus?",
          a: "Frankreich, Deutschland und die Niederlande.",
        },
        {
          q: "Welche Geräte werden unterstützt?",
          a: "Smart TV, Fire TV, Android TV, iOS, Android, Windows und Mac.",
        },
        {
          q: "Wie funktioniert der Reseller-Kontakt?",
          a: "Sie schreiben uns per WhatsApp und fragen Reseller-Zugang an.",
        },
      ],
    },
    reviews: {
      badge: "Bewertungen",
      title: "Ein Premium-Ablauf für Nutzer und Partner",
      items: [
        {
          name: "Kunde aus Deutschland",
          text: "Die Seite wirkt hochwertig und der Setup-Ablauf ist klar.",
        },
        {
          name: "Nutzer aus Frankreich",
          text: "Der Support war einfach. Ich habe mein Gerät gesendet und Hilfe erhalten.",
        },
        {
          name: "Partner aus den Niederlanden",
          text: "Die Reseller-Präsentation wirkt sauber und seriös für europäische Kunden.",
        },
      ],
    },
    contact: {
      badge: "Kontakt",
      title: "Bereit für Screen-Setup oder Reseller-Zugang?",
      text:
        "Senden Sie Land, Gerätemodell oder Reseller-Anfrage per WhatsApp.",
      button: "WhatsApp-Nachricht",
    },
    whatsapp:
      "Hallo, ich möchte Informationen zu PlatinumStar IPTV Setup oder Reseller-Zugang. Mein Land ist ... und mein Gerät/Anfrage ist ...",
    popupWhatsapp:
      "Hallo, ich möchte mit PlatinumStar IPTV Reseller-Setup verdienen. Mein Land ist ...",
  },

  nl: {
    brand: "PlatinumStar IPTV",
    nav: {
      home: "Home",
      experience: "Ervaring",
      categories: "Bibliotheek",
      devices: "Apparaten",
      setup: "Installatie",
      reseller: "Reseller",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      badge: "Premium cinematic streaming setup",
      title: "Film-, serie- en scherminstallatie voor Europa",
      subtitle:
        "PlatinumStar IPTV helpt gebruikers met Smart TV, Fire TV, Android TV, mobiel en desktop via een premium visuele ervaring.",
      primary: "Installatiehulp krijgen",
      secondary: "Reseller worden",
      note: "Focus op Frankrijk, Duitsland en Nederland. Geen openbare prijzen op de website.",
    },
    popup: {
      title: "Neem contact op en verdien met je eigen reseller setup",
      text:
        "Start je eigen reseller-flow met PlatinumStar IPTV. Stuur ons een bericht en ontdek hoe je een privé partnerstructuur opbouwt voor Europese klanten.",
      button: "Contact via WhatsApp",
      close: "Sluiten",
    },
    strip: [
      "Filmervaring",
      "Serie-ready setup",
      "Smart TV support",
      "Fire TV begeleiding",
      "Mobiel kijken",
      "Reseller toegang",
    ],
    experience: {
      badge: "Ervaring",
      title: "Een rijkere schermervaring rond installatie en support",
      text:
        "De pagina is ontworpen voor gebruikers die een premium entertainmentervaring willen met compatibiliteit, setup en snelle begeleiding.",
      cards: [
        {
          title: "Cinema-style landing",
          text: "Donkere visuals, bewegingseffecten en schermsecties geven direct een premium gevoel.",
        },
        {
          title: "Film- & serierichting",
          text: "Het ontwerp communiceert een kijkervaring zonder gevoelige platformnamen.",
        },
        {
          title: "Support-first conversie",
          text: "Elke sectie stuurt naar WhatsApp, apparaatinstallatie of reseller-aanvraag.",
        },
        {
          title: "Europa-flow",
          text: "Teksten en berichten zijn voorbereid voor Frankrijk, Duitsland en Nederland.",
        },
      ],
    },
    categories: {
      badge: "Bibliotheekgevoel",
      title: "Gemaakt voor entertainmentschermen",
      text:
        "De structuur voelt als een moderne film- en serieomgeving maar blijft gericht op installatie en support.",
      items: [
        "Filmavonden",
        "Series kijken",
        "Familieschermen",
        "Live entertainment",
        "Multi-device gebruik",
        "Kijken op reis",
      ],
    },
    devices: {
      badge: "Apparaten",
      title: "Compatibel met populaire schermen en apparaten",
      text:
        "Voorbereid voor apparaten die mensen thuis, op werk of onderweg gebruiken.",
      items: [
        "Samsung Smart TV",
        "LG Smart TV",
        "Android TV",
        "Fire TV Stick",
        "iPhone & iPad",
        "Android-telefoon",
        "Windows-pc",
        "MacBook",
      ],
    },
    setup: {
      badge: "Setup Flow",
      title: "Eenvoudig van contact naar scherm",
      steps: [
        {
          title: "Stuur je land en apparaat",
          text: "Stuur ons via WhatsApp je land en het apparaat dat je wilt instellen.",
        },
        {
          title: "Ontvang de juiste installatieroute",
          text: "Wij begeleiden je door de geschikte player en installatieflow.",
        },
        {
          title: "Rond je scherminstallatie af",
          text: "Maak de begeleide installatie af en start je entertainmentervaring.",
        },
      ],
    },
    reseller: {
      badge: "Reseller Programma",
      title: "Bouw je eigen PlatinumStar reseller business",
      text:
        "Een privé partnerroute voor klantinstallatie, onboarding en support in Europa.",
      points: [
        "Privé reseller-aanvraag",
        "Geen openbare prijzen",
        "Europese klantondersteuning",
        "Focus Frankrijk, Duitsland en Nederland",
        "WhatsApp onboarding",
        "Premium merkpresentatie",
      ],
      primary: "Reseller-toegang aanvragen",
      secondary: "Partnerteam contacteren",
    },
    why: {
      badge: "Waarom PlatinumStar",
      title: "Ontworpen om premium, snel en helder te werken",
      items: [
        {
          title: "Meer detail op de homepage",
          text: "Meerdere secties, visuele panelen en motion effecten voorkomen een lege simpele pagina.",
        },
        {
          title: "Mobile-first structuur",
          text: "Menu’s, knoppen, kaarten en popup zijn geschikt voor telefoons.",
        },
        {
          title: "Taalgerichte contactflow",
          text: "WhatsApp-berichten veranderen op basis van de gekozen taal.",
        },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Veelgestelde vragen",
      items: [
        {
          q: "Staan prijzen op de website?",
          a: "Nee. Setup- en resellerdetails worden privé via WhatsApp besproken.",
        },
        {
          q: "Welke landen zijn de focus?",
          a: "Frankrijk, Duitsland en Nederland.",
        },
        {
          q: "Welke apparaten worden ondersteund?",
          a: "Smart TV, Fire TV, Android TV, iOS, Android, Windows en Mac.",
        },
        {
          q: "Hoe werkt reseller contact?",
          a: "Je stuurt ons een WhatsApp-bericht en vraagt reseller-toegang aan.",
        },
      ],
    },
    reviews: {
      badge: "Reviews",
      title: "Een premium flow voor gebruikers en partners",
      items: [
        {
          name: "Klant uit Duitsland",
          text: "De pagina voelt premium en de installatierichting is duidelijk.",
        },
        {
          name: "Gebruiker uit Frankrijk",
          text: "De support was simpel. Ik stuurde mijn apparaatmodel en kreeg begeleiding.",
        },
        {
          name: "Partner uit Nederland",
          text: "De resellerpresentatie is netjes en serieus voor Europese klanten.",
        },
      ],
    },
    contact: {
      badge: "Contact",
      title: "Klaar voor scherminstallatie of reseller toegang?",
      text:
        "Stuur je land, apparaatmodel of reseller-aanvraag via WhatsApp.",
      button: "WhatsApp-bericht",
    },
    whatsapp:
      "Hallo, ik wil informatie over PlatinumStar IPTV setup of reseller toegang. Mijn land is ... en mijn apparaat/verzoek is ...",
    popupWhatsapp:
      "Hallo, ik wil verdienen met PlatinumStar IPTV reseller setup. Mijn land is ...",
  },
} as const;