function scoreQuest(user, choice) {
    user.hp = user.hp + choice.hp;
    user.exp = user.exp + choice.exp;
    return user;
}

export default scoreQuest;