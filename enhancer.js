module.exports = {
    success,
    fail,
    repair
}

const displayName = [];

function success(item) {
    // take an item, changes the name and increases enhancement
}

function fail(item) {
    //
}

function repair(item) {
    // takes an item and returns an item with durability at 100

    // if ((0 <= item.enhancement <= 14) && (20 <= item.durability <= 100)) {
    //     return { ...item, durability: 100 };
    // } else if ((15 <= item.enhancement <= 20) && (0 <= item.durability <= 100)) {
    //     return { ...item, durability: 100 };
    // } else {
    //     return `${item.currentName} does not have enough durability!`;
    // }

    return { ...item, durability: 100 };
}