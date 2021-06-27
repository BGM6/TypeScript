"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}): ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, name, admins) {
        super(id, name);
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, 'Accounting');
        this.reports = reports;
        this.lastReport = reports[0];
    }
    //getter and setters
    get mostRecentReports() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error('No report found.');
        }
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error('Please provide a value.');
        }
        else {
            this.addReports(value);
        }
    }
    addAccountingEmployee(name, departmentId) {
        if (departmentId === 'acct101') {
            this.employees.push(name);
        }
        else {
            console.log(`${name} is not a authorized accounting employee`);
        }
    }
    addReports(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
}
const accounting = new AccountingDepartment('acc123', []);
accounting.addReports('Monthly Budget');
accounting.addReports('Annual Budget');
const recentReport = accounting.mostRecentReports;
accounting.mostRecentReports;
//sets most recent report
accounting.mostRecentReport = 'Weekly Spending';
console.log(recentReport);
accounting.addAccountingEmployee('Joyce Guilas', 'it101');
accounting.addAccountingEmployee('Justin Lafrades', 'acct101');
console.log(accounting);
// const it = new ITDepartment('it777', 'Information Technology', ['Emerson, Hayden'])
// console.log(it)
// it.addEmployee('Niko');
// it.addEmployee('Roady');
// it.printEmployeeInformation()
// it.describe()
// const accounting = new Department('acc23','Accounting');
// accounting.describe();
// console.log(accounting);
// accounting.addEmployee('Bryan');
// accounting.addEmployee('Hayden');
//This will cause an error if employee is private
// accounting.employees[2] = 'Emerson';
// accounting.printEmployeeInformation();
// const accountingCopy = {name: 'Human Resource', describe: accounting.describe};
// accountingCopy.describe()
//////////////////////////////////////////////////////////////////////////////////////////
// class Player {
//   firstName: string;
//   lastName: string;
//   jerseyNum: number;
//   sport: string;
//   team: string;
//   active: boolean;
//   birthYear: number
//
//   constructor(
//     fName: string,
//     lName: string,
//     jNumber: number,
//     s: string,
//     t: string,
//     isActive: boolean,
//     dob: number,
//   ) {
//     this.firstName = fName;
//     this.lastName = lName;
//     this.jerseyNum = jNumber;
//     this.sport = s;
//     this.team = t;
//     this.active = isActive;
//     this.birthYear = dob;
//   }
//
//   getFullName() {
//     console.log(`${this.firstName} ${this.lastName}`);
//   }
//
//   getAge(currentYear: number) {
//     console.log(currentYear - this.birthYear);
//   }
// }
//
// const sc = new Player(
//   'Stephen',
//   'Curry',
//   30,
//   'Basketball',
//   'Golden State Warriors',
//   true,
//   1988
// )
// console.log(sc);
// sc.getFullName();
// sc.getAge(2021);
///////////////////SHORTHAND SYNTAX FOR ABOVE CODE///////////////////////////////////
class Player {
    constructor(firstName, lastName, jerseyNum, sport, team, isActive, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jerseyNum = jerseyNum;
        this.sport = sport;
        this.team = team;
        this.isActive = isActive;
        this.birthYear = birthYear;
    }
    getFullName() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
    changeName(newFirstName = this.firstName, newLastName = this.lastName) {
        this.firstName = newFirstName;
        this.lastName = newLastName;
    }
    getAge(currentYear) {
        console.log(currentYear - this.birthYear);
    }
    changeTeam(newTeam) {
        this.team = newTeam;
    }
    changeJerseyNum(num) {
        this.jerseyNum = num;
    }
}
const sc = new Player('Stephen', 'Curry', 30, 'Basketball', 'Golden State Warriors', true, 1988);
// sc.changeJerseyNum(5)
// sc.changeJerseyNum(5)
// sc.changeTeam('GSW');
// sc.changeName('Wardell Stephen')
// console.log(sc);
