arrFilmes = []

def  incluir():
    nome = input("nomde do filme: ")
    arrFilmes.append(nome)

def  listagem():
     for c,filme in enumerate(arrFilmes,start=1):
      print(c,".",filme)
   
def  del_filme():
    filmeRem = input("qual filme deseja remover? : ")
    arrFilmes.remove(filmeRem)
    print("filme removido.") 

def  lista_ordenada():
      newArr = arrFilmes.sorted()
      for c,filme in enumerate(newArr,start=1):
        print(c,".",filme)
     

while(True):
    print("FILMES")
    print("-"*20)
    print("1. ADICIONAR FILME")
    print("2. LISTAR FILMES")
    print("3. LISTAR FILMES EM ORDEM ALFABETICA")
    print("4. REMOVER FILME")
    print("5. SAIR")
    print("-"*20)
    num = int(input(": "))

    if num == 5:
        break
    if num == 1:
     incluir()
    if num == 2:
     listagem()
       
    if num == 3:
     lista_ordenada()

    if num == 4: 
      del_filme()