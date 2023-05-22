
-- 1- Crie um gatilho (trigger) para baixar o estoque (qtd_estoque) de um produto quando ele for vendido (registro inserido na tabela item).


DELIMITER $$

CREATE TRIGGER estoque_att
AFTER INSERT ON item
FOR EACH ROW
BEGIN
  UPDATE produto
  SET qtd_estoque = qtd_estoque - NEW.qtd_venda
  WHERE id = NEW.produto_id;
END$$


DELIMITER ;


-- 2 - Crie um gatilho (trigger) para retornar o estoque (qtd_estoque) de um produto quando a venda dele for excluída (registro excluído da tabela item).


DELIMITER $$

CREATE TRIGGER venda_del
AFTER DELETE ON item
FOR EACH ROW
BEGIN
  UPDATE produto
  SET qtd_estoque = qtd_estoque + OLD.qtd_venda
  WHERE id = OLD.produto_id;
END $$


DELIMITER ;



-- 3 -  Crie um procedimento (stored procedure) que receba o id de uma venda e retorne (exiba no terminal) a quantidade de itens vendidos nesta venda


DROP PROCEDURE IF EXISTS qtd_vendidos;

DELIMITER $$

CREATE PROCEDURE qtd_vendidos (IN id_venda INT)
BEGIN
  SELECT COUNT(*) AS quantidade
  FROM item
  WHERE id_venda = id_venda;
END $$

DELIMITER ;

CALL qtd_vendidos(1);



-- 4 - Crie um gatilho (trigger) que ao incluir um funcionário, caso não seja informado um e-mail, cadastre-o com o e-mail “alamaula@gmail.com”.

DELIMITER $$

CREATE TRIGGER email_padrao
BEFORE INSERT ON funcionario
FOR EACH ROW
BEGIN
  IF NEW.email IS NULL THEN
    SET NEW.email = 'alamaula@gmail.com';
  END IF;
END$$

DELIMITER ;

INSERT INTO funcionario (nome, matricula) VALUES ("leon junior", "357");


--5 - Crie um procedimento (stored procedure) que receba o número de uma nota fiscal (nf) e retorne (exiba no terminal) a quantidade de itens vendidos nesta venda


DROP PROCEDURE IF EXISTS qtd_ven_nf;
DELIMITER $$

CREATE PROCEDURE qtd_ven_nf (IN num_nf VARCHAR(20))
BEGIN
  DECLARE quantidade INT;

  SELECT SUM(qtd_venda) INTO quantidade
  FROM item
  INNER JOIN venda ON item.venda_id = venda.id
  WHERE venda.notafiscal = num_nf;

  SELECT quantidade;

END $$

DELIMITER ;

CALL qtd_ven_nf()