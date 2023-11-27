/// <reference types ="Cypress" />

import HomePage from "../../support/pageObject/HomePage"
const homePage = new HomePage()

import TodaysDealPage from "../../support/pageObject/TodaysDealPage"
const todaysDealPage = new TodaysDealPage()

import ItemDetailPagePage from "../../support/pageObject/ItemDetailPage"
const itemDetailPage = new ItemDetailPagePage()

import CheckOutPage from "../../support/pageObject/CheckOutPage"
const checkOutPage = new CheckOutPage()

const amData = require('../../fixtures/amazon.json')

describe ('Search for Todays Deals', ()=>{

    it('Search and add product from Todays deal, proceed till payment is required',( ) =>{
        cy.visit(amData.url);
        cy.login(amData.email, amData.password)
       
        //Select item from Today's Deals and place in cart and proceed
                      
        homePage.deals().click()
        todaysDealPage.itemOnDeal().click()
        itemDetailPage.addCartButton().click({force:true})
        itemDetailPage.popUp().click()
        checkOutPage.proceedToPayment().click()
        checkOutPage.assertPaymentPage().should('contain',amData.paymentPageH1)   


        
    })


})