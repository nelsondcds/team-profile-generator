const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Dave', '1', 'test@email.com', '1234567890');
  
    expect(manager.name).toBe('Dave');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('test@email.com');
    expect(manager.officeNumber).toBe('1234567890');
});

test("gets a manager's name value", () => {
    const manager = new Manager('Dave', '1', 'test@email.com', '1234567890');
  
    expect(manager.getName()).toBe('Dave');
});

test("gets a manager's id value", () => {
    const manager = new Manager('Dave', '1', 'test@email.com', '1234567890');
  
    expect(manager.getId()).toBe('1');
});

test("gets a manager's email value", () => {
    const manager = new Manager('Dave', '1', 'test@email.com', '1234567890');
  
    expect(manager.getEmail()).toBe('test@email.com');
});

test("gets a manager's officeNumber value", () => {
    const manager = new Manager('Dave', '1', 'test@email.com', '1234567890');
  
    expect(manager.getOfficeNumber()).toBe('1234567890');
});

test("gets a manager's role value", () => {
    const manager = new Manager('Dave', '1', 'test@email.com', '1234567890');
  
    expect(manager.getRole()).toBe('Manager');
});
