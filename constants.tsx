
import { Arcana, NolaLocation } from './types';

/**
 * Detailed descriptions for each Arcana, focusing on the NOLA vibe.
 */
export const ARCANA_DESCRIPTIONS: Record<Arcana, string> = {
  [Arcana.FOOL]: "Dive Bars. 1-Star reviews, cheap drinks, and chaotic energy.",
  [Arcana.MAGICIAN]: "The Lavender Line. Queer nightlife, drag, and transformation.",
  [Arcana.EMPRESS]: "Modern Dining. Michelin contenders and James Beard honorees.",
  [Arcana.EMPEROR]: "Grand Dames. Historic institutions defining Creole elegance.",
  [Arcana.HIEROPHANT]: "Cultural Repositories. Museums, galleries, and history.",
  [Arcana.CHARIOT]: "Itineraries. The curated path to victory.",
  [Arcana.HERMIT]: "The Bourdain Trail. Culinary pilgrimages for the soul.",
  [Arcana.WHEEL]: "Late Night Food. Gumbo trunks and 24-hour grills.",
  [Arcana.HANGED_MAN]: "Hidden Gems. Surprisingly good spots defying expectations.",
  [Arcana.DEATH]: "Gothic Terrain. Vampire cafes, darkwaves, and fetish lounges.",
  [Arcana.DEVIL]: "Practitioners & Shops. Voodoo, hoodoo, and occult supplies.",
  [Arcana.TOWER]: "The 10 Worst-Reviewed. Tourist traps and caution.",
  [Arcana.MOON]: "Frenchmen Street. Authentic music, jazz, and nocturnal dreams.",
  [Arcana.JUDGEMENT]: "NHEN's List. The final verdict on absolute essentials.",
};

export const ARCANA_SHORT_DESCRIPTIONS: Record<Arcana, string> = {
  [Arcana.FOOL]: "Dive Bars",
  [Arcana.MAGICIAN]: "Queer Nightlife",
  [Arcana.EMPRESS]: "Modern Dining",
  [Arcana.EMPEROR]: "Traditional Cuisine",
  [Arcana.HIEROPHANT]: "History & Arts",
  [Arcana.CHARIOT]: "Itineraries",
  [Arcana.HERMIT]: "Bourdain Trail",
  [Arcana.WHEEL]: "Late Night Eats",
  [Arcana.HANGED_MAN]: "Hidden Gems",
  [Arcana.DEATH]: "Gothic Terrain",
  [Arcana.DEVIL]: "Voodoo & Occult",
  [Arcana.TOWER]: "The 10 Worst",
  [Arcana.MOON]: "Live Music",
  [Arcana.JUDGEMENT]: "NHEN's List",
};

// The specific list for the Crystal Ball
export const NHEN_PICK_NAMES = [
  "Fétiche NOLA",
  "Boondock Saint",
  "Black Penny",
  "Jewel of the South",
  "Latitude 29",
  "Molly's on Toulouse",
  "Palm & Pine",
  "Fives",
  "Bar Tonique",
  "Dead on Decatur",
  "Vice & Graft",
  "Gimme",
  "Natty Adam’s",
  "Keye’s Fuel Mart",
  "The Cabaret",
  "PERK",
  "Café Envie",
  "FoW",
  "Loretta’s Authentic Pralines",
  "Gumbo Man & Sergio",
  "MRB Bar & Kitchen",
  "New Orleans Historic Voodoo Museum",
  "Storyville Museum"
];

/**
 * Master list of locations categorized by Arcana.
 */
export const LOCATIONS: NolaLocation[] = [
  // --- EXISTING LOCATIONS ---
  {
    id: "dive-1",
    name: "Checkpoint Charlie's",
    arcana: Arcana.FOOL,
    description: "\"Definitely saw a guy get stabbed outside. Asked the bartender for water... she made me pay for it.\"",
    address: "501 Esplanade Ave",
    vibe: "24/7, Laundry, Rock",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dive-2",
    name: "High Grace NOLA",
    arcana: Arcana.FOOL,
    description: "\"Shitty bar. Shitty clientele. I've seen the owner fly around the French Quarter half drunk on his golf cart.\"",
    address: "733 St Peter St",
    vibe: "Dive, Chaos",
    image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dive-3",
    name: "The Chart Room",
    arcana: Arcana.FOOL,
    description: "\"Yes, your feet will stick to the floor... I once witnessed a man press his naked ass cheeks against the interior window.\"",
    address: "300 Chartres St",
    vibe: "Sticky, Cash Only, Real",
    image: "https://images.unsplash.com/photo-1585672840545-23c72b257540?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dive-4",
    name: "Three Legged Dog",
    arcana: Arcana.FOOL,
    description: "\"This might be the dirtiest dive bar I have ever been to... Many reviews say there are rats here, and my wife saw one.\"",
    address: "400 Burgundy St",
    vibe: "Crawfish, Rats, 24/7",
    image: "https://images.unsplash.com/photo-1534157483717-d266718d09e7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dive-5",
    name: "The Dungeon",
    arcana: Arcana.FOOL,
    description: "\"Super corny now. It’s for tourists who want to see what happens when a Hot Topic has sex with a miniature golf course.\"",
    address: "738 Toulouse St",
    vibe: "Metal, Cages, No Photos",
    image: "https://images.unsplash.com/photo-1599951662973-1f196924b426?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dive-6",
    name: "Aunt Tiki's",
    arcana: Arcana.FOOL,
    description: "\"The bartenders are way too hot! I can't focus on my drinks. It's not fair.\"",
    address: "1207 Decatur St",
    vibe: "24/7, Tiki, Grimy",
    image: "https://images.unsplash.com/photo-1511520638520-21b8eb648218?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dive-7",
    name: "The Abbey",
    arcana: Arcana.FOOL,
    description: "\"The Quarter's seediest dive... bathroom doors that don't lock, and those plastic entryway things that keep the 'gutter butter' out.\"",
    address: "1123 Decatur St",
    vibe: "Goth, Seedy, 24/7",
    image: "https://images.unsplash.com/photo-1575444758702-4a6b9222336e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dive-8",
    name: "Erin Rose",
    arcana: Arcana.FOOL,
    description: "\"Proximity to Bourbon Street might suggest a tourist trap... you might even catch a patron dancing on the bar belligerently.\"",
    address: "811 Conti St",
    vibe: "Frozen Irish Coffee, Poboys",
    image: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dive-9",
    name: "Cosimo's",
    arcana: Arcana.FOOL,
    description: "\"The beer was in a small plastic cup and the wine wouldn't even be used for salad dressing.\"",
    address: "1201 Burgundy St",
    vibe: "Neighborhood, Dog Friendly",
    image: "https://images.unsplash.com/photo-1574096079513-d82599602950?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dive-10",
    name: "Santos Bar",
    arcana: Arcana.FOOL,
    description: "\"Super dark dive bar. Rock or metal playing, cheaper beers... extremely unsatisfied unfriendly bartender.\"",
    address: "1135 Decatur St",
    vibe: "Metal, Haunted, Venue",
    image: "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?auto=format&fit=crop&q=80&w=600"
  },

  // --- THE DEVIL (Practitioners & Supply Shops) ---
  {
    id: "shop-1",
    name: "Voodoo Authentica",
    arcana: Arcana.DEVIL,
    description: "\"Your path to enlightenment is clear, but the shop's floor plan is not; you will find magic, but only after elbowing ten other tourists.\"",
    address: "612 Dumaine St",
    vibe: "Handmade Gris-Gris, Rituals",
    image: "https://images.unsplash.com/photo-1601053428987-a2f2601908d1?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "shop-2",
    name: "Hex: Old World Witchery",
    arcana: Arcana.DEVIL,
    description: "\"Your future is bright, unlike the owner's reputation in Salem; beware of lines longer than your lifespan during October.\"",
    address: "1219 Decatur St",
    vibe: "Warlock-owned, Spells",
    image: "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "shop-3",
    name: "Reverend Zombie’s Voodoo Shop",
    arcana: Arcana.DEVIL,
    description: "\"Knowledge is yours if you can resist the urge to take a forbidden photo; your aura is cloudy, but the gift shop is impressively stocked.\"",
    address: "723 St Peter St",
    vibe: "Masks, No Photos, Readings",
    image: "https://images.unsplash.com/photo-1596700589139-65d1d604471c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "shop-4",
    name: "Erzulie’s Authentic Voodoo Shop",
    arcana: Arcana.DEVIL,
    description: "\"Love is in the air, or perhaps it is just the smell of high-priced oils; your soul will be cleansed, but your wallet will feel lighter.\"",
    address: "807 Royal St",
    vibe: "Love Spells, Handcrafted",
    image: "https://images.unsplash.com/photo-1620121474608-d261e09ce388?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "shop-5",
    name: "Dark Matter Oddities",
    arcana: Arcana.DEVIL,
    description: "\"A warped and wonderful journey lies ahead; you will find beauty in a wet specimen, but your relatives will definitely judge your home decor.\"",
    address: "822 Chartres St",
    vibe: "Taxidermy, Victorian Art",
    image: "https://images.unsplash.com/photo-1535581652167-3d6b98c5b058?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "shop-6",
    name: "Crescent City Conjure",
    arcana: Arcana.DEVIL,
    description: "\"Divination is afoot; a black chicken named Ginger will guide your path, assuming you can navigate a staff member's massive ego.\"",
    address: "2402 Royal St",
    vibe: "Hoodoo, Custom Items",
    image: "https://images.unsplash.com/photo-1596043430588-46654e81561e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "shop-7",
    name: "Esoterica Occult Goods",
    arcana: Arcana.DEVIL,
    description: "\"True enlightenment is yours, but only if you are 'serious' enough to survive the owner's motorcycle and a potential verbal lashing.\"",
    address: "541 Dumaine St",
    vibe: "Serious Practice, Un-commercial",
    image: "https://images.unsplash.com/photo-1588665796985-c6579051888b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "shop-8",
    name: "Marie Laveau’s House of Voodoo",
    arcana: Arcana.DEVIL,
    description: "\"You will learn the secrets of the Voodoo Queen, but only if you can follow the strict 'no touching' rule without getting yelled at.\"",
    address: "739 Bourbon St",
    vibe: "Historical, Kitschy, Readings",
    image: "https://images.unsplash.com/photo-1506543730-1c390559635c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "shop-9",
    name: "Sassy Magick",
    arcana: Arcana.DEVIL,
    description: "\"You are destined for greatness and glitter; your psychic reading may be generic, but at least the shop dog is cute.\"",
    address: "738 Royal St",
    vibe: "Pink, Chic, Occult",
    image: "https://images.unsplash.com/photo-1533613220915-609f661a6fe1?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "shop-10",
    name: "Bottom of the Cup Tea Room",
    arcana: Arcana.DEVIL,
    description: "\"Your future is in the leaves, but your current reality is waiting thirty minutes for a pot of Earl Grey.\"",
    address: "327 Chartres St",
    vibe: "Tea Leaves, Palmistry",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&q=80&w=600"
  },
  
  // --- NHEN'S PICKS / THE JUDGEMENT ---
  {
    id: "nhen-1",
    name: "Boondock Saint",
    arcana: Arcana.JUDGEMENT,
    description: "...",
    address: "731 St Peter St",
    vibe: "Nhen's Pick",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "nhen-2",
    name: "Molly's on Toulouse",
    arcana: Arcana.JUDGEMENT,
    description: "...",
    address: "732 Toulouse St",
    vibe: "Nhen's Pick",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "nhen-3",
    name: "Dead on Decatur",
    arcana: Arcana.JUDGEMENT,
    description: "...",
    address: "Decatur St",
    vibe: "Nhen's Pick",
    image: "https://images.unsplash.com/photo-1599951662973-1f196924b426?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "nhen-4",
    name: "Vice & Graft",
    arcana: Arcana.JUDGEMENT,
    description: "...",
    address: "New Orleans",
    vibe: "Nhen's Pick",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "nhen-5",
    name: "Gimme",
    arcana: Arcana.JUDGEMENT,
    description: "...",
    address: "New Orleans",
    vibe: "Nhen's Pick",
    image: "https://images.unsplash.com/photo-1511520638520-21b8eb648218?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "nhen-6",
    name: "Natty Adam’s",
    arcana: Arcana.JUDGEMENT,
    description: "...",
    address: "New Orleans",
    vibe: "Nhen's Pick",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "nhen-7",
    name: "Keye’s Fuel Mart",
    arcana: Arcana.JUDGEMENT,
    description: "...",
    address: "1141 N Rampart St",
    vibe: "Nhen's Pick",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "nhen-8",
    name: "The Cabaret",
    arcana: Arcana.JUDGEMENT,
    description: "...",
    address: "New Orleans",
    vibe: "Nhen's Pick",
    image: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "nhen-9",
    name: "PERK",
    arcana: Arcana.JUDGEMENT,
    description: "...",
    address: "New Orleans",
    vibe: "Nhen's Pick",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "nhen-10",
    name: "Café Envie",
    arcana: Arcana.JUDGEMENT,
    description: "...",
    address: "1241 Decatur St",
    vibe: "Nhen's Pick",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "nhen-11",
    name: "FoW",
    arcana: Arcana.JUDGEMENT,
    description: "...",
    address: "New Orleans",
    vibe: "Nhen's Pick",
    image: "https://images.unsplash.com/photo-1513639776629-7b611d22f46c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "nhen-12",
    name: "Loretta’s Authentic Pralines",
    arcana: Arcana.JUDGEMENT,
    description: "...",
    address: "1100 N Peters St",
    vibe: "Nhen's Pick",
    image: "https://images.unsplash.com/photo-1588665796985-c6579051888b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "nhen-13",
    name: "MRB Bar & Kitchen",
    arcana: Arcana.JUDGEMENT,
    description: "...",
    address: "515 St Philip St",
    vibe: "Nhen's Pick",
    image: "https://images.unsplash.com/photo-1574096079513-d82599602950?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "nhen-14",
    name: "New Orleans Historic Voodoo Museum",
    arcana: Arcana.JUDGEMENT,
    description: "...",
    address: "724 Dumaine St",
    vibe: "Nhen's Pick",
    image: "https://images.unsplash.com/photo-1601053428987-a2f2601908d1?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "nhen-15",
    name: "Storyville Museum",
    arcana: Arcana.JUDGEMENT,
    description: "...",
    address: "1010 Conti St",
    vibe: "Nhen's Pick",
    image: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?auto=format&fit=crop&q=80&w=600"
  },

  // --- RE-CLASSIFY OTHER NHEN PICKS TO JUDGEMENT ---
  {
    id: "pick-2", // Bar Tonique
    name: "Bar Tonique",
    arcana: Arcana.JUDGEMENT,
    description: "A craft cocktail haven on the edge of the Quarter. Known for impeccable classics and no pretense.",
    address: "820 N Rampart St",
    vibe: "Craft Cocktails, Chill",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "pick-3", // Black Penny
    name: "Black Penny",
    arcana: Arcana.JUDGEMENT,
    description: "A favorite local spot on Rampart. Great beer selection and often the site of Gumbo Man's pop-ups.",
    address: "700 N Rampart St",
    vibe: "Local, Beer, Rampart",
    image: "https://images.unsplash.com/photo-1574096079513-d82599602950?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "pick-4", // Latitude 29
    name: "Latitude 29",
    arcana: Arcana.JUDGEMENT,
    description: "Tiki perfection by Jeff 'Beachbum' Berry. The gold standard for exotic cocktails.",
    address: "321 N Peters St",
    vibe: "Tiki, Premium",
    image: "https://images.unsplash.com/photo-1511520638520-21b8eb648218?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "modern-1", // Jewel of the South
    name: "Jewel of the South",
    arcana: Arcana.JUDGEMENT,
    description: "2024 James Beard Award for Outstanding Bar. 1830s cottage offering sophisticated cocktails and caviar service.",
    address: "1026 St. Louis St",
    vibe: "Sophisticated, Caviar",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "modern-3", // Fives
    name: "Fives",
    arcana: Arcana.JUDGEMENT,
    description: "Exceptional people-watching on Jackson Square. Oysters, marinated crab claws, and the 'Columns Martini' on a golden tray.",
    address: "801 Chartres St",
    vibe: "People-watching, Oysters",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "modern-4", // Palm & Pine
    name: "Palm & Pine",
    arcana: Arcana.JUDGEMENT,
    description: "The 'Soul of the South', exploring connections between the South, Caribbean, and Central America. Late night menu.",
    address: "308 N. Rampart St",
    vibe: "Global South, Late Night",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "goth-1", // Fetiche
    name: "Fétiche NOLA",
    arcana: Arcana.JUDGEMENT,
    description: "A sophisticated boutique and lounge space catering to fetish and alternative subcultures.",
    address: "333 Chartres St",
    vibe: "Fetish, Lounge",
    image: "https://images.unsplash.com/photo-1596700589139-65d1d604471c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "late-1", // Gumbo Man
    name: "Gumbo Man & Sergio",
    arcana: Arcana.JUDGEMENT,
    description: "Mobile/Late Night legend. Often found outside Black Penny or Vic's serving 'life-changing' gumbo from a car trunk.",
    address: "Mobile / French Quarter",
    vibe: "Street Food, Legendary",
    image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=600"
  },

  // --- THE EMPEROR (Grand Dames) ---
  {
    id: "dame-1",
    name: "Antoine’s Restaurant",
    arcana: Arcana.EMPEROR,
    description: "Established 1840. The oldest family-owned restaurant in the country. Birthplace of Oysters Rockefeller. Mirrored grand rooms.",
    address: "713 St. Louis St",
    vibe: "History, Oysters Rockefeller",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dame-2",
    name: "Galatoire’s Restaurant",
    arcana: Arcana.EMPEROR,
    description: "Since 1905. Famous for its Friday lunch tradition and Trout Meunière Amandine. A city staple.",
    address: "209 Bourbon St",
    vibe: "Friday Lunch, Tradition",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dame-3",
    name: "Arnaud’s Restaurant",
    arcana: Arcana.EMPEROR,
    description: "Opened 1918. Classic Creole cuisine, Mardi Gras museum, and the award-winning French 75 Bar.",
    address: "813 Bienville St",
    vibe: "Creole, French 75",
    image: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dame-4",
    name: "Brennan’s",
    arcana: Arcana.EMPEROR,
    description: "The pink Federal-style birthplace of Bananas Foster. Known for turtle-filled courtyards and Jazz Brunch.",
    address: "417 Royal St",
    vibe: "Pink, Bananas Foster",
    image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&q=80&w=600"
  },

  // --- THE EMPRESS (Modern Michelin/James Beard) ---
  {
    id: "modern-2",
    name: "Mamou",
    arcana: Arcana.EMPRESS,
    description: "Modern European brasserie. A strong contender for future MICHELIN stars with refined French fare.",
    address: "942 N. Rampart St",
    vibe: "Brasserie, Refined",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "modern-5",
    name: "GW Fins",
    arcana: Arcana.EMPRESS,
    description: "The Quarter's premier seafood destination. Innovative daily catches and the signature 'Scalibut'.",
    address: "808 Bienville St",
    vibe: "Seafood, Innovation",
    image: "https://images.unsplash.com/photo-1599488615731-7e5c547aae2e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "modern-6",
    name: "Restaurant R’evolution",
    arcana: Arcana.EMPRESS,
    description: "Tradition meets innovation. 10,000-bottle wine cellar, 'Death by Gumbo', and high-end romantic dining.",
    address: "777 Bienville St",
    vibe: "Swanky, Wine Cellar",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "modern-7",
    name: "Bayona",
    arcana: Arcana.EMPRESS,
    description: "Chef Susan Spicer’s flagship in a 200-year-old cottage. Mediterranean-influenced Southern dishes.",
    address: "430 Dauphine St",
    vibe: "Romantic, Cottage",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600"
  },

  // --- THE HERMIT (Bourdain Trail) ---
  {
    id: "bourdain-1",
    name: "Jacques-Imo's",
    arcana: Arcana.HERMIT,
    description: "Eccentric Creole institution on Oak Street. Visited in 'A Cook's Tour' (2003) and 'No Reservations' (2008).",
    address: "8324 Oak St",
    vibe: "Eccentric, Creole",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "bourdain-2",
    name: "Verti Marte",
    arcana: Arcana.HERMIT,
    description: "Essential 24-hour deli. Home of the 'All That Jazz' po-boy. Visited in 'A Cook's Tour' (2003).",
    address: "1201 Royal St",
    vibe: "24/7, Po-boys, Deli",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "bourdain-3",
    name: "Cochon",
    arcana: Arcana.HERMIT,
    description: "Cajun Southern cooking. A staple of the modern New Orleans culinary renaissance.",
    address: "930 Tchoupitoulas St",
    vibe: "Pork, Cajun, Rustic",
    image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&q=80&w=600"
  },

  // --- THE HANGED MAN (Hidden Gems/Surprisingly Good) ---
  {
    id: "gem-1",
    name: "Muriel’s Jackson Square",
    arcana: Arcana.HANGED_MAN,
    description: "Beyond the haunted séance room gimmick, it serves some of the city's finest A+ rated food in a stunning setting.",
    address: "801 Chartres St",
    vibe: "Haunted, Fine Food",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "gem-2",
    name: "New Orleans Vampire Cafe",
    arcana: Arcana.HANGED_MAN,
    description: "Far from a mere tourist trap, this spot is lauded for high-quality burgers and a surprisingly refined dining experience.",
    address: "801 Royal St",
    vibe: "Vampire, Quality",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "gem-3",
    name: "Napoleon House",
    arcana: Arcana.HANGED_MAN,
    description: "A 200-year-old landmark known for Pimm's Cups and muffulettas in a classical music atmosphere.",
    address: "500 Chartres St",
    vibe: "Classical, Pimm's Cup",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600"
  },

  // --- THE MAGICIAN (Queer/Gay) ---
  {
    id: "queer-1",
    name: "Café Lafitte's in Exile",
    arcana: Arcana.MAGICIAN,
    description: "Legendary as the oldest continuously operating gay bar in the United States. A cornerstone of the Lavender Line.",
    address: "901 Bourbon St",
    vibe: "Historic, 24/7",
    image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "queer-2",
    name: "The Oz",
    arcana: Arcana.MAGICIAN,
    description: "Prominent dance club and nightlife destination known for nightly drag shows and go-go dancers.",
    address: "800 Bourbon St",
    vibe: "Dance, Drag, Club",
    image: "https://images.unsplash.com/photo-1545128485-c400e7702796?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "queer-3",
    name: "The Bourbon Pub & Parade",
    arcana: Arcana.MAGICIAN,
    description: "A major multi-level fixture on the corner of Bourbon and St. Ann. High energy and balconies.",
    address: "801 Bourbon St",
    vibe: "Multi-level, Party",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "queer-4",
    name: "Lucille's Golden Lantern",
    arcana: Arcana.MAGICIAN,
    description: "Classic neighborhood watering hole and the historic birthplace of Southern Decadence.",
    address: "1239 Royal St",
    vibe: "Local, Decadence",
    image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "queer-5",
    name: "The Crossing",
    arcana: Arcana.MAGICIAN,
    description: "A friendly neighborhood gay bar located on Dauphine Street. A respite from the Bourbon madness.",
    address: "439 Dauphine St",
    vibe: "Friendly, Neighborhood",
    image: "https://images.unsplash.com/photo-1574096079513-d82599602950?auto=format&fit=crop&q=80&w=600"
  },

  // --- THE WHEEL (Late Night) ---
  {
    id: "late-2",
    name: "Clover Grill",
    arcana: Arcana.WHEEL,
    description: "1950s diner aesthetics and burgers grilled under a hubcap. Open 24 hours.",
    address: "900 Bourbon St",
    vibe: "Diner, 24/7, Retro",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "late-3",
    name: "Deja Vu Bar & Grill",
    arcana: Arcana.WHEEL,
    description: "Traditional New Orleans fare and video poker in a classic 'locals' spot'. Open 24 hours.",
    address: "400 Dauphine St",
    vibe: "Locals, Video Poker",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "late-4",
    name: "Turtle Bay",
    arcana: Arcana.WHEEL,
    description: "20-ounce ribeye steaks and thin-crust pizza available at any hour. Open 24 hours.",
    address: "1119 Decatur St",
    vibe: "Steaks, Late Night",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600"
  },

  // --- THE TOWER (10 Worst) ---
  {
    id: "worst-1",
    name: "Oceana Grill",
    arcana: Arcana.TOWER,
    description: "\"The night we got the worst poisoning we've ever had... it was so bad we were shaking and had to change our flights.\"",
    address: "739 Conti St",
    vibe: "Poison, Avoid",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "worst-2",
    name: "Acme Oyster House",
    arcana: Arcana.TOWER,
    description: "\"Acme is by far the worst food I've ever had at a restaurant.\"",
    address: "724 Iberville St",
    vibe: "Touristy, Overhyped",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "worst-3",
    name: "Willie's Chicken Shack",
    arcana: Arcana.TOWER,
    description: "\"The bathroom is reminiscent of a jail cell for Barbie dolls.\"",
    address: "Multiple Locations",
    vibe: "Chain, Messy",
    image: "https://images.unsplash.com/photo-1513639776629-7b611d22f46c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "worst-4",
    name: "Mother's Restaurant",
    arcana: Arcana.TOWER,
    description: "\"You're paying $20 an entrée for what's essentially gussied up Red Lobster food.\"",
    address: "401 Poydras St",
    vibe: "Lines, Overpriced",
    image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "worst-5",
    name: "The Court of Two Sisters",
    arcana: Arcana.TOWER,
    description: "\"Great atmosphere, great service, but there are much better versions of all the food they serve.\"",
    address: "613 Royal St",
    vibe: "Buffet, Touristy",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600"
  },

  // --- THE HIEROPHANT (Cultural Repositories) ---
  {
    id: "cult-1",
    name: "Hidden Room at M.S. Rau",
    arcana: Arcana.HIEROPHANT,
    description: "A secret door painted as a bookcase leads to a wing of fine art, including original Norman Rockwells.",
    address: "622 Royal St",
    vibe: "Secret, Fine Art",
    image: "https://images.unsplash.com/photo-1518998053901-5348d3969104?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "cult-2",
    name: "New Orleans Pharmacy Museum",
    arcana: Arcana.HIEROPHANT,
    description: "Explore an 1823 apothecary filled with voodoo love potions, heroin tinctures, and a rare birthing chair.",
    address: "514 Chartres St",
    vibe: "Apothecary, History",
    image: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "cult-3",
    name: "Musical Legends Park",
    arcana: Arcana.HIEROPHANT,
    description: "A quiet respite featuring a giant, brightly colored saxophone statue gifted by Belgium.",
    address: "311 Bourbon St",
    vibe: "Music, Statues",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "cult-4",
    name: "Mardi Gras Museum of Costumes",
    arcana: Arcana.HIEROPHANT,
    description: "Features a 'dressing room' where visitors can try on sequined bodices and feathered headpieces.",
    address: "1010 Conti St",
    vibe: "Costumes, Interactive",
    image: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "cult-5",
    name: "Frank Relle Photography",
    arcana: Arcana.HIEROPHANT,
    description: "Specialized in nocturnal photography of Louisiana landscapes and architecture.",
    address: "910 Royal St",
    vibe: "Photography, Nocturnal",
    image: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=600"
  },

  // --- THE MOON (Frenchmen Street) ---
  {
    id: "moon-1",
    name: "The Spotted Cat Music Club",
    arcana: Arcana.MOON,
    description: "Legendary destination for authentic live music. The heart of the Marigny.",
    address: "623 Frenchmen St",
    vibe: "Jazz, Authentic",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "moon-2",
    name: "Blue Nile",
    arcana: Arcana.MOON,
    description: "Electric atmosphere on Frenchmen. Known for funk, brass, and high energy.",
    address: "532 Frenchmen St",
    vibe: "Electric, Live Music",
    image: "https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "moon-3",
    name: "Snug Harbor Jazz Bistro",
    arcana: Arcana.MOON,
    description: "Sophisticated jazz club. The place to see the heavy hitters of the genre.",
    address: "626 Frenchmen St",
    vibe: "Sophisticated, Jazz",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "moon-4",
    name: "Dat Dog Frenchmen",
    arcana: Arcana.MOON,
    description: "Quirky spot for gourmet sausages. A colorful break from the clubs.",
    address: "601 Frenchmen St",
    vibe: "Quirky, Food",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "moon-5",
    name: "Three Muses",
    arcana: Arcana.MOON,
    description: "Melodic dining. Small plates and great music in an intimate setting.",
    address: "536 Frenchmen St",
    vibe: "Melodic, Dining",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=600"
  },

  // --- THE CHARIOT (Itineraries Only Now) ---
  {
    id: "pick-1",
    name: "One Day Itinerary",
    arcana: Arcana.CHARIOT,
    description: "Envie coffee -> Hex -> Storyville Museum -> Apothecary HH -> Palm & Pine -> Bar Tonique -> Spotted Cat -> MRB Pool -> Checkpoint's.",
    address: "New Orleans",
    vibe: "Perfect Day, Fast Paced",
    image: "https://images.unsplash.com/photo-1519810755548-39de21758377?auto=format&fit=crop&q=80&w=600"
  }
];
