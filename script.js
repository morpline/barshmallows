
const colors = ["Salmon","Red","Scarlet","Orange","Brown","Yellow","Lime green","Green","Cyan","Blue","Lavender","Violet","Mauve"];
const colorHex = ["#ff5577","red","#ffaa3a","orange","#88aa00","yellow","#aaff55","green","#00dddd","blue","#ffaaff","violet",""];
const shapes = ["Cubic","Spherical","Trapezoidal","Hexagonal","Toroidal","Like an 'E'","Amorphous","Cylindrical","Great"];
const textures = ["Lumpy","Smooth","Rubbery","Rough","Fluffy","Metallic","Cold","Hot","Polygonal"];
let barshmallowContainer = document.getElementById("barshmallows");
let barshmallowId = 0;
class Barshmallow {
    constructor (height=Math.random*20, color=0, shape=0, luck=0.5,visible=true,texture=-1) {
        this.height=height;
        this.color=color;
        this.shape=shape;
        this.luck=luck;
        this.visible = visible;
        this.textured=(texture!=-1)
        this.texture=texture;
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
<<<<<<< Updated upstream
        barshmallowShape.innerHTML = "Shape: "+shapes[this.shape];
        this.div.append(barshmallowName);
=======
        
        barshmallowShape.innerHTML = "Shape: "+(this.shape==-1?"Normal":shapes[this.shape]);
>>>>>>> Stashed changes
        this.div.append(barshmallowShape);

        let barshmallowColor = document.createElement("p");
        barshmallowColor.innerHTML = "Color: "+colors[this.color];
<<<<<<< Updated upstream
        let barshmellowColorExample = 
=======
        
>>>>>>> Stashed changes

        this.div.append(barshmallowColor);
        
        let barshmallowTexture = document.createElement("p");
        if(this.textured){
            barshmallowTexture.innerHTML = "Texture: "+textures[this.texture];
        } else {
            barshmallowTexture.innerHTML = "Texture: "+"Normal";
        }
        this.div.append(barshmallowTexture);

        let barshmallowheight = document.createElement("p");
        barshmallowheight.innerHTML = "Height: "+Math.round(this.height);
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
<<<<<<< Updated upstream
        selected[idee]?deeeyevee.style.backgroundColor="#aaffff":deeeyevee.style.backgroundColor="#dddddd";
=======
        selected[idee]?deeeyevee.style.backgroundColor="#FFFFFF":deeeyevee.style.backgroundColor="#686868";
        selected[idee]?deeeyevee.style.color="#000000":deeeyevee.style.color="#FFFFFF";
>>>>>>> Stashed changes
        //let selectButton = this.div.childNodes[4];
        update();

    }
}
<<<<<<< Updated upstream
let barshmallows = [new Barshmallow(Math.random()*20,3,0,0.5000001,true,9)];
=======
let barshmallows = [new Barshmallow(Math.random()*20,3,-1,0.5000001,true,-1)];
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
let money = 1000;
let moneyNumber = document.getElementById("moneyNumber");
function animate() {
    requestAnimationFrame(animate);
    buyCooldown++;
=======
function update() {
>>>>>>> Stashed changes
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

}
function animate() {
    requestAnimationFrame(animate);
    buyCooldown++;
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
            )
        );
        barshmallows[barshmallows.length-1].update();
        breeding=false;
        breedTime=0;
<<<<<<< Updated upstream
=======
        selected.forEach(s => {
            s = false;
        });
        update();
>>>>>>> Stashed changes
    }
}
animate();
update();
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
            barshmallows.push(new Barshmallow(Math.random()*20,1+Math.floor(Math.random()*6)*2,-1,Math.random(),true,-1));
            selected.push(false);
            barshmallows[barshmallows.length-1].update();
            barshmallowId++;
        } else {
            if(Math.random>0.5)
            {
                barshmallows.push(new Barshmallow(Math.random()*20 ,1+Math.floor(Math.random()*6)*2 ,-1 ,Math.random() ,true ,-1));
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