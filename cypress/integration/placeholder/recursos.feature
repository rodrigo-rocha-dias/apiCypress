Feature: Placeholder - Recursos

    # @regressivo @placeholder @recursos
    # Scenario Outline: Criar um novo recurso com o titulo (<titulo>) corpo (<corpo>) usuarioId (<usuarioId>)
    #     Given que faca a criacao de um novo recurso titulo "<titulo>" corpo "<corpo>" e usuarioId "<usuarioId>"
    #     When obter o codigo de resposta "<response_code>"
    #     Then sera retornado recurso com titulo "<responseTitulo>" corpo "<responseCorpo>" e usuarioId "<responseUserId>" com sucesso
    #     Examples:
    #     | titulo           | corpo         | usuarioId              | response_code | responseTitulo | responseCorpo | responseUserId         |
    #     | Teste Titulo 1   | Teste Corpo 1 | 1                      | 201           | Teste Titulo 1 | Teste Corpo 1 | 1                      |
    #     |                  | Teste Corpo 2 | 2                      | 201           |                | Teste Corpo 2 | 2                      |
    #     | Teste Titulo 3   |               | 3                      | 201           | Teste Titulo 3 |               | 3                      |
    #     | Teste Titulo 4   | Teste Corpo 4 |                        | 201           | Teste Titulo 4 | Teste Corpo 4 |                        |
    #     | Teste Titulo 5   | Teste Corpo 5 | 0                      | 201           | Teste Titulo 5 | Teste Corpo 5 | 0                      |
    #     | Teste Titulo 6   | Teste Corpo 6 | 1234567891011121314ABC | 201           | Teste Titulo 6 | Teste Corpo 6 | 1234567891011121314ABC |

    @regressivo @placeholder @recursos
    Scenario: Buscar recurso por ID
        Given fizer consulta de recurso por id "1"
        When obter o codigo de resposta "200"
        Then sera retornado consulta do recurso "1" com sucesso

    # Isso pra mim é um bug, o response veio um array sem nenhuma informação
    @regressivo @placeholder @recursos
    Scenario: Buscar recurso por ID - Falha (ID inexistente)
        Given fizer consulta de recurso por id "11111111111111111111111111111111"
        When obter o codigo de resposta "404"
        # Then sera retornado consulta do recurso com sucesso

    # Isso pra mim é um bug, o response veio um array sem nenhuma informação do id null que consultei
    @regressivo @placeholder @recursos
    Scenario: Buscar recurso por ID
        Given fizer consulta de recurso por id ""
        When obter o codigo de resposta "200"
        # Then sera retornado consulta do recurso "1" com sucesso

    # @regressivo @placeholder @recursos
    # Scenario: Listar imagens de raça randomica
    #     Given fizer uma consulta de racas randomica
    #     When obter o codigo de resposta "200"
    #     Then sera retornado consulta randomica com sucesso