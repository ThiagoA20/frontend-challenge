FROM python

WORKDIR /code

COPY ./requirements.txt .

RUN pip install -r requirements.txt

COPY . .

RUN export $(xargs < .env)

CMD flask run