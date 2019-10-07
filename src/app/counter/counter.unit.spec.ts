import { CounterComponent } from './component';

describe('Counter component', () => {
    let sut: CounterComponent;

    beforeEach(() => {
        sut = new CounterComponent();
    });

    describe('incrementCount', () => {
        it('increments the count by the default count interval 1', () => {
            sut.count = 0;
            sut.countInterval = 1;

            sut.incrementCount();
            expect(sut.count).toBe(1);
            sut.incrementCount();
            expect(sut.count).toBe(2);
        });

        it('increments the count by a count interval of 3', () => {
            sut.count = 90;
            sut.countInterval = 3;

            sut.incrementCount();
            expect(sut.count).toBe(93);
            sut.incrementCount();
            expect(sut.count).toBe(96);
        });

        it('does NOT increment the count beyond the MAX_THRESHOLD (100)', () => {
            sut.count = 98;
            sut.countInterval = 2;

            sut.incrementCount();
            expect(sut.count).toBe(100);
            sut.incrementCount();
            expect(sut.count).toBe(100);
        });
    });

    describe('decrementCount', () => {
        it('decrements the count by the default count interval 1', () => {
            sut.count = 10;
            sut.countInterval = 1;

            sut.decrementCount();
            expect(sut.count).toBe(9);
            sut.decrementCount();
            expect(sut.count).toBe(8);
        });

        it('decrements the count by a count interval of 4', () => {
            sut.count = 10;
            sut.countInterval = 4;

            sut.decrementCount();
            expect(sut.count).toBe(6);
            sut.decrementCount();
            expect(sut.count).toBe(2);
        });

        it('does NOT decrement the count below the MIN_THRESHOLD (0)', () => {
            sut.count = 2;
            sut.countInterval = 2;

            sut.decrementCount();
            expect(sut.count).toBe(0);
            sut.decrementCount();
            expect(sut.count).toBe(0);
        });
    });

    describe('increaseCountInterval', () => {
        it('increments the countInterval by 1', () => {
            sut.countInterval = 1;

            sut.increaseCountInterval();
            expect(sut.countInterval).toBe(2);
            sut.increaseCountInterval();
            expect(sut.countInterval).toBe(3);
        });
    });

    describe('decreaseCountInterval', () => {
        it('decrements the countInterval by 1', () => {
            sut.countInterval = 5;

            sut.decreaseCountInterval();
            expect(sut.countInterval).toBe(4);
            sut.decreaseCountInterval();
            expect(sut.countInterval).toBe(3);
        });

        it('does NOT decrement the countInterval below 0', () => {
            sut.countInterval = 1;

            sut.decreaseCountInterval();
            expect(sut.countInterval).toBe(1);
        });
    });
});
