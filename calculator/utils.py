
"""
Calculator utility functions - Python equivalent of the TypeScript domain utils
"""
import re
from typing import Dict, List, Optional, Tuple
from urllib.parse import urlparse

class DomainAnalysis:
    def __init__(self, domain: str, is_valid: bool, has_triggered_content: bool, 
                 is_blocked: bool, content_category: str = '', price_multiplier: float = 1.0):
        self.domain = domain
        self.is_valid = is_valid
        self.has_triggered_content = has_triggered_content
        self.is_blocked = is_blocked
        self.content_category = content_category
        self.price_multiplier = price_multiplier

# Words that trigger 20% price increase
TRIGGER_WORDS = [
    'online', 'casino', 'poker', 'blackjack', 'adult', 'vape', 'smoking', 
    'cigarette', 'betting', 'gambling', 'crypto', 'forex', 'payday', 'loan',
    'slots', 'roulette', 'bingo', 'sportsbook', 'bookmaker', 'wager'
]

# Words that block submission entirely
BLOCKED_WORDS = [
    'porn', 'sex', 'xxx', 'nude', 'escort', 'prostitute', 'strip', 'fetish',
    'explicit', 'erotic', 'hardcore', 'nsfw'
]

def parse_domain(input_str: str) -> str:
    """Parse domain from various input formats"""
    if not input_str:
        return ''
    
    domain = input_str.lower().strip()
    
    # Remove protocol if present
    domain = re.sub(r'^https?://', '', domain)
    domain = re.sub(r'^www\.', '', domain)
    
    # Remove path, query params, etc.
    domain = domain.split('/')[0]
    domain = domain.split('?')[0]
    domain = domain.split('#')[0]
    
    return domain

def extract_domain_terms(domain: str) -> List[str]:
    """Extract searchable terms from domain"""
    if not domain:
        return []
    
    # Split by dots and hyphens to get individual terms
    parts = re.split(r'[.\-_]', domain)
    
    # Also include the full domain name without extension
    without_tld = re.sub(r'\.[a-z]{2,4}$', '', domain, flags=re.IGNORECASE)
    parts.append(without_tld)
    
    return [part.lower() for part in parts if len(part) > 1]

def analyze_domain(input_str: str) -> DomainAnalysis:
    """Analyze domain for content restrictions and pricing"""
    domain = parse_domain(input_str)
    
    if not domain:
        return DomainAnalysis(
            domain='',
            is_valid=False,
            has_triggered_content=False,
            is_blocked=False,
            price_multiplier=1.0
        )
    
    terms = extract_domain_terms(domain)
    all_terms = terms + [domain]
    
    # Check for blocked content
    is_blocked = any(
        blocked_word in term 
        for blocked_word in BLOCKED_WORDS 
        for term in all_terms
    )
    
    # Check for trigger words
    triggered_words = [
        trigger_word for trigger_word in TRIGGER_WORDS
        if any(trigger_word in term for term in all_terms)
    ]
    
    has_triggered_content = len(triggered_words) > 0
    
    content_category = ''
    if has_triggered_content:
        gaming_words = {'casino', 'poker', 'gambling', 'betting', 'slots'}
        financial_words = {'crypto', 'forex', 'loan', 'payday'}
        tobacco_words = {'vape', 'smoking', 'cigarette'}
        adult_words = {'adult'}
        
        if any(word in triggered_words for word in gaming_words):
            content_category = 'Gaming & Gambling'
        elif any(word in triggered_words for word in financial_words):
            content_category = 'Financial Services'
        elif any(word in triggered_words for word in tobacco_words):
            content_category = 'Tobacco & Vaping'
        elif any(word in triggered_words for word in adult_words):
            content_category = 'Adult Content'
        else:
            content_category = 'Online Services'
    
    return DomainAnalysis(
        domain=domain,
        is_valid=True,
        has_triggered_content=has_triggered_content,
        is_blocked=is_blocked,
        content_category=content_category,
        price_multiplier=1.2 if has_triggered_content else 1.0
    )

def calculate_pricing(market: str, budget: float, domain_analysis: Optional[DomainAnalysis] = None) -> Dict:
    """Calculate pricing based on market, budget, and domain analysis"""
    
    market_rates = {
        'global': 650,
        'english': 650,
        'american': 750,
        'canadian': 950,
        'australian': 950,
        'german': 1000,
        'french': 1000,
        'italian': 850,
        'spanish': 850
    }
    
    TIER_1_THRESHOLD = 90000
    TIER_2_THRESHOLD = 151000
    BESPOKE_THRESHOLD = 250000
    
    if market == 'other':
        return {
            'show_contact_sales': True,
            'delivery_window': 'Contact for Bespoke Solution',
            'budget': budget
        }
    
    if domain_analysis and domain_analysis.is_blocked:
        return {'is_blocked': True}
    
    if budget < 5000:
        return {'insufficient_budget': True}
    
    standard_cost_per_link = market_rates.get(market, 650)
    domain_multiplier = domain_analysis.price_multiplier if domain_analysis else 1.0
    adjusted_cost_per_link = standard_cost_per_link * domain_multiplier
    
    # Volume discount calculation
    volume_discount = get_volume_discount(budget, TIER_1_THRESHOLD, TIER_2_THRESHOLD, BESPOKE_THRESHOLD)
    has_volume_discount = volume_discount['rate'] > 0 and budget < BESPOKE_THRESHOLD
    
    final_cost_per_link = adjusted_cost_per_link * (1 - volume_discount['rate']) if has_volume_discount else adjusted_cost_per_link
    
    links_count = int(budget / final_cost_per_link)
    standard_links_count = int(budget / adjusted_cost_per_link) if has_volume_discount else None
    bonus_links = links_count - standard_links_count if has_volume_discount and standard_links_count else None
    
    delivery_window = get_delivery_window(budget, BESPOKE_THRESHOLD)
    hide_links_count = budget >= BESPOKE_THRESHOLD
    
    return {
        'market': market,
        'budget': budget,
        'links_count': None if hide_links_count else links_count,
        'delivery_window': delivery_window,
        'cost_per_link': None if hide_links_count else final_cost_per_link,
        'hide_links_count': hide_links_count,
        'has_volume_discount': has_volume_discount,
        'standard_links_count': standard_links_count,
        'bonus_links': bonus_links,
        'standard_cost_per_link': adjusted_cost_per_link if has_volume_discount else None,
        'discounted_cost_per_link': final_cost_per_link if has_volume_discount else None,
        'discount_percentage': volume_discount['percentage'] if has_volume_discount else None,
        'has_domain_surcharge': domain_multiplier > 1,
        'domain_surcharge_amount': round((domain_multiplier - 1) * 100) if domain_multiplier > 1 else None,
        'domain_analysis': domain_analysis
    }

def get_volume_discount(budget: float, tier1: float, tier2: float, bespoke: float) -> Dict:
    """Calculate volume discount based on budget tiers"""
    if budget >= tier2 and budget < bespoke:
        return {'rate': 0.15, 'percentage': 15}
    elif budget >= tier1 and budget < tier2:
        return {'rate': 0.10, 'percentage': 10}
    return {'rate': 0, 'percentage': 0}

def get_delivery_window(budget: float, bespoke_threshold: float) -> str:
    """Calculate delivery window based on budget"""
    if budget >= bespoke_threshold:
        return "Contact for Bespoke Solution"
    elif budget >= 200000:
        return "24 months"
    elif budget >= 150000:
        return "12 months"
    elif budget >= 100000:
        return "10 months"
    elif budget >= 50000:
        return "6 months"
    return "4 months"

def get_hint_message(budget: float) -> Optional[str]:
    """Generate hint messages for volume discounts"""
    TIER_1_THRESHOLD = 90000
    TIER_2_THRESHOLD = 151000
    
    if 85000 <= budget < TIER_1_THRESHOLD:
        amount_needed = TIER_1_THRESHOLD - budget
        return f"💡 Just £{amount_needed:,.0f} more to unlock 10% volume discount and get bonus links!"
    
    if 140000 <= budget < TIER_2_THRESHOLD:
        amount_needed = TIER_2_THRESHOLD - budget
        return f"🚀 Add £{amount_needed:,.0f} more to your budget to unlock 15% volume discount (currently enjoying 10%)"
    
    if 148000 <= budget < TIER_2_THRESHOLD:
        amount_needed = TIER_2_THRESHOLD - budget
        return f"⭐ Only £{amount_needed:,.0f} away from maximum 15% volume discount!"
    
    return None
