var achievements = [
    false,//0  Buy a barshmallow
    false,//1  Sell a barshmallow
    false,//2  Breed a barshmallow
    false,//3  Get a barshmallow with "great" shape
    false,//4  Get a barshmallow with "polygonal" texture
    false,//5  Get over a Million dollars
    false,//6  Sell a barshmallow for over $2,000
    false,//7  Sell a barshmallow for over $4,000
    false,//8  Have over 10 barshmallows
    false,//9  Have over 50 barshmallows in the world
    false,//10 Play for over 2 hours
    false,//11 Have a barshmallow scrutinized
    false,//12 Find out you have a barshmallow with almost perfect luck
    false,//13 Get the Perfect Barshmallow (>0.9 luck, great shape,polygonal texture,>19 height,)
    false,//14 Get a Biege barshmallow
    false,//15 Complete a Quest
];
const achievementMessages = [
    "Bought a Barshmallow",//done
    "Sold a Barshmallow",//done
    "Bred a Barshmallow",//done
    "Obtained a Great Barshmallow",//done
    "Obtained a Polygonal Barshmallow",//done
    "Earned a Million Dollars",//done
    "Sold a barshmallow for over $2,000",//done
    "Sold a barshmallow for over $4,000",//done
    "Had 10 barshmallows at once",//done
    "Seen 50 unique barshmallows",//done
    "Played for 2 hours",
    "Scrutinized a Barshmallow",//done
    "Find a barshmallow with perfect luck",//done
    "Got the perfect barshmallow",//done
    "Got a Biege barshmallows",//done
    "Complete a Quest",
];
function achievementCompleteAlert() {
    sfx.play();
    sfx.currentTime=0;
}
function completeAchievement (iff = false,achievement = 0) {
    if(iff && !achievements[achievement]){
        achievements[achievement]=true;
        achievementCompleteAlert();
        achievementsUpdate();
    }

}
function checkAchievementsOnNewBarshmallow(barsh = new Barshmallow) {
    completeAchievement((barsh.shape == 8),3);
    completeAchievement((barsh.texture == 8),4);
    completeAchievement((barsh.color==4),14);
    completeAchievement((barsh.texture == 8 && barsh.shape == 8 && barsh.luck>0.9 && barsh.height>19),4);
}
function apopulateList(plates = [], platesList) {
    if(plates==null){
        setTimeout(apopulateList,100);
        return
    }
    // platesList = plates.map((plate, i) => {
    //     return plate.div;
    // }).join('');
    let j = 0;//plate div the loop is looking at
    let i = 0;//plate the first for loop is checking
    for(i =0;i<plates.length;i++) {
        // console.log(`Checking plate #${i},Done:${plates[i]},Does div exist? ${platesList.children[j]!=null}, Outcome:`);
        if(plates[i]==true)//if plate is visible
        {
            if(platesList.children[j]==null)//if plate div doesn't exist
            {
                let p = document.createElement("p");
                p.textContent = achievementMessages[i];
                platesList.append(p);// create it
                // console.log("add it (you shouldn't get a 'replaced' after this)");
            } else {// other wise
                platesList.children[j].textContent = (achievementMessages[i]);//replace the existing one
                // console.log(`replaced plate div ${j}`);
            }
            j++;
        }
    }
    j++;
    // console.log(`I:${i};J:${j};List Length:${platesList.children.length}`);
    if(platesList==null)
        return;
    if(j<platesList.children.length)
        while(j<platesList.children.length) {
            platesList.children[j].remove();
            // console.log(`Removed Child #${j}`);
            j++;
        }
}
const achievementContainer = document.getElementById("achievements");
function achievementsUpdate () {
    apopulateList(achievements,achievementContainer);
}