from bs4 import BeautifulSoup
import requests

url = "https://edeciofernando.github.io/pizzaria/"

req = requests.get(url)

# faz um "parser" (conversão) da página para análise
html = BeautifulSoup(req.content, "html.parser")

# exibe o conteúdo "mais legível"
# print(html.prettify())
# print(html.title)
# print(html.p)
# print(html.ul)

# print(html.title.string)
# print(html.p.string)
# print(html.ul.string)
# print(html.ul.li.string)

# find(): encontra a 1ª ocorrência
menu = html.find("ul")
# print(menu)

# find_all(): encontra todas (e cria uma lista)
links = menu.find_all("li")

# print(links)
for link in links:
    print(link.string)

# pega todas as listas não-ordenadas 
menus = html.find_all("ul")

print("-"*40)

# print(menus)
diferenciais = menus[1].find_all("li")

for diferencial in diferenciais:
    print(diferencial.string)

print("-"*40)
destaques = html.find("section", id="contato")    
# print(destaques)
print(destaques.p.string)