create table usuario (
	id serial primary key,
	nombre varchar(50) not null,
	email varchar(50) unique not null,
	contrasena varchar(100) not null
);