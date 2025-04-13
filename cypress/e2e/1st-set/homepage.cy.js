/// <reference types="cypress" />

describe("Load homepage and it's elements", () => {
	it('The homepage loads', () => {
		cy.visit('https://www.eesti.ee');
	});

	it('Search bar is visible and functional', () => {
		cy.visit('https://www.eesti.ee');

		cy.get('div.search-container').then((e) => {
			Cypress.dom.isVisible(e);
		}).click();

		cy.get('div.search-dropdown').then((e) => {
			Cypress.dom.isVisible(e);
		});
	});

	it('Menupoints are present and functional', () => {
		cy.visit('https://www.eesti.ee');

		cy.get('div.sidenav-menu-container').contains('Üldinfo').get('div>ul').each((e) => {
			
		})
	})
});
