The project consists of two blocks: 
* the FE part implemented in Angular is in the `tariff-comparison-app` folder
* the BE part implemented in node.js + express is in the `tariff-comparison-app-node` folder.

To start the application, you can use the `docker compose up` command, which will deploy both parts of the application

Individually, all modules must first be loaded to run BE
`npm install`

BE part of the application can be started using the `npm run start` or `npm run start:dev` command

FE part of the application can be started using the npm run start command

In order to mock an external tariff provider in the BE part the file `externalTariffProvider.json` was added, the data from which is read via tariffs.js file in the providers folder

Any number of data variants can be added to this file for testing purposes, the main condition is that the new data must match the structure of product 1 or product 2 types. To add a new tariff(product type), which will require a different calculation function, the logic will need to be slightly modified

The BE part additionally uses packages:
*   Pino - for logging
*   Joi - query validation
*   Jest - testing