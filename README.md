
# Reboot Digital PR Calculator - Django Version

A high-performance Django application for calculating digital PR pricing with real-time domain analysis and automated contact handling.

## Features

- **Real-time Pricing Calculator**: Interactive calculator with domain analysis
- **Domain Content Detection**: Automatic detection of specialized content requiring premium pricing
- **Volume Discount Tiers**: Automatic calculation of 10% and 15% volume discounts
- **SEO Optimized**: Server-side rendering, structured data, optimized meta tags
- **Performance Focused**: Compressed assets, caching, optimized database queries
- **Contact Management**: Automated email notifications and admin interface
- **Responsive Design**: Mobile-first design matching original Tailwind styling

## Quick Start

### Prerequisites

- Python 3.9+
- Redis (for caching)
- Email service (Gmail, SendGrid, etc.)

### Installation

1. **Clone and setup**:
```bash
git clone <repository-url>
cd reboot-digital-django
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

2. **Environment setup**:
```bash
cp .env.example .env
# Edit .env with your settings
```

3. **Database setup**:
```bash
python manage.py migrate
python manage.py createsuperuser
```

4. **Static files**:
```bash
python manage.py collectstatic
```

5. **Run development server**:
```bash
python manage.py runserver
```

Visit http://localhost:8000 to see the application.

## Configuration

### Email Settings

Update `.env` with your email provider settings:

```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USE_TLS=True
EMAIL_HOST_USER=your-email@gmail.com
EMAIL_HOST_PASSWORD=your-app-password
```

### Redis Caching

For production, install and configure Redis:

```bash
# Ubuntu/Debian
sudo apt-get install redis-server

# macOS
brew install redis

# Start Redis
redis-server
```

## Performance Optimizations

### 1. Static File Compression

The application uses `django-compressor` to automatically minify CSS and JavaScript:

```python
# In templates
{% load compress %}
{% compress css %}
    <link rel="stylesheet" href="{% static 'css/main.css' %}">
{% endcompress %}
```

### 2. Caching Strategy

- **Template fragments**: Cached for frequently accessed sections
- **Domain analysis**: Results cached for 1 hour
- **Static files**: Served with long-term caching headers

### 3. Database Optimization

- Minimal database usage for calculator
- Efficient queries with select_related/prefetch_related
- Database indexes on frequently queried fields

## SEO Features

### 1. Meta Tags and Structured Data

```html
<meta name="description" content="Calculate your digital PR investment...">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Reboot Digital PR Calculator"
}
</script>
```

### 2. Performance Metrics

- **Target Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Page Load Time**: < 2 seconds on 3G

### 3. Accessibility

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- WCAG 2.1 AA compliance

## Production Deployment

### Docker Deployment

```bash
# Build image
docker build -t reboot-digital .

# Run container
docker run -p 8000:8000 --env-file .env reboot-digital
```

### Traditional Deployment

```bash
# Install dependencies
pip install -r requirements.txt

# Set production environment
export DJANGO_SETTINGS_MODULE=reboot_digital.settings
export DEBUG=False

# Collect static files
python manage.py collectstatic --noinput

# Run with Gunicorn
gunicorn --config gunicorn.conf.py reboot_digital.wsgi:application
```

### Environment Variables

```env
SECRET_KEY=your-production-secret-key
DEBUG=False
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
DATABASE_URL=postgres://user:pass@localhost/dbname
REDIS_URL=redis://localhost:6379
```

## API Endpoints

### Calculator API

```javascript
// Domain Analysis
POST /api/analyze-domain/
{
  "domain": "example.com"
}

// Pricing Calculation
POST /api/calculate-pricing/
{
  "market": "global",
  "budget": 50000,
  "targetDomain": "example.com"
}

// Contact Form
POST /api/contact/
{
  "name": "John Doe",
  "email": "john@example.com",
  "package_type": "calculator",
  ...
}
```

## Admin Interface

Access the Django admin at `/admin/` to:

- View and manage contact inquiries
- Monitor calculator usage analytics
- Configure system settings
- Export data for analysis

## Monitoring and Analytics

### Performance Monitoring

```javascript
// Core Web Vitals tracking
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.entryType === 'largest-contentful-paint') {
      console.log('LCP:', entry.startTime);
    }
  }
});
```

### Calculator Analytics

The system automatically tracks:
- Calculator usage patterns
- Popular budget ranges
- Domain analysis requests
- Conversion rates by package type

## Customization

### Styling

The CSS is organized in a Tailwind-inspired utility system in `static/css/main.css`. Key color variables:

```css
:root {
  --color-primary: 244 63 94; /* pink-500 */
  --color-secondary: 30 58 138; /* blue-800 */
}
```

### Calculator Logic

Pricing rules are defined in `calculator/utils.py`:

```python
market_rates = {
    'global': 650,
    'american': 750,
    # ... other markets
}

TIER_1_THRESHOLD = 90000  # 10% discount
TIER_2_THRESHOLD = 151000  # 15% discount
```

## Testing

```bash
# Run tests
python manage.py test

# Run with coverage
pip install coverage
coverage run --source='.' manage.py test
coverage report
```

## Troubleshooting

### Common Issues

1. **Static files not loading**: Run `python manage.py collectstatic`
2. **Email not sending**: Check email configuration in `.env`
3. **Calculator not working**: Verify JavaScript files are properly compressed
4. **Slow performance**: Enable Redis caching

### Debug Mode

For development, ensure `DEBUG=True` in `.env` and check Django debug toolbar for performance insights.

## Support

For technical issues or questions about the Django implementation:

1. Check the Django logs: `tail -f logs/django.log`
2. Verify environment variables are set correctly
3. Test email configuration with Django shell
4. Monitor Redis connection status

## License

This project is proprietary to Reboot Digital. All rights reserved.
