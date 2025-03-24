class Navbar {
    logout(): void {
        cy.get('li').contains('li', 'Logout').click()
        cy.get('li').contains('Login').should('exist')
    }
    goTo(pageName: string):void{
        const pages: { [key: string]: () => void } = {
            homePage: () => {
              cy.get('li').contains('Home').click()
            },
            productsPage: () => {
              cy.get('li').contains('Products').click()
            },
            cartPage: () => {
              cy.get('li').contains('Cart').click()
            },
            loginPage: () => {
              cy.get('li').contains('Login').click()
            },
            testCasesPage: () => {
              cy.get('li').contains('Test Cases').click()
            },
            apiTestingPage: () => {
              cy.get('li').contains('API Testing').click()
            },
            tutorialsRedirect: () => {
              cy.get('li').contains('Video Tutorials').click()
            },
            contactPage: () => {
              cy.get('li').contains('Contact us').click()
            }
        };
        if (pages[pageName]) {
            pages[pageName](); 
        }else {
          throw new Error(`Page "${pageName}" is not defined in the command .goto()`);
      }
    }
    deleteCurrentUser(): void {
      cy.get('i.fa.fa-trash-o').click()
      cy.get('h2').contains("Account Deleted!").should('be.visible');
      cy.get('a[data-qa="continue-button"]').click()
      }
  }
  
  const navbar = new Navbar();
  export default navbar;




