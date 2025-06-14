# Elevator Task

For the provided home task, I used HTML, CSS, and JavaScript to solve the problem. I created a class to manage and scale the lifts, which makes it easier to handle changes in the number of floors or lifts.

One thing that wasn't specified in the task was the transition time for moving from one floor to the next. I assumed a duration of 3 seconds for this transition. All other features, such as the audio announcements when a lift reaches a floor and 2 seconds arrived stage, are implemented as described in the task.

Additionally, while the requirement was to assign tasks to the nearest lift, I implemented a "Nearby and Free Lift" feature. This improves resource utilization, as detailed in the feature list in the README.

I also added comments following industry standards (JSDoc) to make it easier to understand the functionality of each function.

## Project Structure

- `index.html`: Main HTML file for the user interface (UI) of the elevator system.
- `style.css`: CSS file for styling the UI.
- `script.js`: JavaScript file containing the logic for the elevator's operation.
- `README.md`: This file, providing an overview of the project and instructions.
- `assets/`: (Optional) Directory containing any images or additional resources used in the project.

## Elevator System Details

- **Floors**: 10 floors in total, including the ground floor.
- **Lifts**: 5 lifts operate within the system.

## Floor Button States

Each floor has one button to call the lift, which can be in one of the following states:

- **Call**: The button is pressed to request a lift.
- **Waiting**: The request has been acknowledged, and the lift is on its way.
- **Arrived**: The lift has arrived at the requested floor.

## Elevator States

- **Idle (Black)**: The lift is stationary and not in use.
- **Moving (Red)**: The lift is in transit between floors.
- **Loading (Green)**: The lift is loading or unloading passengers at a floor.

## Features

- **Multiple Elevator Control**: Manages 5 lifts across 10 floors.
- **Request Handling**: Responds to floor requests and efficiently dispatches lifts.
- **Direction Logic**: Determines the most efficient path for each lift.
- **Visual Feedback**: Provides a visual representation of each lift's current state and position using colors (black, red, green).
- **Floor Button States**: Each floor has a button with states indicating whether the lift has been called, is on its way, or has arrived.
- **Audio Feedback**: Plays a sound when a lift reaches a floor, announcing the arrival (e.g., '1st floor').
- **Movement Time**: To move between floors (e.g., from floor 1 to 2 or from floor 1 to ground), the lift assumes a travel time of 3 seconds per floor.
- **Nearby and Free Lift Feature**: The system intelligently dispatches the nearest available lift or the one that is free to attend to the request. For example, if a lift is currently idle and another lift is moving but closer to the requested floor, the system will prioritize the idle lift.
- **Displayed Waiting Time**: Shows the estimated waiting time for a lift to arrive at a floor. This waiting time is calculated based on the distance of the nearest lift and is updated in real-time as the lift progresses toward the requested floor.

## How to Run

You have two ways to run this project:

### !!. Run Directly from Folder

- **Open**: Simply open `index.html` in your web browser.
# Home-Task


For the provided home task, I used HTML, CSS, and JavaScript to solve the problem. I created a class to manage and scale the lifts, which makes it easier to handle changes in the number of floors or lifts.

One thing that wasn't specified in the task was the transition time for moving from one floor to the next. I assumed a duration of 3 seconds for this transition. All other features, such as the audio announcements when a lift reaches a floor and 2 seconds arrived stage, are implemented as described in the task.

Additionally, while the requirement was to assign tasks to the nearest lift, I implemented a "Nearby and Free Lift" feature. This improves resource utilization, as detailed in the feature list in the README.

I also added comments following industry standards (JSDoc) to make it easier to understand the functionality of each function.

## Project Structure

- `index.html`: Main HTML file for the user interface (UI) of the elevator system.
- `style.css`: CSS file for styling the UI.
- `script.js`: JavaScript file containing the logic for the elevator's operation.
- `README.md`: This file, providing an overview of the project and instructions.
- `assets/`: (Optional) Directory containing any images or additional resources used in the project.

## Elevator System Details

- **Floors**: 10 floors in total, including the ground floor.
- **Lifts**: 5 lifts operate within the system.

## Floor Button States

Each floor has one button to call the lift, which can be in one of the following states:

- **Call**: The button is pressed to request a lift.
- **Waiting**: The request has been acknowledged, and the lift is on its way.
- **Arrived**: The lift has arrived at the requested floor.

## Elevator States

- **Idle (Black)**: The lift is stationary and not in use.
- **Moving (Red)**: The lift is in transit between floors.
- **Loading (Green)**: The lift is loading or unloading passengers at a floor.

## Features

- **Multiple Elevator Control**: Manages 5 lifts across 10 floors.
- **Request Handling**: Responds to floor requests and efficiently dispatches lifts.
- **Direction Logic**: Determines the most efficient path for each lift.
- **Visual Feedback**: Provides a visual representation of each lift's current state and position using colors (black, red, green).
- **Floor Button States**: Each floor has a button with states indicating whether the lift has been called, is on its way, or has arrived.
- **Audio Feedback**: Plays a sound when a lift reaches a floor, announcing the arrival (e.g., '1st floor').
- **Movement Time**: To move between floors (e.g., from floor 1 to 2 or from floor 1 to ground), the lift assumes a travel time of 3 seconds per floor.
- **Nearby and Free Lift Feature**: The system intelligently dispatches the nearest available lift or the one that is free to attend to the request. For example, if a lift is currently idle and another lift is moving but closer to the requested floor, the system will prioritize the idle lift.
- **Displayed Waiting Time**: Shows the estimated waiting time for a lift to arrive at a floor. This waiting time is calculated based on the distance of the nearest lift and is updated in real-time as the lift progresses toward the requested floor.

## How to Run

You have two ways to run this project:

### !!. Run Directly from Folder

- **Open**: Simply open `index.html` in your web browser.
