DROP SCHEMA IF EXISTS aula4;
CREATE SCHEMA IF NOT aula04;
USE aula04;


--produto

DROP TABLE IF EXISTS produtos;

CREATE TABLE IF NOT EXISTS produtos (
   referencia  VARCHAR(3) NOT NULL,
   descricao   VARCHAR(50) NULL DEFAULT NULL,
   estoque     INT(11) NOT NULL DEFAULT 0,
   PRIMARY KEY (referencia)

);


INSERT INTO produtos (referencia,descricao,estoque) VALUES ('001','Feijao',10);
INSERT INTO produtos (referencia,descricao,estoque) VALUES ('002','Arroz',5);
INSERT INTO produtos (referencia,descricao,estoque) VALUES ('003','Farinha',15);


DROP TABLE IF EXISTS itensVendas; 


CREATE TABLE IF NOT EXISTS itensVenda;

CREATE TABLE IF NOT EXISTS itensVenda(
    venda    INT(11) NULL DEFAULT NULL,
    produtos  VARCHAR(3) NULL DEFAULT NULL,
    quantidade INT(11) NULL DEFAULT NULL,
    CONSTRAINT fk_intensVenda_produto
      FOREIGN KEY (produtos) REFERENCES produtos (referencia) ON DELETE NO ACTION ON UPDATE NO ACTION

);


DELIMITER $$

CREATE TRIGGER trg_itensvenda_AI AFTER INSERT 
ON itensVenda
FOR EACH ROW
BEGIN
   UPDATE  produtos SET estoque = estoque - NEW.quantidade WHERE referencia = NEW.produto;
END $$

DELIMITER ;