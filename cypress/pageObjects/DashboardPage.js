class DashboardPage {
    verifyWelcomeMessage(name, email) {
        cy.get('.block > :nth-child(1) > .text-sm')
        .should('contain', `Welcome back,`)
        .and('contain', name)
        .and('contain', `(${email})`);
    }

    navigateToSneakerPage() {
        cy.get('path#vecno')
            .should('exist')
            .and('be.visible')
            .click({ multiple: true, force: true });
        cy.get(':nth-child(1) > .pb-14 > .mt-7 > .gap-5 > :nth-child(1) > .w-full > a > .uppercase').click();
    }
}

export default DashboardPage;
