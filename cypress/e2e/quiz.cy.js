// cypress/e2e/quiz.cy.js
describe('Tech Quiz E2E', () => {
    it('Loads the quiz page and displays "Start Quiz"', () => {
      cy.visit('/');
      cy.contains('Start Quiz').should('be.visible');
    });
  
    it('Starts the quiz and displays the first question', () => {
      cy.contains('Start Quiz').click();
      cy.get('.question').should('be.visible'); 
    });
  
    it('Navigates through all questions and shows final score', () => {
      
      cy.get('button.answer-option').first().click(); // pick an answer
      cy.get('button.next-question').click();         // go to next question
  
        
      cy.contains('Your Score').should('be.visible'); 
      cy.contains('Start New Quiz').should('be.visible');
    });
  });
  