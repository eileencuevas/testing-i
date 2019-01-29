module.exports = {
    success,
    fail,
    repair
}

const displayName = [
    '', '[+1] ', '[+2] ', 
    '[+3] ', '[+4] ', '[+5] ', 
    '[+6] ', '[+7] ', '[+8] ', 
    '[+9] ', '[+10] ', '[+11] ', 
    '[+12] ', '[+13] ', '[+14] ', 
    '[+15] ', '[PRI] ', '[DUO] ', 
    '[TRI] ', '[TET] ', '[PEN] ',
];

function success(item) {
    // take an item, changes the name and increases enhancement
    if (item.type === 'armor') {
        if (item.enhancement <= 5) {
            return { 
                ...item, 
                enhancement: item.enhancement + 1, 
                currentName: `${displayName[item.enhancement + 1]}${item.originalName}`,
            };
        } else if (item.enhancement <= 14 && item.durability >= 25) {
            return { 
                ...item, 
                enhancement: item.enhancement + 1, 
                currentName: `${displayName[item.enhancement + 1]}${item.originalName}`,
            };
        } else if (item.enhancement <= 19 && item.durability >= 10) {
            return { 
                ...item, 
                enhancement: item.enhancement + 1, 
                currentName: `${displayName[item.enhancement + 1]}${item.originalName}`,
            };
        } else {
            return 'Nothing changed.';
        }
    } else {
        if (item.enhancement <= 7) {
            return { 
                ...item, 
                enhancement: item.enhancement + 1, 
                currentName: `${displayName[item.enhancement + 1]}${item.originalName}`,
            };
        } else if (item.enhancement <= 14 && item.durability >= 25) {
            return { 
                ...item, 
                enhancement: item.enhancement + 1, 
                currentName: `${displayName[item.enhancement + 1]}${item.originalName}`,
            };
        } else if (item.enhancement <= 19 && item.durability >= 10) {
            return { 
                ...item, 
                enhancement: item.enhancement + 1, 
                currentName: `${displayName[item.enhancement + 1]}${item.originalName}`,
            };
        } else {
            return 'Nothing changed.';
        }
    }

}

function fail(item) {
    // take an item, decreases durability & enhancement (if level > 16), changes name
   if ((item.type === 'armor' && item.enhancement > 5) || (item.type === 'weapon' && item.enhancement > 7)) {
        if ( item.enhancement <= 14) {
            return { ...item, durability: item.durability - 5, };
        } else if (item.enhancement <= 16) {
            return {
                ...item, durability: item.durability - 10,};
        } else if (item.enhancement <= 19) {
            return {
                ...item,
                durability: item.durability - 10,
                enhancement: item.enhancement - 1,
                currentName: `${displayName[item.enhancement -1]}${item.originalName}`
            };
        } else if (item.enhancement === 20) {
            return 'Nothing changed.';
        }
   } else {
       return `The enchantment level doesn't qualify to fail.`
   }
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