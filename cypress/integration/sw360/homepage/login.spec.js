
var username = 'namnp@sw360.org'
var pass = '1'

describe('Test Homepage', () => {
    
    beforeEach(() => {
        cy.visit('http://10.116.41.78:28111/')
    })

    it('Check log-in to home', () => {
        cy.get('span[class="sign-in"]').click()

        cy.get('input[id="_com_liferay_login_web_portlet_LoginPortlet_login"]')
        .clear()

        cy.get('input[id="_com_liferay_login_web_portlet_LoginPortlet_login"]')
        .type(username).should('have.value', username)

        cy.get('input[id="_com_liferay_login_web_portlet_LoginPortlet_password"]')
        .type(pass)

        cy.get('.lfr-btn-label').click()
        cy.title().should('eq', 'Welcome - SW360')


        cy.wait(3000)
    })
})