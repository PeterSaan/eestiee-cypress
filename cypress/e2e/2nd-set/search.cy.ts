/// <reference types="cypress" />

describe('Search functionality', () => {
	it('Search results for "Eesti hümn"', () => {
		cy.visit('');

		cy
			.get('div.search-input > input')
			.type('Eesti hümn')
			.get('div.search-results-sub-category-body-item > header-link > a > span > span > span')
			.should('have.text', 'Eesti hümn');
	});

	it('Search for "Eesti hümn" redirects to correct page with appropriate info', () => {
		cy.visit('');

		cy.get('div.search-input > input').type('Eesti hümn');

		cy
			.get('div.search-results-sub-category-body-item > header-link > a > span > span > span')
			.click();

		cy.get('h1.shell-title').should('have.text', 'Eesti hümn');

		cy.url().should('contain', 'eesti-huemn');
	});

	it('Empty search returns error', () => {
		cy.visit('/eraisik/et/otsing?search=');

		cy.get('div.no-results-title').should('not.be.empty');

		cy.get('results-page > div > div').should('contain.text', '0 tulemust');
	});
});
