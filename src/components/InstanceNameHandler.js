const nouns = [
  'Amulet',
  'Beast',
  'Beauty',
  'Bersek',
  'Brew',
  'Castle',
  'Cave',
  'Crow',
  'Curse',
  'Demon',
  'Dragon',
  'Dream',
  'Dwarf',
  'Elf',
  'Empire',
  'Fairy',
  'Ghost',
  'Giant',
  'Gifts',
  'Gnome',
  'Goblin',
  'Gowns',
  'Hag',
  'Herbs',
  'Horror',
  'Imp',
  'Joker',
  'Kettle',
  'King',
  'Kingdom',
  'Lands',
  'Legend',
  'Lore',
  'Magic',
  'Magician',
  'Majesty',
  'Mask',
  'Medium',
  'Miracle',
  'Monster',
  'Moon',
  'Muse',
  'Mystery',
  'Myth',
  'Nature',
  'Nemesis',
  'Newt',
  'Ogre',
  'Oracle',
  'Owl',
  'Pixie',
  'Potion',
  'Powder',
  'Power',
  'Prey',
  'Prince',
  'Princess',
  'Prophet',
  'Queen',
  'Quest',
  'Quiver',
  'Realm',
  'Reign',
  'Robe',
  'Rule',
  'Sandman',
  'Scroll',
  'Seer',
  'Shaman',
  'Sorcerer',
  'Sorcery',
  'Specter',
  'Spell',
  'Spider',
  'Spirit',
  'Star',
  'Story',
  'Theory',
  'Torch',
  'Trick',
  'Troll',
  'Unicorn',
  'Vampire',
  'Vanguard',
  'Victim',
  'Wand',
  'Ward',
  'Werewolf',
  'Whisper',
  'Wish',
  'Witch',
  'Youth',
];

const adjectives = [
  'Abnormal',
  'Awful',
  'Beautiful',
  'Bewitched',
  'Bizarre',
  'Captivated',
  'Charismatic',
  'Charming',
  'Cruel',
  'Dancing',
  'Delirious',
  'Dramatic',
  'Enchanting',
  'Evil',
  'Familiar',
  'Fantastic',
  'Fascinating',
  'Fierce',
  'Forged',
  'Glimmering',
  'Grateful',
  'Grim',
  'Grotesque',
  'Helpful',
  'Heroic',
  'Horrifying',
  'Imaginary',
  'Impressive',
  'Informative',
  'Ingenious',
  'Invisible',
  'Kidnapping',
  'Legendary',
  'Lucky',
  'Magical',
  'Malevolent',
  'Medieval',
  'Mischievous',
  'Mysterious',
  'Mystical',
  'Mythical',
  'Odd',
  'Otherworldly',
  'Overpowered',
  'Petrifying',
  'Poisonous',
  'Potent',
  'Powerful',
  'Raging',
  'Reasoning',
  'Scolded',
  'Seeking',
  'Supernatural',
  'Terrifying',
  'Thrilling',
  'Tragic',
  'Transformed',
  'Unbelievable',
  'Unexplained',
  'Unique',
  'Unusual',
  'Valiant',
  'Venomous',
  'Vice',
  'Vicious',
  'Visionary',
  'Vital',
  'Watchful',
  'Weird',
  'Western',
  'Whimsical',
  'Wicked',
  'Wise',
  'Wrinkled',
];

function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)];
}
// eslint-disable-next-line
function getRandomInstanceName() {
  return `${getRandomFromList(adjectives)} ${getRandomFromList(nouns)}`;
}

export default getRandomInstanceName;
