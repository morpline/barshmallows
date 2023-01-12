//DATA
const colors = ["Salmon","Red","Scarlet","Orange","Brown","Yellow","Lime green","Green","Cyan","Blue","Lavender","Violet","Mauve"];
const colorHex = ["#ff5577","red","#ffaa3a","orange","#88aa00","yellow","#aaff55","green","#00dddd","blue","#ffaaff","violet",""];
const colorRGBA = ["rgba(255,51,0,0.5)","rgba(255,0,0,0.5)","rgba(255,170,58,0.5)","rgba(255,127,0,0.5)","rgba(136,170,0,0.5)","rgba(255,255,0,0.5)","rgba(170,255,85,0.5)","rgba(0,255,0,0.5)","rgba(0,221,221,0.5)","rgba(0,0,255,0.5)","#rgba(255,175,255,0.5)","rgba(255,0,255,0.5)",""];
const shapes = ["Cubic","Spherical","Trapezoidal","Hexagonal","Toroidal","Obtuse","Amorphous","Cylindrical","Great"];
const shapeImages = ["images/shapes/cubic marshmallow.png","images/shapes/spherical marshmallow.png","images/shapes/trapezoidal marshmallow.png","images/shapes/hexagonal marshmallow.png","images/shapes/toroidal marshmallow.png","images/shapes/obtuse marshmallow.png","images/shapes/amorphous marshmallow.png","images/shapes/cylindrical marshmallow.png","images/shapes/giant marshmallow.png"];
const textures = ["Lumpy","Smooth","Rubbery","Rough","Fluffy","Metallic","Cold","Hot","Polygonal"];
const textureImages = ["images/textures/lumpy marshmallow.png","images/textures/smooth marshmallow.png","images/textures/rubbery marshmallow.png","images/textures/rough marshmallow.png","images/textures/fluffy marshmallow.png","images/textures/metal marshmallow.png","images/textures/transparent marshmallow.png","images/textures/rock marshmallow.png","images/textures/felt marshmallow.png"];
const normalImageSrc = "images/normal marshmallow.png";
//VERSION
const versionmarker = document.getElementById("versionmarker");
const JSversion = document.createElement("h4");
JSversion.innerHTML=("JS Version Alpha 4.1");
versionmarker.after(JSversion);
//GAME
let sfx = document.getElementById("sfx");
let barshmallowContainer = document.getElementById("barshmallows");
let barshmallowId = 0;
class Barshmallow {
    constructor (height=(Math.random()*20), color=0, shape=0, luck=0.5,visible=true,texture=-1,scrutinized=false) {
        this.height=height;
        if(color <0){
            this.color = 0;
        }else{ 
            this.color=color;
        }
        if(shape < -1){
            this.shape = -1;
        }else{ 
            this.shape=shape;
        }
        this.luck=luck;
        this.visible = visible;
        this.textured=(texture!=-1)
        if(texture <-1){
            this.texture = -1;
        }else{ 
            this.texture=texture;
        }
        this.id=barshmallowId;
        this.div = document.createElement("div");
        this.scrutinized = scrutinized;
        this.worth = Math.round((this.height*100+((this.color+1)%2)*500+this.shape*100+this.texture*100+(this.luck*1000)));
        console.log(this.id);
        
        this.update();
    }
    update () {
        this.div = document.createElement("div");
        this.div.id=(this.id);
        this.div.className = "barshmallow";
        let barshmallowImageBox = document.createElement("div");
        let barshmallowImage = document.createElement("img");
        barshmallowImageBox.classList.add("img");
        let barshmallowImageSrc = () => {
            if(this.shape == -1 && this.texture == -1)
            {
                return normalImageSrc;
            } else if (this.shape > this.texture) {
                return shapeImages[this.shape];
            } else {
                return textureImages[this.texture];
            }
        }
        //barshmallowImage.style.backgroundImage=`url("${barshmallowImageSrc()}")`;
        barshmallowImage.src=barshmallowImageSrc();
        console.log(`url("${barshmallowImageSrc()}")`);
        this.div.style.boxShadow = `0 0px 20px 20px ${colorRGBA[this.color]} inset`;
        barshmallowImageBox.append(barshmallowImage);
        this.div.append(barshmallowImageBox);
    
    
        let barshmallowName = document.createElement("p");
        barshmallowName.innerHTML = "Barshmallow #"+(this.id+1);
        this.div.append(barshmallowName);
    
        let barshmallowShape = document.createElement("p");
        barshmallowShape.innerHTML = "Shape: "+(this.shape==-1?"Normal":shapes[this.shape]);
        this.div.append(barshmallowShape);
    
        let barshmallowColor = document.createElement("p");
        barshmallowColor.innerHTML = "Color: "+colors[this.color];
        
    
        this.div.append(barshmallowColor);
        
        let barshmallowTexture = document.createElement("p");
        if(this.textured){
            barshmallowTexture.innerHTML = "Texture: "+textures[this.texture];
        } else {
            barshmallowTexture.innerHTML = "Texture: "+"Normal";
        }
        this.div.append(barshmallowTexture);
    
        let barshmallowheight = document.createElement("p");
        if(this.scrutinized)
        {
            barshmallowheight.innerHTML = "Height: "+Math.round(this.height);
        } else {
            barshmallowheight.innerHTML = "Height: ???"
        }
        this.div.append(barshmallowheight);
    
        let barshmallowWorth = document.createElement("p");
        //barshmallowWorth.innerHTML = "Worth: $"+Math.round((this.height*100+(this.color%2)*500+this.shape*100)*this.luck);
        barshmallowWorth.innerHTML = "Worth: $"+this.worth;
        if(this.scrutinized)
            this.div.append(barshmallowWorth);
        let barshmallowluck = document.createElement("p");
        barshmallowluck.innerHTML = "Luck: %"+Math.round(this.luck*100);
        if(this.scrutinized)
            this.div.append(barshmallowluck);
        this.div.addEventListener("click",() => {this.toggle(this.id,this.div)},false);
    
    }
    toggle(idee,deeeyevee){
        //this.div=document.getElementById(`${idee}`);
        // console.log(deeeyevee);
        // console.log(`toggle was called for barshmallow #${(idee+1)},id ${idee}, selected?: ${selected[idee]}`);
        selected[idee]=!selected[idee];
        selected[idee]?deeeyevee.style.backgroundColor="#aaaaaa":deeeyevee.style.backgroundColor="#686868";
        selected[idee]?deeeyevee.style.color="#000000":deeeyevee.style.color="#FFFFFF";
        //let selectButton = this.div.childNodes[4];
        update();

    }
}
let money = JSON.parse(localStorage.getItem("money")) || 1000;
let mode = 0;
//0 = game
//1 = achievements

//let barshmallows = [new Barshmallow(Math.random()*20,3,-1,0.5000001,true,-1)];
let barshmallows = [];
const gameTab = document.getElementById("game-tab");
const achievementTab = document.getElementById("achievements-tab");
const gamebutton = document.getElementById("game");
const achbutton = document.getElementById("ach");
gamebutton.addEventListener("click",() => {mode = 0});
achbutton.addEventListener("click",() => {mode = 1});
barshmallowId++;
let numOfBarshmallows = 1;
let selected= [false];
// barshmallows[0].createDiv();
let buyCooldown = 0;
let buyPrice = 100;
let breeding = false;
let breedTime = 0;
let breedLength = 0;
let dad = -1;//barshmallow id
let mom = -1;
let selecteds = 0;
let breedDad = 0;
let breedMom = 0;
// //BEGIN TEST SPACE
// let beans = document.createElement("div");
// let tubers = document.createElement("p");
// beans.innerHTML = "beans";
// tubers.text = "tubers";
// barshmallowContainer.append(beans);
// barshmallowContainer.append(tubers);
// //barshmallowContainer.children[0].remove();
// barshmallowContainer.insertAdjacentElement("beforebegin",beans)
console.log(barshmallowContainer.children);
// //END TEST SPACE
function convertGenericObjectToBarshmallow ({height=0,color=0,shape=-1,luck=0.5,visible=true,texture=-1,scrutinized=false}) {
    let converted = new Barshmallow(height,color,shape,luck,visible,texture,scrutinized);
    // console.log(converted);
    return converted;
}
function populateList(plates = [], platesList) {
    // platesList = plates.map((plate, i) => {
    //     return plate.div;
    // }).join('');
    let j = 0;//plate div the loop is looking at
    let i = 0;//plate the first for loop is checking
    for(i =0;i<plates.length;i++) {
        console.log(`Checking plate #${i},Visible:${plates[i].visible},Does div exist? ${platesList.children[j]!=null}, Outcome:`);
        if(plates[i].visible==true)//if plate is visible
        {
            if(platesList.children[j]==null)//if plate div doesn't exist
            {
                platesList.append(plates[i].div);// create it
                console.log("add it (you shouldn't get a 'replaced' after this)");
            } else {// other wise
                platesList.children[j].replaceWith(plates[i].div);//replace the existing one
                console.log(`replaced plate div ${j}`);
            }
            j++;
        }
    }
    //j++;
    console.log(`I:${i};J:${j};List Length:${platesList.children.length}`);
    if(j<platesList.children.length)
        while(j<platesList.children.length) {
            platesList.children[j].remove();
            console.log(`Removed Child #${j}`);
            j++;
        }
}
let moneyNumber = document.getElementById("moneyNumber");

function breed() {
    // console.log(selected);
    const willBreed = (barshmallows[dad]!=null && barshmallows[mom]!=null);
    // console.log(`breed was called,selecteds:${selecteds},dad:${dad},mom:${mom},will breed:${(willBreed && selecteds==2)}`);
    if(willBreed && selecteds==2)
    {
        breeding=true;
        breedDad=dad;
        breedMom=mom;
        breedLength=(barshmallows[dad].luck+barshmallows[mom].luck)*1000;
        
        buyCooldown+=15;
        selected.push(false);
    }
}
function update() {
    // console.log("update started");
    moneyNumber.innerHTML=""+money;
    dad=-1;
    mom=-1;
    selecteds=0;
    selected.forEach((barsh,index)=>{
        //barsh?selecteds++:dad?dad=index:mom=index;
        if(barsh)
        {
            selecteds++;
            if(dad===-1)
            {
                dad=index;
            }else {
                mom=index;
            }
        }
    });
    numOfBarshmallows=0;
    barshmallows.forEach((barsh,index) => {
        if(barsh.visible)
        {
            numOfBarshmallows++;
        }
    });
    completeAchievement((numOfBarshmallows>10),8);
    completeAchievement((barshmallows>50),9);
    completeAchievement((money>1000000),5);
    let bottom = document.getElementById("bottom");
    bottom.innerHTML = `You have ${numOfBarshmallows} barshmallows`;   
    populateList(barshmallows,barshmallowContainer)
    // console.log("update finished");
}
function animate() {
    requestAnimationFrame(animate);
    buyCooldown++;
    let breedtimer = document.getElementById("breedtimer");
    if(breeding) {
        breedTime++;
        breedtimer.innerHTML=`Breeding... ${Math.round((breedTime/breedLength)*100)}%`;
    } else {
        breedtimer.innerHTML=""
    }
    if(breedTime>breedLength)
    {
        let baby = new Barshmallow(
            (barshmallows[breedDad].height*Math.random())/2+(barshmallows[breedMom].height*Math.random())/2,
            
            //Math.round((barshmallows[breedDad].color/2)+(barshmallows[breedMom].color/2)+(Math.random()*2)-1),
            barshmallows[breedDad].color==barshmallows[breedMom].color?
            barshmallows[breedDad].color+Math.round((Math.random()-0.5)*2):
            (Math.random()>0.5)?
            barshmallows[breedDad].color:
            barshmallows[breedMom].color,
            
            //Math.round(barshmallows[breedDad].shape+barshmallows[breedMom].shape+Math.random()),
            barshmallows[breedDad].shape==barshmallows[breedMom].shape?
            barshmallows[breedDad].shape+Math.round((Math.random()-0.5)*2):
            (Math.random()>0.5)?
            barshmallows[breedDad].shape:
            barshmallows[breedMom].shape,
            Math.random(),
            
            true,
            
            barshmallows[breedDad].textured?//if dad is textured
            barshmallows[breedMom].textured?//and mom is textured
            Math.floor(barshmallows[breedDad].texture/2+barshmallows[breedMom]/2)+1://set texture to avg of mom's and dad's plus one
            barshmallows[breedDad].texture:// if dad is but mom isn't, set texture to dad's
            barshmallows[breedMom].textured?// if dad isn't but mom is
            barshmallows[breedMom].texture://set texture to mom's
            (Math.random>0.1)?//otherwise randomly set it to
            0://Cubic
            -1// or nothing.
            );
        barshmallows.push(baby);
        // barshmallows[barshmallows.length-1].createDiv();
        breeding=false;
        breedTime=0;
        barshmallowId++;
        selected.forEach(s => {
            s = false;
        });
        completeAchievement(true,2);
        checkAchievementsOnNewBarshmallow(baby);
        update();
    }
    if(gameTab==null || achievementTab==null)
        return;
    if(mode == 0)
    {
        //game
        gameTab.classList.add("open");
        achievementTab.classList.remove("open");
    } else if(mode == 1)
    {
        //achievements
        gameTab.classList.remove("open");
        achievementTab.classList.add("open");
    }
}
animate();
function scrutiny () {
    if(selecteds!=1 || money < 100)
        return;
    barshmallows[dad].scrutinized=true;
    barshmallows[dad].update();
    money-=100;
    completeAchievement(true,11)
    completeAchievement((barshmallows[dad].luck>0.95));
    update();
}
function buy () {
    // console.log(`Buy was called, cooldown is ${buyCooldown}, price is ${buyPrice}, bought? ${buyCooldown>buyPrice}`);
    if(buyCooldown>buyPrice && money>buyPrice)
    {
        let hidden = -1;
        barshmallows.forEach((barsh,index) => {
            if(!barsh.visible){
                hidden=index;
            }
        })
        if(hidden=-1)
        {
            barshmallows.push(new Barshmallow(Math.random()*20,1+Math.floor(Math.random()*6)*2,-1,Math.random(),true,-1));
            selected.push(false);
            // barshmallows[barshmallows.length-1].createDiv();
            barshmallowId++;
        } else {
            if(Math.random>0.5)
            {
                barshmallows.push(new Barshmallow(Math.random()*20 ,1+Math.floor(Math.random()*6)*2 ,-1 ,Math.random() ,true ,-1));
                selected.push(false);
                // barshmallows[barshmallows.length-1].createDiv();
                barshmallowId++;
            } else {
                // console.log(hidden);
                barshmallows[hidden].visible=true;
                selected[hidden]=false;
                barshmallows[hidden].createDiv();
            }
        }
        money-=buyPrice;
        buyCooldown=0;
        buyPrice*=2;
        completeAchievement(true,0);
        update();
    }
}
function sell() {
    // console.log(dad);
    // if(dad>-1)
    // {
    //     if(selecteds>1) {
    //         // console.log('too many barshmallows selected');
    //     } else {
    //         // console.log(`sell was called, selecteds is ${selecteds}, barshmallow worth is ${barshmallows[dad].worth}`);
    //     }
    // } else {
    //     // console.log('sell was called, no barshmallows are selected, nothing will be sold.');
    // }
    
    if(selecteds===1 && dad>-1)
    {
        /**money+=Math.round((
            barshmallows[dad].height*100+
            (barshmallows[dad].color%2)*500+
            barshmallows[dad].shape*100
        )*barshmallows[dad].luck);**/
        money+=barshmallows[dad].worth;
        barshmallows[dad].visible=false;
        // console.log(`Barshmallow #${dad} was sold`);
        selected[dad]=false;
        // barshmallowContainer.removeChild(document.getElementById(""+dad));
        update();
        completeAchievement(true,1);
        completeAchievement(dad.worth>2000,6);
        completeAchievement(dad.worth>4000,7);
    }
}
//Save FUNCTIONS
function save() {
    //save barshmallows[], money
    //set_cookie("save",money,60);
    localStorage.setItem('barshmallows', JSON.stringify(barshmallows));
    localStorage.setItem('money', JSON.stringify(money));
    localStorage.setItem('achievements', JSON.stringify(achievements));
    localStorage.setItem('buyPrice', JSON.stringify(buyPrice));
}

function load() {
    //load save
    barshmallows = [];
    barshmallowId=0;
    let tempBarshes = JSON.parse(localStorage.getItem('barshmallows')) || [];
    tempBarshes.forEach(bjec => {
        // selected.push
        barshmallows.push(convertGenericObjectToBarshmallow(bjec));
        barshmallowId++;
    })
    buyPrice = JSON.parse(localStorage.getItem('buyPrice'));
    money = JSON.parse(localStorage.getItem('money'));
    achievements = JSON.parse(localStorage.getItem("achievements"));
    update();
    achievementsUpdate();
}
function newGame() {
    money = 1000;
    barshmallowId=0;
    barshmallows = [new Barshmallow(Math.random()*20,3,-1,0.5000001,true,-1)];
    barshmallowId++;
    buyPrice=100;
    achievements = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,];
    achievementsUpdate();
    update();
}
load();
if(money == null)
{
    newGame();
    save();
}