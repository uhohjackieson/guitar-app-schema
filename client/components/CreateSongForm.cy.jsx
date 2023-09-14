import React from "react";
import CreateSongForm from "./CreateSongForm";

describe("<CreateSongForm />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreateSongForm />);
  });

  it("should autofocus on level input", () => {
    cy.mount(<CreateSongForm />);
    cy.focused().should("have.id", "level");
  });
});
