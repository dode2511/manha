valTotal = 0
arr =[]
arrVal =[]
maior = 0

while True :
    desc = input('DESCRICAO: ')
    if desc =='fim':
    
        total = len(arr)
        print("total de produtos informados : ",total)
        print("valor total: " ,valTotal)
        print("maior valor: ",maior)
        arrValLenght = len(arrVal)
        print("meida de valor dos produtos: ", (valTotal/total))
        break
    val = float(input("VALOR:"))
    if val > maior:
        maior = val
    valTotal +=val
    arrVal.append(val)
    arr.append(desc)