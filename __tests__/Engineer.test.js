const Engineer = require('../lib/Engineer');

test('creates a engineer object', () => {
    const engineer = new Engineer('Dave', '1', 'test@email.com', 'engiGit');
  
    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('test@email.com');
    expect(engineer.github).toBe('engiGit');
});

test("gets a engineer's name value", () => {
    const engineer = new Engineer('Dave', '1', 'test@email.com', 'engiGit');
  
    expect(engineer.getName()).toBe('Dave');
});

test("gets a engineer's id value", () => {
    const engineer = new Engineer('Dave', '1', 'test@email.com', 'engiGit');
  
    expect(engineer.getId()).toBe('1');
});

test("gets a engineer's email value", () => {
    const engineer = new Engineer('Dave', '1', 'test@email.com', 'engiGit');
  
    expect(engineer.getEmail()).toBe('test@email.com');
});

test("gets a engineer's GitHub value", () => {
    const engineer = new Engineer('Dave', '1', 'test@email.com', 'engiGit');
  
    expect(engineer.getGithub()).toBe('engiGit');
});

test("gets a engineer's role value", () => {
    const engineer = new Engineer('Dave', '1', 'test@email.com', 'engiGit');
  
    expect(engineer.getRole()).toBe('Engineer');
});
