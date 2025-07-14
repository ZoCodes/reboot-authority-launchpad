
from django.urls import path
from . import views

app_name = 'calculator'

urlpatterns = [
    path('', views.index, name='index'),
    path('api/calculate-pricing/', views.calculate_pricing_ajax, name='calculate_pricing_ajax'),
    path('api/analyze-domain/', views.analyze_domain_ajax, name='analyze_domain_ajax'),
    path('api/contact/', views.contact_submit, name='contact_submit'),
    path('robots.txt', views.robots_txt, name='robots_txt'),
]
