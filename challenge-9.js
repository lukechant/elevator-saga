{
    init: function(elevators, floors) {

        let floorsRequested = [];

        floors.forEach((floor, index) => {
            floor.on("up_button_pressed down_button_pressed", function() {
                floorsRequested.push(index);
            });
        });

        elevators.forEach((elevator, index) => {
            elevator.on("idle", function() { 
                if(floorsRequested.length > 0) {
                    elevator.goToFloor(floorsRequested.pop());
                } else {
                    elevator.goToFloor(0);
                }
            });

            elevator.on("floor_button_pressed", function(floorNum) {
                elevator.goToFloor(floorNum);
            });
        });
    },
        update: function(dt, elevators, floors) {
        }
}