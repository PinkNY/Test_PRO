# config/db_router.py

class DBRouter:
    """
    여러 데이터베이스를 관리하는 라우터
    """

    def db_for_read(self, model, **hints):
        """읽기 작업을 위한 DB 선택"""
        if model._meta.app_label == 'requests_app':
            return 'requests_db'
        elif model._meta.app_label == 'users_app':
            return 'users_db'
        return 'default'

    def db_for_write(self, model, **hints):
        """쓰기 작업을 위한 DB 선택"""
        if model._meta.app_label == 'requests_app':
            return 'requests_db'
        elif model._meta.app_label == 'users_app':
            return 'users_db'
        return 'default'

    def allow_relation(self, obj1, obj2, **hints):
        """DB 간 관계 허용 여부"""
        return True

    def allow_migrate(self, db, app_label, model_name=None, **hints):
        """마이그레이션 허용 여부"""
        if app_label == 'requests_app':
            return db == 'requests_db'
        elif app_label == 'users_app':
            return db == 'users_db'
        return db == 'default'
