import { it } from "mocha";
import LoginPage from "../pageObjects/loginPage";

describe('Dashboard Tests', function () {
    const loginPage = new LoginPage();

    beforeEach(function () {
        cy.fixture('users').then((user) => {
            this.user = user;
            cy.login(this.user.Baasith.email, this.user.Baasith.password);
            cy.url().should('include', '/dashboard');
        });
    });

    it('Login welcome & user name visible', function () {
        cy.get('.block > :nth-child(1) > .text-sm')
            .should('contain', 'Welcome back,')
            .and('contain', this.user.Baasith.name)
            .and('contain', `(${this.user.Baasith.email})`); // Corrected template literal
    });


    it('Homepage visit', () => {
        cy.get('path#vecno')
            .should('exist')
            .and('be.visible')
            .click({multiple: true, force: true});
 
    });


    it('')




  
});








// describe('Dashboard Test', ()=> { 
//     const loginPage = new LoginPage();

//     beforeEach(()=> {
//         cy.fixture('users').then((users)=> {
//             this.users = users;

//             const userToLogin = this.users.Baasith;
//             this.userToLogin = userToLogin;

//             cy.login(userToLogin.email, userToLogin.password);
//             cy.url().should('include', '/dashboard');
//         })
//     })
//  })


// cy.xpath("//button[@id='radix-:r7:']").click();
        // cy.get("#radix-:r7:").click();
        // cy.wait(2000);
        // cy.get('#radix-\:r7\:').should('be.visible').click();
        // cy.get('.block > :nth-child(1) > .text-sm').should('contain', "Welcome back,")