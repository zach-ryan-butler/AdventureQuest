import api from '../services/api.js';
import loadProfile from '../load-profile.js';
import createQuestLink from './create-quest-link.js';
import createCompletedQuest from './create-completed-quest.js';

loadProfile();

const quests = api.getQuests();
const questParentNode = document.getElementById('quests');
const user = api.getUser();


for(let index = 0; index < quests.length; index++) {
    const quest = quests[index];
    
    if(user.completed[quest.id] === true) {
        const spanNode = createCompletedQuest(quest);
        questParentNode.appendChild(spanNode);
    } else {
        const linkNode = createQuestLink(quest);
        questParentNode.appendChild(linkNode);
    }
}