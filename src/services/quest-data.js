const battle = {
    id: 'battle',
    title: 'A gym battle',
    image: 'gym.png',
    description: `
        You enter the gym and are confronted by the gym leader.
        They look intimidating and ready for battle. what do you do?
    `,
    choices: [{
        id: 'fight',
        description: 'Battle them',
        result: `
            Steeling your resolve you step forward and
            challenge the gym leader. After a fierce struggle the
            outcome is obvious. You win, but lose 20hp and gain 30 exp.
        `,
        hp: -20,
        exp: 30
    }, {
        id: 'run',
        description: 'Flee',
        result: `
            As you run away from the gym leader you slip and fall on
            your face in shame, causing 50 hp damage.
        `,
        hp: -50,
        exp: 0
    }, {
        id: 'negotiate',
        description: 'Negotiate with them',
        result: `
            Knowing the gym leader was pushed into his position by his father,
            you convince him to abondon his position and pursue his true passion of
            tamagotchi trading. You take over mantle of gym leader and gain 100 exp.      
        `,
        hp: 0,
        exp: 100
    }]
};

const ferry = {
    id: 'ferry',
    title: 'A ferry ride',
    image: 'ferry.png',
    description: `
        You travel to the ferry for a ride aboard the S.S. Anne.
        Anticiapting a relaxing ferry ride you and your launchair
        go to the dock for a look around. As you arrive at the dock,
        suddenly, you are confronted by a host of trainer battling.
        One of them makes eye-contact and approaches. What do you do?
    `,
    choices: [{
        id: 'fight',
        description: 'Battle them',
        result: `
            You mop the floor with the over-eager trainer taking no damage,
            and gain 20 exp.
        `,
        hp: 0,
        exp: 20
    }, {
        id: 'flee',
        description: 'Run away',
        result: `
            As you turn to leave you slip on a banana peel and comically fall
            on to the ground. luckily the experiance taught you to watch where your
            going, gain 10 exp, unluckily you lose 30 hp.
        `,
        hp: -30,
        exp: 10
    }, {
        id: 'trade',
        description: 'Trade Pokemon',
        result: `
            Knowing your pokemon's loyalty is absoulte you offer a trade
            and they agree. After the deal is done your pokemon ditches them
            and comes back to you. Gain 50 exp, I hope you can live with yourself.
        `,
        hp: 0,
        exp: 50
    }]
};

const center = {
    id: 'heal',
    title: 'Trip to Poke Center',
    image: 'center.png',
    description: `
        Exhausted from your journeys you decide to stop by the poke center 
        rest up. What do you do?
        
    `,
    choices: [{
        id: 'rest',
        description: 'Talk with the nurse',
        result: `
            Rest with Nurse Jenny and gain 50hp.
        `,
        hp: 50,
        exp: 0
    }, {
        id: 'eat',
        description: 'Look around',
        result: `
            After skipping a few meals your willing to eat anything. You notice
            some half eaten thai food sitting on the bench and wolf it down. Lose
            20 hp from food poisoning.
        `,
        hp: -20,
        exp: 0
    }, {
        id: 'meditate',
        description: 'Rest and relaxation',
        result: `
            Too tired and hungry to do anything but sit you ponder the workings
            of the universe and gain inner peace. On the bright side you learn to
            live without nurishment, gain 50 hp. However you also forget everything 
            know about pokemon training, lose 50 exp      
        `,
        hp: 50,
        exp: -50
    }]
};

const questData = [battle, ferry, center];

export default questData;

