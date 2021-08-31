const Intern = require('../lib/Intern');

test('creates a intern object', () => {
    const intern = new Intern('Dave', '1', 'test@email.com', 'InternUniversity');
  
    expect(intern.name).toBe('Dave');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('test@email.com');
    expect(intern.school).toBe('InternUniversity');
});

test("gets a intern's name value", () => {
    const intern = new Intern('Dave', '1', 'test@email.com', 'InternUniversity');
  
    expect(intern.getName()).toBe('Dave');
});

test("gets a intern's id value", () => {
    const intern = new Intern('Dave', '1', 'test@email.com', 'InternUniversity');
  
    expect(intern.getId()).toBe('1');
});

test("gets a intern's email value", () => {
    const intern = new Intern('Dave', '1', 'test@email.com', 'InternUniversity');
  
    expect(intern.getEmail()).toBe('test@email.com');
});

test("gets a intern's school value", () => {
    const intern = new Intern('Dave', '1', 'test@email.com', 'InternUniversity');
  
    expect(intern.getSchool()).toBe('InternUniversity');
});

test("gets a intern's role value", () => {
    const intern = new Intern('Dave', '1', 'test@email.com', 'InternUniversity');
  
    expect(intern.getRole()).toBe('Intern');
});
