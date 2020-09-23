exports.seed = (knex) =>
// Deletes ALL existing entries
  knex("birds")
    .del()
// Inserts seed entries
    .then(() => knex("birds").insert([
      { 
        id: 1,
        bird_name: "Kotare",
        bird_english_name: "Sacred Kingfisher",
        bird_img: "/images/kotare.png",
        bird_rarity: "common",
        bird_nocturnal: false,
        bird_tag: "Chicks are fed for 7-10 days after leaving the nest and then start to catch food for themselves.",
        bird_info: "Mostly recorded singly or in pairs. The breeding pair is the most normal social unit, only occasionally at the end of the breeding season will larger groups be observed. Based on limited banding in Wellington, kingfishers appear to have high fidelity to breeding sites. The same burrow has been reported in use for 20 consecutive years, but it is not known how many birds were involved. Kingfishers are fearless and aggressive, attacking other birds and mammals for food."
      },
      {
        id: 2,
        bird_name: "Piwakawaka",
        bird_english_name: "Fantail",
        bird_rarity: "common",
        bird_nocturnal: false,
        bird_tag: "In Māori mythology, the fantail was responsible for the presence of death in the world",
        bird_info: "The fantail is one of the few native bird species in New Zealand that has been able to adapt to an environment greatly altered by humans. They sometimes hop around upside-down amongst tree ferns and foliage to pick insects from the underside of leaves. Fantails are quite vocal, except when it is particularly cold."
      },
      {
        id: 3,
        bird_name: "Roa",
        bird_english_name: "Great Spotted Kiwi",
        bird_rarity: "rare",
        bird_nocturnal: true,
        bird_tag: "They are fiercely territorial, and fight conspecifics with their sharp claws, resulting in a cloud of feathers on the ground.",
        bird_info: "The female lays just one egg, which both parents then incubate. The great spotted kiwi was first described as Apteryx haastii by Thomas Potts, in 1872. The genus name, Apteryx, comes from the Ancient Greek words a 'without' or 'no', and pteryx, 'wing' and haasti is the Latin form of the last name of Sir Julius von Haast."
      },
      { 
        id: 4,
        bird_name: "Hihi",
        bird_english_name: "Stitchbird",
        bird_rarity: "rare",
        bird_nocturnal: false,
        bird_tag: "Their most common call, a tzit tzit sound, is believed to be the source of their common name, as Buller noted that it 'has a fanciful resemblance to the word stitch'.",
        bird_info: "In 2007 a new passerine family was erected to contain the stitchbird, the Notiomystidae. Before that they thought it was honeyeater. In 2005, 60 stitchbirds were released into Zealandia (wildlife sanctuary) near Wellington and in October that year, three stitchbird chicks hatched there, the first time for more than 120 years that a stitchbird chick had been born in captivity. The stitchbird was relatively common early in the European colonisation of New Zealand, and began to decline relatively quickly afterwards, being extinct on the mainland and many offshore islands by 1885."
      },
      {
        id: 5,
        bird_name: "Kahu",
        bird_english_name: "Swamp Harrier",
        bird_rarity: "uncommon",
        bird_nocturnal: false,
        bird_tag: "Swamp harriers are the only bird of prey used for falconry in New Zealand.",
        bird_info: "They benefit farms and road users by clearing carcasses. However, they can take poultry and game birds where unprotected, and will also kill new-born lambs in some circumstances. Its arrival in New Zealand happened recently within the last 700 years, replacing its extinct larger New Zealand endemic sister. After lowland forests were extensively cleared by the first Polynesian settlers; the Kahu became absent from the fossil record. It has benefited from European settlement, and is now very common, especially in open farmland."
      },
      {
        id: 6,
        bird_name: "Kereru",
        bird_english_name: "New Zealand Pigeon",
        bird_rarity: "common",
        bird_nocturnal: false,
        bird_tag: "Chicks are fed 'pigeon milk', a protein-rich milky secretion from the walls of the parents' crops, mixed with fruit pulp.",
        bird_info: "Since the extinction of the moa, the kererū and parea are now the only bird species that are big enough to swallow large fruit and disperse the seed over long distances. Only where pests are not present (predator-free islands) or are controlled to low levels do kereru populations thrive. Kereru have been recorded breeding in all months, but most eggs are laid in September-April."
      },
      {
        id: 7,
        bird_name: "Karearea",
        bird_english_name: "New Zealand Falcon",
        bird_rarity: "uncommon",
        bird_nocturnal: false,
        bird_tag: "Capable of flying at speeds over 100 km/h and catching prey larger than itself, the New Zealand falcon is one of our most spectacular birds.",
        bird_info: "Like all falcons, the New Zealand falcon does not build a nest. Rather, it makes a scrape on the ground, under a rocky outcrop or in an epiphyte in an emergent forest tree into which it lays its eggs. Often seen hunting small passerines in dramatic chases, they have long pointed wings and a long tail. They often hunt from a perch ¾ up a tree but also hunt along habitat edges or surprise prey by contour-flying close to the ground."
      },
      {
        id: 8,
        bird_name: "Pateke",
        bird_english_name: "Brown Teal",
        bird_rarity: "uncommon",
        bird_nocturnal: true,
        bird_tag: "Brown teal are endemic to New Zealand and, in pre-human times, may have been the most widespread and numerous of New Zealand’s waterfowl.",
        bird_info: "Brown teal are monogamous and generally fiercely territorial. Most nesting is in late winter (July-September) but broods have been encountered in most months except late autumn. The mature ducklings are forcefully evicted from the territory on or about the time the parents start their post-breeding moult. Brown teal diet is diverse. A study from Great Barrier Island recorded 78 taxa including terrestrial, freshwater and marine invertebrates, fungi, and terrestrial and freshwater vegetation."
      },
      {
        id: 9,
        bird_name: "Whio",
        bird_english_name: "Blue Duck",
        bird_rarity: "rare",
        bird_nocturnal: false,
        bird_tag: "Whio are a taonga (treasured) species that Māori have a strong cultural, spiritual, and historic connection with.",
        bird_info: "They are forever watchful – they will always see you before you see them, and the male will sound the alarm call. Whio are believed to be an ancient species of waterfowl, that appeared at a very early stage in evolutionary history. Their isolation in New Zealand has resulted in unique anatomical and behavioural features. They are a key indicator of healthy rivers and streams. They require clean, fast flowing streams. The more breeding pairs of blue duck the healthier the river."
      },
      {
        id: 10,
        bird_name: "Kia",
        bird_english_name: "Sacred Kingfisher",
        bird_rarity: "uncommon",
        bird_nocturnal: true,
        bird_tag: "The endangered kea is the world's only alpine parrot, and one of the most intelligent birds. The kea was crowned Bird of the Year in 2017.",
        bird_info: "Innately curious, kea are attracted to people wherever they enter its mountain domain, and are a feature at South Island ski-fields and mountain huts. That the kea persists despite the shooting of 150,000 birds between 1860 and 1970 indicates a high reproductive potential. Adaptability is a key part of kea ecology. They have benefited from some human-induced modifications to their habitat, including scavenging from dead deer and digging for huhu grubs in forests."
      },
      {
        id: 11,
        bird_name: "Kakapo",
        bird_english_name: "Kakapo",
        bird_rarity: "rare",
        bird_nocturnal: true,
        bird_tag: "The kakapo is a large, nocturnal, flightless, lek-breeding parrot – a real oddity.",
        bird_info: "Kakapo are nocturnal and solitary, occupying the same home range for many years. They forage on the ground and climb high into trees. They often leap from trees and flap their wings, but at best manage a controlled plummet. During the 1980s and 1990s the entire known population was transferred to Whenua Hou/Codfish Island off the coast of Stewart Island, Maud Island in the Marlborough Sounds and Hauturu/Little Barrier Island in the Hauraki Gulf. Kakapo are entirely vegetarian. Their diet includes, leaves, buds, flowers, fern fronds, bark, roots, rhizomes, bulbs, fruit and seeds. Diet varies seasonally."
      },
      {
        id: 12,
        bird_name: "Toutouwai",
        bird_english_name: "North Island robin",
        bird_rarity: "uncommon",
        bird_nocturnal: false,
        bird_tag: "To attract a female, bachelors will sing a song lasting up to 30 minutes!",
        bird_info: "Where robins are regularly exposed to people, such as along public walking tracks, they become quite confiding, often approaching to within a metre of a person sitting quietly. Naïve juveniles will sometimes stand on a person’s boot. North Island robins start nesting in September. The female builds the nest, the male bringing her food 2-3 times per hour. Pairs remain in their territories most of the time, occasionally sneaking into neighbouring territories to feed or go elsewhere to drink and bathe."
      },
      {
        id: 13,
        bird_name: "Tui",
        bird_english_name: "Tui",
        bird_rarity: "common",
        bird_nocturnal: false,
        bird_tag: "Tui are boisterous, medium-sized, common and widespread bird of forest and suburbia – unless you live in Canterbury.",
        bird_info: "Tui are notoriously aggressive, and will defend a flowering or fruiting tree, or a small part of a large tree, from all-comers, whether another tui or another bird species. Their preferred diet is nectar and honeydew, and they will often shift to, or commute daily or more frequently to, good nectar sources, such as stands of puriri, kowhai, fuchsia, rewarewa, flax, rata, pohutukawa, gums and banksias. They sing a loud and complicated mix of tuneful notes interspersed with coughs, grunts and wheezes. In flight, tui maintain contact and harass raptors with a repetitive scream."
      },
      {
        id: 14,
        bird_name: "Kakariki",
        bird_english_name: "Red-crowned parakeets",
        bird_rarity: "uncommon",
        bird_nocturnal: false,
        bird_tag: "Kākāriki, meaning ‘small green parrot’ in Māori, are beautiful forest birds. They feed on berries, seeds, fruit and insects, and generally nest in holes in trees.",
        bird_info: "Despite their rather erratic flight they are strong fliers and readily move within island groups searching for seasonal foods. When environmental conditions are good they are able to breed quickly, leading to rapid increases in population size. Although they are widely distributed throughout the New Zealand region, and very common on some islands, they are almost entirely absent from the two main islands. One exception is Wellington city, where birds dispersing from Zealandia and Matiu/Somes Islands are occasionally seen in suburban gardens. Kākāriki are usually solitary or found in pairs, although in autumn and winter they may form small flocks."
      },
      {
        id: 15,
        bird_name: "Pukeko",
        bird_english_name: "Pukeko",
        bird_rarity: "common",
        bird_nocturnal: false,
        bird_tag: "The pūkeko is probably one of the most recognised native birds in New Zealand with its distinctive colourings and habit of feeding on the ground.",
        bird_info: "Although they're not great flyers, they are good waders, swimmers and runners. Pūkeko are cooperative breeders, with multiple male and female birds often sharing a nest and responsibility for incubating eggs and raising chicks. Pukeko are very vocal with a variety of calls. Territorial ‘crowing’ is the loudest and most frequently heard call. A variety of contact calls including ‘’n’yip’, ‘hiccup’ and ‘squawk’ are used between adults, and between adults and chicks. Pukeko have a highly variable mating system. Birds may nest as monogamous pairs but can also form polyandrous, polygynandrous and, more rarely, polygynous groups. Any of these groups may also have non-breeding helpers."
      },
      {
        id: 16,
        bird_name: "Karuhiruhi",
        bird_english_name: "Pied Shag",
        bird_rarity: "uncommon",
        bird_nocturnal: false,
        bird_tag: "Unlike most other shag species, the pied shag is reasonably confiding, allowing close approach when roosting or nesting in trees.",
        bird_info: "While counts of pied shags, along with other coastal species, have been undertaken in a few areas (Wellington Harbour, Marlborough Sounds), no attempt has been made to carry out a national count of the species or the number of pairs at all colonies. Adult pied shags appear to be sedentary, but some juveniles disperse widely. When resting during the day, birds occur on undisturbed beaches, shoreline rocks, trees and artificial structures. Clutches are laid in all months, with peaks during February-April and August-October. Clutch size is typically 2-5 eggs, and both sexes share incubation and care of young."
      },
      {
        id: 17,
        bird_name: "Tuturuatu",
        bird_english_name: "Shore Plover",
        bird_rarity: "rare",
        bird_nocturnal: false,
        bird_tag: "Shore plover normally allow a close approach. They are very territorial while breeding though.",
        bird_info: "The former range of shore plover is poorly known. They were first sighted in Dusky and Queen Charlotte Sounds on Cook’s second voyage, and at mudflats and sandspits around the North Island in the early 1800s. For more than 100 years, Rangatira in the Chatham Islands had the only known population of around 120 birds. The current (2017) wild population is around 240 birds, more than half of which are in the Chatham Islands. Shore plover are very susceptible to any introduced mammalian predators larger than mice. Captive-bred juveniles released on islands are also susceptible to native avian predators (mainly southern black-backed gull, swamp harrier, and morepork)."
      },
      {
        id: 18,
        bird_name: "Toroa",
        bird_english_name: "Wandering albatross",
        bird_rarity: "common",
        bird_nocturnal: false,
        bird_tag: "Wandering albatrosses are among the largest birds in the New Zealand marine area, surpassed only slightly by the southern royal albatross for size.",
        bird_info: "Wandering albatrosses are mainly silent at sea. At breeding grounds they give a high-pitched trumpeting call, and also groans, rattles, and ‘puck’ sounds. Wandering albatrosses breed outside of the New Zealand region, in the southern Indian and Atlantic Oceans and at Macquarie Island south-west of New Zealand. A global population of c. 8050 breeds biannually. Wandering albatrosses are solitary at sea, though may feed in flocks in association with fishing vessels."
      }
    ]));