const switcher = document.getElementById("switcher");
const messanger = document.getElementById("messanger");
const messangerPic = document.getElementById("messangerPic");
const nameShower = document.getElementById("messangerPic");
const messages = document.getElementById("messages");

let messangerMode = 0;
//0 Mr smith
//1 Soop Mahm
//2 Azis Anim
//3 Ard T Adenina
//switcher buttons
const smithButton = document.getElementById("mrSmithButton");
const ardButton = document.getElementById("ardButton");
const soopButton = document.getElementById("soopButton");
const azisButton = document.getElementById("azisButton");
//event listeners
smithButton.addEventListener("click",() => {messangerMode=0;})
function updateSmith () {
    //Copy this function for all the people added and put in the correct variables.
    //See mr.smith.js for the proper syntax.
    //Required:
    //messages = string[]
    //quests = Quest[]
    //index = int
    //when to add quests = int[]
    //can talk = bool[]
    //picture = string (filepath to picture)

    //I know this way of doing it is lazy, but I dont want to make a Message class.

    smithButton.classList.remove(".hidden");
    
    messangerPic.src = smithPicture;
    nameShower.textContent = "Mr. Smith";
    mpopulateList(smithMessages,messages,smithIndex);
    
}

function updatesoop () {
    //Copy this function for all the people added and put in the correct variables.
    //See mr.smith.js for the proper syntax.
    //Required:
    //messages = string[]
    //quests = Quest[]
    //index = int
    //when to add quests = int[]
    //can talk = bool[]
    //picture = string (filepath to picture)

    //I know this way of doing it is lazy, but I dont want to make a Message class.
    if(!soopUnlocked)
        return;
    
    
    soopButton.classList.remove(".hidden");
    
    messangerPic.src = soopPicture;
    nameShower.textContent = "Soop Maam";
    mpopulateList(soopMessages,messages,soopIndex);
    
}
function mpopulateList(plates = [], platesList,index = 0) {
    //yes this function is in almost all the .js files.
    // platesList = plates.map((plate, i) => {
    //     return plate.div;
    // }).join('');
    let j = 0;//plate div the loop is looking at
    let i = 0;//plate the first for loop is checking
    for(i =0;i<plates.length;i++) {
        // console.log(`Checking plate #${i},Visible:${plates[i].visible},Does div exist? ${platesList.children[j]!=null}, Outcome:`);
        if(i<=index)//if plate is visible
        {
            if(platesList.children[j]==null)//if plate div doesn't exist
            {
                let div = document.createElement("div");
                div.classList.add("message")
                div.textContent = plates[i];
                platesList.append(div);// create it
                // console.log("add it (you shouldn't get a 'replaced' after this)");
            } else {// other wise
                platesList.children[j].textContent = (plates[i]);//replace the existing one
                // console.log(`replaced plate div ${j}`);
            }
            j++;
        }
    }
    //j++;
    //shouldn't need this but whatever, performance isn't that bad, i dont need to remove it
    // console.log(`I:${i};J:${j};List Length:${platesList.children.length}`);
    if(j<platesList.children.length)
        while(j<platesList.children.length) {
            platesList.children[j].remove();
            // console.log(`Removed Child #${j}`);
            j++;
        }
}
function updateMessanger() {
    switch (messangerMode) {
        case 0:
            updateSmith();
            break;
        case 1:
            updatesoop();
            break;
        
        default:
            updateSmith();
            break;
    }
}
function next() {
    if(canSmithTalk[smithIndex])
    {
        smithIndex++;
        createNotification("New message from Mr. Smith");
    }
    whenToAddSmithQuests.forEach((q,i) => {
        if(smithIndex==q)
        {
            quests.push(smithQuests[i]);
            updateQuests();
            createNotification("New Quest from Mr. Smith");
            smithIndex++;
        }
    })
    if(cansoopTalk[soopIndex])
    {
        soopIndex++;
        createNotification("New message from Soop Maam");
    }
    whenToAddsoopQuests.forEach((q,i) => {
        if(soopIndex==q)
        {
            quests.push(soopQuests[i]);
            updateQuests();
            createNotification("New Quest from Soop Maam");
            soopIndex++;
        }
    })
}