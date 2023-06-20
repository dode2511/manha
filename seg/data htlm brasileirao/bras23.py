from bs4 import BeautifulSoup
import requests
from exemplo import titulo


jogadores = []


def carregar_jogadores():


 url = "https://ge.globo.com/futebol/brasileirao-serie-a/"

 req = requests.get(url)

 html = BeautifulSoup(req.content, "html.parser")


 artilheiros = html.find_all("div",class_='ranking-item-wraper')


 for artilheiro in artilheiros:
    nome = artilheiro.find("div",class_="jogador-nome")
    posicao = artilheiro.find("div",class_="jogador-posicao")
    gols = artilheiro.find("div",class_="jogador-gols")
    fotos = artilheiro.find_all("img")
    clube = fotos[1]["alt"]
    jogadores.append({"nome":nome,"posicao": posicao,"gols":gols,"clube": clube})

def lsitar():
   titulo("listargem dos artilheiros")
   for jogador in jogadores:
      nome = jogador["nome"]
      posicao = jogador["posicao"]
      gols = jogador["gols"]
      clube = jogador["clube"]

      print(f"{nome:20}  {clube:15}  {posicao:20}  {gols}")
      
   


while True:
 titulo("Goleadores do Brasileirao 2023")
 print("1. Listar Goleadores")
 print("2. Goleadores em Ordem de Nome")
 print("3. Goleadores por Clube")
 print("4. Finalizar")
 opcao = int(input("opcao:"))
 match opcao:
    case 1:
       listar()
    case 2 :
       lsitar_ordem()
    case 3 :
       agrupar_grupo()
    case other:
       break
 
 
