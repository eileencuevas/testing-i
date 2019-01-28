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
        currentName: '[DUO] Levin Sword',
        type: 'weapon',
        enhancement: 17,
        durability: 25, 
    }

    const testItem3 = {
        originalName: 'Sharp Dagger',
        currentName: '[+8] Sharp Dagger',
        type: 'weapon',
        enhancement: 8,
        durability: 40, 
    }


    describe('success() method', () => {
        // todo
    });

    describe('fail() method', () => {
        // todo
        const result1 = enhancer.fail(testItem1);
        const result2 = enhancer.fail(testItem2);
        const result3 = enhancer.fail(testItem3);

        it('should return an item with decreased durability', () => {
            expect(result1.durability).toBe(45);
            expect(result2.durability).toBe(15);
            expect(result3.durability).toBe(35);
        });

        it('should change the enhancement level of items with levels greater than 16', () => {
            expect(result1.enhancement).toBe(5);
            expect(result2.enhancement).toBe(16);
            expect(result3.enhancement).toBe(8);
        });

        it('should change the currentName of items with enhancement level greater than 16', () => {
            expect(result1.currentName).toBe('[+5] Cool Shield');
            expect(result2.currentName).toBe('[PRI] Levin Sword');
            expect(result3.currentName).toBe('[+8] Sharp Dagger');
        });
        it('should not change anything if the enhancement level is outside of a specified range', () => {
            expect(enhancer.fail({ enhancement: 20 })).toBe('Nothing changed.');
        });
        it('should not change anything but the enhancement, durability and/or currrentName', () => {
            expect(result1).toEqual({
                originalName: 'Cool Shield',
                currentName: '[+5] Cool Shield',
                type: 'armor',
                enhancement: 5,
                durability: 45, 
            });
            expect(result2).toEqual({
                originalName: 'Levin Sword',
                currentName: '[PRI] Levin Sword',
                type: 'weapon',
                enhancement: 16,
                durability: 15, 
            });
            expect(result3).toEqual({
                originalName: 'Sharp Dagger',
                currentName: '[+8] Sharp Dagger',
                type: 'weapon',
                enhancement: 8,
                durability: 35,
            });
        })
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
                currentName: '[DUO] Levin Sword',
                type: 'weapon',
                enhancement: 17,
                durability: 100,
            });
        })

        // it('should return message string when item has less durability than it should', () => {
        //     expect(result3).toBe('[+8] Sharp Dagger does not have enough durability!')
        // })
    });
})