import React from 'react'
import { render } from 'src'

describe('render', () => {
  
  it('attaches a dialog to the given container and opens the dialog', () => {
  
    cy.visit('cypress/test.html').then((contentWindow) => {
      cy.document().then((document) => {

        render({
          container: document,
          content: React.createElement('h1', {}, 'I am a dialog!')
        })

        expect(
          document.querySelector('h1').innerHTML
        ).to.equal('I am a dialog!')
      })
    })
  })

  it('renders only 1 dialog at a time (removes the previous one)', () => {

    cy.visit('cypress/test.html').then((contentWindow) => {
      cy.document().then((document) => {

        render({
          container: document,
          content: React.createElement('h1', {}, 'I am a dialog!')
        })
        render({
          container: document,
          content: React.createElement('h1', {}, 'I am another dialog!')
        })

        cy.get('.ReactDialog').its('length').should('eq', 1)

        expect(
          document.querySelector('h1').innerHTML
        ).to.equal('I am another dialog!')
      })
    })
  })

  it('injects styles into the dialog to animate opening', () => {
    cy.visit('cypress/test.html').then((contentWindow) => {
      cy.document().then((document) => {

        render({
          container: document,
          content: React.createElement('h1', {}, 'I am another dialog and I am styled!')
        })

        cy.get('.ReactDialog style').its('length').should('eq', 1)
      })
    })
  })
})
