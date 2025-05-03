// Word list for the game
const WORDS = [
  'APPLE', 'BREAD', 'CHAIR', 'DANCE', 'EAGLE', 'FRAME', 'GRACE', 'HOUSE', 'IDEAL', 'JOKER',
  'KNOCK', 'LEMON', 'MANGO', 'NIGHT', 'OCEAN', 'PAINT', 'QUIET', 'RIVER', 'SWEET', 'TIGER',
  'UNDER', 'VIVID', 'WHALE', 'XEROX', 'YIELD', 'ZEBRA', 'BLAZE', 'CRISP', 'DREAM', 'EARTH',
  'FLUTE', 'GHOST', 'HAPPY', 'IVORY', 'JELLY', 'KNIFE', 'LIGHT', 'MAGIC', 'NOVEL', 'ORBIT',
  'PLANT', 'QUEEN', 'RODEO', 'SMILE', 'TRACK', 'UNITY', 'VOICE', 'WIRED', 'XYLEN', 'YOUTH',
  'ANGLE', 'BRUSH', 'COVER', 'DRINK', 'EXTRA', 'FLASH', 'GIANT', 'HILLO', 'INPUT', 'JOINT',
  'KNOCK', 'LATCH', 'MIRTH', 'NUDGE', 'OPINE', 'PRIME', 'QUEST', 'ROOST', 'STOMP', 'THROB',
  'UNZIP', 'VERGE', 'WRECK', 'XTEND', 'ZESTY', 'AISLE', 'BLUSH', 'CREAK', 'DRAFT', 'ERUPT',
  'FUNKY', 'GLOVE', 'HOUND', 'INLET', 'JUMPY', 'KARMA', 'LAUGH', 'MOTTO', 'NURSE', 'OLIVE',
  'PRAWN', 'QUIRK', 'REGAL', 'SWORD', 'TOWEL', 'URBAN', 'VAULT', 'WITTY', 'YUMMY', 'ZONED'
];

// All words are valid for guessing
const VALID_GUESSES = WORDS;

/**
 * Gets a random word from the list.
 */
export const getRandomWord = (): string => {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
};

/**
 * Checks if a word is valid for guessing.
 */
export const isValidWord = (word: string): boolean => {
  return VALID_GUESSES.includes(word);
};