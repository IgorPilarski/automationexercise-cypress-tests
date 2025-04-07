class HomePage {
  verifyHomePageLoaded(): void {
    cy.get('.logo img').should('be.visible');
    cy.title().should('eq', 'Automation Exercise');
    cy.get('#slider').should('be.visible');
    cy.get('div#slider-carousel').should('be.visible');
    cy.get('.nav a[href="/"]').should('be.visible');
    cy.url().should('eq', 'https://automationexercise.com/');
  }
  scrollToAndVerifyRecommendedSection(): void {
    cy.get('.recommended_items').scrollIntoView().should('be.visible');
    cy.get('div.recommended_items h2.title.text-center').should('contain', 'recommended items');
  }
  addRecommendedItemToCart(productName: string): void {
    const addedItem: string[] = [];

    function findAndClick(): void {
      cy.get('.recommended_items')
        .scrollIntoView()
        .find('.item.active')
        .then(($activeItem) => {
          const productExists = $activeItem
            .find('.productinfo p')
            .toArray()
            .some((el) => {
              return el.textContent?.trim() === productName;
            });

          if (productExists) {
            cy.wrap($activeItem)
              .contains('.productinfo p', productName)
              .parents('.productinfo')
              .find('a.add-to-cart')
              .click({ force: true });
            addedItem.push(productName);
          } else {
            cy.get('a.right.recommended-item-control').click();
            cy.wait(500);
            findAndClick();
          }
        });
    }
    findAndClick();
    cy.wrap(addedItem).as('itemsAddedToCart');
  }
  verifyCarouselText(): void {
    cy.get('div.item.active h2')
      .contains('Full-Fledged practice website for Automation Engineers')
      .should('exist');
  }
  scrollToTheTop(): void {
    cy.scrollTo('top');
  }
}

const homePage = new HomePage();
export default homePage;
