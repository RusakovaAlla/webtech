CREATE TABLE students(
    id INTEGER PRIMARY KEY, 
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    address TEXT NOT NULL
);

INSERT INTO students VALUES (1, "Андрей", 21, "Рязань");
INSERT INTO students VALUES (2, "Марина", 28, "Москва");
INSERT INTO students VALUES (3, "Анастасия", 30, "Санкт-Петербург");
INSERT INTO students VALUES (4, "Илья", 41, "Москва");
INSERT INTO students VALUES (5, "Сергей", 18, "Пенза");
INSERT INTO students VALUES (6, "Анна", 19, "Москва");
INSERT INTO students VALUES (7, "Иван", 20, "Новосибирск");
INSERT INTO students VALUES (8, "Антон", 32, "Москва");
INSERT INTO students VALUES (9, "Валерий", 37, "Санкт-Петербург");
INSERT INTO students VALUES (10, "Александра", 21, "Москва");

SELECT name FROM students WHERE address="Москва" AND age >= 18 AND age < 30;
