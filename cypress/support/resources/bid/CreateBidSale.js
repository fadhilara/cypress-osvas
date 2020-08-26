Cypress.Commands.add("addBidSaleOk", (Booking_fee, Down_payment_days, Down_payment, Price) => {
cy.wait(2000)
    	cy.get('#dropdownProperties').click()
    	cy.xpath('//*[@id="nav-primary"]/ul/li[2]/div/a[2]').click()
    	//input apartemen
    	cy.wait(2000)
    	cy.get('input[class="form-control"]').type('Apartemen Soekarno Hatta Tower C Lantai 12 (1209)')
    	if (cy.contains('a', 'The apartment Soekarno Hatta Tower C', {timeout:12000}).should('be.visible')) {
            cy.contains('a', 'The apartment Soekarno Hatta Tower C', {timeout:12000}).should('be.visible').click()
        }
    	if (cy.contains('Make Offer', {timeout:3000}).should('be.visible')) {
            cy.contains('Make Offer', {timeout:3000}).should('be.visible').click()
        }
    	cy.get('input[name="booking_fee"]').type(Booking_fee)
    	cy.get('input[name="down_payment_days"]').type(Down_payment_days)
    	cy.contains('Days')
    	cy.get('input[name="down_payment"]').type(Down_payment)
    	cy.get('input[name="price"]').type(Price)
    	cy.xpath('//*[@id="property-make-offer___BV_modal_footer_"]/button').click()
        cy.contains('Success')
})
Cypress.Commands.add("addBidSaleFail", (Booking_fee, Down_payment_days) => {
cy.wait(2000)
    	cy.get('#dropdownProperties').click()
    	cy.xpath('//*[@id="nav-primary"]/ul/li[2]/div/a[2]').click()
    	//input apartemen
    	cy.wait(2000)
    	cy.get('input[class="form-control"]').type('Apartemen Soekarno Hatta Tower C Lantai 12 (1209)')
        if (cy.contains('a', 'The apartment Soekarno Hatta Tower C', {timeout:8000}).should('be.visible')) {
            cy.contains('a', 'The apartment Soekarno Hatta Tower C', {timeout:8000}).should('be.visible').click()
        }
    	if (cy.contains('Make Offer', {timeout:3000}).should('be.visible')) {
            cy.contains('Make Offer', {timeout:3000}).should('be.visible').click()
        }
    	cy.get('input[name="booking_fee"]').type(Booking_fee)
    	cy.get('input[name="down_payment_days"]').type(Down_payment_days)
    	cy.contains('Days')
    	cy.xpath('//*[@id="property-make-offer___BV_modal_footer_"]/button').click()
})