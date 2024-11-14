// Observer Interface
class Observer {
    notify(message) {
        throw new Error("Method 'notify()' must be implemented.");
    }
}

// Concrete Observer
class JobSeekerObserver extends Observer {
    constructor(name) {
        super();
        this.name = name;
    }
    notify(message) {
        console.log(`${this.name} received notification: ${message}`);
    }
}

// Subject
class JobApplication {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(message) {
        this.observers.forEach(observer => observer.notify(message));
    }

    updateStatus(status) {
        console.log(`Application status updated to: ${status}`);
        this.notifyObservers(`Status update: ${status}`);
    }
}

// Usage
const application = new JobApplication();
const seeker = new JobSeekerObserver("Alice");
application.addObserver(seeker);
application.updateStatus("Interview Scheduled");
