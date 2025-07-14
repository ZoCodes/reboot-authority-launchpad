
// Domain parsing and content detection utilities

export interface DomainAnalysis {
  domain: string;
  isValid: boolean;
  hasTriggeredContent: boolean;
  isBlocked: boolean;
  contentCategory?: string;
  priceMultiplier: number;
}

// Words that trigger 20% price increase - focused on iGaming and Finance
const TRIGGER_WORDS = [
  'casino', 'poker', 'blackjack', 'adult', 'vape', 'smoking', 
  'cigarette', 'betting', 'gambling', 'crypto', 'forex', 'payday', 'loan',
  'slots', 'roulette', 'bingo', 'sportsbook', 'bookmaker', 'wager'
];

// Words that block submission entirely
const BLOCKED_WORDS = [
  'porn', 'sex', 'xxx', 'nude', 'escort', 'prostitute', 'strip', 'fetish',
  'explicit', 'erotic', 'hardcore', 'nsfw'
];

export const parseDomain = (input: string): string => {
  if (!input) return '';
  
  let domain = input.toLowerCase().trim();
  
  // Remove protocol if present
  domain = domain.replace(/^https?:\/\//, '');
  domain = domain.replace(/^www\./, '');
  
  // Remove path, query params, etc.
  domain = domain.split('/')[0];
  domain = domain.split('?')[0];
  domain = domain.split('#')[0];
  
  return domain;
};

export const extractDomainTerms = (domain: string): string[] => {
  if (!domain) return [];
  
  // Split by dots and hyphens to get individual terms
  const parts = domain.split(/[.\-_]/);
  
  // Also include the full domain name without extension
  const withoutTLD = domain.replace(/\.[a-z]{2,4}$/i, '');
  parts.push(withoutTLD);
  
  return parts.filter(part => part.length > 1).map(part => part.toLowerCase());
};

export const analyzeDomain = (input: string): DomainAnalysis => {
  const domain = parseDomain(input);
  
  if (!domain) {
    return {
      domain: '',
      isValid: false,
      hasTriggeredContent: false,
      isBlocked: false,
      priceMultiplier: 1
    };
  }
  
  const terms = extractDomainTerms(domain);
  const allTerms = [...terms, domain];
  
  // Check for blocked content
  const isBlocked = BLOCKED_WORDS.some(blockedWord => 
    allTerms.some(term => term.includes(blockedWord))
  );
  
  // Check for trigger words
  const triggeredWords = TRIGGER_WORDS.filter(triggerWord => 
    allTerms.some(term => term.includes(triggerWord))
  );
  
  const hasTriggeredContent = triggeredWords.length > 0;
  
  let contentCategory = '';
  if (hasTriggeredContent) {
    if (triggeredWords.some(word => ['casino', 'poker', 'gambling', 'betting', 'slots'].includes(word))) {
      contentCategory = 'Gaming & Gambling';
    } else if (triggeredWords.some(word => ['crypto', 'forex', 'loan', 'payday'].includes(word))) {
      contentCategory = 'Financial Services';
    } else if (triggeredWords.some(word => ['vape', 'smoking', 'cigarette'].includes(word))) {
      contentCategory = 'Tobacco & Vaping';
    } else if (triggeredWords.some(word => ['adult'].includes(word))) {
      contentCategory = 'Adult Content';
    } else {
      contentCategory = 'Specialized Services';
    }
  }
  
  return {
    domain,
    isValid: true,
    hasTriggeredContent,
    isBlocked,
    contentCategory,
    priceMultiplier: hasTriggeredContent ? 1.2 : 1
  };
};
