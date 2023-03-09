/// <reference types="cypress"/> 
//References Cypress
/*
describe('Sudoku', () => {
  it('Visit Sudoku and autofill', () => {
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
      //visit page
      cy.visit('/')
      //confirm mode "easy"
      cy.get('select[name=status__difficulty-select]')
      .should('have.value','Easy')
      //Total empty fills 
      cy.get('.game__cell--filled')
      .should('have.length', 45)
      //change mode "medium"
      cy.get('select[name=status__difficulty-select]')
      .select('Medium')
      //confirm empty fills
      cy.get('.game__cell--filled')
      .should('have.length', 40)
      //change mode "hard"
      cy.get('select[name=status__difficulty-select]')
      .select('Hard')
      //confirm empty fills
      cy.get('.game__cell--filled')
      .should('have.length', 30)
      
  })  
  describe('Sudoku', () => {
    it('Shows diferent num of empty cells', () => {
      //visit page
      cy.visit('/')
      cy.get('select[name=status__difficulty-select]')
      .should('have.value','Easy')
      
      cy.get('.game__cell--filled')
      .should('have.length.greaterThan', 40)
      .and('have.length.lessThan',81)
      .its('length')
      .as('easyN')

      cy.get('select[name=status__difficulty-select]')
      .select('Medium')
      cy.get('.game__cell--filled')
      .should('have.length.lessThan', 81)
      .its('length').as('mediumN')

      cy.get('select[name=status__difficulty-select]')
      .select('Hard')
      cy.get('.game__cell--filled')
      .should('have.length.lessThan', 81)
      .its('length').as('hardN')
      .then( function () { //se rompio cuando puse function ?????
        expect(this.easyN, 'easy').to.be.greaterThan(this.mediumN)
        expect(this.mediumN, 'medium').to.be.greaterThan(this.hardN)
      })

    })
  })
})