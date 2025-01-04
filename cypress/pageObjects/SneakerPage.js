class SneakerPage {
    selectSneaker() {
        cy.get('.grid-cols-1 > .inline-flex').scrollIntoView().should('be.visible').click();
    }

    chooseDeliveryMethod() {
        cy.get('.w-full > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click();
        cy.get('.ant-btn').click(); // Confirm selection
        cy.get('.ant-btn').click(); // Proceed
    }

    confirmAndUploadReceipt(filePath) {
        cy.get(':nth-child(1) > .py-5 > :nth-child(2) > .flex-col > .ant-btn').click();
        cy.get('.ant-upload > .ant-btn').click();
        cy.get('input[type="file"][name="receipt"]').attachFile(filePath); // Upload file
        cy.get('.ant-form-item-control-input-content > .ant-btn').click(); // Submit receipt
    }
}

export default SneakerPage;
