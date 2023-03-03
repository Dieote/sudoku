/// <reference types="cypress"/> 
//Referencias de Cypress
/*
describe('Sudoku', () => {
  it('Visitar Sudoku y autocompletar', () => {
    cy.visit('/')
    //Total fills    
    cy.get('.game__cell.game__cell--filled').should('have.length', 45)
     //Total empty fills 
    cy.get('.game__cell').not('.game__cell--filled').each(($cell) => {
      cy.wrap($cell).click()  //Wrap all the coincidences and click hint
      cy.get('.status__action-hint').click()

    }) 
    cy.contains('.overlay__textspan1', 'solved').should('be.visible')

  })
*/
  describe('Sudoku', () => {
    it('Mods', () => {

      cy.visit('/')

  })  
})