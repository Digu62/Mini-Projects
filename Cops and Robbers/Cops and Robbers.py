def moveDown(maze,position,lastPositions):
    if position[0]+1 > 4: #Identifica final da tabela
         return False, position, lastPositions
    
    newposition = [position[0]+1,position[1]].copy()
    
    if maze[newposition[0]][newposition[1]] != 1 and newposition not in lastPositions:
        lastPositions.append(position)
        position[0] += 1
        return True, position, lastPositions

    return False, position, lastPositions

def moveUp(maze,position,lastPositions):

    if position[0]-1 < 0: #Identifica final da tabela
        return False, position, lastPositions
    
    newposition = [position[0]-1,position[1]].copy()

    if maze[newposition[0]][newposition[1]] != 1 and newposition not in lastPositions:
        lastPositions.append(position)
        position[0] -= 1
        return True, position, lastPositions

    return False, position, lastPositions

def moveRight(maze,position,lastPositions):
    if position[1]+1 > 4: #Identifica final da tabela
        return False, position, lastPositions
    
    newposition = [position[0],position[1]+1].copy()

    if maze[newposition[0]][newposition[1]]  != 1 and newposition not in lastPositions:
        lastPositions.append(position)
        position[1] += 1
        return True, position, lastPositions

    return False, position, lastPositions

def moveLeft(maze,position,lastPositions):
    if position[1]-1 < 0: #Identifica final da tabela
        return False, position, lastPositions

    newposition = [position[0],position[1]-1].copy()

    if maze[newposition[0]][newposition[1]] != 1 and newposition not in lastPositions:
        lastPositions.append(position)
        position[1] -= 1
        return True, position, lastPositions

    return False, position, lastPositions

def percorrer(maze, position, move=None, robbersFinded=False, lastPositions = []):
    if robbersFinded == True:
        return robbersFinded

    pos = position.copy()
    #last = lastPosition.copy()
    positionsPassed = lastPositions.copy()

    if move == None:
        value = [True, pos, pos]
    elif move == 1:
        value = moveDown(maze,pos,positionsPassed)
    elif move == 2:
        value = moveRight(maze,pos,positionsPassed)
    elif move == 3:
        value = moveUp(maze,pos,positionsPassed)
    elif move == 4:
        value = moveLeft(maze,pos,positionsPassed)

    if position == [4,4]:
         robbersFinded = True
    
    # else:
    #     value = move
    if value[0]: #Verifica se pode moder
        robbersFinded = percorrer(maze, value[1], 2, robbersFinded, value[2]) #Right
        robbersFinded = percorrer(maze, value[1], 1, robbersFinded, value[2]) #Down]
        robbersFinded = percorrer(maze, value[1], 4, robbersFinded, value[2]) #Left
        robbersFinded = percorrer(maze, value[1], 3, robbersFinded, value[2]) #Up
    return robbersFinded


def percorrerLabirinto(maze, position):
    robbersFinded = False
    robbersFinded = percorrer(maze, position)
    return robbersFinded

T = int(input())
matrix = []
counter = 0
while counter < T*5:
    ip = input()
    if ip != ' ' and ip != '':
        counter += 1
        #print(f'counter={counter}')
        matrix.extend(list(map(int, ip.split())))
#print(f'matrix={matrix}')
#Converte os casos em um vetor de matrizes
initCase = 0
finalCase = 25
cases = []
for i in range(T):
    line = 0
    fLine = 4
    case = []
    m = []
    m.clear()

    m = matrix[initCase:finalCase]
    for j in range(5):
        case.append(m[line:fLine+1])
        line = fLine + 1
        fLine = line + 4
    cases.append(case)
    initCase = finalCase
    finalCase = initCase + 25

#print(case)

for i in range(T): #Para cada caso ele irá buscar o resultado
    if percorrerLabirinto(cases[i], [0,0]):
        print("COPS")
    else:
        print("ROBBERS")