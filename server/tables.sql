create table funcionario (
	id serial,
	nome varchar(50) not null,
	data_admissao varchar(10) not null,
	primary key(id)
);

create table incidente (
	id serial,
	id_funcionario int,
	data varchar(10) not null,
	classificacao varchar(20),
	tipo varchar(20),
	titulo varchar(20),
	descricao varchar(120) not null,
	primary key(id),
	foreign key(id_funcionario) references funcionario(id)
);