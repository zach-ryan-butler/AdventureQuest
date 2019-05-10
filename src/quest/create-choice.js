function createChoice(choice) {
    const div = document.createElement('div');
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.setAttribute('for', choice.id);
    label.textContent = choice.description;
    
    input.setAttribute('id', choice.id);
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'choice-buttons');
    input.setAttribute('value', choice.id);
    
    div.appendChild(label);
    div.appendChild(input);

    return div;
}

export default createChoice;