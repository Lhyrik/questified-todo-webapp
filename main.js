// Greet the user
console.info(`Hiya! Let's start questing!`)

// Load Quest database

// List of Questies
const Quests = {}

// Listen for commands

// Create a Quest

// Create a Questie

// Show a Quest info

// Show a Questie info

// Update a Quest

// Update a Questie

// Delete a Quest

// Delete a Questie

// Show a list of Quests

// Show a list of Quests with Questies

// Start tracking time

// Stop tracking time

// Log time spent on Questie

// Update total time spent on Quest



const Quest = {
    title: '',
    description: '',
    questies: [],
    timeSpent: [],
    tags: [],

}

async function trackTimeSpent() {
    await startTrackingTime(); 
    await stopTrackingTime(); 
    const timeSpent = endTime - startTime;
    return timeSpent;
}

async function startTrackingTime() {

}

async function stopTrackingTime() {

}

