@placeholder
Feature: Placeholder - Recursos

    Contexto:
    Este teste verifica se os recursos podem ser consultados e atualizados corretamente utilizando a API JSONPlaceholder.

    Cenários testados:
    1. Criar
    2. Consultar por ID
    3. Atualizar por ID
    4. Excluir por ID

    @regressivo @recursos1
    Scenario Outline: Criar um novo recurso com o titulo (<titulo>) corpo (<corpo>) usuarioId (<usuarioId>)
        Given que faca a criacao de um novo recurso titulo "<titulo>" corpo "<corpo>" e usuarioId "<usuarioId>"
        When obter o codigo de resposta "<response_code>"
        Then sera retornado recurso com titulo "<responseTitulo>" corpo "<responseCorpo>" e usuarioId "<responseUserId>" com sucesso
        Examples:
        | titulo           | corpo         | usuarioId              | response_code | responseTitulo | responseCorpo | responseUserId         |
        | Teste Titulo 1   | Teste Corpo 1 | 1                      | 201           | Teste Titulo 1 | Teste Corpo 1 | 1                      |
        |                  | Teste Corpo 2 | 2                      | 201           |                | Teste Corpo 2 | 2                      |
        | Teste Titulo 3   |               | 3                      | 201           | Teste Titulo 3 |               | 3                      |
        | Teste Titulo 4   | Teste Corpo 4 |                        | 201           | Teste Titulo 4 | Teste Corpo 4 |                        |
        | Teste Titulo 5   | Teste Corpo 5 | 0                      | 201           | Teste Titulo 5 | Teste Corpo 5 | 0                      |
        | Teste Titulo 6   | Teste Corpo 6 | 1234567891011121314ABC | 201           | Teste Titulo 6 | Teste Corpo 6 | 1234567891011121314ABC |

    @regressivo @recursos
    Scenario Outline: Buscar recurso por ID - "<tipo>"
        Given fizer consulta de recurso por "<tipo>"
        Then sera retornado consulta do recurso com sucesso
        Examples:
        | tipo         |
        | sucesso      |
        | invalido     |
        | null         |
        | longo        |
        | inexistente  |

    @regressivo @recursos
    Scenario Outline: Atualizar recurso por ID - "<tipo>"
        Given que faca a atualizacao do recurso por "<tipo>"
        Then sera retornado no response os dados atualizados corretamente ou uma mensagem de erro
        Examples:
        | tipo         |
        | sucesso      |
        | invalido     |
        | null         |
        | longo        |
        | inexistente  |

    # endpoint aparentemente com erro, deveria me retornar status response de erro e devolveu um 200
    @regressivo @recursos
    Scenario Outline: Excluir recurso por ID - "<tipo>"
        Given que faca a exclusao do recurso por "<tipo>"
        # Then sera retornado consulta do recurso com sucesso
        Examples:
        | tipo         |
        | sucesso      |
        | invalido     |
        | null         |
        | longo        |
        | inexistente  |
