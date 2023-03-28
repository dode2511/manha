import csv

alunos = []
idades = []
cursos = []


def ler_arquivo():
    with open ('alunos.txt','r') as arq :
     linhas  = arq.readline()
     for linha in linhas:
         parte = linha.split(';')
         alunos.append(parte[0])
         alunos.append(int(parte[1]))
         alunos.append(parte[2])
    print(alunos)
    print(idades)
    print(cursos)

def salva_dados():
    with open ('alunos.txt','w') as arq :
     for nome,idade,curso in zip(alunos,idades,cursos):
         arq.write(f"{nome};{idade};{curso}")


def titulo(texto,sublinhado="-"):
 print()
 print(texto)
 print(sublinhado(*30))
 

def cadastrar():
    titulo("I0nclusao de Aluno")
    nome = input("Nome do Aluno: ")
    idade = int(input("Idade do Aluno: "))
    curso = input("Curso do Aluno: ")
    alunos.append(nome)
    idades.append(idade)
    cursos.append(curso)



def listar():
    titulo("Lista de Aluno Cadastrados ")
    for x,nome,idade,curso in enumerate(zip(alunos,idades,cursos),start=1):
        print(f" {x:2}   {nome:20} -- {idade:3} -- {curso}")


    
def pesquisar():
    pass

def excluir():
    pass
def resumo():
    pass

while True:
        print('------------------------')
        print('Cadastro de Alunos ')
        print('------------------------')
        print('1. Cadastrar Aluno')
        print('2. Listar os Alunos')
        print('3. Pesquisar por Nome')
        print('4. Excluir')
        print('5. Resumo ')
        print('6. Finalizar')
        opcao = int(input('Escolha uma opção: '))

        if opcao == 1:
            cadastrar()

        elif opcao == 2:
            listar()

        elif opcao == 3:
            pesquisar()

        elif opcao == 4:
            excluir()

        elif opcao == 5: 
           resumo()
        else:
         salva_dados()
         break
