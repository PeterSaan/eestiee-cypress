/// <reference types="cypress" />

describe('Search functionality', () => {
	it('Search results for "Eesti hümn"', () => {
		cy.visit('https://www.eesti.ee');

		cy
			.get('div.search-input > input')
			.type('Eesti hümn')
			.get('div.search-results-sub-category-body-item > header-link > a > span > span > span')
			.should('have.text', 'Eesti hümn');
	});

	it('Search for "Eesti hümn" redirects to correct page with appropriate info', () => {
		cy.visit('https://www.eesti.ee');

		cy
			.get('div.search-input > input')
			.type('Eesti hümn')
			.get('div.search-results-sub-category-body-item > header-link > a > span > span > span')
			.click();

		cy.get('h1.shell-title').should('have.text', 'Eesti hümn');

		return String(cy.url()) === 'https://www.eesti.ee/eraisik/et/artikkel/eesti-vabariik/eesti-vabariik/eesti-huemns';
	});

	it('Empty search returns error', () => {
		cy.visit('https://www.eesti.ee/eraisik/et/otsing?search=');

		cy.get('div.no-results-title').should('not.be.empty');

		cy.get('results-page > div > div').should('contain.text', '0 tulemust');
	});
});
