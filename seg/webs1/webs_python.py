from bs4 import BeautifulSoup
import requests

url = "https://www.python.org/"

req = requests.get(url)
# print(req)
# print(req.content)

# faz um "parser" (conversão) da página para análise
html = BeautifulSoup(req.content, "html.parser")

# exibe o conteúdo "mais legível"
# print(html.prettify())

listas = html.find_all("ul", class_="menu")

# print(listas[15])
itens = listas[15].find_all("li")

for item in itens:
#    print(item)
#    print(item.string)
  print(item.a.string)

