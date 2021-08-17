{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        
       
        
       
        

        // Whenever the elevator is idle (has no more queued destinations) ...
        elevator.on("idle", function() { elevator.goToFloor(0); });
     
        
        elevator.on("floor_button_pressed", function(floorNum) { 
            elevator.goToFloor(floorNum);
        } );
        
      
    },
    //needs this comma to work on website https://play.elevatorsaga.com/
    function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}