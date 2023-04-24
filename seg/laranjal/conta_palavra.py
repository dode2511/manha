nome_arq = input("nome do arquivo")
arq = open(nome_arq,"r")





palavras = []

for linha in arq :
    for palavra in linha.split():
     palavras.append(palavra.upper())



dicinario = {}

for palavra in palavras:
   num = dicinario.get(palavra,None)
   if num == None:
      dicinario[palavra] = 1
   else:
      dicinario[palavra] = num + 1



maior = max(dicinario.values())



ordenadas = sorted(dicinario.items(),
                            key =lambda d:d[1],reverse = True)



for i,(palavra,quant) in enumerate(ordenadas,start=1):
   print(f"{i} : {palavra} - {quant} vezes")

   if i == 20:
      break