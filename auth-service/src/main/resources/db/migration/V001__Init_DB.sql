create table users (
	id int8 not null generated always as identity,
	created timestamp not null default now(),
	updated timestamp not null default now(),
	username varchar not null,
	first_name varchar null,
	last_name varchar null,
	email varchar null,
	"password" varchar not null,
	status varchar null default 'ACTIVE'::character varying,
	constraint user_pk primary key (id),
	constraint users_username_key unique (username)
);

create table roles (
	id int8 not null generated always as identity,
	created timestamp not null default now(),
	updated timestamp not null default now(),
	"name" varchar not null,
	constraint role_pk primary key (id),
	constraint roles_name_key unique (name)
);

create table user_roles (
	user_id int8 not null,
	role_id int8 not null,
	constraint role_id_fk foreign key (role_id) references roles(id),
	constraint user_id_fk foreign key (user_id) references users(id)
);

