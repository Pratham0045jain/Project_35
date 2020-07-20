class App{
    constructor(){

    }
    getState(){
        var appStateref = database.ref("/appState");
        appStateref.on("value", function(data){
            appState = data.val();
        })
    }

    updateState(state){
         database.ref("/").update({
             appState : state
         });
    }

    start(){
        if(appState===0){
            form = new Form();
            form.display();
            voter = new Voter();
            voter.getCount();
        }
    }
}