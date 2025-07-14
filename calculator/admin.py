
from django.contrib import admin
from .models import ContactInquiry, CalculatorResult

@admin.register(ContactInquiry)
class ContactInquiryAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'company', 'package_type', 'budget', 'created_at', 'is_processed']
    list_filter = ['package_type', 'market', 'is_processed', 'created_at']
    search_fields = ['name', 'email', 'company', 'target_domain']
    readonly_fields = ['created_at']
    date_hierarchy = 'created_at'
    
    fieldsets = (
        ('Contact Information', {
            'fields': ('name', 'email', 'company', 'phone')
        }),
        ('Inquiry Details', {
            'fields': ('package_type', 'message', 'budget', 'target_domain', 'market')
        }),
        ('Status', {
            'fields': ('is_processed', 'created_at')
        }),
    )

@admin.register(CalculatorResult)
class CalculatorResultAdmin(admin.ModelAdmin):
    list_display = ['market', 'budget', 'links_count', 'delivery_window', 'created_at']
    list_filter = ['market', 'has_volume_discount', 'has_domain_surcharge', 'created_at']
    search_fields = ['target_domain', 'domain_category']
    readonly_fields = ['created_at']
    date_hierarchy = 'created_at'
