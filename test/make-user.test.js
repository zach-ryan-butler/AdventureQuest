import makeUser from '../src/home/make-user.js';
const test = QUnit.test;

test('create user object from form data', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const formData = new FormData();
    formData.set('name', 'ash');
    formData.set('pokemon', 'pikachu');
    //Act 
    const user = makeUser(formData);
    // Call the function you're testing and set the result to a const

    //Assert
    assert.deepEqual(user, {
        name: 'ash',
        pokemon: 'pikachu',
        hp: 50,
        exp: 0
    });
});