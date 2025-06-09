# Requisitos do Sistema

## Requisitos Funcionais

| ID   | Descrição                                                                                                                                                                                  |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| RF01 | O sistema deve prover um forma de criação de cadastro com email e senha para novos usuários                                                                                                |
| RF02 | O sistema deve ser capaz de autenticar um usuário com email e senha                                                                                                                        |
| RF03 | O sistema deve fornecer acesso para usuários a atividades (quiz e puzzle) para treinar codificação RGB                                                                                     |
| RF04 | O sistema deve fornecer uma interface para usuários selecionarem uma atividade (quiz ou puzzle) para fazer                                                                                 |
| RF05 | O sistema deve manter registro do progresso do usuário fora das atividades (quais ele fez, quais ainda não fez)                                                                            |
| RF06 | A interface citada anteriormente deve conseguir informar quais atividades (quiz ou puzzle) já foram concluídas pelo usuário                                                                |
| RF07 | O sistema deve manter registro do progresso do usuário em uma atividade (saber quantas e quais perguntas ele respondeu, acertou e errou, e quantas e quais ainda faltam serem respondidas) |
| RF08 | Ao fim de uma atividade, o sistema deve oferecer uma revisão das questões quais o usuário escolheu a alternativa errada                                                                    |
| RF09 | Quando o usuário escolher uma alternativa errada, o sistema deve mostrar a alternativa correta                                                                                             |
| RF10 | O sistema deve apresentar acesso a recursos e materiais para aprendizado da teoria a respeito da codificação RGB                                                                           |
| RF11 | O sistema deve fazer a verificação de cada resposta do usuário e retornar o resultado (correto ou incorreto)                                                                               |
| RF12 | A interface de uma atividade deve informar ao usuário o progresso dele dentro dela                                                                                                         |

## Regras de Negócio

| ID   | Descrição                                                                                                                       |
| ---- | ------------------------------------------------------------------------------------------------------------------------------- |
| RN01 | Usuários só podem jogar se autenticados                                                                                         |
| RN02 | Uma atividade deve ser considerada concluída quando o usuário acerta todas as questões (incluindo as retentativas após o erros) |
| RN03 | Um usuário deve poder cometer no máximo 3 erros (no quarto ele perde a atividade e deve recomeçar)                              |

## Requisitos Não funcionais

| ID    | Descrição                                                                                       |
| ----- | ----------------------------------------------------------------------------------------------- |
| RNF01 | O tempo de resposta ao usuário na verificação de sua resposta no jogo deve ser menor que 100 ms |
| RNF02 | A verificação das respostas deve ser feita no servidor                                          |
| RNF03 | A verificação das respostas deve ser feita sem consultar o banco de dados                       |
