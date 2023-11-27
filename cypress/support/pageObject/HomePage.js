class HomePage 

{
 
  deals()
  {
    return cy.get('#nav-xshop >a:nth-child(2)')
  }

  searchBox()
  {
    return cy.get('#twotabsearchtextbox')
  }

  sadwichMenu()
 {
   return cy.get('#nav-hamburger-menu')
 }
 

} export default HomePage;