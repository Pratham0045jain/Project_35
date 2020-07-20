class Voter{
    constructor(){

    }

    getCount(){
        database.ref("/voterCount").on("value",function(data){
            voterCount = data.val();  

        });
    }

    updateCount(count){
        database.ref("/").update({
            voterCount : count
        })
    }

    update(name1){
        database.ref("/voter"+voterCount).set({
            name : name1
        })
    }

}