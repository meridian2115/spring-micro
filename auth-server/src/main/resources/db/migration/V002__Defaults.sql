-- Создаем запись администратора admin admin
insert into users (username, first_name, last_name, email, password)
values('admin', 'Иван', 'Иванов', 'admin@mail.ru', '$2a$10$QewUvIJ2k0lzE.Qh2awTIeAamTrvWntntm5pFlBG63RZDkQMA67Sa');

-- Добавляем роли в БД
insert into roles
("name")
values('USER'), ('ADMIN');

-- Выдаем все роли для администратора
insert into user_roles (user_id, role_id)
select u.id, r.id from users u, roles r where username = 'admin';
