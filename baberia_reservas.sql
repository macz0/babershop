-- Migrations will appear here as you chat with AI

create table clientes (
  id bigint primary key generated always as identity,
  nombre text not null,
  telefono text not null,
  email text
);

create table barberos (
  id bigint primary key generated always as identity,
  nombre text not null,
  especialidad text
);

create table servicios (
  id bigint primary key generated always as identity,
  nombre text not null,
  duracion_minutos int not null,
  precio numeric(10, 2) not null
);

create table citas (
  id bigint primary key generated always as identity,
  cliente_id bigint references clientes (id),
  barbero_id bigint references barberos (id),
  servicio_id bigint references servicios (id),
  fecha timestamp with time zone not null,
  estado text not null
);

create table horarios (
  id bigint primary key generated always as identity,
  barbero_id bigint references barberos (id),
  dia_semana text not null,
  hora_inicio time not null,
  hora_fin time not null
);