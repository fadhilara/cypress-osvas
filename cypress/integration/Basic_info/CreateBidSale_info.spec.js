import "../../support/resources/bid/CreateBidSale.js"

describe('Create bid type sale', () => {

	var Faker = require('faker')
	var Booking_fee = Faker.random.number();
	var Down_payments_days = Faker.random.number();
	var Down_payment = Faker.random.number();
	var Price = Faker.random.number(1000000000, 500000000);

	beforeEach(() => {
        cy.visit(Cypress.config('base_url'));
        cy.loginTenant('bidtenant@bidtenant.com', 'bidtenant')

    })

     it('Create Bid Type Sale Success', () => {
        
            cy.addBidSaleOk(Booking_fee, Down_payments_days, Down_payment, Price)
            cy.wait(3000)
            cy.contains('Success')
        });

     it('Create Bid Type Sale Failed', () => {
        
            cy.addBidSaleFail(Booking_fee, Down_payments_days)
            cy.wait(4000)
            cy.contains('Please make sure nothing is empty.').should('be.visible')
        });
})
