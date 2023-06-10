create table address (
    id int8 not null generated always as identity,
    created timestamp not null default now(),
    updated timestamp not null default now(),
    full_address varchar not null,
    constraint address_pk primary key (id)
);

create table shop (
    id int8 not null generated always as identity,
    created timestamp not null default now(),
    updated timestamp not null default now(),
    name varchar,
    address_id int8 not null,
    constraint shop_pk primary key (id),
    constraint address_fk foreign key (address_id) references address(id)
);

create table visit (
    id int8 not null generated always as identity,
    created timestamp not null default now(),
    updated timestamp not null default now(),
    status varchar not null default 'CREATED',
    username varchar not null,
    shop_id int8 not null,
    constraint visit_pk primary key (id),
    constraint shop_fk foreign key (shop_id) references shop(id)
);