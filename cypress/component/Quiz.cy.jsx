// cypress/component/Quiz.cy.jsx
import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/Quiz'; 

describe('Quiz Component', () => {
  it('renders a "Start Quiz" button', () => {
    mount(<Quiz />);
    cy.get('button').contains('Start Quiz').should('be.visible');
  });
  
});
