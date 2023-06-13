create table if not exists shop_manager (
	id int8 not null generated always as identity,
	created timestamp not null default now(),
	updated timestamp not null default now(),
	username varchar not null,
	shop_id int8 not null,
	constraint shop_user_pk primary key (id)
);

alter table shop_manager drop constraint if exists shop_user_fk;

alter table shop_manager add constraint shop_user_fk foreign key (shop_id) references shop(id);