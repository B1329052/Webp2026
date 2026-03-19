from django.db import models

# Create your models here.

from django.db import models

class Course(models.Model):
    department = models.CharField(max_length=100)
    coursetitle = models.CharField(max_length=100)
    instructor = models.CharField(max_length=100)