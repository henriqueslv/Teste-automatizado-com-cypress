#language: pt
Funcionalidade: Listagem

    Como usuario desejo acessar a Listagem
    Para que possa visualizar meus dados cadastrados

Cenario: Listagem sem registros
    Dado que o site nao possui registro
    Quando acessar listagem
    Entao devo visualizar a listagem vazia


Cenario: Listagem com apenas um registro
    Dado que o site possui apenas um registro
    Quando acessar a listagem
    Entao devo visualizar apenas um registro