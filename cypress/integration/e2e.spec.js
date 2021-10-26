/// <reference types="cypress" />


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

    it('Deve selecionar o primeiro produto da compra', () => {


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
        .contains('Arcadio Gym Short').click()
        cy.get('.button-variable-item-32').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button')

        cy.get('[class="product-block grid"]')
        .contains('Arcadio Gym Short').click()
        cy.get('.button-variable-item-36').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(1)
        cy.get('.single_add_to_cart_button')
    
     
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 8)
       


    });

   
}) 