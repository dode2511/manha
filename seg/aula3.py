arq = open("exercicio.txt", "r")

try:
  line = arq.readline()
  while line != '': 
     print(line, end='')
     line = arq.readline()
 

finally:
    arq.close()