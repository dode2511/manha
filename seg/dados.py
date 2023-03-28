def dados(idade,nome="",cidade=""):

    if nome != "":
        print(f"Nome: {nome}")
    if cidade != "":
        print(f"Cidade: {cidade}")
    if idade >= 18:
        print("voce é maior de idade")
    else:
        print("voce é menor de idade")