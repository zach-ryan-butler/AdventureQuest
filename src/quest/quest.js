import api from '../services/api.js';
import createChoice from './create-choice.js';
import loadProfile from '../load-profile.js';

loadProfile();

const titleNode = document.getElementById('title');
const imageNode = document.getElementById('image');
const descriptionNode = document.getElementById('description');
const choiceFormNode = document.getElementById('choice-form');
const resultsParentNode = document.getElementById('results');
const resultsDescriptionNode = document.getElementById('result-description');
const choicesParentNode = document.getElementById('choices');

const searchParams = new URLSearchParams(window.location.search);
const questId = searchParams.get('id');
const quest = api.getQuest(questId);

titleNode.textContent = quest.title;
imageNode.src = './assets/' + quest.image;
descriptionNode.textContent = quest.description;

for(let index = 0; index < quest.choices.length; index++) {
    const choice = quest.choices[index];
    const choiceRadio = createChoice(choice);
    choicesParentNode.appendChild(choiceRadio);
}

