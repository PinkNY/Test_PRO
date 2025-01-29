# users_app/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    """사용자 모델 (이메일 없이 아이디 로그인 + 역할 구분)"""
    
    ROLE_CHOICES = [
        ('editor', '영상 편집자'),
        ('client', '편집 의뢰인'),
    ]

    username = models.CharField(max_length=30, unique=True)  # 아이디 (로그인 필드)
    role = models.CharField(max_length=10, choices=ROLE_CHOICES, default='client')  # 역할(편집자/의뢰인)

    USERNAME_FIELD = 'username'  # 아이디를 로그인 필드로 사용
    REQUIRED_FIELDS = []  # 이메일 없이 회원가입 가능하도록 설정

    def __str__(self):
        return f"{self.username} ({self.get_role_display()})"
