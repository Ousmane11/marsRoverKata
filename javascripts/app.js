// Rover Object Goes Here
let rover = {
  direction : "N",
  x: 0,
  y: 0,
  travelLog: []
}
// ======================

// ======================
function turnLeft(rover){
  switch (rover.direction) {
      case "N":
        rover.direction = "W"
        break;
        case "S":
          rover.direction = "E"
          break;
          case "E":
            rover.direction = "N"
            break;
            case "W":
              rover.direction = "S"
              break;
  }
  console.log("turnLeft was called!");
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E"
      break;
      case "S":
          rover.direction = "W"
        break;
        case "E":
            rover.direction = "S"
          case "W":
              rover.direction = "N"
            break;
  }
  console.log("turnRight was called!");
}

function moveForward(rover){
  console.log("moveForward was called")
  switch (rover.direction) {
  case "N":
    if (rover.y === 0) {
      rover.y = 0;
      console.log("Sorry, can't move Off-limits")
    } else {
rover.y -= 1;
rover.travelLog.push([rover.x,rover.y]);
console.log(rover);
    }
    break;
    case "W":
      if (rover.x === 0) {
        rover.x = 0;
        console.log("Sorry, can't move Off-limits")
      } else {
rover.x -= 1;
rover.travelLog.push([rover.x,rover.y]);
console.log(rover);
      }
    break;
    case "E":
      if (rover.x === 9) {
        rover.x = 9;
        console.log("Sorry, can't move Off-limits")
      } else {
rover.x += 1;
rover.travelLog.push([rover.x,rover.y]);
console.log(rover);
      }
    break;
    case "S":
      if (rover.y === 9) {
        rover.y = 9;
        console.log("Sorry, can't move Off-limits")
      } else {
rover.y += 1;
rover.travelLog.push([rover.x,rover.y]);
console.log(rover);
      }
    break;
}
}
//Commands
function command (string) {
  for (let i = 0; i < string.length; i++) {
  if (string[i] === "f") {
moveForward(rover);
  } else if (string[i] === "l") {
 turnLeft(rover);
  } else if (string[i] === "r") {
  turnRight(rover);
  }
}
}