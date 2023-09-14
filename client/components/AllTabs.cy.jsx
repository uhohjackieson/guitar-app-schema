import React from "react";
import AllTabs from "./AllTabs";
import { BrowserRouter } from "react-router-dom";

describe("<AllTabs />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <AllTabs />
      </BrowserRouter>
    );
  });

  it("checks that there is an h4 with text Level", () => {
    cy.mount(
      <BrowserRouter>
        <AllTabs />
      </BrowserRouter>
    );
    cy.get("h4").contains("Level");
  });

  it("button should see details of song", () => {
    cy.mount(
      <BrowserRouter>
        <AllTabs />
      </BrowserRouter>
    );

    cy.get("button").contains("See Details");
  });
});
