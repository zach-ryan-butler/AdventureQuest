import api from '../services/api.js';
import loadProfile from '../load-profile.js';
import createQuestLink from './create-quest-link.js';

loadProfile();

const quests = api.getQuests();
const questParentNode = document.getElementById('quests');

for(let index = 0; index < quests.length; index++) {
    const quest = quests[index];
    const linkNode = createQuestLink(quest);

    questParentNode.appendChild(linkNode);
}