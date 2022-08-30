
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
        // 1 - a massa de testes deve ser independente
        // 2 - latitude e longitude deve ser única
        // 3 - você deve encontrar e corrigir o bug
    })

    it('todos os campos são obrigatórios', ()=> {

    })

})