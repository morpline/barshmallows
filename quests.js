const people = [
    "Mr. Smith",
    "Soop Mahm",
    "Azis Anim",
    "Ard T. Adenina"
];

class Quest {
    constructor (person,reward,height=-1,color=-1,texture=-1,shape=-1,count=1,after = function(){},message = "")
    {
        this.person = person;
        this.reward = reward;
        this.color = color;
        this.texture = texture;
        this.shape = shape;
        this.height = height;
        this.count = 1;
        this.div = document.createElement("div");
        this.div.classList.add("outline","quest")
        this.complete = false;
        this.collected = false;
        this.after = after;
        this.message = message;
    }
    update(){
        this.div.innerHTML = 
        `<p class="header">${people[this.person]} requests to see</p>
        <p class="reqs-title">${this.count} barshmallow with:</p>
        <ul class="reqs">
            <li class="req">${this.color==-1?"any":colors[this.color]} color</li>
            <li class="req">${this.texture==-1?"any":textures[this.texture]} texture</li>
            <li class="req">${this.height==-1?"any":Math.round(this.height)} height</li>
            <li class="req">${this.shape==-1?"any":shapes[this.shape]} shape</li>
        </ul>
        <p class="reward">Reward: $${this.reward}</p>
        <p class="message">${this.message}</p>`;

    }
    isComplete(barsh = new Barshmallow()){
        if(
            this.color!=-1 && barsh.color == this.color &&
            this.texture!=-1 && barsh.texture == this.texture &&
            this.shape!=-1 && barsh.shape == this.shape &&
            this.height!=-1 && Math.round(barsh.height) == Math.round(this.height) 
        ) {
            this.complete = true;
        }
    }
}
function qpopulateList(plates = [], platesList) {
    console.log("Quests:");
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
        plates[i].update();
        console.log(`Checking plate #${i},Done:${plates[i]},Does div exist? ${platesList.children[j]!=null}, Outcome:`);
        if(platesList.children[j]==null)//if plate div doesn't exist
        {
            let p = document.createElement("p");
            p.innerHTML = plates[i].div;
            platesList.append(p);// create it
            console.log("add it (you shouldn't get a 'replaced' after this)");
        } else {// other wise
            platesList.children[j].replaceWith(plates[i].div);//replace the existing one
            console.log(`replaced plate div ${j}`);
        }
        j++;
    }
    j++;
    console.log(`I:${i};J:${j};List Length:${platesList.children.length}`);
    if(platesList==null)
        return;
    if(j<platesList.children.length)
        while(j<platesList.children.length) {
            platesList.children[j].remove();
            console.log(`Removed Child #${j}`);
            j++;
        }
}
function convertGenericObjectToQuest({person,reward,height,color,texture,shape,count,after,message}){
    return new Quest (person,reward,height,color,texture,shape,count,after,message);
}
const questsContainer = document.getElementById("quests");
let quests = [];
function checkQuests() {
    barshmallows.forEach(b => {
        quests.forEach(q => q.isComplete(b));
    });
    quests.forEach((q,i) => {
        if(q.complete)
        {
            if(q.collected)
            {
                money+=q.reward;
                q.collected=true;
                q.after();
            }
            createNotification("Quest Completed, Reward: $"+q.reward);
            //quests.splice(i,1);
        }
    })
}
let questTimer = 0;
//every 100000 frames, a new quest will appear
function newRandomQuest() {
    quests.push( new Quest(
        Math.round(Math.random*12),//person
        Math.round(Math.random*5000)+400,//reward
        Math.round(Math.random*12),//height
        Math.round(Math.random*12),//color
        Math.round(Math.random*12),//texture
        Math.round(Math.random*12),//shape
        Math.round(Math.random)+1//count
    ));
}
function updateQuests() {
    qpopulateList(quests,questsContainer);
    checkQuests();
}
function animateQuests() {
    requestAnimationFrame(animateQuests);
    questTimer++;
    if(questTimer>100000) {
        newRandomQuest();
        questTimer=0;
    }
}
