import mapPage from '../support/pages/Map'
import foodTruckPage from '../support/pages/Foodtruck'


describe('Avaliações de foodtruck', ()=> {

    it('fazer uma nova avaliação', ()=> {

        const user = {
            name: 'Justin Bieber',
            instagram: '@Bieber',
            password: 'pwd123'
        }

        const foodtruck = {
            latitude: '-26.89212411750574',
            longitude: '-49.098919630050666',
            name: 'Xis do nalu',
            details: 'Lanches entregues com atraso',
            opening_hours: 'das 08h às 14h',
            open_on_weekends: false
        }

        const review = {
            comment: 'O server ta lindo, mas ja ta atrasado 2 semanas',
            stars: 3
        }

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)

        cy.uiLogin(user)

        mapPage.goToFoodtruck(foodtruck.name)
        foodTruckPage.addReview(review)

        cy.wait(10000)

    })

})