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

// Cypress.Commands.add('verifyHomePageLoaded', () => {
//   cy.get('.logo img').should('be.visible');
//   cy.title().should('eq', 'Automation Exercise');
//   cy.get('#slider').should('be.visible')
//   cy.get('div#slider-carousel').should('be.visible')
//   cy.get('.nav a[href="/"]').should('be.visible')
//   cy.url().should('eq', 'https://automationexercise.com/')
// })

// Cypress.Commands.add('visitAndVerifyTestCasesPageLoaded', () => {
//   cy.url().should('eq', 'https://automationexercise.com/test_cases')
//   cy.get('h2.title.text-center').should("contain","Test Cases");
//   cy.get('section#form').should('be.visible')
// })

// Cypress.Commands.add('visitAndVerifyAllProductsPageLoaded', () => {
//   cy.url().should('eq', 'https://automationexercise.com/products')
//   cy.get('h2').contains("Category").should('be.visible');
//   cy.get('h2.title.text-center').should("contain", "All Products")
//   cy.get('h2').contains("Brands").should('be.visible');
//   cy.get('input#search_product').should('be.visible');
//   cy.get('img#sale_image, .sale img').should('be.visible');
//   cy.get('div.features_items').should('be.visible');
// })

// Cypress.Commands.add("visitAndVerifyProductDetailsPageLoaded", (index: number) => {
//   cy.get(`a[href*="/product_details/"]`).eq(index-1).click()
//   cy.url().should('eq', `https://automationexercise.com/product_details/${index}`);
//   cy.get('.product-information h2').should('be.visible'); 
//   cy.get('p').contains("Category").should('be.visible'); 
//   cy.get('span').contains("Rs.").should('be.visible'); 
//   cy.get('p').contains('Availability:').should('be.visible');
//   cy.get('p').contains('Condition:').should('be.visible');
//   cy.get('p').contains('Brand:').should('be.visible');
// })

Cypress.Commands.add("visitAndVerifyCartWithItemsLoaded", () => {
  cy.url().should('eq', 'https://automationexercise.com/view_cart');
  cy.get('li.active').should('contain', 'Shopping Cart'); 
  cy.get('td.image').should('contain', 'Item');
  cy.get('td.description').should('contain', 'Description');
  cy.get('td.price').should('contain', 'Price');
  cy.get('td.quantity').should('contain', 'Quantity');
  cy.get('td.total').should('contain', 'Total');
})

// Cypress.Commands.add("login", (email?: string, password?: string, name?: string) => {
//   cy.get('h2').contains("Login to your account").should('be.visible');
//   cy.get('input[data-qa="login-email"]').type(email || users.simpleLoginUser.email);
//   cy.get('input[data-qa="login-password"]').type(password || users.simpleLoginUser.password);
//   cy.get('button[type="submit"]').contains('Login').click();
//   cy.contains("li", "Logged in as").should("contain", name || users.simpleLoginUser.name);
// })

Cypress.Commands.add("logout", () => {
  cy.get('li').contains('li', 'Logout').click()
  cy.get('li').contains('Login').should('exist')
})

// Cypress.Commands.add("tryLoginWithInvalidUser", (email: string, password: string) => {
//   cy.get('h2').contains("Login to your account").should('be.visible');
//   cy.get('input[data-qa="login-email"]').type(email);
//   cy.get('input[data-qa="login-password"]').type(password);
//   cy.get('button[type="submit"]').contains('Login').click();
//   cy.get('p[style="color: red;"]').should('contain','Your email or password is incorrect!');
//   cy.get('li').contains('Login').should('exist');
// })

// Cypress.Commands.add("registerRandomUser", () => {
//   const email = generateTestEmail();
//   cy.get('h2').contains("New User Signup!").should('be.visible');
//   cy.get('input[data-qa="signup-name"').type(users.randomEmailUser.firstName);
//   cy.get('input[data-qa="signup-email"]').type(email);
//   cy.get('button[type="submit"]').contains('Signup').click();
//   cy.get('h2.title.text-center').contains('b', 'Enter Account Information').should('be.visible');
//   cy.get('input#id_gender1').click();
//   cy.get('input[type="password"]').type(users.randomEmailUser.password);
//   cy.get('select[data-qa="days"]').select(users.randomEmailUser.day);
//   cy.get('select[data-qa="months"]').select(users.randomEmailUser.month);
//   cy.get('select[data-qa="years"]').select(users.randomEmailUser.year);
//   cy.get('input[name="newsletter"]').click();
//   cy.get('input[name="optin"]').click();
//   cy.get('input[data-qa="first_name"]').type(users.randomEmailUser.firstName);
//   cy.get('input[data-qa="last_name"]').type(users.randomEmailUser.lastName);
//   cy.get('input[data-qa="company"]').type(users.randomEmailUser.company)
//   cy.get('input[data-qa="address"]').type(users.randomEmailUser.address);
//   cy.get('input[data-qa="address2"]').type(users.randomEmailUser.address2);
//   cy.get('select[data-qa="country"]').select(users.randomEmailUser.country);
//   cy.get('input[data-qa="state"]').type(users.randomEmailUser.state)
//   cy.get('input[data-qa="city"]').type(users.randomEmailUser.city)
//   cy.get('input[data-qa="zipcode"]').type(users.randomEmailUser.zipCode)
//   cy.get('input[data-qa="mobile_number"]').type(users.randomEmailUser.mobileNumber)
//   cy.get('button[data-qa="create-account"').click()
//   cy.get('h2').contains("Account Created!").should('be.visible');
//   cy.get('a[data-qa="continue-button"]').click()
//   cy.contains("li", "Logged in as").should("contain", "test-user");
// })

// Cypress.Commands.add("deleteCurrentUser", () => {
// cy.get('i.fa.fa-trash-o').click()
// cy.get('h2').contains("Account Deleted!").should('be.visible');
// cy.get('a[data-qa="continue-button"]').click()
// })

// Cypress.Commands.add("tryToRegisterExistingUser", (name: string, email: string) =>{
//   cy.get('h2').contains("New User Signup!").should('be.visible');
//   cy.get('input[data-qa="signup-name"').type(name);
//   cy.get('input[data-qa="signup-email"]').type(email);
//   cy.get('button[type="submit"]').contains('Signup').click(); 
//   cy.get('p[style="color: red;"]').should('contain','Email Address already exist!');
// })

// Cypress.Commands.add("completeAndConfirmFormSubmission", (name?: string, email?: string, subject?: string, message?: string) => {
//   cy.get('h2').contains("Get In Touch").should('be.visible'); 
//   cy.get('input[data-qa="name"]').type(name || users.simpleLoginUser.name);
//   cy.get('input[data-qa="email"]').type(email || users.simpleLoginUser.email);
//   cy.get('input[data-qa="subject"]').type(subject || contactDormData.subject);
//   cy.get('textarea[data-qa="message"]').type(message || contactDormData.message);
//   cy.get('input[type=file]').selectFile('cypress/fixtures/contactFormData.json')
//   cy.get('input[data-qa="submit-button"]').contains('Submit').click();
//   cy.get('div.status.alert.alert-success').contains("Success! Your details have been submitted successfully.").should('be.visible');
//   cy.get('i.fa.fa-angle-double-left').click()
// });

// Searches for products by name and verifies that the number of results matches the expected amount:
// Cypress.Commands.add("searchAndVerifyProduct", (productName: string, amountOfProducts: number) => {
//   cy.get('input#search_product').type(productName)
//   cy.get('i.fa.fa-search').click()
//   cy.get('h2.title.text-center').should('contain', 'Searched Products')
//   cy.get('.product-overlay').should('have.length', amountOfProducts)
// })

Cypress.Commands.add("subscribeAndVerify", (email?: string) =>{
  cy.scrollTo('bottom')
  cy.get('h2').contains("Subscription").should('be.visible'); 
  cy.get('input#susbscribe_email').type(email || users.simpleLoginUser.email)
  cy.get('i.fa.fa-arrow-circle-o-right').click()
  cy.get('div.col-md-9.form-group').not('.hide').should('be.visible').should('contain','You have been successfully subscribed!');
})

// Adds the specified number of products to the cart starting from the first one in the product list:
// Cypress.Commands.add("addFirstProductsToCart", (amount: number) => {
//   for (let i = 1; i <= amount; i++) {
//     cy.get(`a[data-product-id="${i}"]`).eq(0).trigger('mouseover').click();
//     if(i<amount){
//       cy.get('button.btn.btn-success.close-modal.btn-block').click()
//     }
//     cy.log(`added product number: ${i}`);
//   }
// }) 

// Cypress.Commands.add("goToCartAfterAddingProduct", () => {
//   cy.get('p.text-center').contains('View Cart').click()
// })

// Verifies the number of distinct products in the cart (regardless of quantity): 
Cypress.Commands.add("verifyCartProductCount", (amount: number) => {
  cy.get("i.fa.fa-times").should('have.length', amount)
}) 

// Verifies unit prices and total prices (unit price × quantity) of specific products in the cart:
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

// Adds a product to the cart by its index in the product list:
// Cypress.Commands.add("addProductToCartByIndex", (number) => {
//   cy.get('a.btn.btn-default.add-to-cart').eq((number*2)-2).click();
// })

// Cypress.Commands.add('increaseProductQuantity', (quantity: number) =>{
//   cy.get('#quantity').clear().type(quantity.toString())
//   cy.wrap(quantity).as('productQuantity');
// })

// Cypress.Commands.add('addCurrentProductToCart',() => {
//   cy.get('button.btn.btn-default.cart').click()
// })

Cypress.Commands.add("verifyProductQuantityInCart", () => {
  cy.get('@productQuantity').then((expectedQantity) => {
    cy.get('td.cart_quantity button.disabled')
    .invoke('text')
    .then((text) => {
    const quantity = parseInt(text.trim());
    expect(quantity).to.eq(expectedQantity);
    });
  })
})

Cypress.Commands.add("goToCheckout", () => {
  cy.get('a.btn.btn-default.check_out').click()
})

Cypress.Commands.add("goToLoginFromCheckout", () => {
  cy.get('p.text-center a[href*="/login"').click()
})

// Cypress.Commands.add("verifyUserDetailsInCheckout", (selectedUser) => {
//   cy.get('li.address_firstname.address_lastname').should("contain", users.randomEmailUser.firstName)
//   cy.get('li.address_firstname.address_lastname').should("contain", users.randomEmailUser.lastName)
//   cy.get('li.address_address1.address_address2').should("contain", users.randomEmailUser.address)
//   cy.get('').should("contain", users.randomEmailUser.)
//   cy.get('').should("contain", users.randomEmailUser.)
//   cy.get('').should("contain", users.randomEmailUser.)
//   cy.get('').should("contain", users.randomEmailUser.)
//   cy.get('').should("contain", users.randomEmailUser.)
//   cy.get('').should("contain", users.randomEmailUser.)
//   cy.get('').should("contain", users.randomEmailUser.)
// })