/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json')
import addprodutoPage from '../support/page_objects/addproduto.page.js';
import loginPage from '../support/page_objects/login.page.js';
import enderecoPage from '../support/page_objects/endereco.page.js.js';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  
    beforeEach(() => {
        cy.visit('produtos/')
    });

    it.only('Deve add produtos,fazer login, editar dados e finalizar pedido - fluxo do pedido', () => {

        addprodutoPage.AddProdutos()

        loginPage.LoginFaturamento()

        enderecoPage.editarEnderecoFaturamento()
    });


})