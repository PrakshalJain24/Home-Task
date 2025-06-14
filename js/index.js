document.addEventListener("DOMContentLoaded", () => {
  class Elevator {
   
    constructor(id, numFloors) {
      this.id = id;
      this.currentFloor = 0;
      this.moving = false;
      this.queue = [];
      this.icon = document.getElementById(`elevator-${id}`);
      this.totalFloors = numFloors;
    }
    // specific floor sound 
    loadFloorSounds(floor) { 
      return new Audio(`./assets/${floor}-floor.mp3`);
    }

    // to add in Queue for next call
    addFloorToQueue(floor) {
      this.queue.push(floor);
      if (!this.moving) {
        this.processNextCall();
      }
    }

   // next floor call in the queue or signals the system if no more calls are pending.
 
    processNextCall() {
      if (this.queue.length === 0) {
        this.moving = false;
        ElevatorSystem.assignElevatorToNextCall();
        return;
      }

      this.moving = true;
      const nextFloor = this.queue.shift();
      this.moveToFloor(nextFloor);
    }

  // Moves the lift to the specified floor and updates 
     
    moveToFloor(floor) {
      const buildingHeight =
        document.querySelector(".elevator-area").offsetHeight;
      const floorHeight = buildingHeight / this.totalFloors;
      const moveFloors = Math.abs(this.currentFloor - floor);
      const moveTime = moveFloors * 3; // 3 seconds per floor
      const targetYPosition = floor * floorHeight;

      this.icon.style.transition = `transform ${moveTime}s linear`;
      this.icon.style.transform = `translateY(-${targetYPosition}px)`;
      this.icon.src = "./assets/red.svg";

      this.showCountdown(floor, moveTime);

      setTimeout(() => {
        this.arriveAtFloor(floor);
      }, moveTime * 1000);
    }

    // show timer in the status table for the floor the lift is moving to.
   
    showCountdown(floor, countdownTime) {
      const tableBody = document.getElementById("elevator-status-table");
      const row = tableBody.rows[this.totalFloors - floor - 1];
      const cell = row.cells[this.id - 1];
      let countdown = countdownTime;

      const countdownInterval = setInterval(() => {
        countdown -= 0.5;
        if (countdown <= 0) {
          clearInterval(countdownInterval);
          cell.textContent = "";
        } else {
          const minutes = Math.floor(countdown / 60);
          const seconds = Math.floor(countdown % 60);
          cell.textContent = `${
            minutes > 0 ? `${minutes} min ` : ""
          }${seconds} sec.`;
        }
      }, 500);
    }

    
    //The floor number where the lift arrives.

    arriveAtFloor(floor) {
      this.currentFloor = floor;
      this.icon.src = "./assets/green.svg";
      this.playSoundForFloor(floor);

      const button = document.querySelector(`.call-btn[data-floor="${floor}"]`);
      button.classList.remove("waiting");
      button.textContent = "Arrived";
      button.classList.add("arrived");
      button.disabled = true;

      setTimeout(() => {
        button.textContent = "Call";
        button.classList.remove("arrived");
        button.disabled = false;
        this.icon.src = "./assets/black.svg";
        this.processNextCall();
      }, 2000);
    }

// Plays the sound .
    
    playSoundForFloor(floor) {
      const sound = this.loadFloorSounds(floor);
      if (sound) {
        sound.play();
      }
    }
  }

  class ElevatorSystem {
   // Initializes the elevator system with a specific number of elevators and floors.
     
    static initialize(numElevators, numFloors) {
      this.elevators = Array.from(
        { length: numElevators },
        (_, i) => new Elevator(i + 1, numFloors)
      );
      this.globalQueue = [];
    }

 // Responds to a call button press at a specific floor, queuing the request.
     
    static handleCall(floor) {
      const button = document.querySelector(`.call-btn[data-floor="${floor}"]`);
      button.classList.add("waiting");
      button.textContent = "Waiting";
      button.disabled = true;
      this.globalQueue.push(floor);
      this.assignElevatorToNextCall();
    }

    // Assigns an elevator to respond to the next call in the queue based on proximity and availability.
     
    static assignElevatorToNextCall() {
      if (this.globalQueue.length === 0) return;

      const nextFloor = this.globalQueue[0];
      let closestElevatorIndex = -1;
      let minDistance = Infinity;

      this.elevators.forEach((elevator, index) => {
        if (!elevator.moving) {
          const distance = Math.abs(elevator.currentFloor - nextFloor);
          if (distance < minDistance) {
            minDistance = distance;
            closestElevatorIndex = index;
          }
        }
      });

      if (closestElevatorIndex !== -1) {
        const elevator = this.elevators[closestElevatorIndex];
        elevator.addFloorToQueue(this.globalQueue.shift());
      }
    }
  }

  // Initialize the elevator system with 5 elevators and 10 floors
  ElevatorSystem.initialize(5, 10);

  // Set up event listeners for elevator call buttons
  const callButtons = document.querySelectorAll(".call-btn");
  callButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const floor = parseInt(button.dataset.floor);
      ElevatorSystem.handleCall(floor);
    });
  });
});
