import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './component';

describe('Given the CounterComponent', () => {
    let componentInstance: CounterComponent,
        componentFixture: ComponentFixture<CounterComponent>,
        componentNativeElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ CounterComponent ]
        })
        .compileComponents();

        componentFixture = TestBed.createComponent(CounterComponent);
        componentInstance = componentFixture.componentInstance;
        componentNativeElement = componentFixture.debugElement.nativeElement;

        componentFixture.detectChanges();
    });

    it('should create', () => {
        expect(componentInstance).toBeTruthy();
    });

    it('should render a count with a default of 0', () => {
        const count = componentNativeElement.querySelector('#count');

        expect(count.textContent).toBe('Count: 0');
    });

    it('should render a count interval with a default of 1', () => {
        const countInterval = componentNativeElement.querySelector('#count-interval');

        expect(countInterval.textContent).toBe('Interval: 1');
    });

    it('should render a plus button on the page', () => {
        const plusButton = componentNativeElement.querySelector('#plus-btn');

        expect(plusButton).not.toBe(null);
    });

    it('should render a minus button on the page', () => {
        const minusButton = componentNativeElement.querySelector('#minus-btn');

        expect(minusButton).not.toBe(null);
    });

    it('should render a interval plus button on the page', () => {
        const intervalPlusButton = componentNativeElement.querySelector('#interval-plus-btn');

        expect(intervalPlusButton).not.toBe(null);
    });

    it('should render a interval minus button on the page', () => {
        const intervalMinusButton = componentNativeElement.querySelector('#interval-minus-btn');

        expect(intervalMinusButton).not.toBe(null);
    });

    describe('and when the plus button is clicked', () => {
        let incrementCountSpy,
            plusButton;

        beforeEach(() => {
            incrementCountSpy = spyOn(componentInstance, 'incrementCount');

            plusButton = componentNativeElement.querySelector('#plus-btn');

            plusButton.click();
        });

        it('should be bound to and have invoked incrementCount', () => {
            expect(incrementCountSpy).toHaveBeenCalledTimes(1);
        });
    });

    describe('and when the minus button is clicked', () => {
        let decrementCountSpy,
            minusButton;

        beforeEach(() => {
            decrementCountSpy = spyOn(componentInstance, 'decrementCount');

            minusButton = componentNativeElement.querySelector('#minus-btn');

            minusButton.click();
        });

        it('should be bound to and have invoked decrementCount', () => {
            expect(decrementCountSpy).toHaveBeenCalledTimes(1);
        });
    });

    describe('and when the interval plus button is clicked', () => {
        let increaseCountIntervalSpy,
            intervalPlusButton;

        beforeEach(() => {
            increaseCountIntervalSpy = spyOn(componentInstance, 'increaseCountInterval');

            intervalPlusButton = componentNativeElement.querySelector('#interval-plus-btn');

            intervalPlusButton.click();
        });

        it('should be bound to and have invoked increaseCountInterval', () => {
            expect(increaseCountIntervalSpy).toHaveBeenCalledTimes(1);
        });
    });

    describe('and when the interval minus button is clicked', () => {
        let decreaseCountIntervalSpy,
            intervalMinusButton;

        beforeEach(() => {
            decreaseCountIntervalSpy = spyOn(componentInstance, 'decreaseCountInterval');

            intervalMinusButton = componentNativeElement.querySelector('#interval-minus-btn');

            intervalMinusButton.click();
        });

        it('should be bound to and have invoked decreaseCountInterval', () => {
            expect(decreaseCountIntervalSpy).toHaveBeenCalledTimes(1);
        });
    });
});
