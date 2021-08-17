{
    init: function(elevators, floors) {
        var elevator = elevators[0]; // Let's use the first elevator
        
        elevator.destinationQueue = [];
        
        // Whenever the elevator is idle
        elevator.on("idle", function() { 
            elevator.goToFloor(0); 
            elevator.goToFloor(1);
            elevator.goToFloor(2);
            elevator.goToFloor(3);
        });
     
        elevator.on("floor_button_pressed", function(floorNum) { 
            elevator.goToFloor(floorNum);
        } );
        
        let elevator2 = elevators[1]; // L2nd lift

        elevator2.destinationQueue = [];

        // Whenever the elevator is idle
        elevator2.on("idle", function() { 
            elevator2.goToFloor(4); 
            elevator2.goToFloor(5);
            elevator2.goToFloor(6);
            elevator2.goToFloor(7);
        });

        elevator2.on("floor_button_pressed", function(floorNum) { 
            elevator2.goToFloor(floorNum);
        } );
        
        function pressDirection(floor) {
            floor.on("up_button_pressed", function() {
                // Maybe tell an elevator to go to this floor?
                elevator.goToFloor(floor.floorNum());
            });
            floor.on("down_button_pressed", function() {
                // Maybe tell an elevator to go to this floor?
                elevator.goToFloor(floor.floorNum());
            });
        }
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}