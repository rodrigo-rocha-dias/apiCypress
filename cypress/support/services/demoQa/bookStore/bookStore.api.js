import RequestManager from "../../../../utils/requestManager";
import config from "../../../../config/env.config.json";

const ambiente = Cypress.env("ambiente") || "hml";
const baseUrl = config.demoQa?.ambiente?.[ambiente]?.bookStore?.baseUrl;
const requestManager = new RequestManager();

class BookStore {

  buscarLivros() {
    requestManager.performRequest({
      metodo: "GET",
      url: baseUrl + `/BookStore/v1/Books`,
    })
  }

  criarLivros() {
    requestManager.performRequest({
      metodo: "POST",
      url: baseUrl + `/BookStore/v1/Books`,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: {
        "userId": "string",
        "collectionOfIsbns": [
          {
            "isbn": "string"
          }
        ]
      },
    })
  }

  deletarLivros(userId) {
    requestManager.performRequest({
      metodo: "DELETE",
      url: baseUrl + `/BookStore/v1/Books?UserId=${userId}`,
    })
  }

  buscarLivro(isbn) {
    requestManager.performRequest({
      metodo: "GET",
      url: baseUrl + `/BookStore/v1/Book?ISBN=${isbn}`,
    })
  }

  deletarLivro(isbn, userId) {
    requestManager.performRequest({
      metodo: "DELETE",
      url: baseUrl + `/BookStore/v1/Book`,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: {
        "isbn": isbn,
        "userId": userId
      }
    })
  }

  atualizarLivro(isbn, userId, isbn) {
    requestManager.performRequest({
      metodo: "PUT",
      url: baseUrl + `/BookStore/v1/Books/${isbn}`,
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: {
        "userId": userId,
        "isbn": isbn
      },
    })
  }

}

export default BookStore;
