const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Dave', 1, 'test@email.com');
  
    expect(employee.name).toBe('Dave');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('test@email.com');
});

test("gets an employee's name value", () => {
    const employee = new Employee('Dave', 1, 'test@email.com');
  
    expect(employee.getName()).toBe('Dave');
});

test("gets an employee's id value", () => {
    const employee = new Employee('Dave', 1, 'test@email.com');
  
    expect(employee.getId()).toBe(1);
});

test("gets an employee's email value", () => {
    const employee = new Employee('Dave', 1, 'test@email.com');
  
    expect(employee.getEmail()).toBe('test@email.com');
});

test("gets an employee's role value", () => {
    const employee = new Employee('Dave', 1, 'test@email.com');
  
    expect(employee.getRole()).toBe('Employee');
});
