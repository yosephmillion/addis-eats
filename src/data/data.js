import doroWat from "../assets/dishes/doro-wat.jpg";
import sigaWat from "../assets/dishes/siga-wat.jpg";
import begAlichaWat from "../assets/dishes/beg-alicha-wat.jpg";
import shiroTegamino from "../assets/dishes/shiro-tegamino.jpg";
import shiroBozena from "../assets/dishes/shiro-bozena.jpg";
import sigaDerekTibs from "../assets/dishes/siga-derek-tibs.jpg";
import awazeLambTibs from "../assets/dishes/awaze-lamb-tibs.jpg";
import quantaFirfir from "../assets/dishes/quanta-firfir.jpg";
import chornakeFishTibs from "../assets/dishes/chornake-fish-tibs.jpg";
import primeBeefKitfo from "../assets/dishes/prime-beef-kitfo.jpg";
import goredGored from "../assets/dishes/gored-gored.jpg";
import kitfoDulet from "../assets/dishes/kitfo-dulet.jpg";
import fullVeganBeyaynetu from "../assets/dishes/full-vegan-beyaynetu.jpg";
import misirWat from "../assets/dishes/misir-wat.jpg";
import kikAlichaWat from "../assets/dishes/kik-alicha-wat.jpg";
import gomenCollards from "../assets/dishes/gomen-collards.jpg";
import freshTimatimFitfit from "../assets/dishes/fresh-timatim-fitfit.jpg";
import houseTejCarafe from "../assets/dishes/house-tej-carafe.jpg";
import jebenaSpicedCoffee from "../assets/dishes/jebena-spiced-coffee.jpg";
import spicedHabeshaChai from "../assets/dishes/spiced-habesha-chai.jpg";
import extraTeffInjera from "../assets/dishes/extra-teff-injera.jpg";
import extraBreadSlice from "../assets/dishes/extra-bread-slice.jpg";
import extraKochoSlice from "../assets/dishes/extra-kocho-slice.jpg";
import mitmitaSpice from "../assets/dishes/mitmita-spice.jpg";
import awazeSpice from "../assets/dishes/awaze-spice.jpg";
import kochkochaSpice from "../assets/dishes/kochkocha-spice.jpg";
import ceremonialCoffeeSnack from "../assets/dishes/ceremonial-coffee-snack.jpg";
import daboKolo from "../assets/dishes/dabo-kolo.jpg";
import parchedGrain from "../assets/dishes/parched-grain.jpg";
import popcorn from "../assets/dishes/popcorn.jpg";
import teaBiscuit from "../assets/dishes/tea-biscuit.jpg";
import chornake from "../assets/dishes/chornake.jpg";
import sambusa from "../assets/dishes/sambusa.jpg";

export const dishes = [
  {
    id: "menu-1",
    slug: "doro-wat",
    image: doroWat,
    nameEn: "Classic Doro Wat",
    nameAm: "የዶሮ ወጥ",
    category: "Traditional Stews & Wat",
    priceETB: 650,
    spiceLevel: "Fiery Berbere (3/3)",
    isFasting: false,
    isSpecial: true,
    description:
      "Tender highland chicken is slowly simmered in a deeply caramelized red-onion sauce enriched with aromatic berbere, niter kibbeh, garlic, ginger, and warm spices. Finished with a farm egg, this classic Doro Wat balances rich buttery depth, gentle sweetness from the onions, and a lingering fiery berbere warmth.",
    ingredients: [
      "Free-range chicken",
      "Berbere",
      "Niter Kibbeh",
      "Farm Egg",
      "Red Onions",
      "Garlic",
      "Ginger",
    ],
    extras: [
      {
        nameEn: "Extra Teff Injera",
        nameAm: "ተጨማሪ የጤፍ እንጀራ",
        priceETB: 70,
        image: extraTeffInjera,
      },
      {
        nameEn: "Extra Bread Slice",
        nameAm: "ተጨማሪ የስንዴ ዳቦ",
        priceETB: 65,
        image: extraBreadSlice,
      },
      {
        nameEn: "Extra Kocho Slice",
        nameAm: "ተጨማሪ ቆጮ",
        priceETB: 60,
        image: extraKochoSlice,
      },
      {
        nameEn: "Mitmita Spice",
        nameAm: "ሚጥሚጣ",
        priceETB: 50,
        image: mitmitaSpice,
      },
      {
        nameEn: "Awaze Spice",
        nameAm: "አዋዜ",
        priceETB: 65,
        image: awazeSpice,
      },
      {
        nameEn: "Kochkocha Spice",
        nameAm: "ቆጭቆጫ",
        priceETB: 65,
        image: kochkochaSpice,
      },
    ],
    servings: "Serves 1-2 generously",
  },

  {
    id: "menu-2",
    slug: "siga-wat",
    image: sigaWat,
    nameEn: "Prime Siga Wat (Beef Stew)",
    nameAm: "የስጋ ወጥ",
    category: "Traditional Stews & Wat",
    priceETB: 580,
    spiceLevel: "Medium-Hot (2/3)",
    isFasting: false,
    isSpecial: false,
    description:
      "Prime grass-fed beef chuck is cut into generous cubes and patiently braised until exceptionally tender in a dark, richly seasoned berbere gravy. Niter kibbeh, cardamom, garlic, and slow-cooked onions build a full-bodied sauce that clings to every piece of beef.",
    ingredients: [
      "Prime Beef",
      "Highland Berbere",
      "Niter Kibbeh",
      "Cardamom",
      "Garlic",
    ],
    extras: [
      {
        nameEn: "Extra Teff Injera",
        nameAm: "ተጨማሪ የጤፍ እንጀራ",
        priceETB: 70,
        image: extraTeffInjera,
      },
      {
        nameEn: "Extra Bread Slice",
        nameAm: "ተጨማሪ የስንዴ ዳቦ",
        priceETB: 65,
        image: extraBreadSlice,
      },
      {
        nameEn: "Extra Kocho Slice",
        nameAm: "ተጨማሪ ቆጮ",
        priceETB: 60,
        image: extraKochoSlice,
      },
      {
        nameEn: "Mitmita Spice",
        nameAm: "ሚጥሚጣ",
        priceETB: 50,
        image: mitmitaSpice,
      },
      {
        nameEn: "Awaze Spice",
        nameAm: "አዋዜ",
        priceETB: 65,
        image: awazeSpice,
      },
      {
        nameEn: "Kochkocha Spice",
        nameAm: "ቆጭቆጫ",
        priceETB: 65,
        image: kochkochaSpice,
      },
    ],
    servings: "Serves 1",
  },

  {
    id: "menu-3",
    slug: "beg-alicha-wat",
    image: begAlichaWat,
    nameEn: "Beg Alicha Wat (Mild Lamb Stew)",
    nameAm: "የበግ አልጫ ወጥ",
    category: "Traditional Stews & Wat",
    priceETB: 620,
    spiceLevel: "Mild (Turmeric & Ginger)",
    isFasting: false,
    isSpecial: false,
    description:
      "Highland lamb is gently slow-cooked in a fragrant golden broth of fresh turmeric, ginger, garlic, and wild rosemary. The mild seasoning lets the natural richness of the lamb shine while creating a warm, aromatic stew with a smooth and comforting finish.",
    ingredients: [
      "Highland Lamb",
      "Fresh Turmeric",
      "Ginger",
      "Clarified Spiced Butter",
      "Garlic",
    ],
    extras: [
      {
        nameEn: "Extra Teff Injera",
        nameAm: "ተጨማሪ የጤፍ እንጀራ",
        priceETB: 70,
        image: extraTeffInjera,
      },
      {
        nameEn: "Extra Bread Slice",
        nameAm: "ተጨማሪ የስንዴ ዳቦ",
        priceETB: 65,
        image: extraBreadSlice,
      },
      {
        nameEn: "Extra Kocho Slice",
        nameAm: "ተጨማሪ ቆጮ",
        priceETB: 60,
        image: extraKochoSlice,
      },
      {
        nameEn: "Mitmita Spice",
        nameAm: "ሚጥሚጣ",
        priceETB: 50,
        image: mitmitaSpice,
      },
      {
        nameEn: "Awaze Spice",
        nameAm: "አዋዜ",
        priceETB: 65,
        image: awazeSpice,
      },
      {
        nameEn: "Kochkocha Spice",
        nameAm: "ቆጭቆጫ",
        priceETB: 65,
        image: kochkochaSpice,
      },
    ],
    servings: "Serves 1-2",
  },

  {
    id: "menu-4",
    slug: "shiro-tegamino",
    image: shiroTegamino,
    nameEn: "Clay-Pot Shiro Tegabino",
    nameAm: "ሽሮ ተጋቢኖ",
    category: "Traditional Stews & Wat",
    priceETB: 420,
    spiceLevel: "Medium (1/3)",
    isFasting: true,
    isSpecial: false,
    description:
      "A rich chickpea and broad-bean stew prepared with aromatic spices, garlic, shallots, green chili, and fragrant cardamom. Whipped with quality seed oil and served bubbling hot in an earthenware clay pot, Shiro Tegabino has a creamy texture with a gently spicy finish.",
    ingredients: [
      "Chickpea flour",
      "Cardamom",
      "Garlic",
      "Shallots",
      "Seed Oil",
      "Green Chili",
    ],
    extras: [
      {
        nameEn: "Extra Teff Injera",
        nameAm: "ተጨማሪ የጤፍ እንጀራ",
        priceETB: 70,
        image: extraTeffInjera,
      },
      {
        nameEn: "Extra Bread Slice",
        nameAm: "ተጨማሪ የስንዴ ዳቦ",
        priceETB: 65,
        image: extraBreadSlice,
      },
      {
        nameEn: "Extra Kocho Slice",
        nameAm: "ተጨማሪ ቆጮ",
        priceETB: 60,
        image: extraKochoSlice,
      },
      {
        nameEn: "Mitmita Spice",
        nameAm: "ሚጥሚጣ",
        priceETB: 50,
        image: mitmitaSpice,
      },
      {
        nameEn: "Awaze Spice",
        nameAm: "አዋዜ",
        priceETB: 65,
        image: awazeSpice,
      },
      {
        nameEn: "Kochkocha Spice",
        nameAm: "ቆጭቆጫ",
        priceETB: 65,
        image: kochkochaSpice,
      },
    ],
    servings: "Serves 1",
  },

  {
    id: "menu-5",
    slug: "shiro-bozena",
    image: shiroBozena,
    nameEn: "Shiro Bozena (Beef Enriched Shiro)",
    nameAm: "ሽሮ ቦዘና",
    category: "Traditional Stews & Wat",
    priceETB: 490,
    spiceLevel: "Medium-Hot (2/3)",
    isFasting: false,
    isSpecial: false,
    description:
      "Silky spiced chickpea puree is enriched with savoury bites of prime beef and fragrant niter kibbeh. Berbere, garlic, and slow-cooked aromatics give this Shiro Bozena a deep, meaty character while preserving the creamy texture of the traditional shiro base.",
    ingredients: [
      "Chickpea Flour",
      "Beef Bites",
      "Spiced Butter",
      "Berbere",
      "Garlic",
    ],
    extras: [
      {
        nameEn: "Extra Teff Injera",
        nameAm: "ተጨማሪ የጤፍ እንጀራ",
        priceETB: 70,
        image: extraTeffInjera,
      },
      {
        nameEn: "Extra Bread Slice",
        nameAm: "ተጨማሪ የስንዴ ዳቦ",
        priceETB: 65,
        image: extraBreadSlice,
      },
      {
        nameEn: "Extra Kocho Slice",
        nameAm: "ተጨማሪ ቆጮ",
        priceETB: 60,
        image: extraKochoSlice,
      },
      {
        nameEn: "Mitmita Spice",
        nameAm: "ሚጥሚጣ",
        priceETB: 50,
        image: mitmitaSpice,
      },
      {
        nameEn: "Awaze Spice",
        nameAm: "አዋዜ",
        priceETB: 65,
        image: awazeSpice,
      },
      {
        nameEn: "Kochkocha Spice",
        nameAm: "ቆጭቆጫ",
        priceETB: 65,
        image: kochkochaSpice,
      },
    ],
    servings: "Serves 1",
  },

  {
    id: "menu-6",
    slug: "siga-derek-tibs",
    image: sigaDerekTibs,
    nameEn: "Crisp Siga Derek Tibs",
    nameAm: "የደረቅ ስጋ ጥብስ",
    tagline: "Crispy pan-fried prime beef with Awaze",
    category: "Tibs & Grills",
    priceETB: 620,
    spiceLevel: "Chef Signature Crisp",
    isFasting: false,
    isSpecial: true,
    description:
      "Prime tenderloin beef is cut into hearty chunks and quickly pan-charred for a crisp, deeply savoury exterior while remaining juicy inside. Fresh rosemary, seared jalapeño, garlic, and a house Awaze dip add layers of herbal aroma, smoky heat, and bright chili flavour.",
    ingredients: [
      "Prime Tenderloin Beef",
      "Rosemary",
      "Jalapeño",
      "Garlic",
      "Awaze Paste",
    ],
    extras: [
      {
        nameEn: "Extra Teff Injera",
        nameAm: "ተጨማሪ የጤፍ እንጀራ",
        priceETB: 70,
        image: extraTeffInjera,
      },
      {
        nameEn: "Extra Bread Slice",
        nameAm: "ተጨማሪ የስንዴ ዳቦ",
        priceETB: 65,
        image: extraBreadSlice,
      },
      {
        nameEn: "Extra Kocho Slice",
        nameAm: "ተጨማሪ ቆጮ",
        priceETB: 60,
        image: extraKochoSlice,
      },
      {
        nameEn: "Mitmita Spice",
        nameAm: "ሚጥሚጣ",
        priceETB: 50,
        image: mitmitaSpice,
      },
      {
        nameEn: "Awaze Spice",
        nameAm: "አዋዜ",
        priceETB: 65,
        image: awazeSpice,
      },
      {
        nameEn: "Kochkocha Spice",
        nameAm: "ቆጭቆጫ",
        priceETB: 65,
        image: kochkochaSpice,
      },
    ],
    servings: "Serves 1",
  },

  {
    id: "menu-7",
    slug: "awaze-lamb-tibs",
    image: awazeLambTibs,
    nameEn: "Awaze Lamb Tibs",
    nameAm: "የበግ አዋዜ ጥብስ",
    category: "Tibs & Grills",
    priceETB: 680,
    spiceLevel: "Fiery Hot Awaze (3/3)",
    isFasting: false,
    isSpecial: false,
    description:
      "Succulent highland lamb tenderloin is wok-fried over high heat with red shallots and fresh rosemary, then coated in a bold house Awaze chili glaze. The result is juicy, caramelized lamb with a rich buttery finish and a pronounced, fiery pepper kick.",
    ingredients: [
      "Highland Lamb",
      "House Awaze",
      "Red Onions",
      "Rosemary",
      "Butter",
    ],
    extras: [
      {
        nameEn: "Extra Teff Injera",
        nameAm: "ተጨማሪ የጤፍ እንጀራ",
        priceETB: 70,
        image: extraTeffInjera,
      },
      {
        nameEn: "Extra Bread Slice",
        nameAm: "ተጨማሪ የስንዴ ዳቦ",
        priceETB: 65,
        image: extraBreadSlice,
      },
      {
        nameEn: "Extra Kocho Slice",
        nameAm: "ተጨማሪ ቆጮ",
        priceETB: 60,
        image: extraKochoSlice,
      },
      {
        nameEn: "Mitmita Spice",
        nameAm: "ሚጥሚጣ",
        priceETB: 50,
        image: mitmitaSpice,
      },
      {
        nameEn: "Awaze Spice",
        nameAm: "አዋዜ",
        priceETB: 65,
        image: awazeSpice,
      },
      {
        nameEn: "Kochkocha Spice",
        nameAm: "ቆጭቆጫ",
        priceETB: 65,
        image: kochkochaSpice,
      },
    ],
    servings: "Serves 1",
  },

  {
    id: "menu-8",
    slug: "quanta-firfir",
    image: quantaFirfir,
    nameEn: "Spicy Quanta Firfir",
    nameAm: "የቋንጣ ፍርፍር",
    category: "Tibs & Grills",
    priceETB: 540,
    spiceLevel: "Robust Berbere (2/3)",
    isFasting: false,
    isSpecial: false,
    description:
      "House-cured highland beef jerky is shredded and sautéed until intensely savoury, then folded into a rich berbere and niter kibbeh gravy with pieces of teff injera. The combination creates a hearty, spicy dish with chewy beef, soft injera, and a deeply aromatic butter sauce.",
    ingredients: [
      "House Quanta Jerky",
      "Teff Injera Pieces",
      "Berbere",
      "Niter Kibbeh",
      "Shallots",
    ],
    extras: [
      {
        nameEn: "Extra Teff Injera",
        nameAm: "ተጨማሪ የጤፍ እንጀራ",
        priceETB: 70,
        image: extraTeffInjera,
      },
      {
        nameEn: "Extra Bread Slice",
        nameAm: "ተጨማሪ የስንዴ ዳቦ",
        priceETB: 65,
        image: extraBreadSlice,
      },
      {
        nameEn: "Extra Kocho Slice",
        nameAm: "ተጨማሪ ቆጮ",
        priceETB: 60,
        image: extraKochoSlice,
      },
      {
        nameEn: "Mitmita Spice",
        nameAm: "ሚጥሚጣ",
        priceETB: 50,
        image: mitmitaSpice,
      },
      {
        nameEn: "Awaze Spice",
        nameAm: "አዋዜ",
        priceETB: 65,
        image: awazeSpice,
      },
      {
        nameEn: "Kochkocha Spice",
        nameAm: "ቆጭቆጫ",
        priceETB: 65,
        image: kochkochaSpice,
      },
    ],
    servings: "Serves 1-2",
  },

  {
    id: "menu-9",
    slug: "chornake-fish-tibs",
    image: chornakeFishTibs,
    nameEn: "Lake Tana Crispy Fish Tibs",
    nameAm: "የዓሳ ጥብስ",
    category: "Tibs & Grills",
    priceETB: 560,
    spiceLevel: "Zesty Lemon & Chili (1/3)",
    isFasting: true,
    isSpecial: false,
    description:
      "Fresh Lake Tana tilapia fillet is cut into bite-sized pieces and pan-crisped until golden on the outside and tender within. Korarima, lime, garlic oil, and a touch of mitmita bring citrusy brightness, aromatic warmth, and a clean chili finish to the fish.",
    ingredients: [
      "Fresh Tilapia fillet",
      "Korarima",
      "Lime",
      "Garlic oil",
      "Mitmita",
    ],
    extras: [
      {
        nameEn: "Extra Teff Injera",
        nameAm: "ተጨማሪ የጤፍ እንጀራ",
        priceETB: 70,
        image: extraTeffInjera,
      },
      {
        nameEn: "Extra Bread Slice",
        nameAm: "ተጨማሪ የስንዴ ዳቦ",
        priceETB: 65,
        image: extraBreadSlice,
      },
      {
        nameEn: "Extra Kocho Slice",
        nameAm: "ተጨማሪ ቆጮ",
        priceETB: 60,
        image: extraKochoSlice,
      },
      {
        nameEn: "Mitmita Spice",
        nameAm: "ሚጥሚጣ",
        priceETB: 50,
        image: mitmitaSpice,
      },
      {
        nameEn: "Awaze Spice",
        nameAm: "አዋዜ",
        priceETB: 65,
        image: awazeSpice,
      },
      {
        nameEn: "Kochkocha Spice",
        nameAm: "ቆጭቆጫ",
        priceETB: 65,
        image: kochkochaSpice,
      },
    ],
    servings: "Serves 1",
  },

  {
    id: "menu-10",
    slug: "prime-beef-kitfo",
    image: primeBeefKitfo,
    nameEn: "Prime Beef Kitfo",
    nameAm: "የከብት ስጋ ክትፎ",
    category: "Raw & Cured Delicacies / Kitfo",
    priceETB: 720,
    spiceLevel: "Choice: Leb-Leb or Raw",
    isFasting: false,
    isSpecial: true,
    description:
      "Finely minced prime tenderloin is gently seasoned with warm aromatic niter kibbeh and a fiery mitmita blend, creating the classic rich texture and bold flavour of kitfo. Served according to your preferred preparation, it combines buttery richness, delicate beef flavour, and fragrant spice.",
    ingredients: [
      "Top sirloin",
      "Niter Kibbeh",
      "Mitmita",
      "Cardamom seed powder",
    ],
    extras: [
      {
        nameEn: "Extra Teff Injera",
        nameAm: "ተጨማሪ የጤፍ እንጀራ",
        priceETB: 70,
        image: extraTeffInjera,
      },
      {
        nameEn: "Extra Bread Slice",
        nameAm: "ተጨማሪ የስንዴ ዳቦ",
        priceETB: 65,
        image: extraBreadSlice,
      },
      {
        nameEn: "Extra Kocho Slice",
        nameAm: "ተጨማሪ ቆጮ",
        priceETB: 60,
        image: extraKochoSlice,
      },
      {
        nameEn: "Mitmita Spice",
        nameAm: "ሚጥሚጣ",
        priceETB: 50,
        image: mitmitaSpice,
      },
      {
        nameEn: "Awaze Spice",
        nameAm: "አዋዜ",
        priceETB: 65,
        image: awazeSpice,
      },
      {
        nameEn: "Kochkocha Spice",
        nameAm: "ቆጭቆጫ",
        priceETB: 65,
        image: kochkochaSpice,
      },
    ],
    servings: "Serves 1",
  },

  {
    id: "menu-11",
    slug: "gored-gored",
    image: goredGored,
    nameEn: "Highland Gored Gored",
    nameAm: "ጎረድ ጎረድ",
    category: "Raw & Cured Delicacies / Kitfo",
    priceETB: 750,
    spiceLevel: "Extra Hot Mitmita (3/3)",
    isFasting: false,
    isSpecial: false,
    description:
      "Fresh prime tenderloin is cut into neat bite-sized cubes and traditionally dressed with melted herbal butter and fiery mitmita. Each piece delivers a rich, clean beef flavour followed by a bright chili heat, with house Awaze available to add another layer of spice.",
    ingredients: [
      "Raw Prime Tenderloin",
      "Melted Ghee",
      "Mitmita",
      "Awaze dip",
    ],
    extras: [
      {
        nameEn: "Extra Teff Injera",
        nameAm: "ተጨማሪ የጤፍ እንጀራ",
        priceETB: 70,
        image: extraTeffInjera,
      },
      {
        nameEn: "Extra Bread Slice",
        nameAm: "ተጨማሪ የስንዴ ዳቦ",
        priceETB: 65,
        image: extraBreadSlice,
      },
      {
        nameEn: "Extra Kocho Slice",
        nameAm: "ተጨማሪ ቆጮ",
        priceETB: 60,
        image: extraKochoSlice,
      },
      {
        nameEn: "Mitmita Spice",
        nameAm: "ሚጥሚጣ",
        priceETB: 50,
        image: mitmitaSpice,
      },
      {
        nameEn: "Awaze Spice",
        nameAm: "አዋዜ",
        priceETB: 65,
        image: awazeSpice,
      },
      {
        nameEn: "Kochkocha Spice",
        nameAm: "ቆጭቆጫ",
        priceETB: 65,
        image: kochkochaSpice,
      },
    ],
    servings: "Serves 1",
  },

  {
    id: "menu-12",
    slug: "kitfo-dulet",
    image: kitfoDulet,
    nameEn: "Addis Style Dulet",
    nameAm: "ዱለት",
    category: "Raw & Cured Delicacies / Kitfo",
    priceETB: 580,
    spiceLevel: "Spicy & Tangy (2/3)",
    isFasting: false,
    isSpecial: false,
    description:
      "A traditional Addis-style combination of finely minced beef, tripe, and liver is seasoned with jalapeño, red onion, mitmita, and fragrant niter kibbeh. The mixture is finely chopped and richly seasoned for a complex texture and savoury flavour with a lively spicy finish.",
    ingredients: [
      "Minced Beef & Offal",
      "Jalapeño",
      "Red Onion",
      "Mitmita",
      "Niter Kibbeh",
    ],
    extras: [
      {
        nameEn: "Extra Teff Injera",
        nameAm: "ተጨማሪ የጤፍ እንጀራ",
        priceETB: 70,
        image: extraTeffInjera,
      },
      {
        nameEn: "Extra Bread Slice",
        nameAm: "ተጨማሪ የስንዴ ዳቦ",
        priceETB: 65,
        image: extraBreadSlice,
      },
      {
        nameEn: "Extra Kocho Slice",
        nameAm: "ተጨማሪ ቆጮ",
        priceETB: 60,
        image: extraKochoSlice,
      },
      {
        nameEn: "Mitmita Spice",
        nameAm: "ሚጥሚጣ",
        priceETB: 50,
        image: mitmitaSpice,
      },
      {
        nameEn: "Awaze Spice",
        nameAm: "አዋዜ",
        priceETB: 65,
        image: awazeSpice,
      },
      {
        nameEn: "Kochkocha Spice",
        nameAm: "ቆጭቆጫ",
        priceETB: 65,
        image: kochkochaSpice,
      },
    ],
    servings: "Serves 1",
  },

  {
    id: "menu-13",
    slug: "full-vegan-beyaynetu",
    image: fullVeganBeyaynetu,
    nameEn: "Full Vegan Beyaynetu Platter",
    nameAm: "የጾም በያይነቱ ድልድል",
    category: "Fasting & Vegan / Tsom",
    priceETB: 480,
    spiceLevel: "Varied Spices (1-2/3)",
    isFasting: true,
    isSpecial: true,
    description:
      "A generous vegan tasting platter bringing together several Ethiopian favourites in one colourful spread: berbere-spiced Misir Wat, golden Kik Alicha, braised Gomen, sweet vegetables, and comforting Atakilt Wat. Each preparation offers a different texture and spice profile for a varied fasting meal.",
    ingredients: [
      "Lentils",
      "Split peas",
      "Collard greens",
      "Carrots & Green beans",
      "Cabbage & Potatoes",
    ],
    extras: [
      {
        nameEn: "Extra Teff Injera",
        nameAm: "ተጨማሪ የጤፍ እንጀራ",
        priceETB: 70,
        image: extraTeffInjera,
      },
      {
        nameEn: "Extra Bread Slice",
        nameAm: "ተጨማሪ የስንዴ ዳቦ",
        priceETB: 65,
        image: extraBreadSlice,
      },
      {
        nameEn: "Extra Kocho Slice",
        nameAm: "ተጨማሪ ቆጮ",
        priceETB: 60,
        image: extraKochoSlice,
      },
      {
        nameEn: "Mitmita Spice",
        nameAm: "ሚጥሚጣ",
        priceETB: 50,
        image: mitmitaSpice,
      },
      {
        nameEn: "Awaze Spice",
        nameAm: "አዋዜ",
        priceETB: 65,
        image: awazeSpice,
      },
      {
        nameEn: "Kochkocha Spice",
        nameAm: "ቆጭቆጫ",
        priceETB: 65,
        image: kochkochaSpice,
      },
    ],
    servings: "Serves 1-2 generously",
  },

  {
    id: "menu-14",
    slug: "misir-wat",
    image: misirWat,
    nameEn: "Highland Red Misir Wat",
    nameAm: "የምስር ወጥ",
    category: "Fasting & Vegan / Tsom",
    priceETB: 360,
    spiceLevel: "Warm Berbere (2/3)",
    isFasting: true,
    isSpecial: false,
    description:
      "Split red lentils are slowly simmered with rich berbere, caramelized red onions, garlic, and cold-pressed sunflower oil until soft and velvety. Warm chili depth and naturally sweet onions give this Misir Wat its familiar, comforting Ethiopian character.",
    ingredients: [
      "Red lentils",
      "Berbere",
      "Shallots",
      "Garlic",
      "Sunflower oil",
    ],
    extras: [
      {
        nameEn: "Extra Teff Injera",
        nameAm: "ተጨማሪ የጤፍ እንጀራ",
        priceETB: 70,
        image: extraTeffInjera,
      },
      {
        nameEn: "Extra Bread Slice",
        nameAm: "ተጨማሪ የስንዴ ዳቦ",
        priceETB: 65,
        image: extraBreadSlice,
      },
      {
        nameEn: "Extra Kocho Slice",
        nameAm: "ተጨማሪ ቆጮ",
        priceETB: 60,
        image: extraKochoSlice,
      },
      {
        nameEn: "Mitmita Spice",
        nameAm: "ሚጥሚጣ",
        priceETB: 50,
        image: mitmitaSpice,
      },
      {
        nameEn: "Awaze Spice",
        nameAm: "አዋዜ",
        priceETB: 65,
        image: awazeSpice,
      },
      {
        nameEn: "Kochkocha Spice",
        nameAm: "ቆጭቆጫ",
        priceETB: 65,
        image: kochkochaSpice,
      },
    ],
    servings: "Serves 1",
  },

  {
    id: "menu-15",
    slug: "kik-alicha-wat",
    image: kikAlichaWat,
    nameEn: "Golden Kik Alicha",
    nameAm: "የክክ አልጫ ወጥ",
    category: "Fasting & Vegan / Tsom",
    priceETB: 340,
    spiceLevel: "Mild Herb Fragrant (1/3)",
    isFasting: true,
    isSpecial: false,
    description:
      "Yellow split peas are gently cooked until creamy with golden turmeric, fresh ginger, garlic, and white onions. Mild and aromatic rather than fiery, Kik Alicha offers a smooth, buttery texture and a delicate herbal-spiced flavour.",
    ingredients: [
      "Yellow split peas",
      "Turmeric",
      "Garlic",
      "Ginger",
      "White onions",
    ],
    extras: [
      {
        nameEn: "Extra Teff Injera",
        nameAm: "ተጨማሪ የጤፍ እንጀራ",
        priceETB: 70,
        image: extraTeffInjera,
      },
      {
        nameEn: "Extra Bread Slice",
        nameAm: "ተጨማሪ የስንዴ ዳቦ",
        priceETB: 65,
        image: extraBreadSlice,
      },
      {
        nameEn: "Extra Kocho Slice",
        nameAm: "ተጨማሪ ቆጮ",
        priceETB: 60,
        image: extraKochoSlice,
      },
      {
        nameEn: "Mitmita Spice",
        nameAm: "ሚጥሚጣ",
        priceETB: 50,
        image: mitmitaSpice,
      },
      {
        nameEn: "Awaze Spice",
        nameAm: "አዋዜ",
        priceETB: 65,
        image: awazeSpice,
      },
      {
        nameEn: "Kochkocha Spice",
        nameAm: "ቆጭቆጫ",
        priceETB: 65,
        image: kochkochaSpice,
      },
    ],
    servings: "Serves 1",
  },

  {
    id: "menu-16",
    slug: "gomen-collards",
    image: gomenCollards,
    nameEn: "Braised Ye'abesha Gomen",
    nameAm: "የሀበሻ ጎመን",
    category: "Fasting & Vegan / Tsom",
    priceETB: 320,
    spiceLevel: "Mild & Savory (1/3)",
    isFasting: true,
    isSpecial: false,
    description:
      "Young collard greens are braised slowly with sweet garlic, sliced shallots, fresh green jalapeños, and cold-pressed oil until tender. The dish is savoury and fresh, with gentle chili warmth that complements the natural earthy flavour of the greens.",
    ingredients: [
      "Collard greens",
      "Garlic cloves",
      "Green chilies",
      "Onions",
      "Cold-pressed oil",
    ],
    extras: [
      {
        nameEn: "Extra Teff Injera",
        nameAm: "ተጨማሪ የጤፍ እንጀራ",
        priceETB: 70,
        image: extraTeffInjera,
      },
      {
        nameEn: "Extra Bread Slice",
        nameAm: "ተጨማሪ የስንዴ ዳቦ",
        priceETB: 65,
        image: extraBreadSlice,
      },
      {
        nameEn: "Extra Kocho Slice",
        nameAm: "ተጨማሪ ቆጮ",
        priceETB: 60,
        image: extraKochoSlice,
      },
      {
        nameEn: "Mitmita Spice",
        nameAm: "ሚጥሚጣ",
        priceETB: 50,
        image: mitmitaSpice,
      },
      {
        nameEn: "Awaze Spice",
        nameAm: "አዋዜ",
        priceETB: 65,
        image: awazeSpice,
      },
      {
        nameEn: "Kochkocha Spice",
        nameAm: "ቆጭቆጫ",
        priceETB: 65,
        image: kochkochaSpice,
      },
    ],
    servings: "Serves 1",
  },

  {
    id: "menu-17",
    slug: "fresh-timatim-fitfit",
    image: freshTimatimFitfit,
    nameEn: "Fresh Timatim Fitfit",
    nameAm: "ቲማቲም ፍትፍት",
    category: "Fasting & Vegan / Tsom",
    priceETB: 280,
    spiceLevel: "Cooling & Tangy (1/3)",
    isFasting: true,
    isSpecial: false,
    description:
      "Fresh heirloom tomatoes are combined with minced red shallots and green peppers, then tossed with torn pieces of cold injera and a tangy mustard dressing. Juicy tomatoes, soft injera, and bright acidity create a refreshing contrast to richer Ethiopian dishes.",
    ingredients: [
      "Fresh tomatoes",
      "Injera pieces",
      "Shallots",
      "Mustard dressing",
      "Jalapeño",
    ],
    extras: [
      {
        nameEn: "Extra Teff Injera",
        nameAm: "ተጨማሪ የጤፍ እንጀራ",
        priceETB: 70,
        image: extraTeffInjera,
      },
      {
        nameEn: "Extra Bread Slice",
        nameAm: "ተጨማሪ የስንዴ ዳቦ",
        priceETB: 65,
        image: extraBreadSlice,
      },
      {
        nameEn: "Extra Kocho Slice",
        nameAm: "ተጨማሪ ቆጮ",
        priceETB: 60,
        image: extraKochoSlice,
      },
      {
        nameEn: "Mitmita Spice",
        nameAm: "ሚጥሚጣ",
        priceETB: 50,
        image: mitmitaSpice,
      },
      {
        nameEn: "Awaze Spice",
        nameAm: "አዋዜ",
        priceETB: 65,
        image: awazeSpice,
      },
      {
        nameEn: "Kochkocha Spice",
        nameAm: "ቆጭቆጫ",
        priceETB: 65,
        image: kochkochaSpice,
      },
    ],
    servings: "Serves 1 (Great as side)",
  },

  {
    id: "menu-18",
    slug: "house-tej-carafe",
    image: houseTejCarafe,
    nameEn: "House Fermented Tej (500ml Carafe)",
    nameAm: "የማር ጠጅ",
    category: "Beverages & Tej",
    priceETB: 350,
    spiceLevel: "Pure Sweet Ferment",
    isFasting: true,
    isSpecial: true,
    description:
      "A traditional golden honey wine naturally fermented for 21 days with pure highland wildflower honey and bitter gesho wood. This 500ml carafe has a naturally sweet, floral character balanced by the distinctive herbal bitterness of gesho and a gentle fermented warmth.",
    ingredients: ["Pure Wild Honey", "Gesho Wood", "Spring Water"],
    servings: "500ml Flask (11% ABV)",
  },

  {
    id: "menu-19",
    slug: "jebena-spiced-coffee",
    image: jebenaSpicedCoffee,
    nameEn: "Traditional Jebena Coffee",
    nameAm: "የጀበና ቡና",
    category: "Beverages & Tej",
    priceETB: 80,
    spiceLevel: "Smoky & Aromatic",
    isFasting: true,
    isSpecial: false,
    description:
      "Freshly roasted Yirgacheffe Arabica beans are brewed traditionally in a clay Jebena, producing a fragrant coffee with a rich roasted aroma and smooth depth. A hint of tenadam rue and cardamom adds a subtle herbal-spiced character to the ceremonial cup.",
    ingredients: [
      "Yirgacheffe Coffee Beans",
      "Tenadam Herb (optional)",
      "Cardamom",
    ],
    extras: [
      {
        nameEn: "Ceremonial Coffee Snack Package",
        nameAm: "የቡና ቁርስ",
        priceETB: 100,
        image: ceremonialCoffeeSnack,
      },
      {
        nameEn: "Dabo Kolo",
        nameAm: "ዳቦ ቆሎ",
        priceETB: 70,
        image: daboKolo,
      },
      {
        nameEn: "Parched Grain",
        nameAm: "ቆሎ",
        priceETB: 90,
        image: parchedGrain,
      },
      {
        nameEn: "Popcorn",
        nameAm: "ፈንድሻ",
        priceETB: 85,
        image: popcorn,
      },
    ],
    servings: "Ceremonial Sini Cup",
  },

  {
    id: "menu-20",
    slug: "spiced-habesha-chai",
    image: spicedHabeshaChai,
    nameEn: "Highland Spiced Shai",
    nameAm: "የቅመም ሻይ",
    category: "Beverages & Tej",
    priceETB: 80,
    spiceLevel: "Cardamom & Cinnamon Infusion",
    isFasting: true,
    isSpecial: false,
    description:
      "Highland black tea leaves are slowly infused with crushed cinnamon bark, fragrant cardamom pods, cloves, and ginger root. The result is a warming, aromatic Shai with layered spice notes, served hot and naturally complemented by raw cane sugar.",
    ingredients: [
      "Black tea leaves",
      "Cinnamon",
      "Cardamom",
      "Cloves",
      "Ginger root",
    ],
    extras: [
      {
        nameEn: "Tea Biscuit",
        nameAm: "የሻይ ብስኩት",
        priceETB: 40,
        image: teaBiscuit,
      },
      {
        nameEn: "Chornake",
        nameAm: "ጮርናቄ",
        priceETB: 55,
        image: chornake,
      },
      {
        nameEn: "Sambusa",
        nameAm: "ሳምቡሳ",
        priceETB: 45,
        image: sambusa,
      },
    ],
    servings: "Served hot with raw cane sugar",
  },
];
