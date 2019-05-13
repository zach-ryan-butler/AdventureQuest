import createCompletedQuest from '../src/map/create-completed-quest.js';
const test = QUnit.test;

test('create completed quest span', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quest = {
        title: 'A gym battle'
    };

    const expected = '<span class="completed">A gym battle</span>';

    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createCompletedQuest(quest);
    //Assert
    assert.equal(dom.outerHTML, expected);
});