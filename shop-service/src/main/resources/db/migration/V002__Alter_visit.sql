alter table visit add if not exists created_by varchar not null;
alter table visit add if not exists description text not null;
alter table visit add if not exists deadline timestamp NULL;