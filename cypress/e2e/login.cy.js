import LoginPage from "../pageObjects/loginPage";



describe('Login Test', ()=> {
    const loginPage = new LoginPage();


    //successful login 
    it("Should be login successful", ()=> {
        cy.fixture('users').then((user)=> {
            cy.log(`Baasith's Email: ${user.Baasith.email}`);
            loginPage.visit();
            loginPage.login(user.Baasith.email, user.Baasith.password);
        });
    });

    // Unsuccessful login with invalid email
    it("Should fail to login with invalid email", () => {
        cy.fixture('users').then((user) => {
            cy.log(`Invalid Email: invalid@invalid.com`);
            loginPage.visit();
            loginPage.login('invalid@invalid.com', user.Baasith.password);

            //cant verify the error message due to quickly dissapear.

            cy.url().should('include', '/account'); 
        });
    }); 


        // Unsuccessful login with invalid password
    it("Should fail to login with invalid password", () => {
        cy.fixture('users').then((user) => {
            cy.log(`Incorrect Password for: ${user.Baasith.email}`);
            loginPage.visit();
            loginPage.login(user.Baasith.email, 'wrongpassword');

            //cant verify the error message due to quickly dissapear.
            cy.url().should('include', '/account'); 
            });
        });

           // Unsuccessful login with empty email
    it("Should fail to login with empty email", () => {
        cy.fixture('users').then((user) => {
            cy.log(`Attempting login with empty email`);
            loginPage.visit();
            loginPage.login('', user.Baasith.password);
            // Verify error message appears for missing email
            cy.get('.ant-form-item-explain-error')
            .should('be.visible')
            .and('contain', 'Required');

            cy.get('.ant-form-item-explain-error').eq(0).should('be.visible').and('contain', 'Required');
        });
    });

        // Unsuccessful login with empty password
        it("Should fail to login with empty password", () => {
            cy.fixture('users').then((user) => {
                cy.log('Attempting login with empty password');
                loginPage.visit();
                loginPage.login(user.Baasith.email, '');
                // Verify error message appears for missing password
                cy.get('.ant-form-item-explain-error').eq(1).should('be.visible').and('contain', 'Required');
            });
        });

            // Unsuccessful login with both email and password empty
    it("Should fail to login with empty email and password", () => {
        cy.log('Attempting login with empty email and password');
        loginPage.visit();
        loginPage.login('', '');
        // Verify error message appears for missing email and password

        cy.get('.ant-form-item-explain-error').eq(0).should('be.visible').and('contain', 'Required');
        cy.get('.ant-form-item-explain-error').eq(1).should('be.visible').and('contain', 'Required');
    });
}); 





























// describe('Login Test', () => {
//     it('should login successfully', () => {

//       cy.login('baasith@amplify.lk', 'qwerty123')


//       cy.fixture("users").then((user) => {
//         cy.get("#email").type(user.email);
//         cy.get("#password").type(user.password);
//       })



//       cy.get('#email').type('baasith@amplify.lk');
//       cy.get('#password').type('qwerty123');
//       cy.get('button[type="submit"]').click();
//       cy.url().should('include', '/dashboard'); // Verify redirection
//     });
//   });
  