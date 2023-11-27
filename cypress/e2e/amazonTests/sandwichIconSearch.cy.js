/// <referance type = "cypress"/>

import HomePage from '../../support/pageObject/HomePage'
const homePage = new HomePage()

import SandwichIcon from '../../support/pageObject/SandwichIcon'
const sandwichIcon = new SandwichIcon()

import BestSellerPage from '../../support/pageObject/BestSellerPage'
const bestSellers = new BestSellerPage()

const amData = require('../../fixtures/amazon.json')

describe ('Sandwich Icon Search', ()=>{

    it('Search From Sandwich Icon',( ) =>{
        
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('b.cardModuleFactory is not a function')
            return false
          })

        cy.visit(amData.url);
        cy.login(amData.email, amData.password)
              
        // Search from the Sandwich Icon
        
        homePage.sadwichMenu().click()
        sandwichIcon.bestSellers().click()
        bestSellers.assertBestSellers()

    })
    
})