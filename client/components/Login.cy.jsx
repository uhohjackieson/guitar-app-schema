import React from "react";
import Login from "./Login";
import { BrowserRouter } from "react-router-dom";

describe("<Login />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
  });

  it("should autofocus on the username input", () => {
    cy.mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    cy.focused().should("have.id", "username");
  });

  it("checks that there is an h1 with text Login", () => {
    cy.mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    cy.get("h1").contains("Login");
  });

  it("username input should accept typing", () => {
    cy.mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const typeVal = "username";
    cy.get("#username").type(typeVal).should("have.value", typeVal);
  });

  it("password input should accept typing", () => {
    cy.mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );
    const typeVal = "password";
    cy.get("#password").type(typeVal).should("have.value", typeVal);
  });

  // it("button should be clickable", () => {
  //   cy.mount(
  //     <BrowserRouter>
  //       <Login />
  //     </BrowserRouter>
  //   );

  //   cy.get("button").click();
  // });
});
