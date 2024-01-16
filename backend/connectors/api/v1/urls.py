from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import trimpf001ViewSet

router = DefaultRouter()
router.register("trimpf001", trimpf001ViewSet, basename="trimpf001")

urlpatterns = [
    path("connectors/", include(router.urls)),
]
