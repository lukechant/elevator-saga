{
    init: function(elevators, floors) {
        elevators.forEach(elevator => {
            elevator.on("idle", function() { 
                elevator.goToFloor(0); 
                elevator.goToFloor(1);
                elevator.goToFloor(2);
                elevator.goToFloor(3);
                elevator.goToFloor(4); 
                elevator.goToFloor(5);
            });

            elevator.on("floor_button_pressed", function(floorNum) { 
                elevator.goToFloor(floorNum);
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
        })
    },
    update: function(dt, elevators, floors) {
        // We normally don't need to do anything here
    }
}