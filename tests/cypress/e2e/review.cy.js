
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

        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)

        cy.uiLogin(user)

        cy.wait(10000)

    })

})