import "../../support/resources/bid/MakeOfferBidSale.js"

describe('Make offer bid type sale', () => {

	var Faker = require('faker')
	var Booking_fee = Faker.random.number();
	var Down_payments_days = Faker.random.number();
	var Down_payment = Faker.random.number();
	var Price = Faker.random.number(1000000000, 500000000);

	beforeEach(() => {
        cy.visit(Cypress.config('base_url'));
        cy.loginLandlord('fadhilara@getnada.com', 'landlordtest')

    })

     it('Make Offer Bid Type Sale Success', () => {
        
            cy.MakeOfferBidSaleOk(Booking_fee, Down_payments_days, Down_payment, Price)
            cy.wait(3000)
            cy.contains('Success')
        });

     it('Make Offer Bid Type Sale Failed', () => {
        
            cy.MakeOfferBidSaleFail(Booking_fee, Down_payments_days)
            cy.wait(3000)
            cy.contains('Please make sure your bid not below IDR 103.000.000')
        });
})
