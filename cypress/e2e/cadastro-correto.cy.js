describe('Pagina de Cadastro', () => {
 it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
   cy.visit('https://adopet-frontend-cypress.vercel.app/');
   cy.get('[data-test="register-button"]').click();
   cy.get('[data-test="input-name"]').type('Vinicius Padovezzi');
   cy.get('[data-test="input-email"]').type('viniciuspadovezzi@gmail.com')
   cy.get('[data-test="input-password"]').type('Senha123');
   cy.get('[data-test="input-confirm-password"]').type('Senha123');
   cy.get('[data-test="submit-button"]').click();

 })
})


/* describe('testes', () => {
  it('passes', () =>{
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    //cy.contains('a', 'Ver pets disponíveis para adoção').click();
    cy.get('.header__message').click();
    cy.get( '.header__home').click();



  
  
  
  
  
  
  })
}) */