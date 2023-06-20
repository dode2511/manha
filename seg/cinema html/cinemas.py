from bs4 import BeautifulSoup
import requests

# ---------------------------------------------------------------- Cineflix Pelotas
url_pel = "https://www.cineflix.com.br/programacao/shopping-pelotas/"

cinepel = requests.get(url_pel)

html_pel = BeautifulSoup(cinepel.content, "html.parser")

filmes_pel = html_pel.find("table", class_="prog_table_1907")

#print(filmes_pel)

tr_filmes_pel = filmes_pel.find_all("tr", attrs={"cinemaid": "1907"})

#print(tr_filmes_pel)

cinepel = []

for tr in tr_filmes_pel:
    td = tr.find_all("td")    
#    print(td)
#    print(td[0].get_text().strip())
#    print(td[1].get_text().strip())
    classif = tr.find("i")
#    print(classif["title"])
    cinepel.append({"titulo": td[0].get_text().strip(), "traducao": td[1].get_text().strip(), "classif": classif["title"]})

#print(cinepel)

# ------------------------------------------------------------- Cineflix Porto Alegre
url_poa = "https://www.cineflix.com.br/programacao/shopping-total"

cinepoa = requests.get(url_poa)

html_poa = BeautifulSoup(cinepoa.content, "html.parser")

filmes_poa = html_poa.find("table", class_="prog_table_67")

#print(filmes_poa)

tr_filmes_poa = filmes_poa.find_all("tr", attrs={"cinemaid": "67"})

#print(tr_filmes_poa)

cinepoa = []

for tr in tr_filmes_poa:
    td = tr.find_all("td")    
#    print(td[0].get_text().strip())
#    print(td[1].get_text().strip())
    classif = tr.find("i")
#    print(classif["title"])
    cinepoa.append({"titulo": td[0].get_text().strip(), "traducao": td[1].get_text().strip(), "classif": classif["title"]})

#print(cinepoa)

# -------------------------------------------------------------- (Módulos do Programa)
def titulo(msg, traco="-"):
    print()
    print(msg)
    print(traco*50)

def lista_pel():
    titulo("Filmes em Cartas - Cineflix Pelotas")

    print("Título do Filme........................: Tradução Classificação")

    for filme in cinepel:
        print(f"{filme['titulo']:40s}   {filme['traducao']}    {filme['classif']}")

def lista_poa():
    titulo("Filmes em Cartas - Cineflix Porto Alegre")

    print("Título do Filme........................: Tradução Classificação")

    for filme in cinepoa:
        print(f"{filme['titulo']:40s}   {filme['traducao']}    {filme['classif']}")

def lista_todos():
    # declara um conjunto (não aceita duplicações)
    todos = set()     

    for filme in cinepel:
        todos.add(filme['titulo'])

    for filme in cinepoa:
        todos.add(filme['titulo'])

    # print(todos)
    
    # converte set (que não mantém ordem) em lista (que mantém)
    lista = list(todos)

    # classifica em ordem a lista
    lista2 = sorted(lista)

    titulo("Todos os Filmes em Cartas")

    for filme in lista2:
        print(filme)

def apenas_pel():
    # declara dois conjuntos (para obter diferença)
    set_pel = set()     
    set_poa = set()

    for filme in cinepel:
        set_pel.add(filme['titulo'])

    for filme in cinepoa:
        set_poa.add(filme['titulo'])

    filmes_em_pelotas = set_pel.difference(set_poa)

    titulo("Filmes em Cartas: Apenas em Pelotas")

    if len(filmes_em_pelotas) == 0:
        print("Obs.: * Não há filmes em cartas apenas em Pelotas")
    else:
        for filme in filmes_em_pelotas:
            print(filme)

def apenas_poa():
    # declara dois conjuntos (para obter diferença)
    set_pel = set()     
    set_poa = set()

    for filme in cinepel:
        set_pel.add(filme['titulo'])

    for filme in cinepoa:
        set_poa.add(filme['titulo'])

    filmes_em_poa = set_poa.difference(set_pel)

    titulo("Filmes em Cartas: Apenas em Porto Alegre")

    if len(filmes_em_poa) == 0:
        print("Obs.: * Não há filmes em cartas apenas em Porto Alegre")
    else:
        for filme in filmes_em_poa:
            print(filme)

def lista_comuns():
    # declara dos conjuntos (para obter a intersecção)
    set_pel = set()     
    set_poa = set()

    for filme in cinepel:
        set_pel.add(filme['titulo'])

    for filme in cinepoa:
        set_poa.add(filme['titulo'])

    filmes_comuns = set_pel.intersection(set_poa)

    titulo("Filmes em Cartas em Ambos os Cinemas")

    if len(filmes_comuns) == 0:
        print("Obs.: * Não há filmes em cartas em ambos os cinemas")
    else:
        for filme in filmes_comuns:
            print(filme)

while True:
    titulo("Filmes em Cartas - Cineflix")    
    print("1. Shopping Pelotas")
    print("2. Shopping Porto Alegre")
    print("3. Todos os Filmes")
    print("4. Apenas em Pelotas")
    print("5. Apenas em Porto Alegre")
    print("6. Comuns nos 2 Cinemas")
    print("7. Finalizar")    
    opcao = int(input("Opção: "))
    if opcao == 1:
        lista_pel()
    elif opcao == 2:
        lista_poa()
    elif opcao == 3:
        lista_todos()
    elif opcao == 4:
        apenas_pel()
    elif opcao == 5:
        apenas_poa()
    elif opcao == 6:
        lista_comuns()
    else:
        break
