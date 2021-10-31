class AddProdutos {

    AddProdutos(){
        cy.addProdutos('Apollo Running Short', '32', 'Black', 4)
        cy.addProdutos('Arcadio Gym Short', '36', 'Red', 2)
        cy.addProdutos('Apollo Running Short', '34', 'Black', 3)
        cy.addProdutos('Arcadio Gym Short', '33', 'Red', 1)

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 10)

    }

}

export default new AddProdutos()