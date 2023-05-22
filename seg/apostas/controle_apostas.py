import os
apostas = []

import csv

def salva_apostas():
  with open('apostas.csv', mode='w', encoding="utf-8", newline="") as csv_file:
    colunas = ['nome', 'clube', 'valor']
    writer = csv.DictWriter(csv_file, fieldnames=colunas)
    writer.writeheader()

    # percorre a lista de dicionários e salva os dados
    for aposta in apostas:
      writer.writerow(aposta)



def carrega_apostas_salvas():
  with open('apostas.csv', mode='r', encoding="utf-8") as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for linha in csv_reader:
      apostas.append(linha)



def titulo(msg, traco="-"):
  print()
  print(msg)
  print(traco*40)



def incluir():
  titulo("Inclusão de Aposta")
  nome = input("Nome do Apostador: ")
  clube = input("Clube: ")
  valor = float(input("Valor Apostado R$: "))
  apostas.append({"nome": nome, "clube": clube, "valor": valor})
  print("Ok! Aposta Cadastrada com Sucesso.")



def listar_ordem_nome():
  titulo("Lista de Apostas em Ordem de Nome")
  apostas2 = sorted(apostas, key=lambda aposta: aposta['nome'])
  
  print(f"Nome do Apostador............: Clube.........: Valor R$:")
  for aposta in apostas2:
    print(f"{aposta['nome']:30} {aposta['clube']:15} {float(aposta['valor']):9.2f}")



def listar_ordem_valor():
  titulo("Lista de Apostas em Ordem de Valor")
  apostas2 = sorted(apostas, key=lambda aposta: float(aposta['valor']))
  
  print(f"Nome do Apostador............: Clube.........: Valor R$:")
  for aposta in apostas2:
    print(f"{aposta['nome']:30} {aposta['clube']:15} {float(aposta['valor']):9.2f}")




def pesq_clube():
  titulo("Pesquisa por Clube")

pesq = input("clube:").upper()
contador = 0

print(f"nome do apostador ......: valorR$:")

for aposta in apostas:
  if pesq == aposta["clube"].upper():
    print(f"{aposta['nome']:30} {float(aposta['valor']):9.2f}")
    contador = contador + 1

if contador == 0 :
  print(f"Não há apostas nesse clube {pesq}")



def resumo_clube_num():

  dicionario = {}

  for aposta in apostas:
    num = dicionario.get(aposta['clube'],None)
    if num == None:
      dicionario[aposta["clube"]] = 1
    
    else:
      dicionario[aposta["clube"]] = num 

  print(f"nome do clube ......: N Apostas:")
  for(clube,numero)in dicionario.items():
    print(f"{clube:24} {numero}")


def resumo_clube_val():
  dicionario = {}

  for aposta in apostas:
    valor = dicionario.get(aposta['clube'],None)
    if valor == None:
      dicionario[aposta["clube"]] = float(aposta["valor"])
    
    else:
      dicionario[aposta["clube"]] = valor + float(aposta["valor"])

  print(f"nome do clube ......: N Apostas:")
  for(clube,numero)in dicionario.items():
    print(f"{clube:24} {numero}")
  
    






if os.path.isfile("apostas.csv"):
  carrega_apostas_salvas()

while True:
  titulo("Programa: Quem será o Campeão Brasileiro", "=")
  print("1. Incluir Aposta")
  print("2. Listar em Ordem de Nome")
  print("3. Listar em Ordem de Valor")
  print("4. Pesquisar por Clube")
  print("5. Resumir: Clube e Nº Apostas")
  print("6. Resumir: Clube e R$ Total Apostado")
  print("7. Finalizar")
  opcao = int(input("Opção: "))
  if opcao == 1:
    incluir()
  elif opcao == 2:
    listar_ordem_nome()
  elif opcao == 3:
    listar_ordem_valor()
  elif opcao == 4:
    pesq_clube()
  elif opcao == 5:
    resumo_clube_num()
  elif opcao == 6:
    resumo_clube_val()
  else:
    salva_apostas()
    break
