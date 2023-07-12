//const cypress = require("cypress")


describe('Search & add product amazon', () => {

  beforeEach(() => {
    // reset and seed the database prior to every test
     cy.login();
   })
 
  
  it('Able to search and add a product to the cart and navigate to payments page', () => {
  
    cy.searchProduct("dress");

   // cy.contains("Deal of the Day").click({force:true});
   
    cy.visit("https://www.amazon.in/dp/B08TLRMWKW/ref=redir_mobile_desktop?_encoding=UTF8&aaxitk=1179716936868817abb3a1b4ac06b9ca&content-id=amzn1.sym.df9fe057-524b-4172-ac34-9a1b3c4e647d%3Aamzn1.sym.df9fe057-524b-4172-ac34-9a1b3c4e647d&hsa_cr_id=3303784630202&pd_rd_plhdr=t&pd_rd_r=51c14075-2320-485c-bc25-b221ec9a1df2&pd_rd_w=wkGch&pd_rd_wg=d50uh&qid=1689139360&ref_=sbx_be_s_sparkle_lsi4d_asin_0_img&sr=1-1-e0fa1fdd-d857-4087-adda-5bd576b25987");
    //cy.get(':nth-child(1) > ._bGlmZ_container_3q4Jr > ._bGlmZ_itemInfo_3izHE > ._bGlmZ_link_36_Co').click({force:true});
    //cy.screenshot();
    cy.wait(2000);

    //Select the size
    cy.get('#native_dropdown_selected_size_name').select("M");
    cy.get('.a-last > :nth-child(1)').contains("349");
    cy.get('#quantity').contains("1");
    cy.get('#add-to-cart-button').click();
    cy.get('#sw-gtc > .a-button-inner > .a-button-text').click();
    cy.get('#a-autoid-0-announce').click({force:true});
    cy.get('#quantity_1').click({force:true});

    //Validate order summary
    cy.contains("Shopping Cart");
    cy.contains("349").log();
    cy.contains("Qty:1");

    //Validate the Quantity and print
    cy.get('.a-dropdown-container > .a-button > .a-button-inner > .a-button-text').invoke("text").should("eq","Qty:1").log();
    cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click();
    cy.screenshot(); // To debug
   
  })

})