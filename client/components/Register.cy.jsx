import React from "react";
import Register from "./Register";
import { BrowserRouter } from "react-router-dom";

describe("<Register />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
  });
  it("should autofocus on the username input", () => {
    cy.mount(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    cy.focused().should("have.id", "username");
  });

  it("checks that there is an h1 with text Login", () => {
    cy.mount(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    cy.get("h1").contains("Register");
  });

  it("username input should accept typing", () => {
    cy.mount(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    const typeVal = "username";
    cy.get("#username").type(typeVal).should("have.value", typeVal);
  });

  it("password input should accept typing", () => {
    cy.mount(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );
    const typeVal = "password";
    cy.get("#password").type(typeVal).should("have.value", typeVal);
  });
});
