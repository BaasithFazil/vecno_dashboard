import { it } from "mocha";
import LoginPage from "../pageObjects/loginPage";
import DashboardPage from "../pageObjects/DashboardPage";
import SneakerPage from "../pageObjects/SneakerPage";

describe('Bank Transfer Testing', function () {
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();
    const sneakerPage = new SneakerPage();
    const filePath = 'images/image1.jpg';
    

    beforeEach(function () {
        cy.fixture('users').then((user) => {
            this.user = user;
            cy.login(this.user.Baasith.email, this.user.Baasith.password);
            cy.url().should('include', '/dashboard');
        });
    });

    it('Login welcome & user name visible', function () {

        dashboardPage.verifyWelcomeMessage(this.user.Baasith.name, this.user.Baasith.email);
        // cy.get('.block > :nth-child(1) > .text-sm')
        //     .should('contain', 'Welcome back,')
        //     .and('contain', this.user.Baasith.name)
        //     .and('contain', `(${this.user.Baasith.email})`);
    });


    it('Selecting the sneaker', () => {

        dashboardPage.navigateToSneakerPage();
        sneakerPage.selectSneaker();
        sneakerPage.chooseDeliveryMethod();
        sneakerPage.confirmAndUploadReceipt(filePath);


        // cy.get('path#vecno')
        //     .should('exist')
        //     .and('be.visible')
        //     .click({multiple: true, force: true});
        //     cy.get(':nth-child(1) > .pb-14 > .mt-7 > .gap-5 > :nth-child(1) > .w-full > a > .uppercase').click();


        //     cy.get('.grid-cols-1 > .inline-flex').scrollIntoView().should('be.visible').click();

        //     cy.get('.w-full > .ant-radio-wrapper > .ant-radio > .ant-radio-input').click();
        //     cy.get('.ant-btn').click();
        //     cy.get('.ant-btn').click();

        //     cy.get(':nth-child(1) > .py-5 > :nth-child(2) > .flex-col > .ant-btn').click();

        //     cy.get('.ant-upload > .ant-btn').click();

        //     cy.get('input[type="file"][name="receipt"]') // Use the selector for the hidden input
        // .attachFile(filePath);
        //     cy.get('.ant-form-item-control-input-content > .ant-btn').click();

            
    });

  
});





