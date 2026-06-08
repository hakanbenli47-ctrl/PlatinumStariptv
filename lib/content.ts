export type Lang = "tr" | "de" | "fr" | "nl" | "uk";

export const languages: { code: Lang; label: string }[] = [
  { code: "tr", label: "TR" },
  { code: "de", label: "DE" },
  { code: "fr", label: "FR" },
  { code: "nl", label: "NL" },
  { code: "uk", label: "UK" },
];

const categoryImages = {
  sport: "/sport.jpg",
  movie: "/movie.jpg",
  series: "/series.jpg",
  documentary: "/documentary.jpg",
  kids: "/kids.jpg",
  adult: "/adult.jpg",
};

export const content = {
  tr: {
    brand: "PlatinumStar İPTV",
    nav: {
      home: "Ana Sayfa",
      experience: "Deneyim",
      categories: "Kategoriler",
      devices: "Cihazlar",
      setup: "Kurulum",
      reseller: "Bayilik",
      faq: "SSS",
      contact: "İletişim",
    },
    hero: {
      badge: "Premium IPTV Servisi",
      title: "Sınırsız eğlence. Üst seviye yayın deneyimi.",
      subtitle:
        "Yüksek kaliteli yayın, güçlü altyapı ve takılma-donma yaşamadan daha stabil bir IPTV deneyimi sunar.",
      primary: "WhatsApp Destek",
      secondary: "Bayilik Al",
      note:
        "Sitede herkese açık fiyat gösterilmez. Paket, deneme ve bayilik detayları WhatsApp üzerinden özel olarak paylaşılır.",
    },
    popup: {
      title: "Kendi bayilik sisteminizi başlatın",
      text:
        "PlatinumStar İPTV ile Avrupa müşterilerine yönelik kendi bayilik sisteminizi nasıl kurabileceğinizi öğrenmek için bizimle iletişime geçin.",
      button: "WhatsApp ile iletişime geç",
      close: "Kapat",
    },
    strip: [
      "10.000+ canlı kanal",
      "100.000+ VOD içerik",
      "Takılma yok",
      "Donma yok",
      "HD • FHD • 4K kalite",
      "7/24 destek",
      "Tüm cihazlarla uyumlu",
      "Anında aktivasyon",
    ],
    experience: {
      badge: "Premium Deneyim",
      title: "Kesintisiz ve stabil IPTV deneyimi",
      text:
        "PlatinumStar İPTV; Smart TV, Android TV, Fire TV, telefon, tablet ve bilgisayarda hızlı, stabil ve premium bir eğlence deneyimi isteyen kullanıcılar için hazırlanmıştır.",
      cards: [
        {
          title: "10.000+ canlı kanal",
          text:
            "Farklı ülke ve ilgi alanlarına uygun geniş canlı TV kanal seçenekleriyle güçlü bir izleme deneyimi.",
        },
        {
          title: "100.000+ VOD & film",
          text:
            "Film, dizi ve eğlence içeriklerinden oluşan geniş VOD arşiviyle günlük kullanıma uygun içerik zenginliği.",
        },
        {
          title: "Takılma yok, donma yok",
          text:
            "Daha akıcı oynatma, hızlı tepki ve stabil kullanım için güçlü altyapı ile hazırlanmış yayın deneyimi.",
        },
        {
          title: "HD, FHD ve 4K kalite",
          text:
            "Modern ekranlar, Smart TV'ler ve ev sineması deneyimi için yüksek görüntü kalitesi.",
        },
      ],
    },
    categories: {
      badge: "Kategoriler",
      title: "Tek ekranda ihtiyaç duyulan tüm içerikler",
      text:
        "Spor kanalları, film kanalları, diziler, belgeseller, çocuk kanalları ve yetişkin içerikleri premium IPTV deneyimi içinde sunulur.",
      items: [
        {
          title: "Spor Kanalları",
          text:
            "Canlı spor, önemli maçlar ve spor yayınları tek ekranda izlenebilir.",
          image: categoryImages.sport,
        },
        {
          title: "Film Kanalları",
          text:
            "Film geceleri, sinema atmosferi ve farklı zevklere uygun eğlence içerikleri.",
          image: categoryImages.movie,
        },
        {
          title: "Diziler",
          text:
            "Popüler diziler ve uzun izleme sürelerine uygun günlük eğlence içerikleri.",
          image: categoryImages.series,
        },
        {
          title: "Belgeseller",
          text:
            "Bilgi, doğa, tarih ve dikkat çekici belgesel içerikleri.",
          image: categoryImages.documentary,
        },
        {
          title: "Çocuk Kanalları",
          text: "Aile kullanımına uygun çocuk içerikleri ve eğlenceli yayınlar.",
          image: categoryImages.kids,
        },
        {
          title: "Yetişkin İçerikleri",
          text: "Ek olarak yetişkinlere özel içerikler de mevcuttur.",
          image: categoryImages.adult,
        },
      ],
    },
    devices: {
      badge: "Cihazlar",
      title: "Popüler cihazların tamamıyla uyumlu",
      text:
        "PlatinumStar İPTV, kullanıcıların evde veya dışarıda hâlihazırda kullandığı cihazlara kurulabilir.",
      items: [
        "Samsung Smart TV",
        "LG Smart TV",
        "Android TV",
        "Fire TV Stick",
        "iPhone & iPad",
        "Android Telefon",
        "Windows PC",
        "MacBook",
      ],
    },
    setup: {
      badge: "Kurulum",
      title: "İletişimden aktivasyona hızlı süreç",
      steps: [
        {
          title: "Cihaz ve ülke bilgisini gönderin",
          text:
            "WhatsApp üzerinden hangi cihazı kullandığınızı ve servisi hangi ülkede kullanmak istediğinizi yazın.",
        },
        {
          title: "Uygun kurulum yönlendirmesini alın",
          text:
            "Smart TV, Android TV, Fire TV, telefon veya bilgisayar için size uygun kurulum yöntemi paylaşılır.",
        },
        {
          title: "Anında aktivasyon",
          text:
            "Kurulumdan sonra erişiminiz hızlıca aktif edilir ve izlemeye başlayabilirsiniz.",
        },
      ],
    },
    reseller: {
      badge: "Bayilik Programı",
      title: "Kendi PlatinumStar İPTV bayilik sisteminizi kurun",
      text:
        "Müşteri taleplerini, aktivasyonları ve desteği profesyonel şekilde yönetmek isteyenler için özel partner sistemi.",
      points: [
        "Özel bayilik başvurusu",
        "Herkese açık fiyat yok",
        "10.000+ canlı kanal",
        "100.000+ VOD içerik",
        "HD / FHD / 4K kalite",
        "7/24 destek sistemi",
        "Tüm cihazlarla uyumlu",
        "Anında aktivasyon",
        "Stabil sunucu yapısı",
        "Premium marka sunumu",
      ],
      primary: "Bayilik erişimi iste",
      secondary: "İletişime geç",
    },
    why: {
      badge: "Neden PlatinumStar İPTV",
      title: "Kalite tesadüf değildir",
      items: [
        {
          title: "Yüksek performans",
          text:
            "Hızlı tepki, akıcı kullanım ve temiz bir eğlence deneyimi için güçlü altyapı.",
        },
        {
          title: "%99.9 uptime",
          text:
            "Daha az kesinti için stabilite ve sürekli kullanıma odaklanan yapı.",
        },
        {
          title: "Güvenli iletişim",
          text:
            "İletişim, kurulum ve aktivasyon süreci destek üzerinden özel ve kontrollü şekilde yürütülür.",
        },
        {
          title: "7/24 canlı destek",
          text:
            "Kurulum, cihaz yönlendirmesi, aktivasyon ve genel sorular için destek sağlanır.",
        },
        {
          title: "Tüm cihazlar",
          text:
            "Smart TV, Android, iOS, MAG, Enigma2, PC ve daha fazla cihaz desteklenir.",
        },
        {
          title: "Premium görünüm",
          text:
            "Sayfa ciddi, kaliteli ve ziyaretçiyi doğrudan iletişime yönlendiren bir yapı sunar.",
        },
      ],
    },
    faq: {
      badge: "SSS",
      title: "Sık sorulan sorular",
      items: [
        {
          q: "Sitede fiyatlar gösteriliyor mu?",
          a:
            "Hayır. Paket, deneme ve bayilik detayları WhatsApp üzerinden özel olarak paylaşılır.",
        },
        {
          q: "Takılma veya donma olur mu?",
          a:
            "Yapı stabil kullanım için hazırlanmıştır. Cihaz veya bağlantı kaynaklı durumlarda destek ekibi kurulum için yardımcı olur.",
        },
        {
          q: "Hangi içerikler var?",
          a:
            "Spor kanalları, film kanalları, diziler, belgeseller, çocuk kanalları, VOD içerikleri ve ek yetişkin içerikleri mevcuttur.",
        },
        {
          q: "Ne kadar içerik sunuluyor?",
          a:
            "Sunumda 10.000+ canlı kanal ve 100.000+ VOD içerik öne çıkarılır.",
        },
        {
          q: "Hangi cihazlar destekleniyor?",
          a:
            "Smart TV, Android TV, Fire TV Stick, iPhone, iPad, Android, Windows, Mac, MAG ve Enigma2 desteklenir.",
        },
      ],
    },
    reviews: {
      badge: "Yorumlar",
      title: "Kullanıcılar ve partnerler için premium deneyim",
      items: [
        {
          name: "Almanya'dan kullanıcı",
          text: "Kurulum netti ve sunum oldukça kaliteli görünüyordu.",
        },
        {
          name: "Fransa'dan müşteri",
          text:
            "Cihazımı gönderdim ve kısa sürede doğru kurulum yönlendirmesini aldım.",
        },
        {
          name: "Hollanda'dan partner",
          text:
            "Bayilik sunumu profesyonel ve güven veren bir yapıda.",
        },
      ],
    },
    contact: {
      badge: "İletişim",
      title: "PlatinumStar İPTV kurulumu veya bayilik erişimi için hazır mısınız?",
      text:
        "Ülkenizi, cihazınızı veya bayilik talebinizi WhatsApp üzerinden gönderin. Size en doğru sonraki adımı paylaşalım.",
      button: "WhatsApp mesajı gönder",
    },
    whatsapp:
      "Merhaba, PlatinumStar İPTV hakkında bilgi almak istiyorum. Ülkem ... ve cihazım ...",
    popupWhatsapp:
      "Merhaba, PlatinumStar İPTV bayilik sistemi hakkında bilgi almak istiyorum. Ülkem ...",
  },

  de: {
    brand: "PlatinumStar İPTV",
    nav: {
      home: "Start",
      experience: "Erlebnis",
      categories: "Kategorien",
      devices: "Geräte",
      setup: "Einrichtung",
      reseller: "Reseller",
      faq: "FAQ",
      contact: "Kontakt",
    },
    hero: {
      badge: "Premium IPTV Service",
      title: "Grenzenlose Unterhaltung. Ein Erlebnis auf höchstem Niveau.",
      subtitle:
        "Erleben Sie hochwertige Übertragung, starke Infrastruktur und einen stabilen Service ohne Hängenbleiben oder Einfrieren.",
      primary: "WhatsApp Support",
      secondary: "Reseller werden",
      note:
        "Keine öffentlichen Preise auf der Website. Paket- und Reseller-Details erhalten Sie privat über WhatsApp.",
    },
    popup: {
      title: "Starten Sie Ihr eigenes Reseller-System",
      text:
        "Kontaktieren Sie uns und erfahren Sie, wie Sie mit PlatinumStar İPTV ein eigenes Reseller-System für europäische Kunden aufbauen können.",
      button: "Per WhatsApp kontaktieren",
      close: "Schließen",
    },
    strip: [
      "10.000+ Live-Sender",
      "100.000+ VOD Inhalte",
      "Kein Hängenbleiben",
      "Kein Einfrieren",
      "HD • FHD • 4K Qualität",
      "24/7 Support",
      "Alle Geräte kompatibel",
      "Sofortige Aktivierung",
    ],
    experience: {
      badge: "Premium Erlebnis",
      title: "Stabiles IPTV-Erlebnis ohne Unterbrechung",
      text:
        "PlatinumStar İPTV ist für Nutzer vorbereitet, die eine stabile, schnelle und hochwertige Unterhaltungserfahrung auf Smart TV, Android TV, Fire TV, Smartphone, Tablet und Computer wünschen.",
      cards: [
        {
          title: "10.000+ Live-Sender",
          text:
            "Ein breites Live-TV-Erlebnis mit vielen Senderoptionen für unterschiedliche Interessen und Länder.",
        },
        {
          title: "100.000+ VOD & Filme",
          text:
            "Umfangreiche VOD-Auswahl mit Filmen, Serien und Entertainment-Inhalten für den täglichen Gebrauch.",
        },
        {
          title: "Kein Hängenbleiben, kein Einfrieren",
          text:
            "Starke Infrastruktur für ein flüssiges Erlebnis mit stabilerer Wiedergabe und schneller Reaktion.",
        },
        {
          title: "HD, FHD und 4K Qualität",
          text:
            "Hochwertige Bildqualität für moderne Bildschirme, Smart TVs und Heimkino-Erlebnisse.",
        },
      ],
    },
    categories: {
      badge: "Kategorien",
      title: "Alles, was Sie auf einem Bildschirm brauchen",
      text:
        "Sportkanäle, Filmkanäle, Serien, Dokumentationen, Kinderkanäle und Inhalte für Erwachsene sind in einer stabilen und hochwertigen IPTV-Erfahrung verfügbar.",
      items: [
        {
          title: "Sportkanäle",
          text:
            "Live-Sport, wichtige Spiele und Sportübertragungen auf einem Bildschirm.",
          image: categoryImages.sport,
        },
        {
          title: "Filmkanäle",
          text:
            "Filmabende, Kino-Atmosphäre und Unterhaltung für jeden Geschmack.",
          image: categoryImages.movie,
        },
        {
          title: "Serien",
          text:
            "Beliebte Serien und tägliche Unterhaltung für lange Bildschirmzeiten.",
          image: categoryImages.series,
        },
        {
          title: "Dokumentationen",
          text:
            "Wissen, Natur, Geschichte und spannende Dokumentar-Inhalte.",
          image: categoryImages.documentary,
        },
        {
          title: "Kinderkanäle",
          text: "Familienfreundliche Inhalte und Unterhaltung für Kinder.",
          image: categoryImages.kids,
        },
        {
          title: "Erwachseneninhalte",
          text: "Zusätzliche Inhalte für Erwachsene sind ebenfalls verfügbar.",
          image: categoryImages.adult,
        },
      ],
    },
    devices: {
      badge: "Geräte",
      title: "Kompatibel mit allen beliebten Geräten",
      text:
        "PlatinumStar İPTV kann auf den Geräten eingerichtet werden, die Nutzer bereits zu Hause oder unterwegs verwenden.",
      items: [
        "Samsung Smart TV",
        "LG Smart TV",
        "Android TV",
        "Fire TV Stick",
        "iPhone & iPad",
        "Android Smartphone",
        "Windows PC",
        "MacBook",
      ],
    },
    setup: {
      badge: "Einrichtung",
      title: "Schneller Ablauf vom Kontakt bis zur Aktivierung",
      steps: [
        {
          title: "Gerät und Land senden",
          text:
            "Schreiben Sie uns per WhatsApp, welches Gerät Sie nutzen und in welchem Land Sie den Service verwenden möchten.",
        },
        {
          title: "Passende Einrichtung erhalten",
          text:
            "Sie erhalten die passende Anleitung für Smart TV, Android TV, Fire TV, Smartphone oder Computer.",
        },
        {
          title: "Sofortige Aktivierung",
          text:
            "Nach der Einrichtung wird Ihr Zugang schnell aktiviert und Sie können direkt starten.",
        },
      ],
    },
    reseller: {
      badge: "Reseller Programm",
      title: "Bauen Sie Ihr eigenes PlatinumStar İPTV Reseller-Geschäft auf",
      text:
        "Ein privates Partner-System für Personen, die Kundenanfragen, Aktivierungen und Support professionell verwalten möchten.",
      points: [
        "Private Reseller-Anfrage",
        "Keine öffentlichen Preise",
        "10.000+ Live-Sender",
        "100.000+ VOD Inhalte",
        "HD / FHD / 4K Qualität",
        "24/7 Support-System",
        "Alle Geräte kompatibel",
        "Sofortige Aktivierung",
        "Stabile Serverstruktur",
        "Premium Markenauftritt",
      ],
      primary: "Reseller-Zugang anfragen",
      secondary: "Kontakt aufnehmen",
    },
    why: {
      badge: "Warum PlatinumStar İPTV",
      title: "Qualität ist kein Zufall",
      items: [
        {
          title: "Hohe Performance",
          text:
            "Starke Infrastruktur für schnelle Reaktion, flüssige Nutzung und ein sauberes Unterhaltungserlebnis.",
        },
        {
          title: "%99.9 Uptime",
          text:
            "Auf Stabilität und kontinuierlichen Betrieb ausgelegte Struktur für weniger Unterbrechungen.",
        },
        {
          title: "Sichere Verbindung",
          text:
            "Der Kontakt, die Einrichtung und die Aktivierung laufen privat und kontrolliert über Support.",
        },
        {
          title: "24/7 Live Support",
          text:
            "Unterstützung bei Einrichtung, Gerät, Aktivierung und allgemeinen Fragen.",
        },
        {
          title: "Alle Geräte",
          text:
            "Smart TV, Android, iOS, MAG, Enigma2, PC und weitere Geräte werden unterstützt.",
        },
        {
          title: "Premium Darstellung",
          text:
            "Die Seite wirkt seriös, hochwertig und führt Besucher direkt zur Kontaktaufnahme.",
        },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Häufige Fragen",
      items: [
        {
          q: "Werden Preise auf der Website angezeigt?",
          a:
            "Nein. Paket-, Test- und Reseller-Details werden privat über WhatsApp besprochen.",
        },
        {
          q: "Gibt es Hängenbleiben oder Einfrieren?",
          a:
            "Die Struktur ist auf stabile Nutzung ausgelegt. Bei Geräte- oder Verbindungsthemen hilft der Support bei der Einrichtung.",
        },
        {
          q: "Welche Inhalte gibt es?",
          a:
            "Sportkanäle, Filmkanäle, Serien, Dokumentationen, Kinderkanäle, VOD-Inhalte und zusätzliche Erwachseneninhalte sind verfügbar.",
        },
        {
          q: "Wie viele Inhalte gibt es?",
          a:
            "Die Präsentation hebt 10.000+ Live-Sender und 100.000+ VOD-Inhalte hervor.",
        },
        {
          q: "Welche Geräte werden unterstützt?",
          a:
            "Smart TV, Android TV, Fire TV Stick, iPhone, iPad, Android, Windows, Mac, MAG und Enigma2 werden unterstützt.",
        },
      ],
    },
    reviews: {
      badge: "Bewertungen",
      title: "Premium Erfahrung für Nutzer und Partner",
      items: [
        {
          name: "Nutzer aus Deutschland",
          text: "Die Einrichtung war klar und die Darstellung wirkte hochwertig.",
        },
        {
          name: "Kunde aus Frankreich",
          text:
            "Ich habe mein Gerät gesendet und schnell die passende Anleitung bekommen.",
        },
        {
          name: "Partner aus den Niederlanden",
          text:
            "Die Reseller-Präsentation sieht professionell und vertrauenswürdig aus.",
        },
      ],
    },
    contact: {
      badge: "Kontakt",
      title: "Bereit für PlatinumStar İPTV Einrichtung oder Reseller-Zugang?",
      text:
        "Senden Sie Ihr Land, Ihr Gerät oder Ihre Reseller-Anfrage per WhatsApp. Wir leiten Sie zum passenden nächsten Schritt.",
      button: "WhatsApp Nachricht senden",
    },
    whatsapp:
      "Hallo, ich möchte Informationen zu PlatinumStar İPTV. Mein Land ist ... und mein Gerät ist ...",
    popupWhatsapp:
      "Hallo, ich möchte Informationen zum PlatinumStar İPTV Reseller-System. Mein Land ist ...",
  },

  uk: {
    brand: "PlatinumStar İPTV",
    nav: {
      home: "Home",
      experience: "Experience",
      categories: "Categories",
      devices: "Devices",
      setup: "Setup",
      reseller: "Reseller",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      badge: "Premium IPTV Service",
      title: "Unlimited entertainment. A next-level experience.",
      subtitle:
        "Enjoy high-quality streaming, strong infrastructure and a stable service with no freezing or buffering issues.",
      primary: "WhatsApp Support",
      secondary: "Become a Reseller",
      note:
        "No public prices on the website. Package and reseller details are shared privately on WhatsApp.",
    },
    popup: {
      title: "Start your own reseller system",
      text:
        "Contact us and learn how to build your own PlatinumStar İPTV reseller setup for European customers.",
      button: "Contact on WhatsApp",
      close: "Close",
    },
    strip: [
      "10,000+ live channels",
      "100,000+ VOD contents",
      "No freezing",
      "No buffering",
      "HD • FHD • 4K quality",
      "24/7 support",
      "All devices compatible",
      "Instant activation",
    ],
    experience: {
      badge: "Premium Experience",
      title: "Stable IPTV experience without interruptions",
      text:
        "PlatinumStar İPTV is prepared for users who want a stable, fast and premium entertainment experience on Smart TV, Android TV, Fire TV, mobile, tablet and desktop.",
      cards: [
        {
          title: "10,000+ live channels",
          text:
            "A wide live TV experience with many channel options for different interests and countries.",
        },
        {
          title: "100,000+ VOD & movies",
          text:
            "A large VOD selection with movies, series and entertainment content for daily use.",
        },
        {
          title: "No freezing, no buffering",
          text:
            "Strong infrastructure for smoother playback, faster response and a more stable experience.",
        },
        {
          title: "HD, FHD and 4K quality",
          text:
            "High-quality picture experience for modern screens, Smart TVs and home entertainment.",
        },
      ],
    },
    categories: {
      badge: "Categories",
      title: "Everything users need on one screen",
      text:
        "Sports channels, movie channels, series, documentaries, kids channels and adult content are available in a premium IPTV experience.",
      items: [
        {
          title: "Sports Channels",
          text: "Live sports, important matches and sports broadcasts on one screen.",
          image: categoryImages.sport,
        },
        {
          title: "Movie Channels",
          text: "Movie nights, cinema atmosphere and entertainment for every taste.",
          image: categoryImages.movie,
        },
        {
          title: "Series",
          text: "Popular series and daily entertainment for longer screen time.",
          image: categoryImages.series,
        },
        {
          title: "Documentaries",
          text: "Knowledge, nature, history and interesting documentary content.",
          image: categoryImages.documentary,
        },
        {
          title: "Kids Channels",
          text: "Family-friendly content and entertainment for children.",
          image: categoryImages.kids,
        },
        {
          title: "Adult Content",
          text: "Additional adult content is also available.",
          image: categoryImages.adult,
        },
      ],
    },
    devices: {
      badge: "Devices",
      title: "Compatible with all popular devices",
      text:
        "PlatinumStar İPTV can be set up on the devices people already use at home or while travelling.",
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
      badge: "Setup",
      title: "Fast flow from contact to activation",
      steps: [
        {
          title: "Send your device and country",
          text:
            "Message us on WhatsApp with your device and the country where you want to use the service.",
        },
        {
          title: "Receive the correct setup path",
          text:
            "You receive the suitable guide for Smart TV, Android TV, Fire TV, mobile or desktop.",
        },
        {
          title: "Instant activation",
          text:
            "After setup, your access is activated quickly and you can start using your screen.",
        },
      ],
    },
    reseller: {
      badge: "Reseller Program",
      title: "Build your own PlatinumStar İPTV reseller business",
      text:
        "A private partner system for people who want to manage customer requests, activations and support professionally.",
      points: [
        "Private reseller request",
        "No public prices",
        "10,000+ live channels",
        "100,000+ VOD contents",
        "HD / FHD / 4K quality",
        "24/7 support system",
        "All devices compatible",
        "Instant activation",
        "Stable server structure",
        "Premium brand presentation",
      ],
      primary: "Request reseller access",
      secondary: "Contact us",
    },
    why: {
      badge: "Why PlatinumStar İPTV",
      title: "Quality is not a coincidence",
      items: [
        {
          title: "High performance",
          text:
            "Strong infrastructure for fast response, smooth usage and a clean entertainment experience.",
        },
        {
          title: "99.9% uptime",
          text:
            "A structure focused on stability and continuous usage with fewer interruptions.",
        },
        {
          title: "Secure connection",
          text:
            "Contact, setup and activation are handled privately and carefully through support.",
        },
        {
          title: "24/7 live support",
          text: "Support for setup, device guidance, activation and general questions.",
        },
        {
          title: "All devices",
          text:
            "Smart TV, Android, iOS, MAG, Enigma2, PC and more devices are supported.",
        },
        {
          title: "Premium presentation",
          text:
            "The page looks serious, premium and guides visitors directly to contact.",
        },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Frequently asked questions",
      items: [
        {
          q: "Are prices shown on the website?",
          a:
            "No. Package, trial and reseller details are discussed privately through WhatsApp.",
        },
        {
          q: "Is there freezing or buffering?",
          a:
            "The structure is prepared for stable usage. For device or connection issues, support helps with setup.",
        },
        {
          q: "Which content categories are available?",
          a:
            "Sports channels, movie channels, series, documentaries, kids channels, VOD contents and additional adult content are available.",
        },
        {
          q: "How much content is presented?",
          a:
            "The presentation highlights 10,000+ live channels and 100,000+ VOD contents.",
        },
        {
          q: "Which devices are supported?",
          a:
            "Smart TV, Android TV, Fire TV Stick, iPhone, iPad, Android, Windows, Mac, MAG and Enigma2 are supported.",
        },
      ],
    },
    reviews: {
      badge: "Reviews",
      title: "Premium experience for users and partners",
      items: [
        {
          name: "User from Germany",
          text: "The setup was clear and the presentation felt premium.",
        },
        {
          name: "Customer from France",
          text: "I sent my device and quickly received the correct guidance.",
        },
        {
          name: "Partner from Netherlands",
          text:
            "The reseller presentation looks professional and trustworthy.",
        },
      ],
    },
    contact: {
      badge: "Contact",
      title: "Ready for PlatinumStar İPTV setup or reseller access?",
      text:
        "Send your country, device or reseller request on WhatsApp. We will guide you to the right next step.",
      button: "Send WhatsApp Message",
    },
    whatsapp:
      "Hello, I want information about PlatinumStar İPTV. My country is ... and my device is ...",
    popupWhatsapp:
      "Hello, I want information about the PlatinumStar İPTV reseller system. My country is ...",
  },

  fr: {
    brand: "PlatinumStar İPTV",
    nav: {
      home: "Accueil",
      experience: "Expérience",
      categories: "Catégories",
      devices: "Appareils",
      setup: "Installation",
      reseller: "Revendeur",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      badge: "Service IPTV Premium",
      title: "Divertissement illimité. Expérience haut niveau.",
      subtitle:
        "Profitez d’une diffusion de qualité, d’une infrastructure solide et d’un service stable sans blocage ni coupure.",
      primary: "Support WhatsApp",
      secondary: "Devenir revendeur",
      note:
        "Aucun prix public sur le site. Les détails des packs et revendeurs sont partagés en privé sur WhatsApp.",
    },
    popup: {
      title: "Lancez votre propre système revendeur",
      text:
        "Contactez-nous et découvrez comment créer votre propre système revendeur PlatinumStar İPTV pour les clients européens.",
      button: "Contact WhatsApp",
      close: "Fermer",
    },
    strip: [
      "10.000+ chaînes live",
      "100.000+ contenus VOD",
      "Sans blocage",
      "Sans coupure",
      "Qualité HD • FHD • 4K",
      "Support 24/7",
      "Tous les appareils",
      "Activation instantanée",
    ],
    experience: {
      badge: "Expérience Premium",
      title: "Expérience IPTV stable sans interruption",
      text:
        "PlatinumStar İPTV est préparé pour les utilisateurs qui veulent une expérience stable, rapide et premium sur Smart TV, Android TV, Fire TV, mobile, tablette et ordinateur.",
      cards: [
        {
          title: "10.000+ chaînes live",
          text:
            "Une large expérience TV live avec de nombreuses options pour différents pays et intérêts.",
        },
        {
          title: "100.000+ VOD & films",
          text:
            "Une grande sélection VOD avec films, séries et contenus de divertissement.",
        },
        {
          title: "Sans blocage, sans coupure",
          text:
            "Infrastructure solide pour une lecture plus fluide et une expérience plus stable.",
        },
        {
          title: "Qualité HD, FHD et 4K",
          text:
            "Qualité d’image premium pour écrans modernes, Smart TV et usage familial.",
        },
      ],
    },
    categories: {
      badge: "Catégories",
      title: "Tout ce qu’il faut sur un seul écran",
      text:
        "Chaînes sportives, chaînes cinéma, séries, documentaires, chaînes enfants et contenus pour adultes sont disponibles dans une expérience IPTV premium.",
      items: [
        {
          title: "Chaînes sportives",
          text:
            "Sport en direct, grands matchs et diffusions sportives sur un seul écran.",
          image: categoryImages.sport,
        },
        {
          title: "Chaînes cinéma",
          text:
            "Soirées films, ambiance cinéma et divertissement pour tous les goûts.",
          image: categoryImages.movie,
        },
        {
          title: "Séries",
          text:
            "Séries populaires et divertissement quotidien pour de longues sessions.",
          image: categoryImages.series,
        },
        {
          title: "Documentaires",
          text:
            "Savoir, nature, histoire et contenus documentaires intéressants.",
          image: categoryImages.documentary,
        },
        {
          title: "Chaînes enfants",
          text: "Contenus familiaux et divertissement adapté aux enfants.",
          image: categoryImages.kids,
        },
        {
          title: "Contenus adultes",
          text:
            "Des contenus supplémentaires pour adultes sont également disponibles.",
          image: categoryImages.adult,
        },
      ],
    },
    devices: {
      badge: "Appareils",
      title: "Compatible avec les appareils populaires",
      text:
        "PlatinumStar İPTV peut être configuré sur les appareils déjà utilisés à la maison ou en déplacement.",
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
      title: "Processus rapide du contact à l’activation",
      steps: [
        {
          title: "Envoyez votre appareil et pays",
          text:
            "Contactez-nous sur WhatsApp avec votre appareil et le pays d’utilisation.",
        },
        {
          title: "Recevez le bon guide",
          text:
            "Vous recevez la méthode adaptée pour Smart TV, Android TV, Fire TV, mobile ou ordinateur.",
        },
        {
          title: "Activation instantanée",
          text:
            "Après l’installation, l’accès est activé rapidement et vous pouvez commencer.",
        },
      ],
    },
    reseller: {
      badge: "Programme revendeur",
      title: "Développez votre activité revendeur PlatinumStar İPTV",
      text:
        "Un système partenaire privé pour gérer les demandes clients, activations et support de façon professionnelle.",
      points: [
        "Demande revendeur privée",
        "Aucun prix public",
        "10.000+ chaînes live",
        "100.000+ contenus VOD",
        "Qualité HD / FHD / 4K",
        "Support 24/7",
        "Tous les appareils compatibles",
        "Activation instantanée",
        "Structure serveur stable",
        "Présentation premium",
      ],
      primary: "Demander accès revendeur",
      secondary: "Nous contacter",
    },
    why: {
      badge: "Pourquoi PlatinumStar İPTV",
      title: "La qualité n’est pas un hasard",
      items: [
        {
          title: "Haute performance",
          text:
            "Infrastructure solide pour une utilisation rapide, fluide et propre.",
        },
        {
          title: "99.9% uptime",
          text:
            "Structure orientée stabilité et utilisation continue avec moins d’interruptions.",
        },
        {
          title: "Connexion sécurisée",
          text:
            "Contact, installation et activation sont gérés en privé via le support.",
        },
        {
          title: "Support live 24/7",
          text: "Support pour installation, appareil, activation et questions générales.",
        },
        {
          title: "Tous les appareils",
          text:
            "Smart TV, Android, iOS, MAG, Enigma2, PC et plus sont pris en charge.",
        },
        {
          title: "Présentation premium",
          text:
            "La page paraît sérieuse, premium et dirige directement vers le contact.",
        },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Questions fréquentes",
      items: [
        {
          q: "Les prix sont-ils affichés ?",
          a:
            "Non. Les détails des packs, tests et revendeurs sont discutés en privé via WhatsApp.",
        },
        {
          q: "Y a-t-il des blocages ou coupures ?",
          a:
            "La structure est préparée pour une utilisation stable. Le support aide pour les problèmes d’appareil ou de connexion.",
        },
        {
          q: "Quelles catégories sont disponibles ?",
          a:
            "Chaînes sportives, chaînes cinéma, séries, documentaires, chaînes enfants, VOD et contenus supplémentaires pour adultes sont disponibles.",
        },
        {
          q: "Combien de contenus sont présentés ?",
          a:
            "La présentation met en avant 10.000+ chaînes live et 100.000+ contenus VOD.",
        },
        {
          q: "Quels appareils sont compatibles ?",
          a:
            "Smart TV, Android TV, Fire TV Stick, iPhone, iPad, Android, Windows, Mac, MAG et Enigma2.",
        },
      ],
    },
    reviews: {
      badge: "Avis",
      title: "Expérience premium pour utilisateurs et partenaires",
      items: [
        {
          name: "Utilisateur en Allemagne",
          text: "L’installation était claire et la présentation paraît premium.",
        },
        {
          name: "Client en France",
          text: "J’ai envoyé mon appareil et reçu rapidement la bonne aide.",
        },
        {
          name: "Partenaire aux Pays-Bas",
          text: "La présentation revendeur est professionnelle et rassurante.",
        },
      ],
    },
    contact: {
      badge: "Contact",
      title: "Prêt pour PlatinumStar İPTV ou accès revendeur ?",
      text:
        "Envoyez votre pays, appareil ou demande revendeur sur WhatsApp. Nous vous guidons vers la bonne étape.",
      button: "Envoyer un message WhatsApp",
    },
    whatsapp:
      "Bonjour, je souhaite des informations sur PlatinumStar İPTV. Mon pays est ... et mon appareil est ...",
    popupWhatsapp:
      "Bonjour, je souhaite des informations sur le système revendeur PlatinumStar İPTV. Mon pays est ...",
  },

  nl: {
    brand: "PlatinumStar İPTV",
    nav: {
      home: "Home",
      experience: "Ervaring",
      categories: "Categorieën",
      devices: "Apparaten",
      setup: "Installatie",
      reseller: "Reseller",
      faq: "FAQ",
      contact: "Contact",
    },
    hero: {
      badge: "Premium IPTV Service",
      title: "Onbeperkt entertainment. Ervaring op topniveau.",
      subtitle:
        "Geniet van hoge kwaliteit, sterke infrastructuur en een stabiele service zonder vastlopen of bevriezen.",
      primary: "WhatsApp Support",
      secondary: "Reseller worden",
      note:
        "Geen openbare prijzen op de website. Pakket- en resellergegevens worden privé via WhatsApp gedeeld.",
    },
    popup: {
      title: "Start je eigen reseller-systeem",
      text:
        "Neem contact op en ontdek hoe je met PlatinumStar İPTV een eigen reseller-systeem voor Europese klanten opbouwt.",
      button: "Contact via WhatsApp",
      close: "Sluiten",
    },
    strip: [
      "10.000+ live kanalen",
      "100.000+ VOD content",
      "Geen vastlopen",
      "Geen bevriezen",
      "HD • FHD • 4K kwaliteit",
      "24/7 support",
      "Alle apparaten",
      "Directe activatie",
    ],
    experience: {
      badge: "Premium Ervaring",
      title: "Stabiele IPTV-ervaring zonder onderbreking",
      text:
        "PlatinumStar İPTV is voorbereid voor gebruikers die een stabiele, snelle en premium entertainmentervaring willen op Smart TV, Android TV, Fire TV, mobiel, tablet en desktop.",
      cards: [
        {
          title: "10.000+ live kanalen",
          text:
            "Een brede live TV-ervaring met veel kanaalopties voor verschillende landen en interesses.",
        },
        {
          title: "100.000+ VOD & films",
          text:
            "Een grote VOD-selectie met films, series en entertainmentcontent voor dagelijks gebruik.",
        },
        {
          title: "Geen vastlopen, geen bevriezen",
          text:
            "Sterke infrastructuur voor vloeiender kijken, snelle reactie en stabielere ervaring.",
        },
        {
          title: "HD, FHD en 4K kwaliteit",
          text:
            "Hoge beeldkwaliteit voor moderne schermen, Smart TV’s en home entertainment.",
        },
      ],
    },
    categories: {
      badge: "Categorieën",
      title: "Alles wat gebruikers nodig hebben op één scherm",
      text:
        "Sportkanalen, filmkanalen, series, documentaires, kinderkanalen en volwassen content zijn beschikbaar binnen een premium IPTV-ervaring.",
      items: [
        {
          title: "Sportkanalen",
          text:
            "Live sport, belangrijke wedstrijden en sportuitzendingen op één scherm.",
          image: categoryImages.sport,
        },
        {
          title: "Filmkanalen",
          text: "Filmavonden, bioscoopgevoel en entertainment voor elke smaak.",
          image: categoryImages.movie,
        },
        {
          title: "Series",
          text: "Populaire series en dagelijks entertainment voor langere kijktijd.",
          image: categoryImages.series,
        },
        {
          title: "Documentaires",
          text: "Kennis, natuur, geschiedenis en interessante documentaire content.",
          image: categoryImages.documentary,
        },
        {
          title: "Kinderkanalen",
          text: "Gezinsvriendelijke content en entertainment voor kinderen.",
          image: categoryImages.kids,
        },
        {
          title: "Volwassen content",
          text: "Aanvullende content voor volwassenen is ook beschikbaar.",
          image: categoryImages.adult,
        },
      ],
    },
    devices: {
      badge: "Apparaten",
      title: "Compatibel met populaire apparaten",
      text:
        "PlatinumStar İPTV kan worden ingesteld op apparaten die mensen thuis of onderweg gebruiken.",
      items: [
        "Samsung Smart TV",
        "LG Smart TV",
        "Android TV",
        "Fire TV Stick",
        "iPhone & iPad",
        "Android Telefoon",
        "Windows PC",
        "MacBook",
      ],
    },
    setup: {
      badge: "Installatie",
      title: "Snelle flow van contact naar activatie",
      steps: [
        {
          title: "Stuur je apparaat en land",
          text:
            "Stuur via WhatsApp welk apparaat je gebruikt en in welk land je de service wilt gebruiken.",
        },
        {
          title: "Ontvang de juiste installatie",
          text:
            "Je ontvangt de juiste methode voor Smart TV, Android TV, Fire TV, mobiel of desktop.",
        },
        {
          title: "Directe activatie",
          text:
            "Na installatie wordt je toegang snel geactiveerd en kun je starten.",
        },
      ],
    },
    reseller: {
      badge: "Reseller Programma",
      title: "Bouw je eigen PlatinumStar İPTV reseller business",
      text:
        "Een privé partnersysteem voor mensen die klantvragen, activaties en support professioneel willen beheren.",
      points: [
        "Privé reseller-aanvraag",
        "Geen openbare prijzen",
        "10.000+ live kanalen",
        "100.000+ VOD content",
        "HD / FHD / 4K kwaliteit",
        "24/7 support systeem",
        "Alle apparaten compatibel",
        "Directe activatie",
        "Stabiele serverstructuur",
        "Premium merkpresentatie",
      ],
      primary: "Reseller toegang aanvragen",
      secondary: "Contact opnemen",
    },
    why: {
      badge: "Waarom PlatinumStar İPTV",
      title: "Kwaliteit is geen toeval",
      items: [
        {
          title: "Hoge performance",
          text:
            "Sterke infrastructuur voor snelle reactie, vloeiend gebruik en een nette entertainmentervaring.",
        },
        {
          title: "99.9% uptime",
          text:
            "Een structuur gericht op stabiliteit en continue werking met minder onderbrekingen.",
        },
        {
          title: "Veilige verbinding",
          text:
            "Contact, installatie en activatie verlopen privé en zorgvuldig via support.",
        },
        {
          title: "24/7 live support",
          text: "Support voor installatie, apparaten, activatie en algemene vragen.",
        },
        {
          title: "Alle apparaten",
          text:
            "Smart TV, Android, iOS, MAG, Enigma2, PC en meer apparaten worden ondersteund.",
        },
        {
          title: "Premium presentatie",
          text:
            "De pagina oogt serieus, premium en leidt bezoekers direct naar contact.",
        },
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Veelgestelde vragen",
      items: [
        {
          q: "Worden prijzen op de website getoond?",
          a:
            "Nee. Pakket-, test- en resellergegevens worden privé via WhatsApp besproken.",
        },
        {
          q: "Is er vastlopen of bevriezen?",
          a:
            "De structuur is voorbereid op stabiel gebruik. Bij apparaat- of verbindingsproblemen helpt support met installatie.",
        },
        {
          q: "Welke categorieën zijn beschikbaar?",
          a:
            "Sportkanalen, filmkanalen, series, documentaires, kinderkanalen, VOD-content en aanvullende volwassen content zijn beschikbaar.",
        },
        {
          q: "Hoeveel content wordt gepresenteerd?",
          a:
            "De presentatie benadrukt 10.000+ live kanalen en 100.000+ VOD content.",
        },
        {
          q: "Welke apparaten worden ondersteund?",
          a:
            "Smart TV, Android TV, Fire TV Stick, iPhone, iPad, Android, Windows, Mac, MAG en Enigma2.",
        },
      ],
    },
    reviews: {
      badge: "Reviews",
      title: "Premium ervaring voor gebruikers en partners",
      items: [
        {
          name: "Gebruiker uit Duitsland",
          text: "De installatie was duidelijk en de presentatie voelde premium.",
        },
        {
          name: "Klant uit Frankrijk",
          text: "Ik stuurde mijn apparaat en kreeg snel de juiste begeleiding.",
        },
        {
          name: "Partner uit Nederland",
          text:
            "De resellerpresentatie ziet er professioneel en betrouwbaar uit.",
        },
      ],
    },
    contact: {
      badge: "Contact",
      title: "Klaar voor PlatinumStar İPTV installatie of reseller toegang?",
      text:
        "Stuur je land, apparaat of reseller-aanvraag via WhatsApp. Wij begeleiden je naar de juiste stap.",
      button: "WhatsApp bericht sturen",
    },
    whatsapp:
      "Hallo, ik wil informatie over PlatinumStar İPTV. Mijn land is ... en mijn apparaat is ...",
    popupWhatsapp:
      "Hallo, ik wil informatie over het PlatinumStar İPTV reseller-systeem. Mijn land is ...",
  },
} as const;