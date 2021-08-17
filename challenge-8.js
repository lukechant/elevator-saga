{
    init: function(elevators, floors) {
        elevators.forEach(elevator => {
            elevator.destinationQueue = [];
            elevator.on("idle", function() { 
                elevator.goToFloor(Math.floor(floors.length / 2));
            });

            floors.forEach(floor => {
                floor.on("up_button_pressed", function() {
                    elevator.destinationQueue.sort(function(a, b){return b-a});
                    elevator.checkDestinationQueue();
                    elevator.goToFloor(floor.floorNum());
                });
                floor.on("down_button_pressed", function() {
                    elevator.checkDestinationQueue();
                    elevator.goToFloor(floor.floorNum());
                });
                elevator.on("floor_button_pressed", function(floorNum) { 
                    elevator.checkDestinationQueue();
                    elevator.goToFloor(floorNum);
                } );
            })
        })
        
        
    },
        update: function(dt, elevators, floors) {
        }
}