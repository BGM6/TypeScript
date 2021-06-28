"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    Department.createEmployee = function (name) {
        return { name: name };
    };
    Department.prototype.describe = function () {
        console.log("Department (" + this.id + "): " + this.name);
    };
    Department.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Department.prototype.printEmployeeInformation = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    Department.currentYear = 2021;
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, name, admins) {
        var _this = _super.call(this, id, name) || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, reports) {
        var _this = _super.call(this, id, 'Accounting') || this;
        _this.reports = reports;
        _this.lastReport = reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReports", {
        //getter and setters
        get: function () {
            if (this.lastReport) {
                return this.lastReport;
            }
            else {
                throw new Error('No report found.');
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        set: function (value) {
            if (!value) {
                throw new Error('Please provide a value.');
            }
            else {
                this.addReports(value);
            }
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addAccountingEmployee = function (name, departmentId) {
        if (departmentId === 'acct101') {
            this.employees.push(name);
        }
        else {
            console.log(name + " is not a authorized accounting employee");
        }
    };
    AccountingDepartment.prototype.addReports = function (text) {
        this.reports.push(text);
        this.lastReport = text;
    };
    AccountingDepartment.prototype.printReports = function () {
        console.log(this.reports);
    };
    return AccountingDepartment;
}(Department));
var employee1 = Department.createEmployee('Dark Vader');
console.log(employee1, Department.currentYear);
var accounting = new AccountingDepartment('acc123', []);
accounting.addReports('Monthly Budget');
accounting.addReports('Annual Budget');
var recentReport = accounting.mostRecentReports;
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
var Player = /** @class */ (function () {
    function Player(firstName, lastName, jerseyNum, sport, team, isActive, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jerseyNum = jerseyNum;
        this.sport = sport;
        this.team = team;
        this.isActive = isActive;
        this.birthYear = birthYear;
    }
    Player.prototype.getFullName = function () {
        console.log(this.firstName + " " + this.lastName);
    };
    Player.prototype.changeName = function (newFirstName, newLastName) {
        if (newFirstName === void 0) { newFirstName = this.firstName; }
        if (newLastName === void 0) { newLastName = this.lastName; }
        this.firstName = newFirstName;
        this.lastName = newLastName;
    };
    Player.prototype.getAge = function (currentYear) {
        console.log(currentYear - this.birthYear);
    };
    Player.prototype.changeTeam = function (newTeam) {
        this.team = newTeam;
    };
    Player.prototype.changeJerseyNum = function (num) {
        this.jerseyNum = num;
    };
    return Player;
}());
var sc = new Player('Stephen', 'Curry', 30, 'Basketball', 'Golden State Warriors', true, 1988);
// sc.changeJerseyNum(5)
// sc.changeJerseyNum(5)
// sc.changeTeam('GSW');
// sc.changeName('Wardell Stephen')
// console.log(sc);
