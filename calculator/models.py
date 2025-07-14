
from django.db import models
from django.core.validators import MinValueValidator, EmailValidator
from django.utils import timezone

class ContactInquiry(models.Model):
    PACKAGE_CHOICES = [
        ('calculator', 'Zero Intervention Package'),
        ('bespoke', 'Bespoke Solution'),
        ('general', 'General Inquiry'),
    ]
    
    name = models.CharField(max_length=100)
    email = models.EmailField(validators=[EmailValidator()])
    company = models.CharField(max_length=100, blank=True)
    phone = models.CharField(max_length=20, blank=True)
    message = models.TextField()
    package_type = models.CharField(max_length=20, choices=PACKAGE_CHOICES, default='general')
    budget = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True, validators=[MinValueValidator(5000)])
    target_domain = models.URLField(blank=True)
    market = models.CharField(max_length=20, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    is_processed = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Contact Inquiry'
        verbose_name_plural = 'Contact Inquiries'
    
    def __str__(self):
        return f"{self.name} - {self.package_type} - {self.created_at.strftime('%Y-%m-%d')}"

class CalculatorResult(models.Model):
    """Store calculator results for analytics"""
    market = models.CharField(max_length=20)
    budget = models.DecimalField(max_digits=10, decimal_places=2)
    target_domain = models.URLField(blank=True)
    links_count = models.IntegerField(null=True, blank=True)
    cost_per_link = models.DecimalField(max_digits=8, decimal_places=2, null=True, blank=True)
    delivery_window = models.CharField(max_length=50)
    has_volume_discount = models.BooleanField(default=False)
    discount_percentage = models.IntegerField(null=True, blank=True)
    has_domain_surcharge = models.BooleanField(default=False)
    domain_category = models.CharField(max_length=50, blank=True)
    created_at = models.DateTimeField(default=timezone.now)
    
    class Meta:
        ordering = ['-created_at']
