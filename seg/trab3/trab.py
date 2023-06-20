from bs4 import BeautifulSoup
import requests

produto = input("Produto: ")

url = "https://www.americanas.com.br/busca/" + produto

headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36"}

pagina = requests.get(url, headers=headers)

html = BeautifulSoup(pagina.content, "html.parser")

div_produto = html.find_all("div", class_="inStockCard__Wrapper-sc-1ngt5zo-0 iRvjrG")

print(div_produto[0])