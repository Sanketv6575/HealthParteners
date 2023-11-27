/// <reference types ="Cypress" />
import Commitquality from '../../support/pageObject/Commitquality'
const commitquality = new Commitquality()

const crossDomainData = require('../../fixtures/crossDomain.json') 

describe('Test Suit for Cross Domain', function () {

    it('Test for Cross Domain', function () {
        cy.visit(Cypress.env('commitqualityUrl'));

        commitquality.getTFilterTextBox().type(crossDomainData.filterText)
        commitquality.getTFilterButton().click()
        commitquality.getTTextMsg().should('include.text',crossDomainData.errorMessage)
        commitquality.getTResetButton().click()
        commitquality.getTTextMsg().should('not.exist')

        cy.visit(Cypress.env('demoblazeUrl'));  //visit a secondary domain and perform test
        cy.origin(Cypress.env('demoblazeUrl') ,function () {
            const Demoblazepage = Cypress.require('../../support/pageObject/Demoblazepage')
            const demoblazepage = new Demoblazepage()

            demoblazepage.getPageURL().should('eq', Cypress.env('demoblazeUrl'))
            demoblazepage.getTabContact().click()
            demoblazepage.getContactModalTitle().should('have.text', crossDomainData.contactMessage)
            demoblazepage.getContactModalTextbox().type('Test')
            demoblazepage.getContactModalSendBtn().click()
            
            cy.on('window:alert', (str) =>  //Capture window alert message and validate 
            {
                expect(str).to.equal(crossDomainData.alertMessage)
            })
        })

        cy.visit(Cypress.env('commitqualityUrl')); //return to primary domain and continue test
        commitquality.getTableRows().should('have.length', 10)
        commitquality.getShowMoreButton().click()
        commitquality.getTableRows().should('have.length', 11)


    })
})