const enhancer = require('./enhancer');

describe('All Enhancement Functions', () => {
    const testItem1 = {
        originalName: 'Cool Shield',
        currentName: '[+5] Cool Shield',
        type: 'armor',
        enhancement: 5,
        durability: 50, 
    };

    const testItem2 = {
        originalName: 'Levin Sword',
        currentName: '[PRI] Levin Sword',
        type: 'weapon',
        enhancement: 16,
        durability: 25, 
    }

    const testItem3 = {
        originalName: 'Sharp Dagger',
        currentName: '[+8] Sharp Dagger',
        type: 'weapon',
        enhancement: 8,
        durability: 13, 
    }


    describe('success() method', () => {
        // todo
    });

    describe('fail() method', () => {
        // todo
    });

    describe('repair() method', () => {
        // todo
        const result1 = enhancer.repair(testItem1);
        const result2 = enhancer.repair(testItem2);
        const result3 = enhancer.repair(testItem3);

        it('should change durabilty back to 100', () => {
            expect(result1.durability).toBe(100);
            expect(result2.durability).toBe(100);
            expect(result3.durability).toBe(100);
        })

        it('should return the item with ONLY durability changed', () => {
            expect(result1).toEqual({
                originalName: 'Cool Shield',
                currentName: '[+5] Cool Shield',
                type: 'armor',
                enhancement: 5,
                durability: 100, 
            });
            expect(result2).toEqual({
                originalName: 'Levin Sword',
                currentName: '[PRI] Levin Sword',
                type: 'weapon',
                enhancement: 16,
                durability: 100,
            });
        })

        it('should return message string when item has less durability than it should', () => {
            expect(result3).toBe('[+8] Sharp Dagger does not have enough durability!')
        })
    });
})