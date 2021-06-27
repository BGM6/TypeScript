class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, name: string, public admins: string[]) {
    super(id, name)
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  //getter and setters
  get mostRecentReports() {
    if (this.lastReport) {
      return this.lastReport
    } else {
      throw new Error('No report found.');
    }
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please provide a value.');
    } else {
      this.addReports(value);
    }
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'Accounting')
    this.lastReport = reports[0];
  }

  addAccountingEmployee(name: string, departmentId: string) {
    if (departmentId === 'acct101') {
      this.employees.push(name);
    } else {
      console.log(`${name} is not a authorized accounting employee`)
    }
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports)
  }
}

const accounting = new AccountingDepartment('acc123', []);
accounting.addReports('Monthly Budget')
accounting.addReports('Annual Budget')
const recentReport = accounting.mostRecentReports;
accounting.mostRecentReports
//sets most recent report
accounting.mostRecentReport = 'Weekly Spending'
console.log(recentReport);
accounting.addAccountingEmployee('Joyce Guilas', 'it101')
accounting.addAccountingEmployee('Justin Lafrades', 'acct101')
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
  constructor(
    private firstName: string,
    private lastName: string,
    private jerseyNum: number,
    private readonly sport: string,
    private team: string,
    private isActive: boolean,
    private readonly birthYear: number
  ) {
  }

  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  changeName(newFirstName: string = this.firstName, newLastName: string = this.lastName) {
    this.firstName = newFirstName;
    this.lastName = newLastName;
  }

  getAge(currentYear: number) {
    console.log(currentYear - this.birthYear);
  }

  changeTeam(newTeam: string) {
    this.team = newTeam;
  }

  changeJerseyNum(num: number) {
    this.jerseyNum = num;
  }
}

const sc = new Player(
  'Stephen',
  'Curry',
  30,
  'Basketball',
  'Golden State Warriors',
  true,
  1988
)
// sc.changeJerseyNum(5)
// sc.changeJerseyNum(5)
// sc.changeTeam('GSW');
// sc.changeName('Wardell Stephen')
// console.log(sc);
