let participants = [];

function addParticipant(name) {
    participants.push(name);
    
}

function displayParticipants() {
    console.log("Meeting Participants:");
    participants.forEach((participant, index) => {
        console.log(`${index + 1}. ${participant}`);
    });
}


addParticipant("ram");
addParticipant("basha");
addParticipant("John");

displayParticipants();
