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
  'LIFE', 'LIKE', 'LINE', 'LIST', 'LIVE', 'LONG', 'LOOK', 'LOVE', 'MAKE', 'MANY',
  'LOSE', 'LOST', 'LUCK', 'MAIL', 'MAIN', 'MALE', 'MARK', 'MEAL', 'MEAN', 'MEAT',
  'MEET', 'MILK', 'MIND', 'MINE', 'MISS', 'MODE', 'MOON', 'MORE', 'MOST', 'MOVE',
  'NAME', 'NEAR', 'NECK', 'NEED', 'NEWS', 'NEXT', 'NICE', 'NOTE', 'OPEN', 'PAGE',
  'PAIN', 'PAIR', 'PARK', 'PART', 'PAST', 'PATH', 'PEAK', 'PICK', 'PILE', 'PINK',
  'PLAN', 'PLAY', 'PLOT', 'PLUS', 'POEM', 'POET', 'POLL', 'POOL', 'PORT', 'POST',
  'PULL', 'PURE', 'PUSH', 'RACE', 'RAIN', 'RANK', 'RARE', 'RATE', 'READ', 'REAL',
  'RING', 'RISE', 'RISK', 'ROAD', 'ROCK', 'ROLE', 'ROLL', 'ROOF', 'ROOM', 'ROOT',
  'ROSE', 'RULE', 'RUSH', 'SAFE', 'SAIL', 'SALE', 'SALT', 'SAME', 'SAND', 'SAVE',
  'SCAN', 'SEAL', 'SEAT', 'SEED', 'SEEK', 'SEEM', 'SELF', 'SELL', 'SEND', 'SHOT',
  'SHOW', 'SIDE', 'SIGN', 'SING', 'SINK', 'SIZE', 'SKIN', 'SKIP', 'SNOW', 'SOIL',
  'SOLD', 'SOME', 'SONG', 'SORT', 'SOUL', 'SOUP', 'SPOT', 'STAR', 'STAY', 'STEP',
  'STOP', 'SUCH', 'SUIT', 'SURE', 'TAKE', 'TALK', 'TANK', 'TAPE', 'TASK', 'TEAM',
  'TECH', 'TELL', 'TERM', 'TEST', 'TEXT', 'THAN', 'TIME', 'TINY', 'TIRE', 'TONE',
  'TOOL', 'TOUR', 'TOWN', 'TREE', 'TRUE', 'TUBE', 'TURN', 'TWIN', 'TYPE', 'UNIT',
  'UPON', 'USER', 'VAST', 'VERY', 'VIEW', 'VOTE', 'WAGE', 'WAIT', 'WAKE', 'WALK',
  'WALL', 'WANT', 'WARM', 'WASH', 'WAVE', 'WEAR', 'WEEK', 'WELL', 'WEST', 'WHAT',
  'WHEN', 'WHOM', 'WIDE', 'WIFE', 'WILD', 'WIND', 'WINE', 'WING', 'WIRE', 'WISE',
  'WITH', 'WOOD', 'WORD', 'WORK', 'YARD', 'YEAH', 'YEAR', 'YOUR', 'ZERO', 'ZONE',
  'ABLE', 'ACID', 'AGED', 'ALSO', 'ARMY', 'AUTO', 'AWAY', 'BACK', 'BAND', 'BASE',
  'BATH', 'BELL', 'BELT', 'BEST', 'BIKE', 'BIND', 'BOWL', 'BULK', 'BUSY', 'CALM'
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
  'CHECK', 'CHEST', 'CHIEF', 'CHILD', 'CHINA', 'CHOSE', 'CIVIL', 'CLAIM', 'CLASS',
  'CLEAN', 'CLEAR', 'CLOCK', 'CLOSE', 'CLOUD', 'COACH', 'COAST', 'COUNT', 'COURT',
  'COVER', 'CRAFT', 'CRASH', 'CREAM', 'CRIME', 'CROSS', 'CROWD', 'CROWN', 'CYCLE',
  'DANCE', 'DEATH', 'DEPTH', 'DOUBT', 'DRAFT', 'DRAMA', 'DREAM', 'DRESS', 'DRINK',
  'DRIVE', 'EARTH', 'EMPTY', 'ENEMY', 'ENJOY', 'ENTER', 'EQUAL', 'ERROR', 'EVENT',
  'EVERY', 'EXACT', 'EXIST', 'EXTRA', 'FAITH', 'FALSE', 'FAULT', 'FIELD', 'FIGHT',
  'FINAL', 'FIRST', 'FLASH', 'FLEET', 'FLOOR', 'FOCUS', 'FORCE', 'FRAME', 'FRESH',
  'FRONT', 'FRUIT', 'GLASS', 'GRANT', 'GRASS', 'GREAT', 'GREEN', 'GROUP', 'GUARD',
  'GUESS', 'GUEST', 'GUIDE', 'HAPPY', 'HEART', 'HEAVY', 'HELLO', 'HORSE', 'HOTEL',
  'HOUSE', 'HUMAN', 'IDEAL', 'IMAGE', 'INDEX', 'INPUT', 'ISSUE', 'IVORY', 'JUDGE',
  'KNIFE', 'LAUGH', 'LAYER', 'LEARN', 'LEVEL', 'LIGHT', 'LIMIT', 'LOCAL', 'LOGIC',
  'LUNCH', 'MAGIC', 'MAJOR', 'MATCH', 'MEDAL', 'MEDIA', 'MERCY', 'MERIT', 'METAL',
  'METER', 'MIGHT', 'MINOR', 'MODEL', 'MONEY', 'MONTH', 'MORAL', 'MOTOR', 'MOUNT',
  'MOUSE', 'MOUTH', 'MUSIC', 'NERVE', 'NIGHT', 'NOISE', 'NORTH', 'NOVEL', 'NURSE',
  'OCCUR', 'OCEAN', 'OFFER', 'ORDER', 'OTHER', 'OUTER', 'OWNER', 'PAINT', 'PANEL',
  'PAPER', 'PARTY', 'PASTE', 'PATCH', 'PAUSE', 'PEACE', 'PHASE', 'PHONE', 'PHOTO',
  'PIECE', 'PILOT', 'PITCH', 'PLACE', 'PLAIN', 'PLANE', 'PLATE', 'POINT', 'POUND',
  'POWER', 'PRESS', 'PRICE', 'PRIDE', 'PRIME', 'PRINT', 'PRIZE', 'PROBE', 'PROOF',
  'PROUD', 'PROVE', 'PULSE', 'PUNCH', 'PUPIL', 'QUEEN', 'QUEST', 'QUICK', 'QUIET',
  'QUITE', 'QUOTE', 'RADIO', 'RAISE', 'RANGE', 'RAPID', 'RATIO', 'REACH', 'READY',
  'REALM', 'ROUND', 'ROYAL', 'RURAL', 'SCALE', 'SCENE', 'SCOPE', 'SCORE', 'SENSE'
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
  'BUTTON', 'CAMERA', 'CANCEL', 'CANCER', 'CAPABLE', 'CAPITAL', 'CAREER',
  'CASTLE', 'CASUAL', 'CAUGHT', 'CENTER', 'CENTRE', 'CHANCE', 'CHANGE', 'CHARGE',
  'CIRCLE', 'CLIENT', 'CLOSED', 'CLOSER', 'COFFEE', 'COLUMN', 'COMEDY', 'COMING',
  'COMMON', 'COMPLY', 'COPPER', 'CORNER', 'COSTLY', 'COUNTY', 'COUPLE', 'COURSE',
  'COVERS', 'CREATE', 'CREDIT', 'CRISIS', 'CUSTOM', 'DAMAGE', 'DANGER', 'DEALER',
  'DEBATE', 'DECADE', 'DECIDE', 'DEFEAT', 'DEFEND', 'DEFINE', 'DEGREE', 'DEMAND',
  'DENIAL', 'DESIGN', 'DESIRE', 'DETAIL', 'DETECT', 'DEVICE', 'DIFFER', 'DINNER',
  'DIRECT', 'DOCTOR', 'DOLLAR', 'DOMAIN', 'DOUBLE', 'DRIVEN', 'DRIVER', 'DURING',
  'EASILY', 'EATING', 'EDITOR', 'EFFECT', 'EFFORT', 'EIGHTH', 'EITHER', 'ELEVEN',
  'EMERGE', 'EMPIRE', 'EMPLOY', 'ENABLE', 'ENDING', 'ENERGY', 'ENGAGE', 'ENGINE',
  'ENOUGH', 'ENSURE', 'ENTIRE', 'ENTITY', 'EQUITY', 'ESCAPE', 'ESTATE', 'ETHNIC',
  'EXCEED', 'EXCEPT', 'EXCESS', 'EXPAND', 'EXPECT', 'EXPERT', 'EXPORT', 'EXPOSE'
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
  'COMBINE', 'COMFORT', 'COMMAND', 'COMMENT', 'COMPANY', 'COMPARE', 'COMPLETE',
  'COMPLEX', 'CONCERN', 'CONFIRM', 'CONNECT', 'CONSIST', 'CONTACT', 'CONTAIN',
  'CONTENT', 'CONTEXT', 'CONTROL', 'CONVERT', 'CORRECT', 'COUNCIL', 'COUNSEL',
  'COUNTER', 'COUNTRY', 'CRUCIAL', 'CRYSTAL', 'CULTURE', 'CURRENT', 'CUTTING',
  'DEALING', 'DECIDED', 'DECLINE', 'DEFAULT', 'DEFENCE', 'DELIVER', 'DEMAND',
  'DENSITY', 'DEPOSIT', 'DERIVED', 'DESERVE', 'DESPITE', 'DESTINY', 'DESTROY',
  'DETAILS', 'DEVELOP', 'DEVOTED', 'DIAMOND', 'DIGITAL', 'DISCUSS', 'DISEASE',
  'DISPLAY', 'DISPUTE', 'DISTANT', 'DIVERSE', 'DIVIDED', 'DRAWING', 'DRIVING',
  'DYNAMIC', 'EASTERN', 'ECONOMY', 'EDITION', 'ELDERLY', 'ELEMENT', 'ENGAGED',
  'ENHANCE', 'ESSENCE', 'EVENING', 'EVIDENT', 'EXACTLY', 'EXAMINE', 'EXAMPLE',
  'EXCLUDE', 'EXECUTE', 'EXERCISE', 'EXHAUST', 'EXHIBIT', 'EXPAND', 'EXPLAIN',
  'EXPLICIT', 'EXPRESS', 'EXTEND', 'EXTRACT', 'EXTREME', 'FACTORY', 'FACULTY',
  'FAILING', 'FAILURE', 'FASHION', 'FEATURE', 'FEDERAL', 'FEELING', 'FICTION',
  'FIFTEEN', 'FILLING', 'FINANCE', 'FINDING', 'FISHING', 'FITTING', 'FOCUSED',
  'FOREIGN', 'FOREVER', 'FORMULA', 'FORWARD', 'FOUNDER', 'FREEDOM', 'FURTHER',
  'GALLERY', 'GATEWAY', 'GENERAL', 'GENETIC', 'GENUINE', 'GETTING', 'GRANTED'
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