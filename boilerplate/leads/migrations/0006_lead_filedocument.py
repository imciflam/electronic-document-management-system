# Generated by Django 2.2.1 on 2019-05-12 10:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('leads', '0005_auto_20190512_1153'),
    ]

    operations = [
        migrations.AddField(
            model_name='lead',
            name='fileDocument',
            field=models.FileField(blank=True, max_length=500, upload_to=''),
        ),
    ]