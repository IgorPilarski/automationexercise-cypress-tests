/// <reference types="cypress" />

import users from "../fixtures/usersData.json";
import contactDormData from "../fixtures/contactFormData.json";

import { generateTestEmail } from './utils';

Cypress.Commands.add('goTo', (pageName: string) => {
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
});

Cypress.Commands.add('hoverOver', (selector: string) => {
  cy.get(selector).trigger('mouseover');
});

Cypress.Commands.add('verifyHomePageLoaded', () => {
  cy.get('.logo img').should('be.visible');
  cy.title().should('eq', 'Automation Exercise');
  cy.get('#slider').should('be.visible')
  cy.get('div#slider-carousel').should('be.visible')
  cy.get('.nav a[href="/"]').should('be.visible')
  cy.url().should('eq', 'https://automationexercise.com/')
})

Cypress.Commands.add('verifyTestCasesPageLoaded', () => {
  cy.url().should('eq', 'https://automationexercise.com/test_cases')
  cy.get('h2.title.text-center').should("contain","Test Cases");
  cy.get('section#form').should('be.visible')
})

Cypress.Commands.add('verifyProductsPageLoaded', () => {
  cy.url().should('eq', 'https://automationexercise.com/products')
  cy.get('h2').contains("Category").should('be.visible');
  cy.get('h2.title.text-center').should("contain", "All Products")
  cy.get('h2').contains("Brands").should('be.visible');
  cy.get('input#search_product').should('be.visible');
  cy.get('img#sale_image, .sale img').should('be.visible');
  cy.get('div.features_items').should('be.visible');
})

Cypress.Commands.add("visitAndVerifyProductPage", (index: number) => {
  cy.get(`a[href*="/product_details/"]`).eq(index).click()
  cy.url().should('eq', `https://automationexercise.com/product_details/${index + 1}`);
  cy.get('.product-information h2').should('be.visible'); 
  cy.get('p').contains("Category").should('be.visible'); 
  cy.get('span').contains("Rs.").should('be.visible'); 
  cy.get('p').contains('Availability:').should('be.visible');
  cy.get('p').contains('Condition:').should('be.visible');
  cy.get('p').contains('Brand:').should('be.visible');
})

Cypress.Commands.add("login", (email?: string, password?: string, name?: string) => {
  cy.get('h2').contains("Login to your account").should('be.visible');
  cy.get('input[data-qa="login-email"]').type(email || users.simpleLoginUser.email);
  cy.get('input[data-qa="login-password"]').type(password || users.simpleLoginUser.password);
  cy.get('button[type="submit"]').contains('Login').click();
  cy.contains("li", "Logged in as").should("contain", name || users.simpleLoginUser.name);
})

Cypress.Commands.add("logout", () => {
  cy.get('li').contains('li', 'Logout').click()
  cy.get('li').contains('Login').should('exist')
})

Cypress.Commands.add("tryLoginWithInvalidUser", (email: string, password: string) => {
  cy.get('h2').contains("Login to your account").should('be.visible');
  cy.get('input[data-qa="login-email"]').type(email);
  cy.get('input[data-qa="login-password"]').type(password);
  cy.get('button[type="submit"]').contains('Login').click();
  cy.get('p[style="color: red;"]').should('contain','Your email or password is incorrect!');
  cy.get('li').contains('Login').should('exist');
})

Cypress.Commands.add("registerRandomUser", () => {
  const email = generateTestEmail();
  cy.get('h2').contains("New User Signup!").should('be.visible');
  cy.get('input[data-qa="signup-name"').type("test-user");
  cy.get('input[data-qa="signup-email"]').type(email);
  cy.get('button[type="submit"]').contains('Signup').click();
  cy.get('h2.title.text-center').contains('b', 'Enter Account Information').should('be.visible');
  cy.get('input#id_gender1').click();
  cy.get('input[type="password"]').type("Test!123$@");
  cy.get('select[data-qa="days"]').select('12');
  cy.get('select[data-qa="months"]').select('December');
  cy.get('select[data-qa="years"]').select('1900');
  cy.get('input[name="newsletter"]').click();
  cy.get('input[name="optin"]').click();
  cy.get('input[data-qa="first_name"]').type("test-user");
  cy.get('input[data-qa="last_name"]').type("O'lastname");
  cy.get('input[data-qa="company"]').type("The biggest company in the world")
  cy.get('input[data-qa="address"]').type("Wiejska 4, 00-902 Warszawa");
  cy.get('input[data-qa="address2"]').type("6/8/abcd");
  cy.get('select[data-qa="country"]').select("New Zealand");
  cy.get('input[data-qa="state"]').type("Województwo mazowieckie")
  cy.get('input[data-qa="city"]').type("Warszawa")
  cy.get('input[data-qa="zipcode"]').type("00-902")
  cy.get('input[data-qa="mobile_number"]').type("+48512321123")
  cy.get('button[data-qa="create-account"').click()
  cy.get('h2').contains("Account Created!").should('be.visible');
  cy.get('a[data-qa="continue-button"]').click()
  cy.contains("li", "Logged in as").should("contain", "test-user");
  cy.get('i.fa.fa-trash-o').click()
  cy.get('h2').contains("Account Deleted!").should('be.visible');
  cy.get('a[data-qa="continue-button"]').click()
})

Cypress.Commands.add("tryToRegisterExistingUser", (name: string, email: string) =>{
  cy.get('h2').contains("New User Signup!").should('be.visible');
  cy.get('input[data-qa="signup-name"').type(name);
  cy.get('input[data-qa="signup-email"]').type(email);
  cy.get('button[type="submit"]').contains('Signup').click(); 
  cy.get('p[style="color: red;"]').should('contain','Email Address already exist!');
})

Cypress.Commands.add("completeAndConfirmFormSubmission", (name?: string, email?: string, subject?: string, message?: string) => {
  cy.get('h2').contains("Get In Touch").should('be.visible'); 
  cy.get('input[data-qa="name"]').type(name || users.simpleLoginUser.name);
  cy.get('input[data-qa="email"]').type(email || users.simpleLoginUser.email);
  cy.get('input[data-qa="subject"]').type(subject || contactDormData.subject);
  cy.get('textarea[data-qa="message"]').type(message || contactDormData.message);

  cy.get('input[type=file]').selectFile('cypress/fixtures/contactFormData.json')
  cy.get('input[data-qa="submit-button"]').contains('Submit').click();
  cy.get('div.status.alert.alert-success').contains("Success! Your details have been submitted successfully.").should('be.visible');
  cy.get('i.fa.fa-angle-double-left').click()
});
Cypress.Commands.add("searchAndVerifyProduct", (productName: string, amountOfProducts: number) => {
  cy.get('input#search_product').type(productName)
  cy.get('i.fa.fa-search').click()
  cy.get('h2.title.text-center').should('contain', 'Searched Products')
  cy.get('.product-overlay').should('have.length', amountOfProducts)
})
Cypress.Commands.add("subscribeAndVerify", (email?: string) =>{
  cy.scrollTo('bottom')
  cy.get('h2').contains("Subscription").should('be.visible'); 
  cy.get('input#susbscribe_email').type(email || users.simpleLoginUser.email)
  cy.get('i.fa.fa-arrow-circle-o-right').click()
  cy.get('div.col-md-9.form-group').not('.hide').should('be.visible').should('contain','You have been successfully subscribed!');
})

Cypress.Commands.add("addFirstProductsToCart", (amount: number) => {
  for (let i = 1; i <= amount; i++) {
    cy.get(`a[data-product-id="${i}"]`).eq(0).trigger('mouseover').click();
    if(i<amount){
      cy.get('button.btn.btn-success.close-modal.btn-block').click()
    }
    cy.log(`added product number: ${i}`);
  }
}) 

Cypress.Commands.add("goToCartAfterAddingProduct", () => {
  cy.get('p.text-center').contains('View Cart').click()
})

Cypress.Commands.add("verifyCartAmounts", () => {
  cy.get('tbody tr').then(($rows) => {
    const rowCount = $rows.length;

    for (let i = 0; i < rowCount; i++) {
      cy.get('tbody tr').eq(i).then(($row) => {

        cy.get('td.cart_price').eq(i)
        .invoke('text')
        .then((priceAmount) => {
          const price = parseInt(priceAmount.replace(/[^\d]/g, ''), 10);
          cy.get('td.cart_quantity').eq(i)
            .invoke('text')
            .then((quantityValue) => {
              const quantity = parseInt(quantityValue.trim(), 10);
              const expectedTotal = price * quantity;

              cy.get('td.cart_total').eq(i)
                .invoke('text')
                .then((totalAmount) => {
                  const actualTotal = parseInt(totalAmount.replace(/[^\d]/g, ''), 10);
                  expect(actualTotal).to.eq(expectedTotal);
                });
            });
        });
      });
    }
  });
})

Cypress.Commands.add("verifyCartProductCount", (amount: number) => {
  cy.get("i.fa.fa-times").should('have.length', amount)
})
Cypress.Commands.add("verifyProductQuantityInCart", () => {

})
Cypress.Commands.add("addProductToCartByIndex", () => {
})

