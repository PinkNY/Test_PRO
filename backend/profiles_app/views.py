# profiles_app/views.py
from rest_framework import generics, permissions
from .models import UserProfile
from .serializers import UserProfileSerializer

class UserProfileView(generics.RetrieveUpdateAPIView):
    """사용자 프로필 조회 및 수정 API"""
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        """현재 로그인한 사용자의 프로필 반환"""
        return self.request.user.profile
