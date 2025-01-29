# users_app/views.py
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status, generics
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import get_user_model
from .serializers import RegisterSerializer, LoginSerializer, UserSerializer

User = get_user_model()

class RegisterView(generics.CreateAPIView):
    """회원가입 API"""
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

class LoginView(APIView):
    """로그인 API"""
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
                'role': user.role,  # 역할 반환
            })
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    """로그아웃 API"""
    def post(self, request):
        try:
            refresh_token = request.data["refresh"]
            token = RefreshToken(refresh_token)
            token.blacklist()  # 토큰 블랙리스트에 추가
            return Response({"message": "로그아웃 성공"}, status=status.HTTP_205_RESET_CONTENT)
        except Exception:
            return Response({"error": "잘못된 토큰입니다."}, status=status.HTTP_400_BAD_REQUEST)

class UserProfileView(generics.RetrieveAPIView):
    """사용자 프로필 조회 API"""
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user  # 현재 로그인한 사용자 반환
