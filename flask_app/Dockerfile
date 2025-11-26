FROM python:3.13.7
EXPOSE 5000
WORKDIR /app
COPY messagebot/requirements.txt .
RUN python3 -m pip install -r requirements.txt --no-cache-dir
COPY messagebot/ .
ENV APP_ENV=prod
CMD ["gunicorn", "-b", "0.0.0.0:5000", "flask_main:app"]