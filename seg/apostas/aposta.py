import os

nomes = []
apostas = []
valores = []







def ler_arquivo():
    if not os.path.isfile("apostas.txt"):
       return
    with open ('apostas.txt','r') as arq :
     linhas  = arq.readline()
     for linha in linhas:
         parte = linha.split(';')
         nomes.append(parte[0])
         apostas.append(int(parte[1]))
         valores.append(float(parte[2][0:-1]))
    print(nomes)
    print(apostas)
    print(valores)

def salva_dados():
    with open ('apostas.txt','w') as arq :
     for nome,aposta,valor in zip(nomes,apostas,valores):
         arq.write(f"{nome};{aposta};{valor}")










def titulo(titulo,sub ="-"):
    print()
    print(titulo)
    print(sub*30)

def incluir():
    titulo("inclusao de apostas")
    nome = input("nome do apostador")
    while True:
     aposta = input("aposta mo dormato 2x1").lower()

     partes  = aposta.split("x")
     if len(partes) != 2:
        print("formato incorreto")
        continue

     if not partes[0].strip().isdigit() or not partes[1].strip().isdigit():
        print("informe somente numeros no placar")
        continue
     valor = float(input("valor da aposta R$"))
     nomes.append(nome)
     apostas.append(aposta)
     valores.append(valor)
    
def listar():
   titulo("listagem de apostas")

   for nome,aposta in zip(nomes,apostas):
      partes = aposta.split("x")
      if int(partes[0]>int(partes[1])):
         apostou = "Caxias"
      elif int(partes[0] == int(partes[1])):
         apostou = "Empate"
      else:
         apostou = "Gremio"
      print(f"{nome:30}  {aposta:^6}  {valor:9.2f}")    
def totalizar():
    pass
def apostas_por_resultado():
    pass
def resultados():
    pass


while True:
 titulo("Avenida Bet")
 print("1. Cadastrar apostas")
 print("2. listar apostas")
 print("3. Listar resultados")
 print("4. total de apostas")
 print("5. total de apostas")
 print("6. reultado e premiacao")
 print("7.sair")
 res = int(input(""))

 if(res == 1):
    incluir()
 elif(res ==2):
    listar()
 elif(res ==3):
    listar_resultados()
 elif(res ==4):
 elif(res==5):
 elif(res==6):
 else:
    break