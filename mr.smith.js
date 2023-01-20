//I know this can be a JSON file, but i dont care, haters
let smithMessages = [
    "I see you've started Barshmallow breeding.",//0
    "You haven't struck me as the type who would.",
    "Very well, I want proof. Show me a Lumpy barshmallow.",
    "You can, can't you?",
    "Oh, so you can breed barshmallows. You ask how I knew?",
    "Barshmallows from the store are so mass-produced, they are all the same.",//5
    "No variation, except for color.",
    "Speaking of color, it's my granddaughter's birthday soon.",
    "Can you find a Cyan barshmallow?",
    "It's her favorite color, and barshmallows are her favorite thing.",
    "Thank you.",//10
    "She will be very happy.",
    "It's my wife's anniversary soon.",
    "She would love a barshmallow-shaped ring.",
    "I'm sending you the quest now, that's what I need.",
    "Show me your stuff by showing me that barshmallow.",//15
    "Thank you for that.",
    "She doesn't know that I've gone through her old photos.",
    "I am in need of a favor.",
    "I got it wrong.",
    "That wasn't her favorite.",//20
    "It was her rarest.",
    "She told me her favorite was a big fluffy one.",
    "She told me she doesn't have any photos of it, so can you get me a replica?",
    "Many thanks, you may have saved my marriage.",
];
let smithQuests = [
    new Quest(0,500,-1,-1,0,-1,1,()=>{smithIndex++;},"Show me a Lumpy Barshmallow."),
    new Quest(0,1000,-1,8,-1,-1,1,()=>{
        smithIndex++;
        soopUnlocked=true;
        createNotification("Soop Maam messaged you.");
        soopIndex++;
    },"Show me a Cyan Barshmallow."),
    new Quest(0,1500,-1,9,1,4,1,()=>{smithIndex++;soopIndex++;},"This is what her favorite barshmallow as a child was."),
    new Quest(0,2500,20,-1,4,-1,1,()=>{smithIndex++;soopIndex++;},"This is what her favorite actually was.")
]
let canSmithTalk = [
    true,//0
    true,
    true,
    false,//Lumpy
    true,
    true,//5
    true,
    true,
    true,
    false,//Cyan
    true,//10
    false,//   MAKE THIS FALSE WHEN ANOTHER PERSON IS ADDED
    //        IM LEAVING THIS AS TRUE SO THERE ARE QUESTS TO DO
    //        AND IT DOESNT GET SOFTLOCKED (YET)
    true,
    true,
    true,
    false,//favorite 1//15
    true,
    false,
    true,
    true,
    true,//20
    true,
    false,//favorite 2
    true,
];
let smithIndex = 0;
let whenToAddSmithQuests = [
    //for quests x, add when index = y.
    //you add the Ys here.
    2,//Lumpy
    8,//Cyan
    14,//Favorite 1
    21//Favorite 2
];
let smithPicture = "images/people/mr.smith.jfif";
