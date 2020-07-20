class Form{
    constructor(){}
    
    display(){
     var input = createInput('name of Class Representative');
     input.position(350,100);

     var button = createButton('click here to submit your VOTE!');
     button.position(350,150);

     var confermation = createElement('h2')
     button.mousePressed(function(){
         input.hide();
         button.hide();
         var name = input.value();
         voterCount+=1;
         voter.update(name);
         voter.updateCount(voterCount);
         confermation.html("Hello "+ name + "Your precious vote has been taken. Thank you for registering. ");
         confermation.position(250,100);
     });
    }
}