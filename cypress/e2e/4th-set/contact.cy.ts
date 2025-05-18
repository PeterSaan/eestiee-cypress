/// <reference types="cypress" />
describe('Contact info page', () => { it('Navigate to "Võtke meiega ühendust"', () => {
		cy.visit('');
		cy.contains('button', 'Ei nõustu').click();

		cy.contains('p', 'Võtke meiega ühendust').click();

		cy.get('body').should('be.visible');

		cy.title().should('eq', 'Võtke meiega ühendust | Eesti.ee');
	});

	it('Form fields "name", "email" and "question" are present', () => {
		cy.visit('/eraisik/et/vajad-abi');

		cy.get('stateportal-contact-form').within(() => {
			cy.get('input[name="ria-contact-form-name"]').should('be.visible');

			cy.get('input[name="ria-contact-form-email"]').should('be.visible');

			cy.get('textarea').should('be.visible');
		});
	});

	it('Error message upon invalid email entry', () => {
		cy.visit('/eraisik/et/vajad-abi');

		cy.get("stateportal-contact-form").within(() => {
			cy.get("input[name='ria-contact-form-email']").type("mirko");
			cy.get("button.ria-btn-primary").click();

			cy.contains('Sisestage kehtiv e-posti aadress').should('be.visible');
		});
	});
});
