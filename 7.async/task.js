class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('Невозможно идентифицировать будильник. Параметр id не передан.');
        }
        if (!this.alarmCollection.find(elem => elem.id === id)) {
            let alarm = {id, time, callback};
            this.alarmCollection.push(alarm);
        } else {
            return console.error('Будильник с таким id уже существует');
        }
    }
    removeClock(id) {
        let alarmIndex = this.alarmCollection.findIndex(elem => elem.id === id);
        if (alarmIndex === -1) {
            return false;     
        } 
        this.alarmCollection.splice(alarmIndex, 1);
        return true;
    } 
    getCurrentFormattedTime() {
        return new Date().toLocaleTimeString().slice(0,-3);
    }
    start() {
        if (this.timerId !== null) {
            return;
        }
        let checkClock = () => {
            this.alarmCollection.forEach(alarm => {
                if (alarm.time === this.getCurrentFormattedTime()) {
                    return alarm.callback();
                }
            })
        }
        this.timerId = setInterval(checkClock, 2000)
    }
    stop() {
        if (this.timerId !== null) {
            clearInterval(this.timerId)
            this.timerId = null;
        }
    }
    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        this.alarmCollection.forEach(elem => {
            console.log(`Будильник № ${elem.id} заведен на ${elem.time}`);
        })
    } 
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}