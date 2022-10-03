import loginPage from '../pages/Login'
import mapPage from '../pages/Map'


Cypress.Commands.add('uiLogin', (user)=> {
    loginPage.go('-26.893406304860378', '-49.09837245941163')
    loginPage.form(user)
    loginPage.submit()

    mapPage.loggedUser(user.name)
})

Cypress.Commands.add('setGeolocation', (lat, long)=> {
    localStorage.setItem('qtruck:latitude', lat)
    localStorage.setItem('qtruck:longitude', long)
})
