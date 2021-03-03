const USERS = [
    {
        name: "Yulian",
        age: 28,
        hobby: ["Nature", "Films", "Games", "traveling"],
        job: ["Softserve", "ITClusterAcademy"]
    },
    {
        name: 'Olexander',
        age: 20, hobby: ["fishing", "hiking", "football"],
        job: null, dreams: []
    }
];

const CHANGE_PROPS = (value = 'input smth') => (
    {
        name: prompt(`Enter new value or left existing`, value),
        actual: confirm('Is it actual for you right now?'),
        closestTime: prompt('When we should start work?')
    }
);

let conf = true;

for (let i = 0; i < USERS.length; i++) {
    for (let key in USERS[i]) {
        const USER_ITEM = USERS[i][key];
        if (Array.isArray(USER_ITEM)) {
            if (confirm('Do you want to change this array?')) {
                if (USER_ITEM.length === 0) {
                    do {
                        USER_ITEM.push(CHANGE_PROPS())
                        conf = confirm('Do you wanna add smth else?')
                    } while (conf)
                } else {
                    for (let j = 0; j < USER_ITEM.length; j++) {
                        if (confirm(`Do you wanna change this item?${USER_ITEM[j]}`)) {
                            USER_ITEM[j] = CHANGE_PROPS(USER_ITEM[j]);
                        }
                    }
                }
            }
        }
    }
};

console.log(USERS);