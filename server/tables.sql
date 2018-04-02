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
	classificacao varchar(50),
	tipo varchar(50),
	titulo varchar(100),
	descricao varchar(250) not null,
	primary key(id),
	foreign key(id_funcionario) references funcionario(id)
);