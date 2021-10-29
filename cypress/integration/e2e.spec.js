/// <reference types="cypress" />

const perfil = require('../fixtures/perfil.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it.only('Deve selecionar o primeiro produto da compra', () => {


        cy.get('[class="product-block grid"]')
        .contains('Apollo Running Short').click()
        cy.get('.button-variable-item-32').click()
        cy.get(':nth-child(2) > .value > .variable-items-wrapper > .variable-item').click()
        cy.get('.input-text').clear().type(4)
        cy.get('.single_add_to_cart_button').click()  
        
        cy.get('[class="product-block grid"]')
        .contains('Arcadio Gym Short').click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Red').click()
        cy.get('.input-text').clear().type(2)
        cy.get('.single_add_to_cart_button').click()

        cy.get('[class="product-block grid"]')
        .first().click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Gray').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button')

        cy.get('[class="product-block grid"]')
        .contains('Arcadio Gym Short').click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button')
    
     
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 6)
       
        
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('.showlogin').click()
        cy.get('#username').type(perfil.usuario, {log: false})
        cy.get('#password').type(perfil.senha, {log: false})
        cy.get('.woocommerce-button').click()

        cy.get('#billing_first_name').clear().type("Damião")
        cy.get('#billing_last_name').clear().type("Filipe")
        cy.get('#billing_company').clear().type("Dami Hair")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search__field').click().type("Brasil").get('[aria-selected="true"]').click()

        cy.get('#billing_address_1').clear().type("avenida iraque")
        cy.get('#billing_address_2').clear().type("309")
        cy.get('#billing_city').clear().type("Uberlândia")
        cy.get('#select2-billing_state-container').click()
        cy.get('.select2-search__field').click().type("Minas Gerais").get('[aria-selected="true"]').click()
        cy.get('#billing_postcode').clear().type("38410-282")
        cy.get('#billing_phone').clear().type("34992332810")
        cy.get('#billing_email').clear().type("damiaofilipe@hotmail.com")
        cy.get('#order_comments').type("Por gentileza não mandar produtos errôneos. Gratidão!")

        cy.get('#terms').click()
        cy.get('#place_order').click()

        cy.get('.woocommerce-notice')


        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });

   
}) 