import React from 'react'
import { render } from 'src'

describe('render', () => {
  
  it('attaches a shadow container to the body and renders the given content into the root of the shadow dom', () => {
  
    cy.visit('cypress/test.html').then((contentWindow) => {
      cy.document().then((document) => {

        render(
          document,
          React.createElement('h1', {}, 'I am a dialog!')
        )
        
        cy.get('#ReactDialogShadowContainer').should(element => {
          const [container] = element.get()
          expect(
            container.shadowRoot.querySelector('h1').innerHTML
          ).to.equal('I am a dialog!')
        })
      })
    })
  })
})
