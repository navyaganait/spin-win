prizes=["BOOK","T-SHIRT","2 EXTRA SPINS","AMAZON VOUCHER","50% OFF","NETFLIX SUBS","100% OFF",
       "SWAGPACK","70% OFF","HARD LUCK ","35% OFF","3000 CREDITS"];

let config={
	type:Phaser.CANVAS,
	width:800,
	height:600,


	scene:{
	preload:preload,
	create:create,
	update:update,		

	}

};

let game=new Phaser.Game(config)

function preload()
{
	console.log("preload")
	// console.log(this);
	//load object, load some image
	this.load.image('background','https://raw.githubusercontent.com/navyaganait/spin-win/main/assets/back.jpg');
	this.load.image('wheel','https://raw.githubusercontent.com/navyaganait/spin-win/main/assets/wheel.png')
	this.load.image('pin','https://raw.githubusercontent.com/navyaganait/spin-win/main/assets/pin.png')
	this.load.image('stand','https://raw.githubusercontent.com/navyaganait/spin-win/main/assets/stand.png')
}

function create()
{
	console.log("create")
	//create the background image
	let W=game.config.width;
	let H=game.config.height;




	let background=this.add.sprite(W/2,H/2,'background')
	background.setScale(0.20)

	//create pin
	
	let stand=this.add.sprite(W/2,H/2+250,'stand')
	stand.setScale(0.25)

	this.wheel=this.add.sprite(W/2,H/2,'wheel')
	this.wheel.setScale(0.25)


	let pin=this.add.sprite(W/2,H/2-250,'pin')
	pin.setScale(0.25)
   
    // event listener for mouse click
    this.input.on("pointerdown",spinwheel,this)
	
	font_style={
		font:"bold 30px arial",
		align:"center",
		color:"red",

	}

	this.game_text=this.add.text(10,10,"Welcome to spin and win",font_style)


}

//Game Loop
function update()
{
	console.log("update")
	// this.wheel.angle += 1;
	// this.wheel.scaleX +=1;

}	

   function spinwheel()
   {
   	console.log("you click the mouse")
   	console.log("spin wheel")
   	this.game_text.setText("you clicked the mouse!")

   	let rounds=Phaser.Math.Between(2,4);
   	// console.log(rounds);
   	let degrees=Phaser.Math.Between(0,11);
   	// console.log(total_angle)


    
    tween=this.tweens.add({
    	targets:this.wheel,
    	angle:rounds*360+degrees*30,
    	ease:"Cubic.easeOut",
    	duration:3000,
    	callbackScope:this,
    	onComplete:function()
    	{
    		this.game_text.setText(prizes[degrees]);
    	}
    })
   }


