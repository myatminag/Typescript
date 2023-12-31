abstract class Department {
    protected readonly id: string;
    public name: string;
    protected employees: string[] = [];

    constructor(id: string, n: string) {
        this.id = id;
        this.name = n;
    }

    static createEmployee(name: string) {
        return { name };
    }

    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    reports: string[];
    private lastReport: string;
    private static instance: ITDepartment;

    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No Report Found!");
    }

    set mostRecentReport(value: string) {
        if (!value) {
            return;
        }
        this.addReport(value);
    }

    private constructor(id: string, admins: string[], reports: string[]) {
        super(id, "IT");
        this.admins = admins;
        this.reports = reports;
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (ITDepartment.instance) {
            return this.instance;
        }
        this.instance = new ITDepartment("D-1", ["Alex", "Joe"], []);
        return this.instance;
    }

    describe() {
        console.log("IT Department - ID: " + this.id);
    }

    addEmployee(name: string) {
        if (name === "Alex") {
            return;
        }
        this.employees.push(name);
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    getReports() {
        console.log(this.reports);
    }
}

const newEmployee = Department.createEmployee("John");
console.log(newEmployee);

// const it = new ITDepartment("D-1", ["Alex", "Joe"], []);
const it = ITDepartment.getInstance();
const it2 = ITDepartment.getInstance();
// it.describe();

console.log(it);
console.log(it2);

it.addEmployee("Alex");
it.addEmployee("Joe");
it.addEmployee("Michael");

// it.printEmployeeInfo();

it.mostRecentReport = "Something went wrong.";
it.addReport("this is report one");
it.addReport("this is report two");
// console.log(it.mostRecentReport);

// it.getReports();
