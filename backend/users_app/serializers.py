# users_app/serializers.py
from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    """사용자 정보 시리얼라이저"""
    class Meta:
        model = User
        fields = ['id', 'username', 'role']

class RegisterSerializer(serializers.ModelSerializer):
    """회원가입 시리얼라이저"""
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['username', 'password', 'role']

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            role=validated_data['role']
        )
        return user

class LoginSerializer(serializers.Serializer):
    """로그인 시리얼라이저"""
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        user = User.objects.filter(username=username).first()
        if user and user.check_password(password):
            return user
        raise serializers.ValidationError("아이디 또는 비밀번호가 잘못되었습니다.")
