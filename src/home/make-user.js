function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        pokemon: formData.get('pokemon'),
        hp: 50,
        exp: 0
    };
    return user;
}

export default makeUser;