context('Login Test', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('base_url'));
        cy.loginTenant('bidtenant@bidtenant.com', 'bidtenant')

    })

    it('Create Bid Type Sale Success', () => {
    	//memilih submenu apartement
    	cy.wait(5000)
    	cy.get('#dropdownProperties').click()
        cy.contains('a', 'Apartment', {timeout:4000}).should('be.visible').click()
    	//input apartemen
    	cy.wait(6000)
    	cy.get('input[class="form-control"]').type('Apartemen Soekarno Hatta Tower C Lantai 12 (1209)')
    		if (cy.contains('a', 'The apartment Soekarno Hatta Tower C', {timeout:5000}).should('be.visible')) {
    		cy.contains('a', 'The apartment Soekarno Hatta Tower C', {timeout:5000}).should('be.visible').click()
    	}
    	if (cy.contains('Make Offer', {timeout:3000}).should('be.visible')) {
            cy.contains('Make Offer', {timeout:3000}).should('be.visible').click()
        }
    	cy.get('input[name="booking_fee"]').type('20000000')
    	cy.get('input[name="down_payment_days"]').type('30')
    	cy.contains('Days')
    	cy.get('input[name="down_payment"]').type('10000000')
    	cy.get('input[name="price"]').type('103000000')
    	cy.xpath('//*[@id="property-make-offer___BV_modal_footer_"]/button').click()
        cy.contains('Success')
    })

    it('Create Bid Type Sale Failed', () => {
    	//memilih submenu apartement
    	cy.wait(6000)
    	cy.get('#dropdownProperties').click()
        cy.contains('a', 'Apartment', {timeout:3000}).should('be.visible').click()
    	//input apartemen
    	cy.wait(6000)
    	cy.get('input[class="form-control"]').type('Apartemen Soekarno Hatta Tower C Lantai 12 (1209)')
        if (cy.contains('a', 'The apartment Soekarno Hatta Tower C', {timeout:5000}).should('be.visible')) {
            cy.contains('a', 'The apartment Soekarno Hatta Tower C', {timeout:5000}).should('be.visible').click()
        }
        if (cy.contains('Make Offer', {timeout:5000}).should('be.visible')) {
            cy.contains('Make Offer', {timeout:5000}).should('be.visible').click()
        }
    	cy.get('input[name="booking_fee"]').type('20000000')
    	cy.get('input[name="down_payment_days"]').type('30')
    	cy.contains('Days')
    	cy.get('input[name="down_payment"]').type('10000000')
    	cy.get('input[name="price"]').type('100000000')
    	cy.xpath('//*[@id="property-make-offer___BV_modal_footer_"]/button').click()
    	cy.contains('Please make sure your bid not below IDR 103.000.000').should('be.visible')
    })

   })
    