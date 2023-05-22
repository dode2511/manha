import csv


notebook = []
def titulo(texto, sublinhado="-"):
    print()
    print(texto)
    print(sublinhado*40)



def carrega_dados():
    with open('notebooks.csv', mode='r', encoding="utf-8") as csv_file:
        csv_reader = csv.DictReader(csv_file)
        for linha in csv_reader:
            notebook.append(linha)

def marcas():
   
    titulo("Notebooks por Marca")

    lenovo= 0
    asus= 0
    acer = 0
    hp = 0
    dell = 0
    avita= 0
    msi =0
    apple =0


    for linha in notebook:
        if linha["brand"] == "Lenovo":
            lenovo += 1
        elif linha["brand"] == "ASUS":
            asus += 1
        elif linha["brand"] == "acer":
            acer += 1
        elif linha["brand"] == "Avita":
            avita += 1
        elif linha["brand"] == "HP":
            hp += 1
        elif linha["brand"] == "DELL":
            dell += 1
        elif linha["brand"] == "MSI":
            msi += 1
        elif linha["brand"] == "APPLE":
            apple += 1
           
    
    print(f"\n Lenovo: {lenovo}")
    print(f" Asus:   {asus}")
    print(f" Acer:   {acer}")
    print(f" HP:     {hp}")
    print(f" Dell:   {dell}")
    print(f" Avita:  {avita}")
    print(f" MSI:    {msi}")
    print(f" Apple:  {apple}")



def pesq_processador():
 titulo("Pesquisa por Marca de Porcessador")

 processador = input("Marca: ")


 if processador != "Intel" or processador != "AMD" or processador!= "M1" :
    print('Marca Não encontrada')
 for linha in notebook:
     if linha["processor_brand"] == processador:
       marca = linha["brand"]

       marca_pro =  linha["processor_brand"]

       modelo_pro =  linha["processor_name"]

       preco =linha["Price"]

       print(f" Marca: {marca:8}       Marca do Processador: {marca_pro:8}       Modelo do Processador: {modelo_pro:8}         Preço {preco}")
    
    
     

def  calc_Medio():
    titulo("Preço Medio")
    marca = input("Marca: ")
    total = 0
    comp = 0
   
    for linha in notebook:
       if linha["brand"] == marca:
        preco = int(linha["Price"])
        comp += 1
        total += preco
    if total == 0 :
       print("Marca Nao encontrada")
    media = total /comp
    print(f"Media de Preço : {media:9.1f}")
     
 

def top_10():
   titulo("Processadores mais Caros (Top 10)")
   precos = []
   new_preco = []
   for linha in notebook:
       precos.append(int(linha["Price"]))
   precos.sort()
   
   for i in range(10):
    a = precos.pop()
    new_preco.append(a)
   for linhas in notebook:
       if int(linhas["Price"]) >= new_preco[9]:
        marca = linhas["brand"]

        marca_pro =  linhas["processor_brand"]

        modelo_pro =  linhas["processor_name"]

        preco =linhas["Price"]
        print(f" Marca: {marca:8}       Marca do Processador: {marca_pro:8}       Modelo do Processador: {modelo_pro:8}         Preço {preco}")


def comparar_processadores():
  titulo("Compração por Porcessador")
  opcao1 = input("Marca : ")
  opcao2 =  input("Marca que deseja comparar: ")

  total_op_1 = 0
  total_op_2 = 0

  

  for linha in notebook:
        
        if linha["processor_brand"] == opcao1:
            total_op_1 += 1
        if linha["processor_brand"] == opcao2:
            total_op_2 += 1

  if total_op_1 == 0 or total_op_2 == 0 :
      print('Marcas não Encontradas')
  else:
     print(f"{opcao1:5}: Total de Modelos Registrados: {total_op_1:5}")
     print(f"{opcao2:5}:  Total de Modelos Registrados: {total_op_2:5}")
       



def pesq_preco():
    titulo("Pesquisa por preço")
    marca = input("Marca : ")
    preco =  int(input("Preço Maximo: "))
    
    for linha in notebook:
        if linha["brand"] == marca and int(linha["Price"]) <= preco:
            processador = linha["processor_brand"]
            processador_modelo =linha["processor_name"]
            val = linha["Price"]
            print(f"Marca: {marca:8}       Marca do Processador: {processador:8}       Modelo do Processador: {processador_modelo:8}         Preço {val}")

  


carrega_dados()


while True :
  titulo("Dados Notebooks")    
  print("1. Agrupar por Marca")
  print("2. Pesquisar por Marca do Processador ")
  print("3. Calcular Preço Médio")
  print("4. Listar  os mais Caros (Top 10)")
  print("5. Compara Processadores")
  print("6. Pesquisar por Marca e Preco ")
  print("7. Sair ")
  opcao = int(input("Opção: "))
  if opcao == 1:
      marcas()
  elif opcao == 2:
     pesq_processador()
  elif opcao == 3:
     calc_Medio()
  elif opcao == 4:
       top_10()
  elif opcao == 5:
    comparar_processadores()
  elif opcao ==6:
        pesq_preco()
  else:
     break




