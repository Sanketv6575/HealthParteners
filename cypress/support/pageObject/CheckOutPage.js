class CheckOutPage {
 proceedToPayment(){
   return cy.get('input[data-feature-id="proceed-to-checkout-action"]')
 }
 assertPaymentPage(){
  return cy.get('div h1')
 }

} export default CheckOutPage