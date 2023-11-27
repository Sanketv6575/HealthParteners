/// <referance type = "cypress"/>

import HomePage from '../../support/pageObject/HomePage'
const homePage = new HomePage()

import SearchResultPage from '../../support/pageObject/SearchResultPage'
const searchResultPage = new SearchResultPage()

import ItemDetailPagePage from "../../support/pageObject/ItemDetailPage"
const itemDetailPage = new ItemDetailPagePage()

import CartPage from "../../support/pageObject/CartPage"
const cart = new CartPage()

const amData = require('../../fixtures/amazon.json')

describe ('Search item using text box', ()=>{

    it('Search - Apple AirPods Pro (2nd generation)',( ) =>{
        cy.visit(amData.url);
        cy.login(amData.email, amData.password)
                
        // Text SerachBox :-

         homePage.searchBox().type(amData.textbox_Product)
         searchResultPage.item().click({force:true})
         itemDetailPage.addCartButton().click({force:true})
         itemDetailPage.addExtraBox().click({force:true})
         searchResultPage.addToBasket().click({force:true})
         cart.shoppingBasket().click()
         cart.assertEmptyCart()
    })    
})