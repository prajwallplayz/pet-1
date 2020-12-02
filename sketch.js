

var dog,happyDog,dogimg
var database,foodS,foodStock


function preload()
{
  dogimg=loadImage("dogImg.png")
  happyDog=loadImage("dogImg1.png")
 
}

function setup() {
  createCanvas(800, 800);
  background('green')
  database=firebase.database()
  dog=createSprite(400,400,50,50)
  dog.addImage(dogimg)
  dog.scale=0.15
  foodStock=database.ref('food')
  foodStock.on("value",readStock)
}


function draw() {  
  background("green")
 if(keyWentDown(UP_ARROW)){
   writeStock(foodS)
   dog.addImage(happyDog)
 }
 if(keyWentUp(UP_ARROW)){
 
  dog.addImage(dogimg)
}
  drawSprites();
fill(255)
textSize(40)
text("foodremaining:"+foodS,170,500)
text("note: PRESS UP ARROW KEY TO FEED DRAGO MILK ",300,200)
}

function readStock(data){
foodS=data.val()
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref('/').update({
    food:x
  })
  

}
