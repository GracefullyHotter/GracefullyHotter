import HelloWorld from "./stateless-alert.jsx";
import React from "react";
import ReactDom from "react-dom";
import Navbar from "./Navbar";
import { mount } from "@cypress/react";

describe("Navbar links ", () => {
  beforeEach(() => {
    mount(<Navbar />, { ReactDom });
  });

  it("shows link", () => {
    cy.contains("Cart");
  });
});
