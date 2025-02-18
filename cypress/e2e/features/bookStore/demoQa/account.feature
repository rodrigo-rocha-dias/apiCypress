@demoQa
Feature: Book Store - Account

    @regressivo @bookStore @account
    Scenario: validar autorização - true
        Given que faca login na api de book store com usuario "userNameMaster"
        And faca requisicao para validar se esta autorizado
        When obter o codigo de resposta "200"
        # Then sera retornado resposta no corpo "true"

    @regressivo @bookStore @account
    Scenario: validar autorização - false
        Given que faca login na api de book store com usuario "userInvalido"
        And faca requisicao para validar se esta autorizado
        When obter o codigo de resposta "200"
        # Then sera retornado resposta no corpo "false"

    @regressivo @bookStore @account
    Scenario: gerar token de acesso - sucesso
        Given que faca login na api de book store com usuario "userNameMaster"
        When obter o codigo de resposta "200"
        Then sera retornado token com sucesso

    @regressivo @bookStore @account
    Scenario: gerar token de acesso - falha (usuario invalido)
        Given que faca login na api de book store com usuario "userInvalido"
        When obter o codigo de resposta "200"
        Then sera retornado resposta no corpo resultado "User authorization failed." e status "Failed"

    @regressivo @bookStore @account
    Scenario: gerar token de acesso - falha (senha invalida)
        Given que faca login na api de book store com usuario "senhaInvalida"
        When obter o codigo de resposta "200"
        Then sera retornado resposta no corpo resultado "User authorization failed." e status "Failed"

    # @regressivo @bookStore @account
    # Scenario: criar usuário - sucesso
    #     Given que faca requisicao de criar usuario na book store
    #     When obter o codigo de resposta "200"
    #     Then sera criado um usuario e logo apos validacao sera excluido

    # @regressivo @bookStore @account
    # Scenario: criar usuário - falha (usuário já existente)
    #     Given que faca requisicao de criar usuario na book store
    #     When obter o codigo de resposta "200"
    #     Then sera retornado resposta no corpo resultado "User authorization failed." e status "Failed"

    @regressivo @bookStore @account
    Scenario: Buscar recurso por id - sucesso
        Given que faca login na api de book store com usuario "userNameMaster"
        And faca buscar por usuario pelo userid "c31a3131-d8fa-4201-ace9-b5071d02b3fe"
        # When obter o codigo de resposta "200"
        # Then sera retornado consulta do recurso "1" com sucesso

    @regressivo @bookStore @account
    Scenario: Buscar recurso por ID - falha (user not found!)
        Given que faca login na api de book store com usuario "userName2"
        And faca buscar por usuario pelo userid "c31a3131-d8fa-4201-ace9-12345678910"
        When obter o codigo de resposta "401"
        Then sera retornado mensagem "User not found!"

    @regressivo @bookStore @account
    Scenario: Buscar recurso por ID - falha (user not authorized!)
        Given que faca login na api de book store com usuario "userNameMaster"
        And faca buscar por usuario pelo userid "c31a3131-d8fa-4201-ace9-b5071d02b3fe"
        When obter o codigo de resposta "401"
        Then sera retornado mensagem "User not authorized!"
