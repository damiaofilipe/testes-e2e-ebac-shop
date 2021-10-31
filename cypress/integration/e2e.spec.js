/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json')
import enderecoPage from '../support/page_objects/endereco.page.js';


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  
    beforeEach(() => {
        cy.visit('produtos/')
    });

    it('Deve selecionar o primeiro produto da compra usando teste customizados', () => {

        cy.addProdutos('Apollo Running Short', '32', 'Black', 4)
        cy.addProdutos('Arcadio Gym Short', '36', 'Red', 2)
        cy.addProdutos('Apollo Running Short', '34', 'Black', 3)
        cy.addProdutos('Arcadio Gym Short', '33', 'Red', 1)

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 10)

        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('.showlogin').click()
        cy.get('#username').type(perfil.usuario, { log: false })
        cy.get('#password').type(perfil.senha, { log: false })
        cy.get('.woocommerce-button').click()

        enderecoPage.editarEnderecoFaturamento()
    });


})