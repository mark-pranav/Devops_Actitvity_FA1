// IUserProfile Interface
class IUserProfile {
    accessDashboard() {
        throw new Error("Method 'accessDashboard()' must be implemented.");
    }
}

// Concrete User Profile Classes
class JobSeeker extends IUserProfile {
    accessDashboard() {
        console.log("Accessing Job Seeker Dashboard.");
    }
}

class Recruiter extends IUserProfile {
    accessDashboard() {
        console.log("Accessing Recruiter Dashboard.");
    }
}

class Admin extends IUserProfile {
    accessDashboard() {
        console.log("Accessing Admin Dashboard.");
    }
}

// UserProfile Factory
class UserProfileFactory {
    createUserProfile(type) {
        switch (type) {
            case 'job-seeker':
                return new JobSeeker();
            case 'recruiter':
                return new Recruiter();
            case 'admin':
                return new Admin();
            default:
                throw new Error("Unknown profile type.");
        }
    }
}

// Usage
const factory = new UserProfileFactory();
const user = factory.createUserProfile('job-seeker');
user.accessDashboard();
