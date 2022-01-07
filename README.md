# Краткое описание хакатона
Задача вкраце: нам дана карта в виде двумерного массива, по которой ходит игровой персонаж и набирает очки, за то, что он собирает некоторые целевые поля.
На карте есть несоклько типов полей, которые изменяют передвижение.
Передвижение происходит по определенным правилам, похожим на вектор скорости.
Перед началом движения можено потретить очки действия на изменение полей карты.
Всего у нас есть 3600 очков действия, которые мы тратим на передвижение (один ход = одно очко) и на изменения полей карты (улучшение одного поля = одно очко).
Цель - набрать максимальное количество очков по формуле
Score = 3600 * 1.1^p / (t + j), где:
p - количество успешно доставленных подарков (P > 0)
t - время (количество шагов), затраченное на выполнение задания (20 <= t <= 3600)
j - количество улучшенных клеток карты (0 <= j;  t + j <= 3600)

Решение - JSON файл с набором векторов, по которым ходил персонаж и набором выбранных улучшений

#ссылка на хакатон
https://cups.online/ru/contests/vkwinterquest

# Выполненные задачи
Посмотрел песочницу - вариант задания из предыдущего мероприятия
Определился с выбором ЯП, будет JS, работать будем просто с консолью сначала
Первые идеи по поводу того, как код может помочь в решении задачи. Создадим объект персонажа с координатами, методами для перемещения, текущим типом поля. Вызов метода
передвижения также должен будет дополнять массив
Первая попытка решить задачу руками. В первые часы хакатона сижу в топ2, ненадолго, мелочь, а приятно) https://ibb.co/VM7cBHV

Скооперировались с ещё несколькими участниками, создаём интерфейс для ручного решения задачи методом тыка, которое будет быстрее, чем пальцами набирать JSON файл.
Пишем логику

Продолжаем делать интерфейс, чтобы ускорять ручной перебор. Но, видимо, автоматизированные решения гораздо эффективнее, пока не понятно даже как к этому подступиться без ML. 
Ещё одно ручное решение (продолжение старого) https://ibb.co/6W6XdZm

# Идея решения
Первая идея: понять отношение, соклько шагов выгодно тратить на получение одного подарка
Практика (да и формула) показывает, что любое, потому что числитель в формуле начинает расти значительно быстрее знаменателя, даже если P<t. Пытался построить трёхмерный график для этой формулы, ничгео не понял, но вывод тот же - с таким быстрым ростом в степени нам нужно в любом случае собирать 100% подарков. Задача состоит в том, чтобы найти наиболее эффективный путь, по которому мы соберём все подарки. Пока можно не принимать во внимание улучшение полей. Как решить эту задачу без ML?
Первый вариант - автоматизировать программное решение
Простой алгоритм типа найти ближайшую точку, идти к ней, затем найти новую ближайшую точку, повторить, пока точки не кончатся. Перебирать разные способы на своей машинке, выбрать тот, который выдаст наибольшее количество очков
Второй вариант - автоматизировать интерфейсное решение. Создать интерфейс, руками тыкать, по-человечески придумывать оптимальную стратегию, перебирать.
В результате обоих решений мы должны собирать JSON файлик.
Можно комбинировать: допустим, самим выбирать только изменение полей, а выбирать траекторию будет робот, тоже вариант.
