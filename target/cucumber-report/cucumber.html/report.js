$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ComputerPage.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Page Test",
  "description": "As a user I want to use the different features on the Computer Page",
  "id": "computer-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3660116800,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify user should navigate to Desktops Page successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Computers menu tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I click on Desktops sub menu",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I am navigated to the Desktops page successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 56625900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnComputersMenuTab()"
});
formatter.result({
  "duration": 1036211500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iClickOnDesktopsSubMenu()"
});
formatter.result({
  "duration": 451639000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageSteps.iAmNavigatedToTheDesktopsPageSuccessfully()"
});
formatter.result({
  "duration": 29918600,
  "error_message": "java.lang.AssertionError: Desktops expected [Desktops] but found [Desktops page is not displayed]\r\n\tat org.testng.Assert.fail(Assert.java:96)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:776)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:137)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:453)\r\n\tat com.nopcommerce.demo.steps.ComputerPageSteps.iAmNavigatedToTheDesktopsPageSuccessfully(ComputerPageSteps.java:72)\r\n\tat ✽.Then I am navigated to the Desktops page successfully(ComputerPage.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 724611300,
  "status": "passed"
});
formatter.uri("LoginPage.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page Test",
  "description": "As a user i want to Log in to the nop commerce website",
  "id": "login-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1706597000,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify user should get error message on logging in with invalid credentials",
  "description": "",
  "id": "login-page-test;verify-user-should-get-error-message-on-logging-in-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@Sanity"
    },
    {
      "line": 10,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on the login link",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I enter invalid email address \"testerhv123@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter invalid password \"password123\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I get error message \"Login was unsuccessful. Please correct the errors and try again.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 22500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnTheLoginLink()"
});
formatter.result({
  "duration": 847769200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testerhv123@gmail.com",
      "offset": 31
    }
  ],
  "location": "LoginPageSteps.iEnterInvalidEmailAddress(String)"
});
formatter.result({
  "duration": 62017900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password123",
      "offset": 26
    }
  ],
  "location": "LoginPageSteps.iEnterInvalidPassword(String)"
});
formatter.result({
  "duration": 51703400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSteps.iClickOnLoginButton()"
});
formatter.result({
  "duration": 372633800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.",
      "offset": 21
    }
  ],
  "location": "LoginPageSteps.iGetErrorMessage(String)"
});
formatter.result({
  "duration": 27681100,
  "status": "passed"
});
formatter.after({
  "duration": 577970500,
  "status": "passed"
});
formatter.uri("RegisterPage.feature");
formatter.feature({
  "line": 1,
  "name": "Register Page Test",
  "description": "\r\nAs a user I am able to register on the nop commerce website",
  "id": "register-page-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "Verify that Firstname Lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sanity"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message \"\u003cerror message\u003e\" for field \"\u003cfield name\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;",
  "rows": [
    {
      "cells": [
        "error message",
        "field name"
      ],
      "line": 18,
      "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;1"
    },
    {
      "cells": [
        "First name is required.",
        "FirstName"
      ],
      "line": 19,
      "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;2"
    },
    {
      "cells": [
        "Last name is required.",
        "LastName"
      ],
      "line": 20,
      "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;3"
    },
    {
      "cells": [
        "Email is required.",
        "Email"
      ],
      "line": 21,
      "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;4"
    },
    {
      "cells": [
        "Password is required.",
        "Password"
      ],
      "line": 22,
      "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;5"
    },
    {
      "cells": [
        "Password is required.",
        "ConfirmPassword"
      ],
      "line": 23,
      "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2201407400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify that Firstname Lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sanity"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message \"First name is required.\" for field \"FirstName\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 16200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 434648600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 45631400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 28
    },
    {
      "val": "FirstName",
      "offset": 64
    }
  ],
  "location": "RegisterPageSteps.iShouldSeeErrorMessageForField(String,String)"
});
formatter.result({
  "duration": 42321900,
  "status": "passed"
});
formatter.after({
  "duration": 590155500,
  "status": "passed"
});
formatter.before({
  "duration": 2150438400,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify that Firstname Lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sanity"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message \"Last name is required.\" for field \"LastName\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 20400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 875405400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 46578000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 28
    },
    {
      "val": "LastName",
      "offset": 63
    }
  ],
  "location": "RegisterPageSteps.iShouldSeeErrorMessageForField(String,String)"
});
formatter.result({
  "duration": 45476400,
  "status": "passed"
});
formatter.after({
  "duration": 586563900,
  "status": "passed"
});
formatter.before({
  "duration": 1655560700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify that Firstname Lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sanity"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message \"Email is required.\" for field \"Email\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 419273200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 49003100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 28
    },
    {
      "val": "Email",
      "offset": 59
    }
  ],
  "location": "RegisterPageSteps.iShouldSeeErrorMessageForField(String,String)"
});
formatter.result({
  "duration": 56853200,
  "status": "passed"
});
formatter.after({
  "duration": 581148100,
  "status": "passed"
});
formatter.before({
  "duration": 1717663200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify that Firstname Lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sanity"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message \"Password is required.\" for field \"Password\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 845330600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 47949600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 28
    },
    {
      "val": "Password",
      "offset": 62
    }
  ],
  "location": "RegisterPageSteps.iShouldSeeErrorMessageForField(String,String)"
});
formatter.result({
  "duration": 63962500,
  "status": "passed"
});
formatter.after({
  "duration": 573656700,
  "status": "passed"
});
formatter.before({
  "duration": 1825461600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify that Firstname Lastname email password and confirm password fields are mandatory",
  "description": "",
  "id": "register-page-test;verify-that-firstname-lastname-email-password-and-confirm-password-fields-are-mandatory;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@Sanity"
    },
    {
      "line": 11,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see error message \"Password is required.\" for field \"ConfirmPassword\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "ComputerPageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 15100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 424439300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageSteps.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 51815300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 28
    },
    {
      "val": "ConfirmPassword",
      "offset": 62
    }
  ],
  "location": "RegisterPageSteps.iShouldSeeErrorMessageForField(String,String)"
});
formatter.result({
  "duration": 82099900,
  "status": "passed"
});
formatter.after({
  "duration": 584006800,
  "status": "passed"
});
});