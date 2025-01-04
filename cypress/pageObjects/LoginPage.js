import selectors from '../fixtures/selectors.json';


class LoginPage {
    visit() {
        cy.visit('/account');
    }

    enterEmail(email) {
        if(email) {
            cy.get("#email").type(email);
        } else {
            cy.get("#email").clear();
        }
    }

    enterPassword(password) {
        if(password) {
            cy.get("#password").type(password);

        } else {
            cy.get("#email").clear();
        }
    }

    clickSubmit() {
        cy.get('button[type="submit"]').click();
    } 

    login(email, password){
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickSubmit();
    }
}

export default LoginPage;