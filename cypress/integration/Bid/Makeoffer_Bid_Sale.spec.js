context('Login Test', () => {
    beforeEach(() => {
        cy.visit(Cypress.config('base_url'));
        cy.loginLandlord('fadhilara@getnada.com', 'landlordtest')

    })

 it('Make Offer Bid Sale Success', () => {
    	cy.wait(2000)
        cy.get('.menu-dashboard-sidebar > .d-flex > a').click()
        cy.xpath('//*[@id="cardBid"]/div/div/div[2]/a').click()
        cy.xpath('//*[@id="cardBid"]/div/div/div[3]/div[2]/div/div/div[3]/button[2]', {timeout:4000}).click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .custom-control-label').click()
    	cy.get('input[name="booking_fee"]').type('25000000')
    	cy.get('input[name="down_payment_days"]').type('30')
    	cy.contains('Days', {timeout:4000})
    	cy.get('input[name="down_payment"]').type('15000000')
    	cy.get('input[name="price"]').type('103000000')
    	cy.contains('Submit').click()
        cy.contains('Success')
    })
  it('Make Offer Bid Sale Fail', () => {
        cy.wait(2000)
        cy.get('.menu-dashboard-sidebar > .d-flex > a').click()
        cy.xpath('//*[@id="cardBid"]/div/div/div[2]/a').click()
        cy.xpath('//*[@id="cardBid"]/div/div/div[3]/div[2]/div/div/div[3]/button[2]').click()
        cy.wait(2000)
        cy.get(':nth-child(3) > .custom-control-label').click()
        cy.get('input[name="booking_fee"]').type('25000000')
        cy.get('input[name="down_payment_days"]').type('30')
        cy.contains('Days')
        cy.contains('Submit').click()
        cy.contains('Please make sure your bid not below IDR 103.000.000')
    })
})