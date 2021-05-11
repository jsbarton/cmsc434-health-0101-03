
let mentalExercises = {
    sensoryAwareness: "Create five columns on a piece of paper, labeling each with one of the five senses: touch, taste, smell, sight, and sound. Then take 15-20 minutes to think about and write down the experiences that give you pleasure through each of your senses.",
    positiveReminiscence: "During the exercise, clients should take time to think about an event from their past that evokes positive emotions, visualize the event in as much detail as possible, and focus on the pleasant feelings that were experienced at the time.",
    gratitude: "Think about something good in your life right now and then take a moment to imagine what life would be like without that one good thing. Write down the ways in which your life would be different without this one good thing.",
    selfCompassion: "Pause for a moment and focus on your breathing as you inhale and exhale. Next, place your hands on your body – remember that while this is a difficult moment, suffering is a part of life. Create soothing phrases that are personal and meaningful to you, such as “I accept myself as I am” or “May I forgive myself for this mistake just as I would forgive others.",
    importantActivities: "Complete three important, enjoyable, and meaningful activities in a single day and write about them in detail. These acts should include: <br> A pleasurable activity carried out alone (for example, reading or listening to music) <br> A pleasurable activity completed with others (for example, playing cards or meeting for lunch) <br> A meaningful or important act (for example, visiting an isolated relative).",
    motivationalAwareness: "Take a few moments throughout the day to think about the things that excite and motivate you to action, then write them down. Reflect upon the extent to which your motivation is self-determined.",
    strenghts: "Pick one of their top five strengths and write down your answers to the following questions: <br> How do I use this strength already? <br>In what areas of my life do I use this strength?</br>What other areas in my life could I use it more?<br>What are other ways I could use this strength?<br>What is my plan? What exactly would I like to do? How frequently?<br>When will this happen?<br>What will happen if I achieve my goals?",
    affirmations: "Write three affirmations toward youself in the following format:<br>1. \"Thank you for helping me...\"<br>2. \"Thank you for expanding me...\"<br>3. \"Thank you for inspiring me...\"",
}


function getSuggestion() {
    let keys = Object.keys(mentalExercises)
    let randomItem = keys[Math.floor(Math.random()*keys.length)];
    return mentalExercises[randomItem]
}
