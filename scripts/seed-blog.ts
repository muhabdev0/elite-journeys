import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

// Use environment variables (make sure to run this script with --env-file=.env.local)
const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const samplePosts = [
  {
    slug: "amsterdam-first-time-guide",
    title: {
      en: "First Time in Amsterdam: A Perfect Three-Day Itinerary",
      ar: "أمستردام لأول مرة: دليلٌ متكاملٌ لثلاثة أيام مثالية"
    },
    content: {
      en: `
        <p>Amsterdam is compact but layered. The best way to discover it is on foot along its canals in the early morning, when the light is golden and the streets are quiet.</p>
        <h2>Day One: The Historic Center</h2>
        <p>Start at Dam Square, then head into the Nine Streets district for boutique cafés and independent galleries.</p>
        <h3>Recommended Stops</h3>
        <ul>
          <li>Oude Kerk church</li>
          <li>Anne Frank House</li>
          <li>Magere Brug at night</li>
        </ul>
        <h2>Day Two: Art & Museums</h2>
        <p>Devote this day to Museumplein: Rijksmuseum, Van Gogh, and Stedelijk. Book tickets in advance to save time.</p>
        <blockquote>Dutch art teaches us that light itself is a story.</blockquote>
        <h2>Day Three: Beyond the City</h2>
        <p>Zaanse Schans village and the seasonal Keukenhof fields make unforgettable half-day trips, easily arranged with a private driver.</p>
      `,
      ar: `
        <p>أمستردام مدينة مدمجة ولكنها مليئة بالتفاصيل. أفضل طريقة لاكتشافها هي سيرًا على الأقدام على طول قنواتها في الصباح الباكر، عندما يكون الضوء ذهبيًا والشوارع هادئة.</p>
        <h2>اليوم الأول: المركز التاريخي</h2>
        <p>ابدأ من ساحة دام، ثم توجه إلى منطقة الشوارع التسعة للمقاهي الصغيرة والمعارض المستقلة.</p>
        <h3>محطات موصى بها</h3>
        <ul>
          <li>كنيسة أودي كيرك</li>
          <li>منزل آن فرانك</li>
          <li>جسر ماجيري في الليل</li>
        </ul>
        <h2>اليوم الثاني: الفن والمتاحف</h2>
        <p>خصص هذا اليوم لساحة المتاحف: متحف ريكز، فان جوخ، وستيديليك. احجز التذاكر مسبقًا لتوفير الوقت.</p>
        <blockquote>الفن الهولندي يعلمنا أن الضوء بحد ذاته قصة.</blockquote>
        <h2>اليوم الثالث: خارج المدينة</h2>
        <p>قرية زانسي شانس وحقول كيوكينهوف الموسمية تعتبر رحلات لا تُنسى لنصف يوم، ويسهل ترتيبها مع سائق خاص.</p>
      `
    },
    excerpt: {
      en: "From the Jordaan canals to the Rijksmuseum, a carefully paced plan to enjoy Amsterdam without the crowds or fatigue.",
      ar: "من قنوات جوردان إلى متحف ريكز، خطة مدروسة للاستمتاع بأمستردام بعيدًا عن الزحام والتعب."
    },
    author: "ALASWANI Editorial",
    publishedAt: new Date("2026-06-18T10:00:00Z").toISOString(),
    thumbnailUrl: "https://images.unsplash.com/photo-1517736996303-4e64a4f87f9b?auto=format&fit=crop&q=80&w=1000",
    category: {
      en: "Travel Guides",
      ar: "أدلة السفر"
    }
  },
  {
    slug: "private-driver-vs-tour-bus",
    title: {
      en: "Private Driver or Tour Bus? How to Choose What Fits Your Family",
      ar: "سائق خاص أم حافلة سياحية؟ كيف تختار ما يناسب عائلتك"
    },
    content: {
      en: `
        <p>Choosing between a private driver and a tour bus is not just about price — it is about the full experience.</p>
        <h2>Flexibility</h2>
        <p>With a private driver, you set the departure time, the length of each stop, and the route.</p>
        <h2>Privacy</h2>
        <p>Families typically prefer a calm, respectful environment that matches the rhythm of a family trip.</p>
        <h3>When to choose the bus?</h3>
        <ul>
          <li>Short solo trips</li>
          <li>Very tight budgets</li>
        </ul>
      `,
      ar: `
        <p>الاختيار بين السائق الخاص والحافلة السياحية ليس مجرد مسألة سعر — بل يتعلق بالتجربة الكاملة.</p>
        <h2>المرونة</h2>
        <p>مع السائق الخاص، أنت من يحدد وقت المغادرة، ومدة كل توقف، ومسار الرحلة.</p>
        <h2>الخصوصية</h2>
        <p>تفضل العائلات عادةً بيئة هادئة ومحترمة تتناسب مع إيقاع الرحلة العائلية.</p>
        <h3>متى تختار الحافلة؟</h3>
        <ul>
          <li>الرحلات الفردية القصيرة</li>
          <li>الميزانيات المحدودة جداً</li>
        </ul>
      `
    },
    excerpt: {
      en: "A practical comparison across time, flexibility, privacy, and the true cost of your trip.",
      ar: "مقارنة عملية عبر الوقت، المرونة، الخصوصية، والتكلفة الحقيقية لرحلتك."
    },
    author: "Ahmad Alaswani",
    publishedAt: new Date("2026-05-30T10:00:00Z").toISOString(),
    thumbnailUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=1000",
    category: {
      en: "Travel Tips",
      ar: "نصائح السفر"
    }
  }
];

async function seed() {
  console.log("Starting to seed Firestore...");
  const postsRef = collection(db, "posts");

  for (const post of samplePosts) {
    // Use slug as document ID for easier management
    const docRef = doc(postsRef, post.slug);
    await setDoc(docRef, post);
    console.log(`✅ Seeded bilingual post: ${post.slug}`);
  }

  console.log("🎉 Seeding complete!");
  process.exit(0);
}

seed().catch(console.error);
