class SandwichIcon 

{
  bestSellers(){
    return cy.get('div#hmenu-content > ul.hmenu.hmenu-visible > li a').contains('Best Sellers')
  }
   
} export default SandwichIcon