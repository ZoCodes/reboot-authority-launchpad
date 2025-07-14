
from django import forms
from django.core.validators import MinValueValidator, EmailValidator
from .models import ContactInquiry

class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactInquiry
        fields = ['name', 'email', 'company', 'phone', 'message', 'package_type', 'budget', 'target_domain', 'market']
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-reboot-pink focus:border-transparent',
                'placeholder': 'Your Name'
            }),
            'email': forms.EmailInput(attrs={
                'class': 'w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-reboot-pink focus:border-transparent',
                'placeholder': 'your.email@company.com'
            }),
            'company': forms.TextInput(attrs={
                'class': 'w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-reboot-pink focus:border-transparent',
                'placeholder': 'Company Name'
            }),
            'phone': forms.TextInput(attrs={
                'class': 'w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-reboot-pink focus:border-transparent',
                'placeholder': 'Phone Number'
            }),
            'message': forms.Textarea(attrs={
                'class': 'w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-reboot-pink focus:border-transparent',
                'placeholder': 'Tell us about your project...',
                'rows': 5
            }),
            'package_type': forms.Select(attrs={
                'class': 'w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-reboot-pink focus:border-transparent bg-white'
            }),
            'budget': forms.NumberInput(attrs={
                'class': 'w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-reboot-pink focus:border-transparent',
                'placeholder': 'Budget (£)',
                'min': '5000'
            }),
            'target_domain': forms.URLInput(attrs={
                'class': 'w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-reboot-pink focus:border-transparent',
                'placeholder': 'https://yoursite.com'
            }),
            'market': forms.Select(attrs={
                'class': 'w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-reboot-pink focus:border-transparent bg-white'
            }),
        }

class CalculatorForm(forms.Form):
    MARKET_CHOICES = [
        ('english', 'English'),
        ('american', 'American'),
        ('canadian', 'Canadian'),
        ('australian', 'Australian'),
        ('german', 'German'),
        ('french', 'French'),
        ('italian', 'Italian'),
        ('spanish', 'Spanish'),
        ('other', 'Other/Multiple - Contact Sales'),
    ]
    
    target_domain = forms.CharField(
        required=False,
        widget=forms.TextInput(attrs={
            'class': 'w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-reboot-pink focus:border-transparent font-mono',
            'placeholder': 'e.g. yoursite.com',
            'id': 'targetDomain'
        })
    )
    
    market = forms.ChoiceField(
        choices=MARKET_CHOICES,
        initial='english',
        widget=forms.Select(attrs={
            'class': 'w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-reboot-pink focus:border-transparent bg-white font-mono',
            'id': 'market'
        })
    )
    
    budget = forms.DecimalField(
        min_value=5000,
        widget=forms.NumberInput(attrs={
            'class': 'w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-reboot-pink focus:border-transparent font-mono',
            'placeholder': 'Enter your budget',
            'min': '5000',
            'id': 'budget'
        })
    )
