SELECT filme.tituloOriginal, genero.nome
FROM filme,genero
WHERE filme.idGenero = genero.id
AND genero.nome
IN ('Ficção','Faroeste','Aventura','Policial','Drama') 
ORDER BY genero.id; 






SELECT filme.tituloOriginal, genero.nome,filme.duracao
FROM filme,genero
WHERE filme.idGenero = genero.id
AND genero.nome
IN ('Suspense') AND (filme.duracao BETWEEN 70 AND 130)
ORDER BY genero.id; 




DROP PROCEDURE IF EXISTS ADD44min;

DELIMITER $$
	CREATE PROCEDURE ADD44min(val INT)
	BEGIN
		UPDATE filme SET duracao = duracao + val;
		SELECT * FROM venda;
	END $$
DELIMITER ;