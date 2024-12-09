import AutoStore_Homepage_PO from "../../../../support/TDD/pageObjects/automation-test-store/Autostore_HomePage_po";
import AutoStore_HairCarepage_PO from "../../../../support/TDD/pageObjects/automation-test-store/AutoStore_HairCarepage_po";

describe("Add multiple items to basket", () => {

    const autoStore_Homepage_PO = new AutoStore_Homepage_PO();
    const autoStore_HairCarepage_PO = new AutoStore_HairCarepage_PO();

    before(function () {
        cy.fixture('products').then(function (data) {
            globalThis.data = data;
        });
    });

    beforeEach(function () {
        autoStore_Homepage_PO.accessHomePage();
        autoStore_Homepage_PO.clickOn_HairCare_Link();
    });

    it("Add specific items to basket", () => {
        autoStore_HairCarepage_PO.addHairCareProductsToBasket();
    });
});
