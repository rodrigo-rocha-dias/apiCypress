Feature: DogApi - Breeds

    @regressivo @dogApi @breeds
    Scenario: Listar todas raças
        # Given que esteja na dog api
        When fizer uma consulta de todas as racas
        And obter o codigo de resposta "200"
        Then sera retornado consulta com sucesso
