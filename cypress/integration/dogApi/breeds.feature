Feature: DogApi - Breeds

    @regressivo @dogApi @breeds
    Scenario: Listar todas raças
        Given fizer uma consulta de todas as racas
        When obter o codigo de resposta "200"
        Then sera retornado consulta com sucesso

    @regressivo @dogApi @breeds
    Scenario Outline: Listar imagens de raça <breed>
        Given fizer uma consulta de imagem da raca "<breed>"
        When obter o codigo de resposta "<response_code>"
        Then sera retornado imagem da raca "<breed>" com sucesso
        Examples:
        | breed            | response_code |
        | affenpinscher    | 200           |
        | african          | 200           |
        | airedale         | 200           |
        # + todas as raças

    @regressivo @dogApi @breeds
    Scenario: Listar imagens de raça - Falha (raça inexistente)
        Given fizer uma consulta de imagem da raca "PITBULL"
        When obter o codigo de resposta "404"
        Then sera retornado mensagem "Breed not found (master breed does not exist)"

    @regressivo @dogApi @breeds
    Scenario: Listar imagens de raça randomica
        Given fizer uma consulta de racas randomica
        When obter o codigo de resposta "200"
        Then sera retornado consulta randomica com sucesso