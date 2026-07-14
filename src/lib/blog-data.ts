import destAmsterdam from "@/assets/dest-amsterdam.jpg";
import destParis from "@/assets/dest-paris.jpg";
import destInterlaken from "@/assets/dest-interlaken.jpg";
import destPrague from "@/assets/dest-prague.jpg";
import destVienna from "@/assets/dest-vienna.jpg";
import destZurich from "@/assets/dest-zurich.jpg";

export type BlogPost = {
  slug: string;
  image: string;
  date: string; // ISO
  author: { ar: string; en: string };
  category: { ar: string; en: string };
  title: { ar: string; en: string };
  excerpt: { ar: string; en: string };
  // Content as ordered blocks so we can render semantic HTML.
  content: Array<
    | { type: "p"; ar: string; en: string }
    | { type: "h2"; ar: string; en: string }
    | { type: "h3"; ar: string; en: string }
    | { type: "ul"; ar: string[]; en: string[] }
    | { type: "quote"; ar: string; en: string }
  >;
};

export const posts: BlogPost[] = [
  {
    slug: "amsterdam-first-time-guide",
    image: destAmsterdam,
    date: "2026-06-18",
    author: { ar: "فريق الأسواني", en: "ALASWANI Editorial" },
    category: { ar: "أدلة سفر", en: "Travel Guides" },
    title: {
      ar: "أمستردام لأول مرة: دليلٌ متكاملٌ لثلاثة أيام مثالية",
      en: "First Time in Amsterdam: A Perfect Three-Day Itinerary",
    },
    excerpt: {
      ar: "من قنوات جوردان إلى متحف ريكس، خطة يومية مصمّمة بعناية لتستمتع بأمستردام دون إرهاق أو ازدحام.",
      en: "From the Jordaan canals to the Rijksmuseum, a carefully paced plan to enjoy Amsterdam without the crowds or fatigue.",
    },
    content: [
      { type: "p", ar: "أمستردام مدينة مدمجة، لكنها غنية بالتفاصيل. أفضل طريقة لاكتشافها هي المشي على ضفاف قنواتها في الصباح الباكر، حين يكون الضوء ذهبيًا والشوارع هادئة.", en: "Amsterdam is compact but layered. The best way to discover it is on foot along its canals in the early morning, when the light is golden and the streets are quiet." },
      { type: "h2", ar: "اليوم الأول: المركز التاريخي", en: "Day One: The Historic Center" },
      { type: "p", ar: "ابدأ من ساحة الدام، ثم توجّه إلى منطقة القنوات التسع حيث المقاهي الصغيرة والمعارض المستقلة.", en: "Start at Dam Square, then head into the Nine Streets district for boutique cafés and independent galleries." },
      { type: "h3", ar: "توقفات موصى بها", en: "Recommended Stops" },
      { type: "ul", ar: ["كنيسة أوده كيرك", "متحف بيت آن فرانك", "جسر ماخر بالليل"], en: ["Oude Kerk church", "Anne Frank House", "Magere Brug at night"] },
      { type: "h2", ar: "اليوم الثاني: الفن والمتاحف", en: "Day Two: Art & Museums" },
      { type: "p", ar: "خصّص هذا اليوم لميدان المتاحف: ريكس، فان جوخ، وستيدلايك. احجز التذاكر مسبقًا لتوفير الوقت.", en: "Devote this day to Museumplein: Rijksmuseum, Van Gogh, and Stedelijk. Book tickets in advance to save time." },
      { type: "quote", ar: "الفن الهولندي يعلّمنا أن الضوء نفسه قصة.", en: "Dutch art teaches us that light itself is a story." },
      { type: "h2", ar: "اليوم الثالث: خارج المدينة", en: "Day Three: Beyond the City" },
      { type: "p", ar: "قرية زانسه سخانس وحقول كوكنهوف الموسمية رحلات نصف يومية لا تُنسى، ويسهل تنظيمها مع سائق خاص.", en: "Zaanse Schans village and the seasonal Keukenhof fields make unforgettable half-day trips, easily arranged with a private driver." },
    ],
  },
  {
    slug: "private-driver-vs-tour-bus",
    image: destParis,
    date: "2026-05-30",
    author: { ar: "أحمد الأسواني", en: "Ahmad Alaswani" },
    category: { ar: "نصائح السفر", en: "Travel Tips" },
    title: {
      ar: "سائق خاص أم حافلة سياحية؟ كيف تختار الأنسب لعائلتك",
      en: "Private Driver or Tour Bus? How to Choose What Fits Your Family",
    },
    excerpt: {
      ar: "مقارنة عملية بين الخيارين من حيث الوقت، المرونة، الخصوصية، والتكلفة الفعلية للرحلة.",
      en: "A practical comparison across time, flexibility, privacy, and the true cost of your trip.",
    },
    content: [
      { type: "p", ar: "الاختيار بين سائق خاص وحافلة سياحية ليس مسألة سعر فحسب، بل مسألة تجربة كاملة.", en: "Choosing between a private driver and a tour bus is not just about price — it is about the full experience." },
      { type: "h2", ar: "المرونة", en: "Flexibility" },
      { type: "p", ar: "مع سائق خاص، أنت من يحدد وقت الانطلاق، مدة التوقف، والمسار.", en: "With a private driver, you set the departure time, the length of each stop, and the route." },
      { type: "h2", ar: "الخصوصية", en: "Privacy" },
      { type: "p", ar: "العائلات العربية تفضّل عادةً بيئة هادئة ومحترمة تتوافق مع تفاصيل الرحلة اليومية.", en: "Arab families typically prefer a calm, respectful environment that matches the rhythm of a family trip." },
      { type: "h3", ar: "متى تختار الحافلة؟", en: "When to choose the bus?" },
      { type: "ul", ar: ["الرحلات الفردية القصيرة", "الميزانيات المحدودة جدًا"], en: ["Short solo trips", "Very tight budgets"] },
    ],
  },
  {
    slug: "swiss-alps-day-trip",
    image: destInterlaken,
    date: "2026-05-14",
    author: { ar: "فريق الأسواني", en: "ALASWANI Editorial" },
    category: { ar: "وجهات", en: "Destinations" },
    title: {
      ar: "إنترلاكن في يومٍ واحد: الطبيعة السويسرية بأبهى صورها",
      en: "Interlaken in a Day: The Swiss Alps at Their Finest",
    },
    excerpt: {
      ar: "بحيرتان زرقاوان، قمم ثلجية، وهواء يشبه الحكاية. خطة يومية مدروسة تنطلق من زيورخ.",
      en: "Two blue lakes, snow-capped peaks, and storybook air. A well-paced day plan starting from Zurich.",
    },
    content: [
      { type: "p", ar: "إنترلاكن قلب سويسرا الرومانسي، وأفضل نقطة انطلاق لاستكشاف جبال الألب.", en: "Interlaken is Switzerland's romantic heart and the best base for exploring the Alps." },
      { type: "h2", ar: "الصباح: بحيرة ثون", en: "Morning: Lake Thun" },
      { type: "p", ar: "ابدأ بجولة على ضفاف بحيرة ثون قبل التوجه إلى قرية إيغيرجي الصغيرة.", en: "Begin along Lake Thun before heading to the tiny village of Iseltwald." },
      { type: "h2", ar: "الظهيرة: قمة يونغفراو", en: "Afternoon: Jungfraujoch" },
      { type: "p", ar: "قطار سكة حديد يونغفراو يأخذك إلى أعلى محطة قطار في أوروبا.", en: "The Jungfrau Railway takes you to Europe's highest train station." },
    ],
  },
  {
    slug: "prague-hidden-gems",
    image: destPrague,
    date: "2026-04-27",
    author: { ar: "ليث حداد", en: "Laith Haddad" },
    category: { ar: "وجهات", en: "Destinations" },
    title: {
      ar: "براغ بعيدًا عن السياح: خمس زوايا لن تجدها في الأدلة العامة",
      en: "Prague Off the Tourist Trail: Five Corners the Guidebooks Miss",
    },
    excerpt: {
      ar: "أحياء هادئة، مقاهٍ عريقة، وإطلالات على المدينة الذهبية بعيدًا عن الجسر الشهير.",
      en: "Quiet neighborhoods, historic cafés, and skyline views far from the famous bridge.",
    },
    content: [
      { type: "p", ar: "براغ الحقيقية تعيش في الأحياء الصغيرة، لا في ساحة المدينة القديمة وحدها.", en: "The real Prague lives in its small neighborhoods, not only in the Old Town Square." },
      { type: "h2", ar: "حي فينوهرادي", en: "Vinohrady" },
      { type: "p", ar: "حي راقٍ مليء بالمطاعم المحلية والحدائق الصغيرة.", en: "A refined district full of local restaurants and pocket gardens." },
      { type: "h2", ar: "برج بيتشين", en: "Petřín Tower" },
      { type: "p", ar: "إطلالة بانورامية كاملة على المدينة بعيدًا عن الزحام.", en: "A full panoramic view of the city away from the crowds." },
    ],
  },
  {
    slug: "vienna-culture-weekend",
    image: destVienna,
    date: "2026-04-10",
    author: { ar: "نور العلي", en: "Nour Al-Ali" },
    category: { ar: "ثقافة", en: "Culture" },
    title: {
      ar: "عطلة نهاية أسبوع في فيينا: موسيقى، قهوة، وقصور إمبراطورية",
      en: "A Weekend in Vienna: Music, Coffee, and Imperial Palaces",
    },
    excerpt: {
      ar: "دليل عملي لاستكشاف عاصمة الموسيقى الكلاسيكية في يومين، مع أفضل المقاهي التاريخية.",
      en: "A practical guide to the capital of classical music in two days, with the best historic cafés.",
    },
    content: [
      { type: "p", ar: "فيينا مدينة تُعزف على مهل. لا تحاول الإسراع فيها؛ اجلس، استمع، وتذوّق.", en: "Vienna is a city that plays slowly. Don't rush it — sit, listen, and taste." },
      { type: "h2", ar: "قصر شونبرون", en: "Schönbrunn Palace" },
      { type: "p", ar: "خصّص صباحًا كاملاً لهذا القصر الإمبراطوري وحدائقه الواسعة.", en: "Dedicate a full morning to this imperial palace and its expansive gardens." },
      { type: "h2", ar: "المقاهي التاريخية", en: "The Historic Cafés" },
      { type: "ul", ar: ["كافيه سنترال", "كافيه سباخر", "كافيه لاندتمان"], en: ["Café Central", "Café Sacher", "Café Landtmann"] },
    ],
  },
  {
    slug: "why-arabic-speaking-driver",
    image: destZurich,
    date: "2026-03-22",
    author: { ar: "فريق الأسواني", en: "ALASWANI Editorial" },
    category: { ar: "خدماتنا", en: "Our Services" },
    title: {
      ar: "لماذا يُحدث السائق الناطق بالعربية فرقًا حقيقيًا في رحلتك؟",
      en: "Why an Arabic-Speaking Driver Truly Transforms Your Trip",
    },
    excerpt: {
      ar: "أكثر من مجرد ترجمة: راحة نفسية، فهم ثقافي، ومرونة كاملة تناسب العائلة العربية.",
      en: "Beyond translation: peace of mind, cultural understanding, and true flexibility for Arab families.",
    },
    content: [
      { type: "p", ar: "التنقل في مدينة أوروبية جديدة قد يكون مربكًا، خاصة مع عائلة وأطفال.", en: "Navigating a new European city can be overwhelming, especially with a family and children." },
      { type: "h2", ar: "التواصل الحقيقي", en: "Real Communication" },
      { type: "p", ar: "الحديث بلغتك الأم يجعل الأسئلة أسهل والقرارات أسرع.", en: "Speaking your mother tongue makes questions easier and decisions faster." },
      { type: "h2", ar: "الفهم الثقافي", en: "Cultural Understanding" },
      { type: "p", ar: "من مواعيد الصلاة إلى المطاعم الحلال، السائق العربي يعرف الاحتياجات دون أن تُقال.", en: "From prayer times to halal restaurants, an Arab driver knows the needs without being asked." },
      { type: "quote", ar: "أفضل الرحلات هي التي لا تحتاج فيها إلى شرح نفسك.", en: "The best trips are the ones where you never have to explain yourself." },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
