class TodaysDealPage {
 itemOnDeal(){
   return cy.get('div.DealGridItem-module__dealItemDisplayGrid_e7RQVFWSOrwXBX4i24Tqg > div > div >a').eq(2)
 }

} export default TodaysDealPage