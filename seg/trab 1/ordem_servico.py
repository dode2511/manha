import os
nome = []
valor = []
stats = []

def carregar_dados_do_arquivo():
  if not os.path.isfile("os.csv"):
    return
  
  with open("os.csv", "r") as arq:
    linhas = arq.readlines()

    for linha in linhas:
      partes = linha.split(";")
      stats.append(partes[2])
      nome.append(partes[0])
      valor.append(float(partes[1][0:-1]))    

def salvar_dados_no_arquivo():
  with open("os.csv", "w") as arq:
    
  
    for (nomes,valores,status) in zip(nome, valor, stats):
      arq.write(f"{nomes};{valores};{status}\n")


def titulo(texto, sublinhado="-"):
  print()
  print(texto)
  print(sublinhado*40)


def listar():
  titulo("Lista de Os")
  print("Nº Nome do Cliente....... valor status.....")
  for x, (nomes, valores, status) in enumerate(zip(nome, valor, stats), start=1):
    print(f"{x:2} {nomes:20}  {valores:3}  {status}")

def incluir():
  titulo("Incluir Os")
  nomes = input("Nome do Cliente: ") 
  valores = float(input("Valor em R$: "))
  status = input("status da Os: ")

  nomes.append(nome)
  valor.append(valores)
  stats.append(status)  
  print("Ok! Ordem de serviço  Cadastrado")

def pesquisar():
  titulo("Pesquisa por nome do cliente")

  pesq = input("Nome: ")

  print("Nº Nome do Cliente....... valor status.....")
  
  for x, (nomes, valores, status) in enumerate(zip(nome, valor, stats), start=1):
    if pesq.upper() in nomes.upper():
      print(f"{x:2} {nomes:20}  {valores:3}  {status}")

def estatisticas():
  pass

def alterar():
 titulo("Alteracao por numero da Os")

 num = int(input("Num: "))

 if num > len(nome):
  print("Essa Ordem de Serviço não existe")
 
  
 for x in nome:
    if pesq.upper() in nomes.upper():
      print(f"{x:2} {nomes:20}  {valores:3}  {status}")



carregar_dados_do_arquivo()

while True:
  titulo("Cadastro de Ordens de Serviço", "=")
  print("1. Incluir OS")
  print("2. Listar OS")
  print("3. Pesquisar por marca do cliente")
  print("4. estatisticas ")
  print("5. alterar status da OS (por número)")
  print("6. Finalizar")
  opcao = int(input("Opção: "))  
  if opcao == 1:
    incluir()
  elif opcao == 2:
    listar()
  elif opcao == 3:
    pesquisar()
  elif opcao == 4:
     estatisticas()
  elif opcao == 5:
     alterar()
  else:
   
    salvar_dados_no_arquivo()
    break