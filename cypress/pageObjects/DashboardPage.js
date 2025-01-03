class DashboardPage {
    verifyGreeting(expectedText) {
        cy.get(".text-sm text-muted-foreground mt-2").should('have.text', expectedText);
    }

}

export default DashboardPage;