# food-delivery-server-goit

Homework 1

Задание:
Сделать основу бекенд приложения (по примеру в папочке demo)

Создать json с товарами

Скачать этот json https://gist.github.com/burnjohn/961d8809f670be165cc5e31ded8eb358
Расширить по примеру еще 5мя блюдами
Сохранить json под названием all-products.json по адресу src/db/products
Сделать роутинг

В роутинге должны быть следующие пути:

GET /products в ответе должны прийти все товары (из all-products.json)

POST /signup

Вы отправляете данные нового юзера в формате
{
"username": "Ivan",
"telephone": "063 777 77 77",
"password": "12345",
"email": "ivan@gmail.com"
}
На бекенде берете данные что вам пришли и сохраняете их в <username>.json, который кладете по адресу src/db/users. (json нужно создать самим с помощью модуля fs)
В ответ отправляете json
{
"status": "success",
"user": {
"username": "Ivan",
"telephone": "063 777 77 77",
"password": "12345",
"email": "ivan@gmail.com"
}
}
Дополнительное задание
To be continued...

Требования
Приложение должно лежать в отдельном вашем репозитории с названием food-delivery-server-goit
Все задание нужно делать в ветке homework-1
После того как закончите задание нужно сделать pull request в ветку master

Homework 2

Это должен быть второй пул реквест в ваш репозиторий с домашним заданием. За основу нужно взять проект из домашнего задания 1.

В рамках нашего приложения food-delivery вам нужно будет сделать следующие задания

Возможность получить данные какого-либо продукта по id
На сервер приходит GET localhost:3001/products/12345 Ищете товар по id в all-products.json Отправляете пользователю ответ в виде:

{
"status": "success",
"products": [{
"id": 1234,
"sku": 1120001,
"name": "Пицца Пепперони с томатами",
"description": "Пицца пепперони - очень популярный вид пиццы как в Европе, так и в Америке. Она получила свое название благодаря основному ингредиенту солями пепперони, который и отличает ее от всех остальных видов пицц. Он имеет острый вкус и при запекании покрывается хрустящей жирной корочкой.",
"price": "100",
"currency": "UAN",
"creatorId": 1,
"created": "21-08-2018",
"modified": "21-08-2018",
"categories": ["pizza"]
}]
}
Возможность получить данные нескольких продуктов по idшкам
На сервер приходит GET localhost:3001/products/?ids='<id>, <id>,<id>' Ищете товары по id в all-products.json Отправляете пользователю ответ в виде:

{
"status": "success",
"products": [
{
"id": 1234,
"sku": 1120001,
"name": "Пицца Пепперони с томатами",
"description": "Пицца пепперони - очень популярный вид пиццы как в Европе, так и в Америке. Она получила свое название благодаря основному ингредиенту солями пепперони, который и отличает ее от всех остальных видов пицц. Он имеет острый вкус и при запекании покрывается хрустящей жирной корочкой.",
},
{
"id": 1234,
"sku": 1120001,
"name": "Другая пица",
"description": "Some text"
},
]
}
Возможность получить данные нескольких продуктов по категориям
На сервер приходит GET localhost:3001/products/?category="drinks"
Ищете товары по id в all-products.json
Отправляете пользователю ответ в таком же виде как и в ответе выше.
Если в all-products.json нет товаров что вы ищите то ответ должен быть:

{
"status": "no products",
"products": []
}
Сделать на сервере поддержку https
https
Сгенерировать ключ и сертификат инструкция
Подключить https модуль, передать в него ключи
Убедится что когда вы заходите на localhost вашего бекенд приложения браузер говорит что `connection is secure``
Требования
Приложение должно лежать в отдельном вашем репозитории с названием marketplace-server-goit
Все задание нужно делать в ветке homework-2
После того как закончите задание нужно сделать pull request в ветку master

Homework 3

Перенести все запросы что сделали до этого на Express

GET /products/:id - получение товара

получаем id параметр с запроса
находим товар в <all-products.json>
отправляем json с товаром
если товара нет отправляем json с {'status': 'no products', 'products': []}
GET /products/?ids='<id>, <id>,<id>' - получение нескольких товаров

получаем idшки с запроса
находим товары в <all-products.json>
отправляем json с товарами
если товара нет отправляем json с {'status': 'no products', 'products': []}
POST /users - создание юзера

получаем json с юзером
добавляем к нему уникальный id
сохраняем юзера в <all-users.json>
отправляем json с юзером и полем success
{
"status": "success",
"user": <user>
}
GET /users/:id - получение юзера

получаем id параметр с запроса
находим юзера в <all-users.json>
отправляем json с юзером
если юзером нет отправляем json с {'status': 'not found'}
Новый функцинал
POST /orders/ - создание заказа
в body шлем параметры заказа
{
"user": <userId>,
"products": [<productId1>, <productId2>, <productId2>]
"deliveryType": "delivery"
"deliveryAdress": "<deliveryAdressText>"
}
находим товары в <all-products.json>
создаем в папке с юзером папку orders
создаем в orders новый json с тем что пришло нам из запроса
отправляем json с готовым заказом
{
"status": "success",
"order": {
"id": <orderId>,
"user": <userId>,
"products": [<productId1>, <productId2>, <productId2>]
"deliveryType": "delivery"
"deliveryAdress": "<deliveryAdressText>"
}
}
если товара нет отправляем json с {'status': 'failed', 'order': null}
Доп задание
Реализовать multipart-data запрос c отправлением картинки и данных юзера

POST /images - создание картинки
в теле запроса должна быть картинка и id товара которому нужно добавить эту картинку
похожая реализация есть в demo/routes/image/save-image-multipart
для копирования картинки из папки в папку использовать stream (поток)
Как выглядит запрос из postman

в ответе должен приходить адрес новой картинки

Homework 4-5

Создать базу данных для своего проекта (бесплатную)
https://docs.mlab.com/
либо же здесь https://www.mongodb.com/cloud/atlas
Подключить базу данных к проекту (как в демо).

Подключить к проекту mongoose и создать коллекции что указаны ниже

Сделать чтобы данные пользователя вместо сохранения в файл сохранялись в базу данных в колекцию users

К пользователю добавить поля favoriteProducts: Array, viewedProducts: Array, orders: Array. В каждом масиве будут id любимых или просмотреных товаров. В Orders будет массив из заказов.

Добавить роут PUT user/:id который в body шлет одно из полей выше с новым значением. После получения запроса пользователь в базе должен обновится. В ответ бекенд отправляет

{
"status": "success",
"product": <updated-user>
}
Создать коллекцию orders в которой будут лежать заказы
Создать роут POST orders на который нужно слать в BODY следующие данные
{,
"creator": <userId>,
"productsList": [
{
product: <productId>,
type: "M" || "XL" || "XXL",
itemsCount: <number>
}
],
"deliveryType": "delivery" || "office",
"deliveryAdress": <some address>,
"sumToPay": Number (пример: "600"),
"status": "inProgress" || "declined" || "finished" || "failed"
}
Создать роут GET orders/:id который может получить определенный заказ по id заказа
{
"status": "success",
"order": <order>
}
Переместить продукты в коллекцию products
К товару добавить поле likes: Number,
К товару добавить PUT запрос products/:id который в body шлет одно из полей выше с новым значением. После получения запроса товар в базе должен обновится. В ответ бекенд отправляет
{
"status": "success",
"product": <updated-product>
}
