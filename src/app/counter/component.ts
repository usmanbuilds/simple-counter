import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './template.html',
    styleUrls: ['./styles.css']
})
export class CounterComponent {
    private static readonly MIN_THRESHOLD = 0;
    private static readonly MAX_THRESHOLD = 100;

    public count: number = 0;
    public countInterval: number = 1;

    public incrementCount() {
        if (this.count + this.countInterval > CounterComponent.MAX_THRESHOLD) {
            return;
        }

        this.count += this.countInterval;
    }

    public decrementCount() {
        if (this.count - this.countInterval < CounterComponent.MIN_THRESHOLD) {
            return;
        }

        this.count -= this.countInterval;
    }

    public increaseCountInterval() {
        this.countInterval += 1;
    }

    public decreaseCountInterval() {
        if (this.countInterval === 1) {
            return;
        }

        this.countInterval -= 1;
    }
}
