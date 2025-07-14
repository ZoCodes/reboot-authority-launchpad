
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
from django.core.mail import send_mail
from django.conf import settings
from django.template.loader import render_to_string
from django.utils.html import strip_tags
from django.contrib import messages
from django.core.cache import cache
import json
import logging

from .forms import ContactForm, CalculatorForm
from .models import ContactInquiry, CalculatorResult
from .utils import analyze_domain, calculate_pricing, get_hint_message

logger = logging.getLogger(__name__)

def index(request):
    """Main landing page with SEO optimization"""
    context = {
        'calculator_form': CalculatorForm(),
        'contact_form': ContactForm(),
        'meta_title': 'Digital PR Calculator - Reboot Digital | Calculate Your Link Building Investment',
        'meta_description': 'Calculate your digital PR investment with our transparent pricing calculator. Get instant quotes for high-authority link building campaigns. No hidden fees.',
        'canonical_url': request.build_absolute_uri(),
        'structured_data': {
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            'name': 'Reboot Digital PR Calculator',
            'description': 'Calculate your digital PR investment with transparent pricing',
            'applicationCategory': 'BusinessApplication',
            'operatingSystem': 'Web Browser',
            'offers': {
                '@type': 'Offer',
                'price': '5000',
                'priceCurrency': 'GBP',
                'priceValidUntil': '2024-12-31',
                'description': 'Digital PR packages starting from £5,000'
            }
        }
    }
    return render(request, 'index.html', context)

@require_http_methods(["POST"])
def calculate_pricing_ajax(request):
    """AJAX endpoint for real-time pricing calculations"""
    try:
        data = json.loads(request.body)
        market = data.get('market', 'global')
        budget = float(data.get('budget', 0))
        target_domain = data.get('targetDomain', '').strip()
        
        # Analyze domain if provided
        domain_analysis = None
        if target_domain:
            domain_analysis = analyze_domain(target_domain)
        
        # Calculate pricing
        results = calculate_pricing(market, budget, domain_analysis)
        
        # Add hint message
        if budget > 0 and not results.get('show_contact_sales'):
            hint_message = get_hint_message(budget)
            results['hint_message'] = hint_message
        
        # Store result for analytics (optional)
        if budget >= 5000 and not results.get('is_blocked'):
            try:
                CalculatorResult.objects.create(
                    market=market,
                    budget=budget,
                    target_domain=target_domain,
                    links_count=results.get('links_count'),
                    cost_per_link=results.get('cost_per_link'),
                    delivery_window=results.get('delivery_window', ''),
                    has_volume_discount=results.get('has_volume_discount', False),
                    discount_percentage=results.get('discount_percentage'),
                    has_domain_surcharge=results.get('has_domain_surcharge', False),
                    domain_category=domain_analysis.content_category if domain_analysis else ''
                )
            except Exception as e:
                logger.warning(f"Failed to store calculator result: {e}")
        
        return JsonResponse(results)
        
    except Exception as e:
        logger.error(f"Calculation error: {e}")
        return JsonResponse({'error': 'Calculation failed'}, status=400)

@require_http_methods(["POST"])
def analyze_domain_ajax(request):
    """AJAX endpoint for domain analysis"""
    try:
        data = json.loads(request.body)
        domain = data.get('domain', '').strip()
        
        if not domain:
            return JsonResponse({'error': 'Domain required'}, status=400)
        
        # Check cache first
        cache_key = f"domain_analysis_{domain}"
        cached_result = cache.get(cache_key)
        
        if cached_result:
            return JsonResponse(cached_result)
        
        analysis = analyze_domain(domain)
        
        result = {
            'domain': analysis.domain,
            'is_valid': analysis.is_valid,
            'has_triggered_content': analysis.has_triggered_content,
            'is_blocked': analysis.is_blocked,
            'content_category': analysis.content_category,
            'price_multiplier': analysis.price_multiplier
        }
        
        # Cache for 1 hour
        cache.set(cache_key, result, 3600)
        
        return JsonResponse(result)
        
    except Exception as e:
        logger.error(f"Domain analysis error: {e}")
        return JsonResponse({'error': 'Analysis failed'}, status=400)

@require_http_methods(["POST"])
def contact_submit(request):
    """Handle contact form submissions"""
    try:
        form = ContactForm(request.POST)
        
        if form.is_valid():
            inquiry = form.save()
            
            # Send notification email
            try:
                context = {
                    'inquiry': inquiry,
                    'site_url': request.build_absolute_uri('/'),
                }
                
                html_message = render_to_string('emails/contact_notification.html', context)
                plain_message = strip_tags(html_message)
                
                send_mail(
                    subject=f'New Contact Inquiry - {inquiry.package_type}',
                    message=plain_message,
                    from_email=settings.EMAIL_HOST_USER,
                    recipient_list=['inquiries@rebootdigital.co.uk'],  # Update with your email
                    html_message=html_message,
                    fail_silently=False,
                )
                
                # Send confirmation to user
                user_html = render_to_string('emails/contact_confirmation.html', context)
                user_plain = strip_tags(user_html)
                
                send_mail(
                    subject='Thank you for your inquiry - Reboot Digital',
                    message=user_plain,
                    from_email=settings.EMAIL_HOST_USER,
                    recipient_list=[inquiry.email],
                    html_message=user_html,
                    fail_silently=True,
                )
                
            except Exception as e:
                logger.error(f"Email sending failed: {e}")
            
            return JsonResponse({
                'success': True,
                'message': 'Thank you for your inquiry. We\'ll be in touch within 24 hours.'
            })
        else:
            return JsonResponse({
                'success': False,
                'errors': form.errors
            }, status=400)
            
    except Exception as e:
        logger.error(f"Contact form error: {e}")
        return JsonResponse({
            'success': False,
            'message': 'Something went wrong. Please try again.'
        }, status=500)

def robots_txt(request):
    """Generate robots.txt"""
    lines = [
        "User-Agent: *",
        "Allow: /",
        f"Sitemap: {request.build_absolute_uri('/sitemap.xml')}",
    ]
    return HttpResponse("\n".join(lines), content_type="text/plain")
