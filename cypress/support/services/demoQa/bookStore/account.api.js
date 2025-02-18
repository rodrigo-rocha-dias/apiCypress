import RequestManager from "../../../../utils/requestManager";
import config from "../../../../config/env.config.json";

const ambiente = Cypress.env("ambiente") || "hml";
const baseUrl = config.demoQa?.ambiente?.[ambiente]?.bookStore?.baseUrl;
const requestManager = new RequestManager();

class Account {

  usuarioAutorizado(userName, password) {
    return requestManager.performRequest({
      method: "POST",
      url: baseUrl + `/Account/v1/Authorized`,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: {
        "userName": userName,
        "password": password,
      },
    })
  }

  gerarToken(userName, password) {
    return requestManager.performRequest({
      method: "POST",
      url: baseUrl + `/Account/v1/GenerateToken`,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: {
        "userName": userName,
        "password": password,
      },
    })
  }

  criarUsuario(userName, password) {
    return requestManager.performRequest({
      method: "POST",
      url: baseUrl + `/Account/v1/User`,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: {
        "userName": userName,
        "password": password,
      },
    })
  }

  deletarUsuario(uuid) {
    return requestManager.performRequest({
      method: "DELETE",
      url: baseUrl + `/Account/v1/User/${uuid}`,
    })
  }

  buscarUsuarioPorUserId(uuid) {
    return requestManager.performRequest({
      method: "GET",
      url: baseUrl + `/Account/v1/User/${uuid}`,
    })
  }

}

export default Account;
