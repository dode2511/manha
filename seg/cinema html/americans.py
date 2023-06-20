from bs4 import BeautifulSoup
import requests


produto = input("Produto")
# ---------------------------------------------------------------- Cineflix Pelotas
url = "https://www.americanas.com.br/busca/" + produto

pagina = requests.get(url)

html = BeautifulSoup(pagina.content, "html.parser")

