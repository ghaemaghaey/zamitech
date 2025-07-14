from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static
import os

urlpatterns = [
    path("admin/", admin.site.urls),
    # صفحات اصلی
    path("", TemplateView.as_view(template_name="index.html"), name="home"),
    path(
        "about-us/", TemplateView.as_view(template_name="about-us.html"), name="about"
    ),
    path(
        "contact-us/",
        TemplateView.as_view(template_name="contact-us.html"),
        name="contact",
    ),
    path(
        "product/", TemplateView.as_view(template_name="product.html"), name="product"
    ),
    path(
        "request-demo/",
        TemplateView.as_view(template_name="request-demo.html"),
        name="demo",
    ),
]

# برای سرویس‌دهی به فایل‌های استاتیک در حالت توسعه (development)
if settings.DEBUG:
    urlpatterns += static(
        settings.STATIC_URL,
        document_root=os.path.join(settings.BASE_DIR, "frontend", "static"),
    )
