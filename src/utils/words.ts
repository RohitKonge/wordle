// Word lists for the game
const WORDS_4 = [
  'ABLE', 'ACID', 'AGED', 'ALSO', 'AREA', 'ARMY', 'AWAY', 'BACK', 'BALL', 'BAND',
  'BANK', 'BASE', 'BATH', 'BEAR', 'BEAT', 'BEEF', 'BEEN', 'BEER', 'BELL', 'BELT',
  'BEST', 'BILL', 'BIRD', 'BLOW', 'BLUE', 'BOAT', 'BODY', 'BOMB', 'BOND', 'BONE',
  'BOOK', 'BOOM', 'BOOT', 'BORN', 'BOSS', 'BOTH', 'BOWL', 'BULK', 'BURN', 'BUSH',
  'BUSY', 'CALL', 'CALM', 'CAME', 'CAMP', 'CARD', 'CARE', 'CASE', 'CASH', 'CAST',
  'CELL', 'CHAT', 'CHIP', 'CITY', 'CLUB', 'COAL', 'COAT', 'CODE', 'COLD', 'COME',
  'COOK', 'COOL', 'COPY', 'CORE', 'COST', 'CREW', 'CROP', 'DARK', 'DATA', 'DATE',
  'DEAL', 'DEBT', 'DEEP', 'DEER', 'DESK', 'DIAL', 'DIET', 'DISK', 'DIVE', 'DOCK',
  'DOES', 'DOOR', 'DOSE', 'DOWN', 'DRAW', 'DROP', 'DRUG', 'DRUM', 'DUAL', 'DUCK',
  'DUST', 'DUTY', 'EARN', 'EASE', 'EAST', 'EDGE', 'EDIT', 'EGGY', 'ELAN', 'EMIT'
];

const WORDS_5 = [
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

const WORDS_6 = [
  'ANIMAL', 'BRIGHT', 'CIRCLE', 'DANGER', 'FLIGHT', 'GROWTH', 'HAMMER', 'IGNORE', 'JUNGLE', 'KITTEN',
  'LADDER', 'MAGNET', 'NATURE', 'ORANGE', 'PACKET', 'QUENCH', 'ROCKET', 'SUMMIT', 'TALENT', 'UNIQUE',
  'VISION', 'WONDER', 'YELLOW', 'BOTHER', 'CREATE', 'DOUBLE', 'EFFORT', 'FABRIC', 'GADGET', 'HUNTER',
  'IMPACT', 'JUMBLE', 'KINDLY', 'LOCKET', 'MODERN', 'NUMBER', 'ONLINE', 'PEOPLE', 'QUIVER', 'REMARK',
  'SENDER', 'TARGET', 'UPHILL', 'VELVET', 'WRENCH', 'XYLOID', 'YEARLY', 'ZEPHYR', 'BACKUP', 'CANYON',
  'DESIGN', 'EASIER', 'FRIEND', 'GROWTH', 'HEIGHT', 'INCOME', 'JIGSAW', 'KNEELS', 'LAPTOP', 'MARKET',
  'NATION', 'OPTION', 'PARADE', 'QUARTZ', 'RESULT', 'SILENT', 'THIRST', 'UPDATE', 'VISUAL', 'WINTER',
  'ACCENT', 'BELIEF', 'CUSTOM', 'DIVIDE', 'EXPORT', 'FORGED', 'GALAXY', 'HEIGHT', 'INSECT', 'JACKET',
  'KIDNEY', 'LINGER', 'MENTOR', 'NOTICE', 'OFFICE', 'PARENT', 'REWIND', 'SUFFIX', 'TUNNEL', 'UNFOLD',
  'VACANT', 'WANDER', 'XENIAL', 'YONDER', 'ZIPPER', 'ACCORD', 'BREEZE', 'CIRCLE', 'DARING', 'ELAPSE'
];

/**
 * Gets the word list based on the number of letters
 */
export const getWordList = (numberOfLetters: number): string[] => {
  switch (numberOfLetters) {
    case 4:
      return WORDS_4;
    case 5:
      return WORDS_5;
    case 6:
      return WORDS_6;
    default:
      return WORDS_5; // Default to 5-letter words
  }
};

/**
 * Gets a random word from the list based on the number of letters
 */
export const getRandomWord = (numberOfLetters: number): string => {
  const words = getWordList(numberOfLetters);
  return words[Math.floor(Math.random() * words.length)];
};

/**
 * Checks if a word is valid for guessing based on the number of letters
 */
export const isValidWord = (word: string, numberOfLetters: number): boolean => {
  const validGuesses = getWordList(numberOfLetters);
  return validGuesses.includes(word);
};