class AutoStore_HairCarepage_PO {

    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach(function (element) {
            cy.addProductToBasket(element)
        })
        cy.get('.dropdown-toggle > .fa').click();
    }

}
export default AutoStore_HairCarepage_PO;