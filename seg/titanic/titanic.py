import csv
titanic = []

def carrega_dados():
    with open('titanic.csv', mode='r', encoding="utf-8") as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for linha in csv_reader:
            titanic.append(linha)

def titulo(texto, sublinhado="-"):
    print()
    print(texto)
    print(sublinhado*40)

def dados_gerais():
    titulo("Dados Gerais")
    num = len(titanic)
    print(f"Nº de Passageiros: {num}")

    num_sobreviventes = 0
    num_mortos = 0
    num_homens = 0
    num_mulheres = 0
    num_1classe = 0
    num_2classe = 0
    num_3classe = 0

    for linha in titanic:
        if int(linha["Survived"]) == 1:
            num_sobreviventes += 1
        else:
            num_mortos += 1

        if linha["Sex"] == "male":
            num_homens += 1
        elif linha["Sex"] == "female":
            num_mulheres += 1

        if linha["Pclass"] == "1":
            num_1classe += 1
        elif linha["Pclass"] == "2":
            num_2classe += 1
        elif linha["Pclass"] == "3":
            num_3classe += 1
        
    print(f"Nº de Sobreviventes: {num_sobreviventes}")
    print(f"Nº de Mortos: {num_mortos}")

    print(f"\nNº Homens: {num_homens}")
    print(f"Nº Mulheres: {num_mulheres}")

    print(f"\nNº Passageiros na 1ª Classe: {num_1classe}")
    print(f"Nº Passageiros na 2ª Classe: {num_2classe}")
    print(f"Nº Passageiros na 3ª Classe: {num_3classe}")

def sobre_sexo():
    titulo("Sobreviventes por Sexo")

    num_homens = 0
    num_mulheres = 0

    num_homens_sobre = 0
    num_homens_mortos = 0

    num_mulheres_sobre = 0
    num_mulheres_mortos = 0

    for linha in titanic:
        if linha["Sex"] == "male":
            num_homens += 1
            if int(linha["Survived"]) == 1:
                num_homens_sobre += 1
            else:
                num_homens_mortos += 1
        elif linha["Sex"] == "female":
            num_mulheres += 1
            if int(linha["Survived"]) == 1:
                num_mulheres_sobre += 1
            else:
                num_mulheres_mortos += 1

    print(f"\nNº Homens: {num_homens}")
    print(f" - Nº de Sobreviventes: {num_homens_sobre}")
    print(f" - Nº de Mortos: {num_homens_mortos}")

    print(f"\nNº Mulheres: {num_mulheres}")
    print(f" - Nº de Sobreviventes: {num_mulheres_sobre}")
    print(f" - Nº de Mortos: {num_mulheres_mortos}")

carrega_dados()

while True:
    titulo("Estatísticas: Passageiros do Titanic")    
    print("1. Dados Gerais")
    print("2. Sobreviventes por Sexo")
    print("3. Sobreviventes por Classe")
    print("4. Idades")
    print("5. Finalizar")
    opcao = int(input("Opção: "))
    if opcao == 1:
        dados_gerais()
    elif opcao == 2:
        sobre_sexo()
    else:
        break
