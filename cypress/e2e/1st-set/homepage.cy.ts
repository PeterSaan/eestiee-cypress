/// <reference types="cypress" />

describe("Load homepage and it's elements", () => {
	beforeEach(() => {
		cy.visit('')
		cy.contains('button', 'Ei nõustu').click();
	});

	it('The homepage loads successfully', () => cy.get('body').should('be.visible'));

	it('Search bar is visible and functional', () => {
		cy.get('div.search-container').should('be.visible').click();

		cy.get('div.search-dropdown').then((e) => {
			Cypress.dom.isVisible(e);
		});
	});

	it('Menupoints are present and functional', () => {
		cy
			.get('div.sidenav-menu-container > div:nth-of-type(3) > div > div:nth-of-type(2) > ul')
			.should('have.length', 7);
		cy
			.get('div.sidenav-menu-container > div:nth-of-type(4) > div > div:nth-of-type(2) > ul')
			.should('have.length', 12)
		cy
			.get('div.sidenav-menu-container > div:nth-of-type(5) > div > div:nth-of-type(2) > ul')
			.should('have.length', 9)
	})
});
