linhas = 6
colunas = 7


jogo= []



def cria_jogo ():
    for i in range(linhas):
       jogo.append([])
       for j in range(colunas):
        jogo[i].append(" ")
def  mostra_jogo ():
    for i,linha in enumerate(jogo,start=1):
       print(f"{i} |",end="")
       for casa in linha:
        print(f" {casa} ",end="")
       print("|")
    print("  +---------------------+")
    print("    1  2  3  4  5  6  7")


def linha_disponivel(coluna):
  disponivel = -1
  for i in range(linhas-1,-1,-1):
    if jogador[i][col] == " ":
      disponivel = i
      break

  return disponivel


def winner(simbulo):
  #checando horizontalmente
  for l in range(linhas):
   for c in range(colunas-3):
    if jogo[l][c] == simbulo and jogo[l][c+1] == simbulo and jogo[l][c+2] == simbulo and jogo[l][c+3] == simbulo:
      return True
  #checando verticalmente
  for l in range(linhas-3):
   for c in range(colunas):
    if jogo[l][c] == simbulo and jogo[l+1][c] == simbulo and jogo[l+2][c] == simbulo and jogo[l+3][c] == simbulo:
      return True
   #checando transversalmente (para baixo)
  for l in range(linhas-3):
   for c in range(colunas -3):
    if jogo[l][c] == simbulo and jogo[l+1][c+1] == simbulo and jogo[l+2][c+2] == simbulo and jogo[l+3][c+3] == simbulo:
      return True
    #checando transversalmente (para cima)
  for l in range(linhas-1,linhas -3,-1):
   for c in range(colunas -3):
    if jogo[l][c] == simbulo and jogo[l-1][c+1] == simbulo and jogo[l-2][c+2] == simbulo and jogo[l-3][c+3] == simbulo:
      return True



cria_jogo()

mostra_jogo()



contador =1

while True:
 jogador = 'x' if contador % 2 == 1 else "o"

 col = int(input(f"\n jogador '{jogador}'n informe a coluna"))


 if col == 0 or col > colunas:
   break
 
 
 line = linha_disponivel(col-1)
 if line == -1:
   print("coluna cheia!")
 else:
   jogo[line][col-1] = jogador
   contador +=1
   

 

 mostra_jogo()
 if winner(jogador):
   print()
   print("*"*40)
   print(f" parabens jogador '{jogador}' ! você é o vencedor")
   print("*" * 40)
   break
 
 if contador == linhas *colunas:
   print()
   print("="*40)
   print(f" Empate")
   print("=" * 40)
   break
