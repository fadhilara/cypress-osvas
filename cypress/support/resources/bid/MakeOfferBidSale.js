Cypress.Commands.add("MakeOfferBidSaleOk", (Booking_fee, Down_payment_days, Down_payment, Price) => {
cy.wait(2000)
    	cy.wait(2000)
        cy.get('.menu-dashboard-sidebar > .d-flex > a').click()
        cy.xpath('//*[@id="cardBid"]/div/div/div[2]/a').click()
        cy.xpath('//*[@id="cardBid"]/div/div/div[3]/div[1]/div/div/div[3]/button[2]').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .custom-control-label').click()
    	cy.get('input[name="booking_fee"]').type(Booking_fee)
    	cy.get('input[name="down_payment_days"]').type(Down_payment_days)
    	cy.xpath('//*[@id="modal-response-bid-landlord___BV_modal_body_"]/div/div/div[2]/div/div[3]/div/form/div[2]/div/div/div/div/span')
    	cy.get('input[name="down_payment"]').type(Down_payment)
    	cy.get('input[name="price"]').type(Price)
    	cy.contains('Submit').click()
        cy.contains('Success')
})

Cypress.Commands.add("MakeOfferBidSaleFail", (Booking_fee, Down_payment_days) => {
cy.wait(2000)
        cy.wait(2000)
        cy.get('.menu-dashboard-sidebar > .d-flex > a').click()
        cy.xpath('//*[@id="cardBid"]/div/div/div[2]/a').click()
        cy.xpath('//*[@id="cardBid"]/div/div/div[3]/div[1]/div/div/div[3]/button[2]').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .custom-control-label').click()
        cy.get('input[name="booking_fee"]').type(Booking_fee)
        cy.get('input[name="down_payment_days"]').type(Down_payment_days)
        cy.xpath('//*[@id="modal-response-bid-landlord___BV_modal_body_"]/div/div/div[2]/div/div[3]/div/form/div[2]/div/div/div/div/span')
        cy.contains('Submit').click()
        cy.contains('Please make sure your bid not below IDR 103.000.000')
})