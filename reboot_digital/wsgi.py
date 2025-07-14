
"""
WSGI config for reboot_digital project.
"""

import os
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'reboot_digital.settings')

application = get_wsgi_application()
