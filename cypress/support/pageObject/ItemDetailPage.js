class ItemDetailPage 

{
 addCartButton()
 {
   return cy.get('input#add-to-cart-button')
 }
 
 popUp()
 {
  return cy.get('#abb-intl-pop-cta')
 }

 addExtraBox(){
  return cy.get('#attachSiNoCoverage-announce')
 }
 
} export default ItemDetailPage