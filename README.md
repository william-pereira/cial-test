# Frontend Automation Project with Cypress

This project uses Cypress for test automation on the frontend, structured with Cucumber to facilitate writing tests in BDD (Behavior-Driven Development) format.

## Requirements

- Node.js (version 20 or higher)
- NPM (version 10 or higher)
- Docker (version 24 or higher)

## Project Structure

The project structure is organized to ensure easy maintenance and readability:

~~~bash
/cypress
  ├── /frontend
  │   └── /e2e
  │       ├── /step_definitions
  │       │   ├── checkbox.feature
  │       │   └── /checkbox
  │       │       └── checkbox.cy.js
  ├── /support
  │   └── locators.json
  └── /fixtures
      └── /images
~~~

## Folder Description

- **step_definitions:** Contains .feature files that define the test scenarios in BDD. Each .feature file has a corresponding file in the subfolder with the same name, where the Cypress tests are implemented in .cy.js files.

- **support/locators.json:** This file centralizes all locators and variables used in the tests, promoting reuse and simplified maintenance.

- **fixtures/images:** Stores all images used in the project, keeping a clear organization for media references.
  

## Installation

To install the project dependencies, run:

~~~bash
npm install
~~~

## Running the Tests

To run the tests, use the command:

~~~bash
npx cypress open
~~~
This will open the Cypress interface, where you can select and run the tests.

To run the tests on headless mode, use the command:

~~~bash
npx cypress run
~~~


## Plugins Used

This project uses the following plugins:

- [@4tw/cypress-drag-drop](https://www.npmjs.com/package/@4tw/cypress-drag-drop): Plugin for simulating drag-and-drop operations.
- [cypress-cucumber-preprocessor](https://www.npmjs.com/package/cypress-cucumber-preprocessor): Integration of Cypress with Cucumber for writing tests in BDD format.
- [cypress-file-upload](https://www.npmjs.com/package/cypress-file-upload): Used for simulating file uploads during tests.



## Test Structure
The tests are written in BDD format, with .feature files defining functionalities and scenarios, and .cy.js files implementing the necessary actions and assertions.

### BDD Structure Example

~~~bash
Feature: Checkbox

  Background: Common step for all scenarios
    Given I'm in the checkbox component page

  Scenario: Validate all the checkbox component checked
    When I check the checkbox 1 and checkbox 2
    Then I should see all of the checkboxes checked
~~~


## Running Tests with Docker

#### Prerequisites Docker

- Make sure Docker is installed and running on your machine.

#### Step by Step

1. Clone the Project Repository

  ~~~bash
  git clone https://github.com/william-pereira/cial-test-frontend.git
  cd cial-test-frontend
  ~~~

2. Build the Docker Image

  ~~~bash
  docker build -t cial-test:1.0.0 .
  ~~~

3. Run the Tests in the Container

Depending on your operating system, use the appropriate command to mount the current directory as a volume in the container:

- For Linux 

~~~bash
docker run -i -v "$PWD:/cial-test-frontend" cial-test:1.0.0 --spec "/cial-test-frontend/cypress/frontend/e2e/step_definitions/*.feature"
~~~

- For Windows

~~~bash
docker run -i -v "${PWD}:/cial-test-frontend" -t cial-test:1.0.0 --spec "cypress/frontend/e2e/step_definitions/*.feature"
~~~

- For Mac

~~~bash
docker run -i -v `$(PWD)`:/cial-test-frontend cial-test:1.0.0 --spec '/cial-test-frontend/cypress/frontend/e2e/step_definitions/*.feature'
~~~
