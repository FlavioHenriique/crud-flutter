create table USUARIO (
    NOME varchar(50),
    email varchar(50) primary key,
    senha varchar(50)
);

insert into usuario (nome, email, senha) values ('Flavio', 'flavio@gmail.com', 'flavio');
insert into usuario (nome, email, senha) values ('Teste', 'teste@gmail.com', 'teste');
insert into usuario (nome, email, senha) values ('Jacqueline', 'jaque@gmail.com', 'jaque');