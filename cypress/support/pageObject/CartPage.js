class CartPage 

{

 shoppingBasket()
 {
   return cy.get('input[value="Delete"]')
 }
 
 assertEmptyCart()
 {
    return cy.get('h1.a-spacing-mini.a-spacing-top-base').should('include.text','Your Amazon Cart is empty.')        
 }
 
 
} export default CartPage