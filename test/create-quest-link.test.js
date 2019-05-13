import createQuestLink from '../src/map/create-quest-link.js';
const test = QUnit.test;

test('creates correct link html', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const quest = {
        id: 'battle',
        title: 'A gym battle'
    };

    const expected = '<a href="quest.html?id=battle">A gym battle</a>';
    //Act 
    // Call the function you're testing and set the result to a const
    const dom = createQuestLink(quest);
    //Assert
    assert.equal(dom.outerHTML, expected);
});