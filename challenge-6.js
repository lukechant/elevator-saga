{
    init: function(elevators, floors) {
        elevators.forEach(elevator => {
            elevator.on("idle", function() { 
                elevator.goToFloor(Math.floor(floors.length / 2));
            });

            elevator.on("floor_button_pressed", function(floorNum) { 
                elevator.goToFloor(floorNum);
            } );

            function pressDirection(floor) {
                floor.on("up_button_pressed", function() {
                    elevator.goToFloor(floor.floorNum());
                });
                floor.on("down_button_pressed", function() {
                    elevator.goToFloor(floor.floorNum());
                });
            }
        })
    },
        update: function(dt, elevators, floors) {
        }
}