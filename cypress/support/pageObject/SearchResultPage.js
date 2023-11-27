class SearchResultPage 

{
 
  item(){
   return cy.get('div[data-component-type="s-search-result"] h2 a').eq(0)
  }

  addToBasket(){
    return cy.get('#sw-gtc > span.a-button-inner a')
  }
  
  

} export default SearchResultPage;