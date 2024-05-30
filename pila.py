'''
from collections import deque
#Ejercicio Basico de invertir pila con lista
pila = deque()
variable = input("Cual es la palabra a invertir: ")
lista = list(variable)
TamanioItems = len(lista)-1
for i in range(TamanioItems, -1, -1):
    pila.append(lista[i])
print(pila)
'''
from collections import deque
#Listas para validar operaciones
PilaNum, PilaOper, pilafinal = deque(), deque(), deque()
PilaNum.extend(["0","1","2","3","4","5","6","7","8","9"])
PilaOper.extend(["+","*","/","-","**"])
#Almacenamos el ingreso en una pila
pilaexpresion = deque(input("Expresión a valorar: "))

while(len(pilaexpresion) > 0):
    auxContador = pilaexpresion[-1]
    #Ciclo para identificar numeros
    if(PilaNum.count(auxContador) > 0):
        while(PilaNum.count(auxContador) > 0):
            pilaexpresion.pop()
            if(len(pilaexpresion)> 0):
                auxContador = pilaexpresion[-1]
            else:
                auxContador = False
        pilafinal.append(1)
    #Ciclo para identificar operadores
    else:
        pilaexpresion.pop()
        pilafinal.append(2)

print(pilafinal)