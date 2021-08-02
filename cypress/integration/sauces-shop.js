describe("All Sauces Shop", () => {
  beforeEach(() => {
    cy.visit("/shop");
  });

  //true e2e by making network call by asserting on request (no stubbing)
  //https://docs.cypress.io/guides/guides/network-requests#Testing-Strategies
  it("Fetches all sauces in the database", () => {
    cy.request("/api/sauces").should((response) => {
      expect(response.status).to.eq(200);
      expect(response).to.have.property("headers");
      expect(response.body).to.be.a("array");
    });
  });

  it("allows users to search hot sauce by name", () => {
    cy.get("input").type("fancy");
    //FIX: how to get search button selector
    cy.get('[style="margin-left: 10px;"]').click();

    cy.contains("Fancy Sauce");
    cy.contains("walkerswood").should("not.exist");

    cy.get("input").clear();
    cy.get('[style="margin-left: 10px;"]').click();
  });

  it("allows users to filter search by pepper type", () => {
    cy.get(":nth-child(2)").then((el) => {
      //fix selector
      cy.wrap(el).invoke("show");
      cy.wrap(el).contains("Habanero").click();
    });
  });
});
