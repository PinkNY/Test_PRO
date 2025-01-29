# users_app/permissions.py
from rest_framework.permissions import BasePermission

class IsAuthenticatedAndOwner(BasePermission):
    """사용자 본인만 프로필 수정 가능"""
    def has_object_permission(self, request, view, obj):
        return obj == request.user
