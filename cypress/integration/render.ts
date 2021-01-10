import React from 'react'
import { render } from 'src'

describe('render', () => {
  it('attaches a shadow container to the body', () => {
    cy.visit('cypress/test.html').then((contentWindow) => {
      render(
        React.createElement('h1', {}, 'I am a dialog!')
      )
      debugger
    })
  })
})
