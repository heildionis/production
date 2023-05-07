import * as articleCommands from './commands/article';
import * as commentsCommands from './commands/comment';
import * as common from './commands/common';
import * as profileCommands from './commands/profile';
import * as ratingCommands from './commands/rating';

Cypress.Commands.addAll(common);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
Cypress.Commands.addAll(commentsCommands);
Cypress.Commands.addAll(ratingCommands);
// Cypress.Commands.overwrite('intercept', () => {
//     const { FIXTURE_MODE } = process.env;
//     const fixtureName = req.METHOD + req.url + hash(req.body);

//     if (FIXTURE_MODE === 'READ') {
//         readFixture()
//     }

//     if (FIXTURE_MODE === 'WRITE') {
//         createFixture(fixtureName, req.body)
//     }

//     if (FIXTURE_MODE === 'API') {

//     }
// });

export {};
