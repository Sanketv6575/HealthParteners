class BestSellerPage 

{
  assertBestSellers(){
    cy.get('#zg_banner_text').should('include.text', 'Amazon Best Sellers')
  }
   
} export default BestSellerPage