describe('login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login');
  });

  it('should display login page correctly', () => {
    cy.get('h1').should('contain', 'Login');
    cy.get('input[id="email"]').should('be.visible');
    cy.get('input[id="password"]').should('be.visible');
    cy.get('button[type="submit"]').contains('Masuk').should('be.visible');
  });

  it('should display alert when email is empty', () => {
    cy.get('button[type="submit"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    cy.get('input[id="email"]').type('admin@dicoding.com');
    cy.get('button[type="submit"').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display alert when username and password are incorrect', () => {
    cy.get('input[id="email"]').type('admin@dicoding.com');
    cy.get('input[id="password"]').type('password');
    cy.get('button[type="submit"').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal('email or password is wrong');
    });
  });

  it('should login successfully and display homepage when username and password are correct', () => {
    cy.get('input[id="email"]').type('hilmialmuhtadeb@gmail.com');
    cy.get('input[id="password"]').type('password');
    cy.get('button[type="submit"').click();
    cy.get('div[class="app-header"]').contains('Buat thread').should('be.visible');
  });
});
