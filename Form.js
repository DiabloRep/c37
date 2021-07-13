class Form{
constructor(){
     this.input = createInput("Name");
     this.button = createButton("Play");
     this.greeting = createElement('h3');
}
hide_details(){
    this.button.hide();
    this.greeting.hide();
    this.input.hide();
}
display(){
    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(130,10);
//this.title.style('color', 'blue');
    
   
    this.input.position(130,160);
    this.button.position(250,200);
//arrow function helps to bind/join 'this' to the class not to the object
   this.button.mousePressed(()=>{
       this.input.hide();
       this.button.hide();
        player.name = this.input.value();

       playercount +=1;
       player.update();
       player.updateCount(playercount);
        player.index=playercount;
      
       this.greeting.html("Hello " + player.name);
       this.greeting.position(130,160);
   });
}
}