
import mapPage from '../support/pages/Map'
import createPage from '../support/pages/Create'

describe('Recomendação', () => {

    it('deve recomendar um food truck', () => {
        const user = {
            name: 'Rafaela',
            instagram: '@oquefazerbnu',
            password: 'pwa123'
        }

        const foodtruck = {
            latitude: '-26.892559316783526',
            longitude: '-49.09839928150178',
            name: 'Carga Pesada',
            details: 'Um dogão prensado tradicional',
            opening_hours: 'das 19h às 23h',
            open_on_weekends: false
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Food truck cadastrado com sucesso!')
    })

    it('não deve cadastrar foodtruck com o nome duplicado', ()=> {
        const user = {
            name: 'Ed',
            instagram: '@edhgh',
            password: 'pwa123'
        }

        const foodtruck = {
            latitude: '-26.916444922066976',
            longitude: '-49.10482048988343',
            name: 'Trailer do BBzinho',
            details: 'Canetas mais fiéis do mercado',
            opening_hours: 'das 8h às 20h',
            open_on_weekends: false
        }

        //Cadastrando usuário e foodtruck via API pra ganhar tempo de execução
        cy.apiCreateUser(user)
        cy.apiLogin(user)
        cy.apiCreateFoodTruck(foodtruck)


        cy.uiLogin(user)
        mapPage.createLink()
        createPage.form(foodtruck)
        createPage.submit()
        createPage.modal.haveText('Esse food truck já foi cadastrado!')
    })

    it('todos os campos são obrigatórios', ()=> {
        const user = {
            name: 'Growth',
            instagram: '@gsuplementos',
            password: 'pwd123'
        }

        const foodtruck = {
            latitude: '-23.584548837854058',
            longitude: '-46.674446913517876',
        }

        cy.apiCreateUser(user)
        cy.uiLogin(user)

        mapPage.createLink()
        cy.setGeolocation(foodtruck.latitude, foodtruck.longitude)
        createPage.submit()

        const message = 'Os campos nome, descrição e horário de funcionamento devem ser informados para recomendar um food truck!'
        createPage.modal.haveText(message)

    })

})