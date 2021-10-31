class LoginFaturamento {

    

    LoginFaturamento(){
        cy.get('.dropdown-toggle > .text-skin > .icon-basket').click()
        cy.get('#cart > .dropdown-menu > .widget_shopping_cart_content > .mini_cart_content > .mini_cart_inner > .mcart-border > .buttons > .checkout').click()
        cy.get('.showlogin').click()
        cy.get('#username').type("aluno_ebac@teste.com", { log: false })
        cy.get('#password').type("teste@teste.com", { log: false })
        cy.get('.woocommerce-button').click()

    }

}

export default new LoginFaturamento()