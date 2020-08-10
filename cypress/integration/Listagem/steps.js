/// <reference types="cypress" />


Given(/^que o site nao possui registro$/, () => {
    cy.server()
        cy.route({
            method: 'GET',
            url: '**/api/1/databases/userdetails/collections/newtable?**',
            status: 200,
            response: 'fx:webtable-get-void'
        }).as('getNewtable');
});

When(/^acessar listagem$/, () => {
	cy.visit('WebTable.html');
});

Then(/^devo visualizar a listagem vazia$/, () => {
	//Tamanho da lista seja = 1, apenas o cabeçalho e 0 elementos
    cy.get('div[role=row]').should('have.length', 1)
});


Given(/^que o site possui apenas um registro$/, () => {
    cy.server()
    cy.route({
        method: 'GET',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: 'fx:webtable-get-only'
    })
});

When(/^acessar a listagem$/, () => {
	cy.visit('WebTable.html');
});

Then(/^devo visualizar apenas um registro$/, () => {
	cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone')
        cy.get('@gridCellPhone').should('contain.text', '9980161200')
});

