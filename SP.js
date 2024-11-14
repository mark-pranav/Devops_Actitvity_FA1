// ResumeParserAdapter Interface
class ResumeParserAdapter {
    parseResume(file) {
        throw new Error("Method 'parseResume()' must be implemented.");
    }
}

// Concrete Adapters for different resume parsing services
class ServiceAAdapter extends ResumeParserAdapter {
    parseResume(file) {
        console.log("Parsing resume with Service A.");
        return {}; // Placeholder for actual parsed data
    }
}

class ServiceBAdapter extends ResumeParserAdapter {
    parseResume(file) {
        console.log("Parsing resume with Service B.");
        return {}; // Placeholder for actual parsed data
    }
}

// Function to parse resume using any adapter
function parseUserResume(parser, file) {
    return parser.parseResume(file);
}

// Usage
const parserA = new ServiceAAdapter();
parseUserResume(parserA, new File([""], "resume.pdf"));
