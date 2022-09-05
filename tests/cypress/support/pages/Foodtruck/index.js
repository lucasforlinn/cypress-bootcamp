class FoodTruckPage {

    addReview(review) {
        cy.get('textarea[name=comment]').type(review.comment)
        cy.get(`input[name=stars][value="${review.stars}"]`)
            .click({force: true})
        cy.contains('button', 'Enviar avaliação').click()
    }

    checkReview(review, user){
        cy.get('.review-box .comment')
            .should('be.visible')
            .should('have.text', review.comment)

        cy.get('.review-box .user .stars').find('svg').should('have.length', review.stars)

        cy.get('.review-box .details span')
            .should('be.visible')
            .should('have.text', user.instagram)
        
    }
}

export default new FoodTruckPage()