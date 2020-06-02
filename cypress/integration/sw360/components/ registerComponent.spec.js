
var username = 'test@liferay.com'
var pass = 'test'

describe('Test Components', () => {
    
    beforeEach(() => {
        cy.visit('http://10.116.41.40:28080/')
        cy.get('span[class="sign-in"]').click()

        cy.get('input[id="_com_liferay_login_web_portlet_LoginPortlet_login"]')
        .clear()

        cy.get('input[id="_com_liferay_login_web_portlet_LoginPortlet_login"]')
        .type(username).should('have.value', username)

        cy.get('input[id="_com_liferay_login_web_portlet_LoginPortlet_password"]')
        .type(pass)

        cy.get('.lfr-btn-label').click()
    })

    it('Enter values only in the required fields (ASCII characters + half-width whitespace character, not including special characters)', () => {
        cy.wait(5000)
        cy.get('a[aria-labelledby="layout_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_5"]').click()        
        cy.get('button[class="btn btn-primary"]').click()
        cy.get('button[class="btn close btn-unstyled"]').click()

        var comp_name = 'test'
        var comp_cate = 'abc'

        cy.get('input[id="comp_name"][name="_sw360_portlet_components_NAME"]')
        .type(comp_name)
        cy.get('input[id="comp_categories"]')
        .type(comp_cate)
        cy.get('#comp_componenttype').select('1')

        cy.get('button[id="formSubmit"]').click()

        cy.log('Check message success or false')

        cy.get('div').should('have.class',"alert alert-success fade alert-dismissible show")
        cy.log('created new component')

        // cy.get('div').then(($mess) => {
        //     if ($mess.hasClass('alert alert-success fade alert-dismissible show')) {
        //         cy.log('created new component')
        //     } else {
        //         cy.log('not created new component')
        //     }
        // })

    })

})