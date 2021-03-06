# Command line Banking App

## Description

A small app designed to be controlled via a REPL for the depositing and withdrawing amounts from an account. It can also display a formatted statement of all transactions. Currently App has no data persistence so can only use local memory to store transactions.

## Dependancies
```
- Javascript - Language
- node - Javascript framework for testing with Jest
- Jest  - testing framework - npm install --save -dev Jest
- Eslint - Javascript linter - npm install --save -dev Eslint
- MockDate - Jest Date mocking library - npm install --save -dev mockdate
```
## Installation

1. Clone/Download this repo.
2. Open your preferred REPL - node/Javascript console.
3. In your preferred REPL require the account file with: ```const Account = require('./scripts/account.js')``` this will require all its dependancies with it.
4. You are ready to go

## Testing

- Testing has been carried out with Jest framework using the MockDate library to stub date objects.
- Test coverage currently sits at 100% across all files.
- To run tests open node in console and run ``` npm test ```
- To see test coverage run ``` npm test -- --coverage```
- To see HTML displays of coverage run ```open coverage/lcov-report/account.js.html```
    - The above will only show the coverage of account class.
    - replace ```account.js.html``` with ```statement.js.html``` for statement coverage.
    - replace ```account.js.html``` with ```transactionDate.js.html``` for transaction date coverage.

## Approach

I approached this from as much of as TDD perspective as possible, starting with a failing feature test - deposit increases your balance - and working up through the subsequent tests as shown in the commit history. I was determined to take my time, having two full days to complete this project. I implemented all functionality on day 1 and spent day 2 refactoring and tidying up the code to be more presentable. I have aimed to keep a high test coverage throughout, not dropping below 90% at any time through the program.

## Code structure

At current there are 4 classes, Account which handles the controlling of new transactions and statements. Transaction which creates a transaction object with inherent self-knowledge that allows the program to control where the appropriate transaction should go in the statement. A transactionDate class which handles providing the formatted date to the Account class so it can be used to store a date object in the needed format. Finally I have a statement class which handles the construction and formatting of the statement functionality.

Initially date formatting and transactions were structured differently. The Account class keeping track of an array within an array, this worked fine until the tests for statement. Here I needed to use san object to store the info I needed it so I could grab it by property rather than array index position. Once the transaction class was realised the controlling of data as it went from function to function became a lot simpler and easier to handle.

The date was also controlled via a private function within the Account class, but I realised this was a breach of SRP as the account class doesn't need to create the date just grab it and give it to the transaction class. This is the same with the statement class as I realised at the point of refactoring that the Account class again does not need this responsibility, it should again only have to grab the statement object and show it to the user.

I would have liked to go further, such as introducing some error messages if the balance went below 0, or a feedback loop that confirms to the user what they have just done(both I feel would be necessary if the app were to scale up) but as they were not part of the requirements, I checked with the product owner (Ed W) who confirmed they were not necessary at this time even though they are nice features.

## Classes & their responsibilities

### Account

Responsibilities:
 - controlling the overall balance.
 - maintaining the transaction log/history.
 -  The creation of transaction objects.
 - Passing those objects to the statement object so it can present the readable statement.

Functions:
  - Constructor - initialises with a balance of 0 and an empty log array ready to store transaction objects.
  - Deposit  - takes an integer or float as an argument, first it updates the balance with the argument. Then creates a new transactionDate object to be used in the next step of creating a transaction object, with the date, transactionType of credit, the amount and the balance after the transaction.
  - Withdraw - takes an integer as an argument then deducts the amount from the balance. It then follows the same steps as Deposit except the transactionType is set to credit.
  - showStatement - creates a new statement object passing the log array as an argument. It then returns the Statement object transformed into a human readable format.

### Transaction

Responsibilities:
 - Creation of a transaction object and allowing it to store the date, amount, transaction type and balance after the transaction.

 Functions:
 - Constructor - initialises the object with 4 arguments, the amount of the transaction, the transaction type (credit or debit) the balance after the transaction and the date of the transaction.

### TransactionDate

Responsibilities:
- The creation of date objects and then formatting them into a readable format.

Functions:
- Constructor - initialises with a new Date Object
- FormatTransactionDate - Gathers together the needed information using the Date object from constructor. Then transforms the date in a DD/MM/YYYY format.
- formatDay/formatMonth - are private methods that simply add an 0 onto days & months less than 10. Called in FormatTransactionDate function.

### Statement

Responsibilities:
- Taking the log of transactions and transforming them into a human readable format.

Functions:
- Constructor - initialises with the statementLog equal to the transaction log from the Account class.
- createStatement - takes the log from constructor and translates it from a series of objects to a nicely formatted bank statement using 3 private methods to control what goes where.
- Three private methods :
    - _creditStatement_ which creates the credit strings to add to the statement.
    - _debitStatement_ which creates the debit strings to add to the statement.
    - _build_ which controls flow of iteration over the statement log, calls the credit/debit statement functions and then returns a complete string to the createStatement function.

### Work to be done

#### Production Code
  - Initially I would extract the static methods from the statement class to a new class which controls the building of the statement, then refactor the existing statement class to initialise the builder class and call its methods to build the statement.
  - I would like to extract the transaction log from Account to become its own class, thus passing the responsibility of remembering the different transactions, potentially having a credit log and a debit log to help manage to statement building later. This would depend on the final implementation of the transaction log class.
  - I feel if the other refactors took place I may lean towards splitting transaction into debit-transaction and credit-transaction. Again I feel this would allow for better control of the data and the later statement building.
  - Once the above three had been implemented I would look once more at the code base and make any further decisions.

#### Test Code
  - Statement.test needs to be refactored to make use of Jest's globals like beforeEach to tidy up the tests using larger log variables.
  - While a majority of the methods in the Statement.test are private and tested via the tests of createStatement, a part of me would want to write some tests to cover these functions just in case. I am aware that this is a potential breach of convention in that private methods are not usually tested, but the sheer number of private functions here pushes me towards testing them over not testing them.



### App running on node
![picture](/images/Pic1.png)


### Model of designed refactors 03/09/2019
![picture](/images/Pic2.png)
