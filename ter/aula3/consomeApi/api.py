import requests


url_api ="http://localhost:3000/produtos"

def titulo(texto,sublinhado ="-"):

    print()
    print(texto)
    print(sublinhado)

def incluir():
   titulo("inclusao de produtos")
   descricao = input("Descricao.... : ")
   marca = input("Marca.... : ")
   quantidade = int(input("Quantidade.... : "))
   preco = float(input("Preco R$ .... : "))

   produto = {"descricao" : descricao,
              "marca" : marca,
              "quant" : quantidade,
              "preco" : preco}
   response = requests.post(url_api,json=produto)

   if response.status_code == 201:
      print("ok. produto cadastrado ")
      novo_produto = response.json()
      print(f"codigo {novo_produto['id']}")


def listar():
    titulo("Lista de Produtos Cadastrados")
    response = requests.get(url_api)
    produtos = response.json()
    print("cod. Descricao do Produto ..... Marca .....  Quant ..... Preco .....")
    for prod in produtos:
       print(f"{prod.id:4d}",end = " ")
       print(f"{prod.descricao:30}",end=" ")
       print(f"{prod.marca:15}", end=" ")
       print(f"{prod.quant:6d}", end= " ")
       print(f"{prod.preco:9.2f}")

def alterar():
   titulo("Alteracao de Produto")
   id = int(input("Codigo do Produto :"))
   response = requests.get(url_api+"/"+str(id))
   produto = response.json()
   if produto['id'] == 0:
      print("Erro... Informe codigo Existente")
      return
   
   print("Indorme ps dadps dps campos a serem alterados.")

   print(f"Descricao ....: {produto['descricao']}")
   descricao = input("Descricao....: ")
   print(f"Marca ....: {produto['marca']}")
   marca = input("Marca....: ")
   print(f"Qauntidade ....: {produto['quant']}")
   quantidade = input("Quantidade....: ")
   print(f"Preco R$ ....: {produto['preco']}")
   preco = input("Preco....: ")

   prod_alterado = { descricao if descricao != "" else produto['descricao']}
   marca_alterado ={  marca if marca != "" else produto['marca']}
   quant_alterado = {int(quantidade) if quantidade != "" else produto['quant']}
   preco_alterado =  {float(preco) if preco != "" else produto['preco']}
                    
   
  


def excluir():
   pass

def pesquisar():
   pass

def estatistica():
   pass





while True:
 titulo("Cadastro de produtos - consome api","=")
 print("1. Inclusao de Produtos")
 print("2. Listagem de Produtos")
 print("3. Alteracao de Produtos")
 print("4. Exclusao de Produtos")
 print("5. Pesquisar por Codigo")
 print("6. Dados Estatisticos")
 print("7. Finalzar")
 select = int(input(":"))

 if select == 1:
    incluir()
 elif select == 2:
    listar()
 elif select == 3:
    alterar()
 elif select == 4:
    excluir()
 elif select == 5:
    pesquisar()
 elif select == 6:
    estatistica()
 else:
    break

        