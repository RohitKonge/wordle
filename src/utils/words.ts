// Word lists for the game
const WORDS_4 = [
  'ABLE', 'AREA', 'ARMS', 'BABY', 'BANK', 'BIRD', 'BOOK', 'CALL', 'CARD', 'CARE',
  'CASH', 'CITY', 'CLUB', 'CODE', 'COLD', 'COME', 'COST', 'DARK', 'DATA', 'DATE',
  'DEAL', 'DESK', 'DOOR', 'DOWN', 'DRAW', 'DROP', 'EACH', 'EAST', 'EASY', 'EDGE',
  'FACE', 'FACT', 'FAIL', 'FAIR', 'FALL', 'FARM', 'FAST', 'FEAR', 'FEEL', 'FILL',
  'FILM', 'FIND', 'FINE', 'FIRE', 'FISH', 'FIVE', 'FOOD', 'FOOT', 'FORM', 'FREE',
  'FROM', 'FULL', 'FUND', 'GAME', 'GATE', 'GIVE', 'GOAL', 'GOOD', 'GROW', 'HAND',
  'HARD', 'HAVE', 'HEAD', 'HEAR', 'HEAT', 'HELP', 'HERE', 'HIGH', 'HILL', 'HOLD',
  'HOME', 'HOPE', 'HOST', 'HOUR', 'IDEA', 'INTO', 'ITEM', 'JOIN', 'JUMP', 'JUST',
  'KEEP', 'KIND', 'KING', 'KNOW', 'LADY', 'LAND', 'LAST', 'LATE', 'LEAD', 'LEFT',
  'LIFE', 'LIKE', 'LINE', 'LIST', 'LIVE', 'LONG', 'LOOK', 'LOVE', 'MAKE', 'MANY'
];

const WORDS_5 = [
  'ABOUT', 'ABOVE', 'ACTOR', 'ADAPT', 'ADMIT', 'ADOPT', 'AFTER', 'AGAIN', 'AGREE',
  'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIVE', 'ALLOW', 'ALONE', 'ALONG', 'ALPHA',
  'AMONG', 'ANGER', 'ANGLE', 'ANGRY', 'APART', 'APPLE', 'APPLY', 'ARENA', 'ARISE',
  'ARRAY', 'ASIDE', 'ASSET', 'AUDIO', 'AUDIT', 'AVOID', 'AWARD', 'AWARE', 'BADLY',
  'BAKER', 'BASES', 'BASIC', 'BASIS', 'BEACH', 'BEGAN', 'BEGIN', 'BEGUN', 'BEING',
  'BELOW', 'BENCH', 'BILLY', 'BIRTH', 'BLACK', 'BLAME', 'BLIND', 'BLOCK', 'BLOOD',
  'BOARD', 'BOOST', 'BOOTH', 'BOUND', 'BRAIN', 'BRAND', 'BREAD', 'BREAK', 'BREED',
  'BRIEF', 'BRING', 'BROAD', 'BROKE', 'BROWN', 'BUILD', 'BUILT', 'BUYER', 'CABLE',
  'CALIF', 'CARRY', 'CATCH', 'CAUSE', 'CHAIN', 'CHAIR', 'CHART', 'CHASE', 'CHEAP',
  'CHECK', 'CHEST', 'CHIEF', 'CHILD', 'CHINA', 'CHOSE', 'CIVIL', 'CLAIM', 'CLASS'
];

const WORDS_6 = [
  'ACCEPT', 'ACCESS', 'ACCORD', 'ACROSS', 'ACTION', 'ACTIVE', 'ACTUAL', 'ADJUST',
  'ADVISE', 'AFFECT', 'AFFORD', 'AFRAID', 'AGENCY', 'AGENDA', 'ALMOST', 'ALWAYS',
  'AMOUNT', 'ANIMAL', 'ANNUAL', 'ANSWER', 'ANYONE', 'ANYWAY', 'APPEAL', 'APPEAR',
  'AROUND', 'ARRIVE', 'ARTIST', 'ASPECT', 'ASSESS', 'ASSIST', 'ASSUME', 'ASSURE',
  'ATTACH', 'ATTACK', 'ATTEND', 'AUTHOR', 'AVENUE', 'BACKED', 'BARELY', 'BATTLE',
  'BEAUTY', 'BECAME', 'BECOME', 'BEFORE', 'BEGIN', 'BEHALF', 'BEHIND', 'BELIEF',
  'BELONG', 'BETTER', 'BEYOND', 'BISHOP', 'BORDER', 'BOTTLE', 'BOTTOM', 'BOUGHT',
  'BRANCH', 'BREATH', 'BRIDGE', 'BRIGHT', 'BROKEN', 'BUDGET', 'BURDEN', 'BUREAU',
  'BUTTON', 'CAMERA', 'CANCEL', 'CANCER', 'CAPABLE', 'CAPITAL', 'CARBON', 'CAREER',
  'CASTLE', 'CASUAL', 'CAUGHT', 'CENTER', 'CENTRE', 'CHANCE', 'CHANGE', 'CHARGE'
];

const WORDS_7 = [
  'ABILITY', 'ABSENCE', 'PRESENT', 'ACCOUNT', 'ACHIEVE', 'ACQUIRE', 'ADDRESS',
  'ADVANCE', 'ADVISED', 'ADVISER', 'AGAINST', 'ALLOWED', 'ALREADY', 'ALTERED',
  'AMAZING', 'ANOTHER', 'ANXIETY', 'ANXIOUS', 'ANYBODY', 'APPLIED', 'ARRANGE',
  'ARRIVAL', 'ARTICLE', 'ASSAULT', 'ASSUMED', 'ASSURED', 'ATTEMPT', 'ATTRACT',
  'AVERAGE', 'BACKING', 'BALANCE', 'BANKING', 'BARRIER', 'BATTERY', 'BEARING',
  'BEATING', 'BECAUSE', 'BEDROOM', 'BELIEVE', 'BENEATH', 'BENEFIT', 'BESIDES',
  'BETWEEN', 'BINDING', 'BROTHER', 'BROUGHT', 'BURNING', 'CABINET', 'CALIBER',
  'CALLING', 'CAPABLE', 'CAPITAL', 'CAPTAIN', 'CAREFUL', 'CARRIER', 'CAUTION',
  'CEILING', 'CENTRAL', 'CENTURY', 'CERTAIN', 'CHAMBER', 'CHANNEL', 'CHAPTER',
  'CHARITY', 'CHARLIE', 'CHARTER', 'CHECKED', 'CHICKEN', 'CHRONIC', 'CIRCUIT',
  'CLASSES', 'CLASSIC', 'CLIMATE', 'CLOSING', 'CLOSURE', 'CLOTHES', 'COLLEGE',
  'COMBINE', 'COMFORT', 'COMMAND', 'COMMENT', 'COMPANY', 'COMPARE', 'COMPLETE'
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
    case 7:
      return WORDS_7;
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