import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

// Use environment variables (make sure to run this script with --env-file=.env.local)
const firebaseConfig = {
  apiKey: "AIzaSyD_KhwpVn0eoTyHIRUl5pV4MTJV2pxQglA",
  authDomain: "aswani-data.firebaseapp.com",
  projectId: "aswani-data",
  storageBucket: "aswani-data.firebasestorage.app",
  messagingSenderId: "813389915406",
  appId: "1:813389915406:web:fa724999c1b12eb866635f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const samplePosts = [
  {
    title: "First Time in Amsterdam: A Perfect Three-Day Itinerary",
    slug: "amsterdam-first-time-guide-en",
    lang: "en",
    content: `
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
    excerpt: "From the Jordaan canals to the Rijksmuseum, a carefully paced plan to enjoy Amsterdam without the crowds or fatigue.",
    author: "ALASWANI Editorial",
    publishedAt: new Date("2026-06-18T10:00:00Z").toISOString(),
    thumbnailUrl: "https://images.unsplash.com/photo-1517736996303-4e64a4f87f9b?auto=format&fit=crop&q=80&w=1000",
    category: "Travel Guides"
  },
  {
    title: "أمستردام لأول مرة: دليلٌ متكاملٌ لثلاثة أيام مثالية",
    slug: "amsterdam-first-time-guide-ar",
    lang: "ar",
    content: `
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
    `,
    excerpt: "من قنوات جوردان إلى متحف ريكز، خطة مدروسة للاستمتاع بأمستردام بعيدًا عن الزحام والتعب.",
    author: "الأسواني للتحرير",
    publishedAt: new Date("2026-06-18T10:00:00Z").toISOString(),
    thumbnailUrl: "https://images.unsplash.com/photo-1517736996303-4e64a4f87f9b?auto=format&fit=crop&q=80&w=1000",
    category: "أدلة السفر"
  },
  {
    title: "Private Driver or Tour Bus? How to Choose What Fits Your Family",
    slug: "private-driver-vs-tour-bus-en",
    lang: "en",
    content: `
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
    excerpt: "A practical comparison across time, flexibility, privacy, and the true cost of your trip.",
    author: "Ahmad Alaswani",
    publishedAt: new Date("2026-05-30T10:00:00Z").toISOString(),
    thumbnailUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=1000",
    category: "Travel Tips"
  },
  {
    title: "سائق خاص أم حافلة سياحية؟ كيف تختار ما يناسب عائلتك",
    slug: "private-driver-vs-tour-bus-ar",
    lang: "ar",
    content: `
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
    `,
    excerpt: "مقارنة عملية عبر الوقت، المرونة، الخصوصية، والتكلفة الحقيقية لرحلتك.",
    author: "أحمد الأسواني",
    publishedAt: new Date("2026-05-30T10:00:00Z").toISOString(),
    thumbnailUrl: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=1000",
    category: "نصائح السفر"
  }
];

async function seed() {
  console.log("Starting to seed Firestore...");
  const postsRef = collection(db, "posts");

  for (const post of samplePosts) {
    // Use slug as document ID for easier management
    const docRef = doc(postsRef, post.slug);
    await setDoc(docRef, post);
    console.log(`✅ Seeded post: ${post.title}`);
  }

  console.log("🎉 Seeding complete!");
  process.exit(0);
}

seed().catch(console.error);
