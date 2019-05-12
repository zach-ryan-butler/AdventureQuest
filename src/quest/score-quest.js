function scoreQuest(user, choice, questId) {
    user.hp = user.hp + choice.hp;
    user.exp = user.exp + choice.exp;
    user.completed[questId] = true;
    return user;
}

export default scoreQuest;