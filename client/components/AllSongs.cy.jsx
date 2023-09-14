import React from "react";
import AllSongs from "./AllSongs";
import { BrowserRouter } from "react-router-dom";
import CreateSongForm from "./CreateSongForm";

describe("<AllSongs />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <AllSongs />
      </BrowserRouter>
    );
  });

  it("checks that there is an h4 with text Level", () => {
    cy.mount(
      <BrowserRouter>
        <AllSongs />
      </BrowserRouter>
    );
    cy.get("h4").contains("Level");
  });

  it("button should see details of song", () => {
    cy.mount(
      <BrowserRouter>
        <AllSongs />
      </BrowserRouter>
    );

    cy.get("button").contains("See Details");
  });
});
