class EnderecoFaturamento {

    editarEnderecoFaturamento(){
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

        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')

    }

}

export default new EnderecoFaturamento()