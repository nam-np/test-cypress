
var username = 'namnp@sw360.org'
var pass = '1'

describe('Test Components', () => {
    
    beforeEach(() => {
        cy.visit('http://10.116.41.78:28111/')
    })

    it('Create new Component', () => {
        cy.get('span[class="sign-in"]').click()

        cy.get('input[id="_com_liferay_login_web_portlet_LoginPortlet_login"]')
        .clear()

        cy.get('input[id="_com_liferay_login_web_portlet_LoginPortlet_login"]')
        .type(username).should('have.value', username)

        cy.get('input[id="_com_liferay_login_web_portlet_LoginPortlet_password"]')
        .type(pass)

        cy.get('.lfr-btn-label').click()

        cy.wait(3000)
        cy.get('a[aria-labelledby="layout_com_liferay_site_navigation_menu_web_portlet_SiteNavigationMenuPortlet_3"]').click()

        
        
        cy.get('button[class="btn btn-primary"]').click()
        cy.get('button[class="btn close btn-unstyled"]').click()

        var comp_name = 'test8'
        var comp_cate = 'abc'

        cy.get('input[id="comp_name"][name="_sw360_portlet_components_NAME"]')
        .type(comp_name)
        cy.get('input[id="comp_categories"]')
        .type(comp_cate)
        cy.get('#comp_componenttype').select('1')

        cy.get('button[id="formSubmit"]').click()

        cy.log('Check message success or false')

        cy.get('div').should('have.class',"alert alert-success fade alert-dismissible show")
        cy.log('not created new component')

        // cy.get('div').then(($mess) => {
        //     if ($mess.hasClass('alert alert-success fade alert-dismissible show')) {
        //         cy.log('created new component')
        //     } else {
        //         cy.log('not created new component')
        //     }
        // })

    })

})