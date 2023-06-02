1.
CREATE DATABASE aula13;
USE aula13;



2.

CREATE TABLE usuario (
  id INT NOT NULL AUTO_INCREMENT, 
  nome VARCHAR(45) NOT NULL, 
  email VARCHAR(45) NOT NULL, 
  fone VARCHAR(45) , 
  PRIMARY KEY (id)
);

CREATE TABLE forum (
  id INT NOT NULL AUTO_INCREMENT, 
  titulo VARCHAR(45) NOT NULL, 
  data_criacao  DATE, 
  PRIMARY KEY (id)
);


CREATE TABLE postagem (
  id INT NOT NULL AUTO_INCREMENT, 
  usuario_id   INT NOT NULL,
  forum_id   INT NOT NULL,
  mensagem TEXT NOT NULL, 
  data_postagem DATE, 
  PRIMARY KEY (id),
  CONSTRAINT fk_postagem_usuario FOREIGN KEY (usuario_id) REFERENCES usuario (id),
  CONSTRAINT fk_postagem_forum FOREIGN KEY (forum_id) REFERENCES forum (id)
);


