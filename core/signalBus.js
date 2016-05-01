import Signal from './signal';

export default class SignalBus {
    constructor() {
        this.signals = {};
    }

    on(eventName, callback, scope, ttl) {
        this.signals[eventName] = this.signals[eventName] || new Signal();
        this.signals[eventName].add(callback, scope, ttl);
    }

    off(eventName, callback) {
        if(this.signals[eventName]) {
            this.signals[eventName].remove(callback);
        }
    }

    once(eventName, callback, scope) {
        this.signals[eventName] = this.signals[eventName] || new Signal();
        this.signals[eventName].addOnce(callback, scope);
    }

    emit(eventName, ...args) {
        if(this.signals[eventName]) {
            this.signals[eventName].post(...args);
        }
    }

    clear(eventName) {
        if(this.signals[eventName]) {
            this.signals[eventName].clear();
        }
        delete this.signals[eventName];
    }
}