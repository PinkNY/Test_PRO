# request_app/models.py
from django.db import models
from django.conf import settings

class VideoRequest(models.Model):
    """영상 편집 요청 모델"""
    
    STATUS_CHOICES = [
        ('pending', '대기 중'),
        ('in_progress', '진행 중'),
        ('completed', '완료'),
    ]

    CATEGORY_CHOICES = [
        ('video_editing', '영상 편집'),
        ('motion_graphics', '모션 그래픽'),
        ('subtitle_editing', '자막 편집'),
    ]

    client = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='requests')
    title = models.CharField(max_length=255)
    description = models.TextField()
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title} ({self.get_status_display()})"
