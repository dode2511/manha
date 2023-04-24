

clientes =[{"nome": "Luis Carlos",'idade':23},
           {"nome": "Ana Maria",'idade':32},
           {"nome": "Simone Santos",'idade':28},
           {"nome": "Bianca Costa",'idade':40},
           {"nome": "Zilmar Cardoso",'idade':30}]



print()
print("Lista de clintes")
print("-"*30)

for cliente in clientes:
    print(f"{cliente['nome']} - {cliente['idade']}anos")




clientes2 = sorted(clientes, key=lambda cliente : cliente['nome'])



print()
print("Lista de clintes")
print("-"*30)

for cliente in clientes2:
    print(f"{cliente['nome']} - {cliente['idade']}anos")



clientes3 = sorted(clientes, key=lambda cliente : cliente['idade'])



print()
print("Lista de clintes")
print("-"*30)

for cliente in clientes3:
    print(f"{cliente['nome']} - {cliente['idade']}anos")



