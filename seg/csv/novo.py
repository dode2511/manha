import csv

def cadasrar(nomes, idades, cursos):
    nome = input('Digite o nome do aluno: ')
    idade = int(input('Digite a idade do aluno: '))
    curso = input('Digite o curso do aluno: ')
    nomes.append(nome)
    idades.append(idade)
    cursos.append(curso)
    salvar_dados(nomes, idades, cursos)
    print('Aluno cadastrado com sucesso')


def listar(nomes, idades, cursos):
    for i in range(len(nomes)):
        print(f'{nomes[i]} - {idades[i]} anos - {cursos[i]}')



def pesquisar(nomes, idades, cursos):
    nome_pesquisa = input('Digite o nome do aluno: ')
    encontrou = False
    for i in range(len(nomes)):
        if nomes[i] == nome_pesquisa:
            print(f'{nomes[i]} - {idades[i]} anos - {cursos[i]}')
            encontrou = True
    if not encontrou:
        print('Aluno não encontrado')

def excluir(nomes, idades, cursos):
    excluir = input('Digite o nome do aluno: ')
    encontrou = False
    for i in range(len(nomes)):
        if nomes[i] == excluir:
            nomes.pop(i)
            idades.pop(i)
            cursos.pop(i)
            encontrou = True
            break
    if encontrou:
        print('Aluno excluído com sucesso')
        salvar_dados(nomes, idades, cursos)
    else:
        print('Aluno não encontrado')

def resumo(nomes, idades, cursos):
    n_alunos = len(nomes)
    media_idade = sum(idades) / n_alunos if n_alunos > 0 else 0
    print(f'Número de alunos: {n_alunos}')
    print(f'Média de idade: {media_idade:.2f} anos')

def carregar_dados():
    nomes = []
    idades = []
    cursos = []
    with open('alunos.txt', 'r') as arq:
        next(arq)
        for line in arq :
            line = line.strip().split(',')
            nomes.append(line[0])
            idades.append(line[1])
            cursos.append(line[2])
            salvar_dados(nomes, idades, cursos)
    return nomes, idades, cursos


def salvar_dados(nomes, idades, cursos):
    with open('alunos.txt', 'w', newline='') as csvfile:
        writer = csv.writer(csvfile)
        for i in range(len(nomes)):
            writer.writerow([nomes[i], idades[i], cursos[i]])
   


nomes, idades, cursos = carregar_dados()
while True:
        print('------------------------')
        print('1. Cadastrar Aluno')
        print('2. Listar os Alunos')
        print('3. Pesquisar por Nome')
        print('4. Excluir')
        print('5. Resumo (Nº de Alunos e Média de Idade)')
        print('6. Finalizar')
        opcao = int(input('Escolha uma opção: '))

        if opcao == 1:
            cadasrar(nomes, idades, cursos)

        elif opcao == 2:
            listar(nomes, idades, cursos)

        elif opcao == 3:
            pesquisar(nomes, idades, cursos)

        elif opcao == 4:
            excluir(nomes, idades, cursos)

        elif opcao == 5: 
           resumo(nomes,idades,cursos)
        else:
         break
