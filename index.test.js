const helloWorld = require('./index');

test('debe retornar "Hola, mundo!"', () => {
    expect(helloWorld()).toBe("Hola, mundo!");
});
