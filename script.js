
const colors = ["Salmon","Red","Scarlet","Orange","Brown","Yellow","Lime green","Green","Cyan","Blue","Lavender","Violet","Mauve"];
const colorHex = ["#ff5577","red","#ffaa3a","orange","#88aa00","yellow","#aaff55","green","#00dddd","blue","#ffaaff","violet",""];
const shapes = ["Cubic","Spherical","Trapezoidal","Hexagonal","Toroidal","Obtuse","Amorphous","Cylindrical","Great"];
const shapeImages = ["images/shapes/cubic marshmallow.png","images/shapes/spherical marshmallow.png","images/shapes/trapezoidal marshmallow.png","images/shapes/hexagonal marshmallow.png","images/shapes/toroidal marshmallow.png","images/shapes/obtuse marshmallow.png","images/shapes/amorphous marshmallow.png","images/shapes/cylindrical marshmallow.png","images/shapes/giant marshmallow.png"];
const textures = ["Lumpy","Smooth","Rubbery","Rough","Fluffy","Metallic","Cold","Hot","Polygonal"];
const textureImages = ["images/textures/lumpy marshmallow.png","images/textures/smooth marshmallow.png","images/textures/rubbery marshmallow.png","images/textures/rough marshmallow.png","images/textures/fluffy marshmallow.png","images/textures/metal marshmallow.png","images/textures/transparent marshmallow.png","images/textures/rock marshmallow.png","images/textures/felt marshmallow.png"];
let barshmallowContainer = document.getElementById("barshmallows");
let barshmallowId = 0;
class Barshmallow {
    constructor (height=Math.random*20, color=0, shape=0, luck=0.5,visible=true,texture=-1) {
        this.height=height;
        this.color=color;
        this.shape=shape;
        this.luck=luck;
        this.visible = visible;
        if(texture!=-1)
        {
            this.texture=texture;
            this.textured=true;
        } else {
            this.textured=false;
            this.texture=-1;
        }
        this.id=barshmallowId;
        //console.log(this.id);
        this.div = document.createElement("div");
        this.div.id=(this.id);
    }
    update () {

        //selected.push(0);

          
        this.div.className = "barshmallow";
        

        let barshmallowName = document.createElement("p");
        barshmallowName.innerHTML = "Barshmallow #"+(this.id+1);
        let barshmallowShape = document.createElement("p");
        barshmallowShape.innerHTML = "Shape: "+shapes[this.shape] + `(${this.shape})`;
        this.div.append(barshmallowName);
        this.div.append(barshmallowShape);

        let barshmallowColor = document.createElement("p");
        barshmallowColor.innerHTML = "Color: "+colors[this.color] + `(${this.color})`;
        let barshmellowColorExample = 

        this.div.append(barshmallowColor);
        
        let barshmallowTexture = document.createElement("p");
        if(this.textured){
            barshmallowTexture.innerHTML = "Texture: "+textures[this.texture]+ `(${this.texture})`;
        } else {
            barshmallowTexture.innerHTML = "Texture: "+"Normal";
        }
        this.div.append(barshmallowTexture);

        let barshmallowheight = document.createElement("p");
        barshmallowheight.innerHTML = "Height: "+Math.round(this.height)+ `(${this.height})`;
        this.div.append(barshmallowheight);

        let barshmallowWorth = document.createElement("p");
        //barshmallowWorth.innerHTML = "Worth: $"+Math.round((this.height*100+(this.color%2)*500+this.shape*100)*this.luck);
        barshmallowWorth.innerHTML = "Worth: $"+Math.round((this.height*100+(this.color%2)*500+this.shape*100));
        this.div.append(barshmallowWorth);

        let selectButton = document.createElement("input");
        selectButton.type="button";
        selectButton.className="barshbutton";
        selected[this.id]?selectButton.value="Select":selectButton.value="Select";
        //selectButton.onclick=function() {select(this.id)};
        selectButton.addEventListener("click",() => {this.toggle(this.id,this.div)},false);
        this.div.append(selectButton);

        barshmallowContainer.append(this.div);
    }
    toggle(idee,deeeyevee){
        //this.div=document.getElementById(`${idee}`);
        console.log(deeeyevee);
        console.log(`toggle was called for barshmallow #${(idee+1)},id ${idee}, selected?: ${selected[idee]}`);
        selected[idee]=!selected[idee];
        selected[idee]?deeeyevee.style.backgroundColor="#aaffff":deeeyevee.style.backgroundColor="#dddddd";
        //let selectButton = this.div.childNodes[4];


    }
}
let barshmallows = [new Barshmallow(Math.random()*20,3,0,0.5000001,true,-1)];
barshmallowId++;
let numOfBarshmallows = 1;
let selected= [false];
barshmallows[0].update();
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
let money = 1000;
let moneyNumber = document.getElementById("moneyNumber");
function breed() {
    console.log(selected);
    console.log(`breed was called,selecteds:${selecteds},dad:${dad},mom:${mom},will breed:${(dad!=-1 && mom !=-1 && selecteds==2)}`);
    if(dad!=-1 && mom !=-1 && selecteds==2)
    {
        breeding=true;
        breedDad=dad;
        breedMom=mom;
        breedLength=(barshmallows[dad].luck+barshmallows[mom].luck)*1000;
        
        buyCooldown+=15;
        barshmallowId++;
        selected.push(false);
    }
}
function animate() {
    requestAnimationFrame(animate);
    buyCooldown++;
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
    let bottom = document.getElementById("bottom");
    bottom.innerHTML = `You have ${numOfBarshmallows} barshmallows`;   
    let breedtimer = document.getElementById("breedtimer");
    if(breeding) {
        breedTime++;
        breedtimer.innerHTML=`Breeding... ${Math.round((breedTime/breedLength)*100)}%`;
    } else {
        breedtimer.innerHTML=""
    }
    if(breedTime>breedLength)
    {
        barshmallows.push(
            new Barshmallow(
                (barshmallows[breedDad].height*Math.random())/2+(barshmallows[breedMom].height*Math.random())/2,
                Math.round((barshmallows[breedDad].color/2)+(barshmallows[breedMom].color/2)+(Math.random()*2)-1),
                Math.round(barshmallows[breedDad].shape+barshmallows[breedMom].shape+Math.random()),
                Math.random(),
                true,
                barshmallows[breedDad].textured?
                    barshmallows[breedMom].textured?
                        Math.floor(barshmallows[breedDad].texture/2+barshmallows[breedMom]/2)+1:
                        barshmallows[breedDad].texture:
                    barshmallows[breedMom].textured?
                        barshmallows[breedMom].texture:
                        (Math.random>0.1)?
                            0:
                            -1
            )
        );
        barshmallows[barshmallows.length-1].update();
        breeding=false;
        breedTime=0;
    }
}
animate();
function buy () {
    console.log(`Buy was called, cooldown is ${buyCooldown}, price is ${buyPrice}, bought? ${buyCooldown>buyPrice}`);
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
            barshmallows.push(new Barshmallow(Math.random()*20,1+Math.floor(Math.random()*6)*2,1,Math.random()));
            selected.push(false);
            barshmallows[barshmallows.length-1].update();
            barshmallowId++;
        } else {
            if(Math.random>0.5)
            {
                barshmallows.push(new Barshmallow(Math.random()*20,1+Math.floor(Math.random()*6)*2,1,Math.random()));
                selected.push(false);
                barshmallows[barshmallows.length-1].update();
                barshmallowId++;
            } else {
                console.log(hidden);
                barshmallows[hidden].visible=true;
                selected[hidden]=false;
                barshmallows[hidden].update();
            }
        }
        money-=buyPrice;
        buyCooldown=0;
        buyPrice*=2;
    }
}
function sell() {
    console.log(dad);
    if(dad>-1)
    {
        if(selecteds>1) {
            console.log('too many barshmallows selected');
        } else {
            console.log(`sell was called, selecteds is ${selecteds}, barshmallow worth is ${(barshmallows[dad].height*10+(barshmallows[dad].color%2)*500+barshmallows[dad].shape)*barshmallows[dad].luck}`);
        }
    } else {
        console.log('sell was called, no barshmallows are selected, nothing will be sold.');
    }
    
    if(selecteds===1 && dad>-1)
    {
        /**money+=Math.round((
            barshmallows[dad].height*100+
            (barshmallows[dad].color%2)*500+
            barshmallows[dad].shape*100
        )*barshmallows[dad].luck);**/
        money+=Math.round((
            barshmallows[dad].height*100+
            (barshmallows[dad].color%2)*500+
            barshmallows[dad].shape*100
        ));
        barshmallows[dad].visible=false;
        selected[dad]=false;
        barshmallowContainer.removeChild(document.getElementById(""+dad));
    }
}
//COOKIE FUNCTIONS
function set_cookie ( cookie_name, cookie_value, lifespan_in_days, valid_domain )
{
  // https://www.thesitewizard.com/javascripts/cookies.shtml
  var domain_string = valid_domain ? ("; domain=" + valid_domain) : '' ;
  document.cookie = cookie_name + "=" + encodeURIComponent( cookie_value ) +
      "; max-age=" + 60 * 60 * 24 * lifespan_in_days +
      "; path=/" + domain_string ;
}
function get_cookie ( cookie_name )
{
  // https://www.thesitewizard.com/javascripts/cookies.shtml
  var cookie_string = document.cookie ;
  if (cookie_string.length != 0) {
    var cookie_array = cookie_string.split( '; ' );
    for (i = 0 ; i < cookie_array.length ; i++) {
      cookie_value = cookie_array[i].match ( cookie_name + '=(.*)' );
      if (cookie_value != null) {
        return decodeURIComponent ( cookie_value[1] ) ;
      }
    }
  }
  return '' ;
}
function save() {
    //save barshmellows[], money
    set_cookie("save",money,60);
}
function load() {
    //load save from cookie
    console.log("save '"+get_cookie("save")+"'");
}