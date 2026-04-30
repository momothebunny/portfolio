const base = import.meta.env.BASE_URL;

export const projects = [
  {
    title: "Au;ReliA – RAG Architektúra Vizsgáló Platform",
    image: `${base}images/rag.png`,
    imagePosition: "object-[80%]",
    description:
      "Szakdolgozati domain-agnosztikus low-code platform (React/Vite) GraphRAG és Agentic RAG rendszerek tervezéséhez, futtatásához és validálásához. Beépített többszintű validációs réteg, PII-maszkolás, forráskritikai node-ok és hallucináció-minimalizálás vállalati szintű AI-megoldásokhoz.",
    tags: ["React", "Vite", "LangFlow", "GraphRAG", "Agentic RAG", "Python"],
    category: "ai",
    github: "https://github.com/momothebunny/XRAG_assistant",
    featured: true,
  },
  {
    title: "Encephalon;Core – Egészségügyi Prototípus",
    image: `${base}images/encephalon.png`,
    description:
      "Full-stack egészségügyi munkafolyamat-prototípus 3D fájdalomtérképpel (Three.js), SOAP dokumentáció generálással (Azure OpenAI / Google Gemini), valós idejű gyógyszerbiztonsági ellenőrzéssel és Azure Cosmos DB adatréteggel.",
    tags: ["React 19", "Three.js", "FastAPI", "Azure OpenAI", "Google Gemini", "Azure Cosmos DB"],
    category: "fullstack",
    github: "https://github.com/momothebunny/Minds-Machines-Hackathon-Challenge",
    featured: true,
    hackathon: "GDE MIT Minds and Machines Hackathon 2026",
  },
  {
    title: "AI Zenei Műfajosztályozó & Kreatív Támogató Rendszer",
    image: `${base}images/music.png`,
    description:
      "Girls in Tech Yettel-díjas (625 000 Ft) ML rendszer, amely a Spotify több ezer egyedi műfaját struktúrált főkategóriákba rendezi hangjellemzők alapján. Konferenciapublikáció-tervezet, interaktív webes platform fejlesztés alatt.",
    tags: ["Python", "Scikit-learn", "Spotify API", "Music Tech", "ML"],
    category: "ai",
    award: "Girls in Tech – Yettel Díj (625 000 Ft)",
    github: "https://github.com/momothebunny/Genre_classification",
    featured: true,
  },
  {
    title: "MRI Agydaganat Osztályozó Rendszer",
    image: `${base}images/mri.png`,
    description:
      "Gépi tanulási modellek MRI-felvételeken látható háromféle agydaganat automatizált osztályozására. Képfeldolgozás: Canny élkeresés, CLAHE, HOG és SIFT jellemzőkinyerés. PCA-val csökkentett és teljes jellemzőkészlet összehasonlítása.",
    tags: ["Python", "Computer Vision", "Scikit-learn", "Canny", "SIFT", "PCA"],
    category: "ai",
    github: "https://github.com/momothebunny/MRI-brain-tumor-analysis",
    featured: true,
  },
  {
    title: "Byborg AI – Prezentáció Generátor",
    image: `${base}images/presentation.png`,
    description:
      "Meghívásos Byborg AI Hackathon projekt. Strukturálatlan bemenetből vizuálisan és tartalmilag strukturált diákat generáló AI eszköz, egyedi narratívával és előadói stílussal. Nagy nyelvi modellek kreatív feladatokon.",
    tags: ["Generatív AI", "LLM", "Python"],
    category: "ai",
    isPrivate: true,
    hackathon: "Byborg AI Hackathon 2024",
  },
  {
    title: "Vantage Towers – AI Agent Automatizáció (TIMS)",
    image: `${base}images/tims.png`,
    description:
      "AI ágens-alapú automatizációs rendszer a Vantage Towers TIMS platformjához. SAP, Vosima és ServiceNow adatbázisokból heterogén adatok intelligens tisztítása, validálása és migrációja. Komplex vállalati adatmigráció automatizálása nemzetközi környezetben.",
    tags: ["Python", "AI Agents", "SAP", "ServiceNow", "TIMS", "Vosima"],
    category: "ai",
    isPrivate: true,
    enterprise: true,
  },
  {
    title: "Állatbetegség Osztályozó Rendszer",
    image: `${base}images/animals.png`,
    description:
      "Python-alapú gépi tanulási alkalmazás, amely tünetek alapján osztályozza az állatbetegségeket veszélyes / nem veszélyes kategóriákba. Kaggle adathalmaz, feature engineering, Streamlit interaktív felhasználói felület.",
    tags: ["Python", "Scikit-learn", "Streamlit", "Kaggle", "ML"],
    category: "ai",
    github: "https://github.com/momothebunny/Animal_Condition_Classifier",
  },
  {
    title: "Trónok Harca Tematikájú Sakk",
    image: `${base}images/chess.png`,
    description:
      "Egyedi C# WPF asztali sakkalkalmaz, a Trónok harca ihlette saját készítésű pixel art vizuális világgal. OOP elvek, klasszikus sakk-logika implementálása, reszponzív grafikai megjelenítés és hangulatos dizájn.",
    tags: ["C#", "WPF", "OOP", "Pixel Art", "Game Dev"],
    category: "other",
    github: "https://github.com/momothebunny/Chess_WPF_App",
  },
  {
    title: "Vállalati Hálózati Infrastruktúra Tervezése",
    image: `${base}images/network.png`,
    description:
      "Komplex ruházati üzlet teljes hálózati architektúrájának és szerveroldali infrastruktúrájának tervezése és szimulációja. Cisco Packet Tracer, VirtualBox, Windows Server 2022 tartományvezérlő.",
    tags: ["Cisco Packet Tracer", "Windows Server 2022", "VirtualBox", "Networking"],
    category: "other",
    github: "https://github.com/momothebunny/L-K_network-system",
  },
  {
    title: "Vállalati Beszerzési Folyamatok & SQL",
    image: `${base}images/procurement.png`,
    description:
      "Fiktív elektronikai gyártóvállalat stratégiai beszerzési folyamatainak modellezése Signavio-ban, SQL adatbázis-struktúra tervezése beszállítói adatok, megrendelések és készletnyilvántartás kezelésére.",
    tags: ["SQL", "Signavio", "BPMN", "ERP"],
    category: "other",
  },
  {
    title: "Receptkezelő CRUD & Tesztelési Keretrendszer",
    image: `${base}images/recipe.png`,
    description:
      "C# konzolalkalmazás teljes körű CRUD funkcionalitással és SQL adatbázis-kezeléssel. Átfogó Unit tesztek írásával biztosított kód robusztusság, TDD szemléletmód alkalmazása a szoftverminőség garantálásához.",
    tags: ["C#", "SQL", "Unit Testing", "TDD", "CRUD"],
    category: "other",
  },
];

export const skills = {
  "Programozás": ["Python", "C#", "Java", "JavaScript", "SQL", "Assembly", "HTML5", "CSS3"],
  "AI & Machine Learning": [
    "OpenAI", "Google Gemini", "Ollama", "HuggingFace", "Mistral AI",
    "LangChain", "LlamaIndex", "PyTorch", "TensorFlow", "Keras",
    "Scikit-learn", "NumPy", "Pandas", "SciPy", "Matplotlib", "W&B",
  ],
  "Frameworkök & Eszközök": [
    ".NET", "FastAPI", "Flask", "React", "Unity", "Streamlit",
    "Git", "Docker", "Elasticsearch",
  ],
  "Felhő & Vállalati": [
    "AWS", "Azure", "ServiceNow", "Dynatrace", "Jira", "SAP", "TIMS", "Vosima",
  ],
  "Módszertanok": [
    "Agile/Scrum", "OOP", "REST API", "SDLC", "TDD",
    "Kutatásmódszertan", "Vibe Coding",
  ],
};

export const stats = [
  { label: "Tanulmányi átlag", value: "4.26" },
  { label: "Fejlesztett projekt", value: "11+" },
  { label: "Hackathon részvétel", value: "3" },
  { label: "Szakmai tapasztalat", value: "2+ év" },
];

export const experiences = [
  {
    company: "Vantage Towers Zrt.",
    logo: `${base}images/vantage.png`,
    role: "Szoftverfejlesztő technikus gyakornok",
    subtitle: "Rotációs tehetséggondozó program",
    period: "2025. szept. – Jelenleg",
    location: "Budapest, Magyarország",
    color: "fuchsia",
    current: true,
    bullets: [
      "AI alapú modellek fejlesztése toronytervrajzok és szerződések automatizált elemzésére, antenna-távolságok hatékonyabb számítása érdekében.",
      "Összetett adattisztítási és migrációs folyamatok támogatása (VOSIMA → TIMS).",
      "ServiceNow platform vállalati szintű testreszabása és folyamatautomatizációs megoldások kidolgozása.",
      "Rendszermonitorozás és üzemeltetés-támogatás Dynatrace és HPE OneView környezetben.",
      "Napi szintű, angol nyelvű szakmai együttműködés európai társcsapatokkal, agilis SCRUM módszertan mentén.",
    ],
    tags: ["Python", "ServiceNow", "Dynatrace", "SCRUM", "AI", "Azure"],
  },
  {
    company: "József Attila Gimnázium",
    logo: `${base}images/attila.png`,
    role: "Informatika / Digitális kultúra óraadó tanár",
    subtitle: "",
    period: "2024. szept. – 2025. júl.",
    location: "Budapest, Magyarország",
    color: "violet",
    current: false,
    bullets: [
      "Informatika, Python programozás és SQL adatbázis-kezelés elméleti és gyakorlati oktatása 9–12. osztályos tanulók számára.",
      "Diákok sikeres felkészítése közép- és emelt szintű érettségi vizsgákra, egyéni mentori tevékenység és vizsgastratégiák kidolgozása.",
      "Komplex technikai fogalmak közérthető átadása, oktatási segédanyagok fejlesztése.",
    ],
    tags: ["Python", "SQL", "Oktatás", "Érettségi felkészítés"],
  },
  {
    company: "Szilágyi Erzsébet Gimnázium",
    logo: `${base}images/szilagyi.png`,
    role: "Informatika / Digitális kultúra óraadó tanár",
    subtitle: "",
    period: "2023. szept. – 2024. júl.",
    location: "Budapest, Magyarország",
    color: "cyan",
    current: false,
    bullets: [
      "Programozási alapok (C#, Python) és SQL struktúrák tanítása matematika és informatika tagozatos diákoknak (8–11. osztály).",
      "Emelt szintű tananyag módszertani kidolgozása, algoritmizálási készség fejlesztése speciális tantervű osztályokban.",
      "Tehetséggondozás és versenyfelkészítés, szakmai támogatás iskolai és országos informatikai versenyekre.",
    ],
    tags: ["C#", "Python", "SQL", "Tehetséggondozás"],
  },
];

export const education = [
  {
    school: "Óbudai Egyetem",
    logo: `${base}images/obuda.png`,
    degree: "BSc mérnökinformatikus",
    field: "AI specializáció",
    gpa: "4.26 / 5.00",
    period: "2021. szept. – 2026. júl. (várható)",
    location: "Budapest, Magyarország",
    current: true,
    highlights: [],
  },
  {
    school: "Szent Margit Gimnázium",
    logo: `${base}images/margit.png`,
    degree: "Érettségi bizonyítvány",
    field: "Kitűnő minősítés · Emelt: Informatika (Jeles), Angol nyelv (Jeles)",
    period: "2017. szept. – 2021. máj.",
    location: "Budapest, Magyarország",
    current: false,
    highlights: [],
  },
  {
    school: "Ritsmann Pál Német Nemzetiségi Általános Iskola",
    logo: `${base}images/ritsman.png`,
    degree: "Általános iskola",
    field: "Német nemzetiségi tagozat",
    period: "2009 – 2017",
    location: "Biatorbágy, Magyarország",
    current: false,
    highlights: [],
  },
];

export const awards = [
  {
    title: "Girls in Tech – Yettel Díj",
    desc: "Egyedi AI-alapú zenei elemző szoftver fejlesztéséért. A szakmai zsűri 625 000 Ft-os ösztöndíjjal jutalmazta az innovatív technikai megvalósítást.",
    year: "2025",
    type: "award",
  },
  {
    title: "GDE MIT Minds and Machines Hackathon",
    desc: "Innovációs verseny, ahol AI-alapú egészségügyi fókuszú megoldások kidolgozásán dolgoztunk a diagnosztika és az adatfeldolgozás hatékonyságának növelése érdekében.",
    year: "2026",
    type: "hackathon",
  },
  {
    title: "Byborg AI Hackathon – Meghívott résztvevő",
    desc: "Szakmai előszűrés alapján kiválasztott résztvevő a Byborg Enterprises exkluzív AI-fókuszú fejlesztői versenyén, ahol komplex és kreatív multimédia kihívásokon dolgoztunk.",
    year: "2024",
    type: "hackathon",
  },
  {
    title: "Kitűnő Érettségi",
    desc: "Minden vizsgatárgyból jeles minősítés, emelt szintű Informatika és Angol nyelv vizsgával.",
    year: "2021",
    type: "award",
  },
];

export const certifications = [
  { name: "Euroexam B2", detail: "B2 komplex angol nyelvvizsga", year: "2021. márc." },
  { name: "ECL B2 – Írásbeli", detail: "B2 írásbeli német nyelvvizsga", year: "2019. dec." },
  { name: "ECL B2 – Szóbeli", detail: "B2 szóbeli német nyelvvizsga", year: "2019. ápr." },
];

export const languages = [
  { lang: "Magyar", level: "Anyanyelv", color: "bg-fuchsia-500", width: "w-full" },
  { lang: "Angol", level: "B2 Komplex (Euroexam) · C1 célkitűzés", color: "bg-violet-500", width: "w-[80%]" },
  { lang: "Német", level: "B2 Komplex (ECL írásbeli + szóbeli)", color: "bg-cyan-500", width: "w-[75%]" },
];

export const hobbies = [
  { name: "Főzés / Sütés", emoji: "🍳", image: `${base}images/cook.png` },
  { name: "Kéktúrázás", emoji: "🏔️", image: `${base}images/hike.png` },
  { name: "Kertészkedés", emoji: "🌱", image: `${base}images/garden.png` },
  { name: "Videójátékok", emoji: "🎮", image: `${base}images/game.png` },
  { name: "Képregények / Mangák", emoji: "📚", image: `${base}images/manga.png` },
  { name: "Tartalomgyártás / Videóvágás", emoji: "🎬", image: `${base}images/video.png` },
];

export const goals = [
  "AI, szoftverfejlesztés és vállalati rendszerek metszéspontján valódi üzleti és társadalmi értéket teremtő megoldások fejlesztése.",
  "C1 szintű angol nyelvvizsga megszerzése és aktív részvétel külföldi szakmai programokban és kutatási projektekben.",
  "Megbízható és skálázható RAG-megoldások, adatvezérelt automatizáció tervezése vállalati szinten.",
  "Tapasztalataim oktatói vagy mentori szerepben való kamatoztatása a jövő szakembereinek képzéséhez.",
];
