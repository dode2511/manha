import os                      # importa o pacote os (Operational System)

# declara os vetores globais
nomes = []
palpites = []
valores = []

def carregar_dados_do_arquivo():
  # se o arquivo não existe, retorna
  if not os.path.isfile("apostas.csv"):
    return
  
  # abre o arquivo para leitura
  with open("apostas.csv", "r") as arq:
    # lê todas as linhas do arquivo e cria um vetor (linhas) 
    linhas = arq.readlines()

    # percorre todas as linhas do vetor
    for linha in linhas:
      # separa a linha em elementos de vetor, a cada ";"
      partes = linha.split(";")
      nomes.append(partes[0])
      palpites.append(partes[1])
      valores.append(float(partes[2][0:-1]))    

def salvar_dados_no_arquivo():
  # abre o arquivo para gravação (sobrepõe os dados)
  with open("apostas.csv", "w") as arq:
    
    # percorre os vetores e salva no arquivo
    for nome, palpite, valor in zip(nomes, palpites, valores):
      arq.write(f"{nome};{palpite};{valor}\n")

def titulo(texto, sublinhado="-"):
  print()
  print(texto)
  print(sublinhado*40)

def incluir():
  titulo("Inclusão de Apostas - Caxias x Grêmio")
  nome = input("Nome do Apostador: ")
  
  while True:
    # lower(), já converte na entrada o dado para minúsculas
    palpite = input("Palpite (no formato 2x1): ").lower()

    # separa em elementos de vetor a partir da ocorrência do x
    partes = palpite.split("x")

    if len(partes) != 2:
      print("Erro. Formato inválido")
      continue                        # volta ao início da repetição

    # strip(): retira os espaços em branco
    gols1 = partes[0].strip()  
    gols2 = partes[1].strip()

    # isdigit(): retorna verdadeiro se for dígito numérico
    if not gols1.isdigit() or not gols2.isdigit():    
      print("Erro. Informe apenas números no placar")
      continue                        # volta ao início do while

    break   # sai da repetição

  valor = float(input("Valor da Aposta R$: "))

  # acrescenta aos vetores
  nomes.append(nome)
  palpites.append(gols1+"x"+gols2)
  valores.append(valor)  
  print("Ok! Aposta realizada com sucesso")

def listar():
  titulo("Listagem das Apostas Cadastradas")

  print("Nome do Apostador............. Palpite Valor R$:")

  for nome, palpite, valor in zip(nomes, palpites, valores):
    print(f"{nome:30} {palpite:^7} {valor:9.2f}")

def listar_resultado():
  titulo("Listagem dos Resultados Apostados")

  print("Nome do Apostador............. Resultado")

  for nome, palpite in zip(nomes, palpites):
    partes = palpite.split("x")

    gols1 = int(partes[0])
    gols2 = int(partes[1])

    if gols1 > gols2:
      resultado = "Caxias"
    elif gols1 == gols2:
      resultado = "Empate"  
    else:
      resultado = "Grêmio"

    print(f"{nome:30} {resultado}")

def totalizar():
  titulo("Total de Apostas")

  num = len(nomes)
  total = sum(valores)

  print(f"Nº Apostas: {num}")
  print(f"Total Apostado R$: {total:9.2f}")

def apostas_resultado():
  titulo("Total de Apostas por Resultado")

  numCax, numEmp, numGre = 0, 0, 0
  totCax, totEmp, totGre = 0, 0, 0

  for palpite, valor in zip(palpites, valores):
    partes = palpite.split("x")

    gols1 = int(partes[0])
    gols2 = int(partes[1])

    if gols1 > gols2:
      numCax += 1              # numCax = numCax + 1
      totCax += valor          # totCax = totCax + valor
    elif gols1 == gols2:
      numEmp += 1
      totEmp += valor
    else:
      numGre += 1
      totGre += valor

  print(f"Caxias.: {numCax} apostas - Total R$: {totCax:9.2f}")
  print(f"Empates: {numEmp} apostas - Total R$: {totEmp:9.2f}")
  print(f"Grêmio.: {numGre} apostas - Total R$: {totGre:9.2f}")

def resultado():
  titulo("Resultado e Premiação")

  placar = input("Placar do Jogo: ")

  if placar not in palpites:
    print("Ninguém apostou este resultado")
    return

  total = sum(valores)
  totalVencedores = 0

  print(f"Total Apostado R$: {total:9.2f}\n")

  for nome, palpite, valor in zip(nomes, palpites, valores):
    if placar == palpite:
      totalVencedores += valor

  print("Nome do Apostador............. Valor R$: Prêmio R$:")

  for nome, palpite, valor in zip(nomes, palpites, valores):
    if placar == palpite:
      premio = (valor / totalVencedores) * total
      print(f"{nome:30} {valor:9.2f} {premio:9.2f}")

# chama a função que carrega os dados do arquivo
carregar_dados_do_arquivo()

while True:
  titulo("AvenidasBet: Controle de Apostas\nCaxias x Grêmio (Final do Gauchão 2023)", "=")
  print("1. Cadastrar Aposta")
  print("2. Listar Apostas")
  print("3. Listar Resultado")
  print("4. Total de Apostas")
  print("5. Apostas por Resultado")
  print("6. Resultado e Premiação")
  print("7. Finalizar")
  opcao = int(input("Opção: "))  
  if opcao == 1:
    incluir()
  elif opcao == 2:
    listar()
  elif opcao == 3:
    listar_resultado()
  elif opcao == 4:
    totalizar()
  elif opcao == 5:
    apostas_resultado()
  elif opcao == 6:
    resultado()
  else:
    # antes de sair, salva os conteúdos dos vetores no arquivo
    salvar_dados_no_arquivo()
    break
  