/* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/

export const gameDetails = {   
    title: 'Walking in the Park',
    desc: "Welcome to the world of Nowhere! We're happy to have you visit with us, and hope you have a safe time exploring our local park. Fun time! I mean, it'll of course be safe AND fun. Now, while we're sure you understand the basic concept of walking, our undying hospitable nature demands we show our new tourists the ropes. (Metaphorically, of course!) So, here are some helpful tips that will make your time with us a truly undeniably, unforgettably, unmatched experience. FIRST! In this place, you are only free to explore ahead or behind--this means, that to return to a previous area will require some memory. Do your best to follow the maze, er...I mean path, and you will be fine! SECOND!! To interact with the world or to choose a path, be sure you speak clearly so our guide can help you along. This means reiterating key verbs or phrases that a local Nowhereian would understand. You can identify these words by their LOUD EXPRESSION! We Nowhereians are a boisterous bunch. FINALLY, THIRD! Don't forget to explore each new area and gather as many clues as possible. You never know what mysterious...I mean curious...no, I mean INTERESTING things you might happen upon in the dungeon..gah! No! In the Park! We're just walking in the Park! It's all normal! We're all fine. You're good. Okay, bye!",
    author: 'SinGer',
    cohort: 'SBPT-2023',
    startingRoomDescription: "What you see before you is a large iron gate that is tightly shut with a padlock. Above the gate, there is a sign that reads 'PARK'. To your left and right there are whitewashed stone walls with ivy poking above and throughout them. On the ground, paralell to either wall, is a worn sidewalk covered in dirt and litter with what appear to be arrows pointing East in one direction, or West the other.",
    playerCommands: [
        // replace these with your games commands as needed
        'inspect', 'view', 'look', 'pickup', 'enter', 'break', 'climb'
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
}

// Your code here

export const domDisplay = (playerInput) => {
    /* 
        TODO: for students
        - This function must return a string. 
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current room
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */

    // Your code here
} 
