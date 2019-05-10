import questData from './quest-data.js';
const api = {
    storage: localStorage,
    
    signUp(user) {
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
    },
    getUser() {
        const json = api.storage.getItem('user');
        // if(!json) return null;
        const user = JSON.parse(json);
        return user;
    },
    getQuests() {
        return questData;
    },
    getQuest(id) {
        for(let index = 0; index < questData.length; index++) {
            const quest = questData[index];
            if(quest.id === id) {
                return quest;
            }
        }
    }
};

export default api;