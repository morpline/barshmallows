//I know this can be a JSON file, but i dont care, haters
let soopMessages = [
    "Hello helo?",
    "This barshmalow farm?",
    "It is?",
    "Good. I need barhsmallow pics.",
    "Get me a pitcure of a yellow basrhmallow,",//5
    "Ok?",
    "Good good.",
    "I sent you the money.",
    "I will cnotact you when i need you, ok?",
    "helo, barshmallow farm>",//10
    "I need pictrure of a green circle barshmallow, ok?",
    "No ask questions, just give pictue and get money, ok?",
    "Many thanks, ok?",
    "Now get me a orznge domut",
    "ok?",//15
    "23345141354:1625142021302239121425301327222949162636231916302239131521292514202145",
    "42953325:202023271623163639264226513461271425402324194017181917251327222948",
    "4547:1616442919352324252719392827223940313654",
    "PLEES SEND PIC O F ",
    "BI G HBARSHMALLWO",//20
    "SEND IT NOW!!1",
    "Sory, i was tedxting in my selpp.",
    "Yo uknows how it id."
];
let soopQuests = [
    new Quest(1,3961,-1,0,-1,-1,1,()=>{soopIndex++;},"Get me a pitcure of a yellow basrhmallow."),
    new Quest(1,1497,-1,7,-1,2,1,()=>{soopIndex++;smithIndex++;},"I need pictrure of a green circle barshmallow, ok?"),
    new Quest(1,1803,-1,3,-1,2,1,()=>{soopIndex++;},"Now get me a orznge domut"),
    new Quest(1,3666,20,-1,-1,-1,1,()=>{soopIndex++;},"PLEES SEND PIC O F BI G HBARSHMALLWO NOW!!1")
];
let cansoopTalk = [
    false,
    true,
    true,
    true,
    true,// 5 quest
    false,
    true,
    true,
    false,
    true,//10
    true,//quest
    false,
    true,
    true,//quest
    false,//15
    false,
    false,
    false,
    true,
    true,//20 quest
    true,
    true,
    false,
];
let soopIndex = 0;
let whenToAddsoopQuests = [
    //for quests x, add when index = y.
    //you add the Ys here.
    4,//yellow
    10,//green circle
    13,//orznge domut
    19//bi g hbarshmallwo
];
let soopPicture = "images/people/soop.mahm.jfif";
let soopUnlocked = false;