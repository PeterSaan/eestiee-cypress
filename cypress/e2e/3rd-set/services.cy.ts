/// <reference types="cypress" />

describe('"Services" page navigation', () => {
	beforeEach(() => cy.visit(''));

	it('When clicking on "Tervis ja retseptid" an additional menu opens', () => {
		cy.contains('Tervis ja retseptid').click();

		cy.get('div.sidenav-mega-menu-container').should('be.visible');

		cy
			.get('p.sidenav-mega-title')
			.first()
			.should('have.text', 'Tervishoid ja arstiabi');

		cy
			.get('p.sidenav-mega-title')
			.last()
			.should('have.text', 'Töötervishoid');
	});

	it('"Retseptid" page loads successfully', () => {
		cy.contains('Tervis ja retseptid').click();

		cy.get('div.sidenav-mega-menu-container').within(() => {
			cy.contains('Retseptid').click();
		});

		cy.url().should('contain', 'tervishoid-ja-arstiabi/retseptid');
	});

	it('Link for Terviseportaal opens in a new tab', () => {
		cy.get('lib-stateportal-landing-links > div > div').first().within(() => {
			cy
				.get('lib-stateportal-landing-links-card')
				.first()
				.get('a')
				.should('have.attr', 'target', '_blank')
		});
	});
});
