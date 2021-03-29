import React from 'react'
import ReactDOM from 'react-dom'
import { ReactDialog } from '../../src'

describe('close ReactDialog', () => {
  
  it('closes and unmounts when user clicks ESC', () => {
  
    cy.visit('cypress/test.html').then((contentWindow) => {
      cy.document().then((document) => {

        ReactDOM.render(
          React.createElement(ReactDialog, { document: document }, React.createElement('h1', {}, 'I am a dialog!')),
          document.getElementById('app')
        );

        cy.get('h1').should('exist');
        cy.get('.ReactDialog.ReactDialogOpen').should('exist');
        
        cy.get('body').trigger('keydown', { key: "Escape", code: "Escape", which: 27 });

        cy.wait(1500);
        cy.get('.ReactDialog.ReactDialogOpen').should('not.exist');
        cy.get('h1').should('not.exist');
      })
    })
  })
})
