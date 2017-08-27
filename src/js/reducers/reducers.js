/*
 * The reducer takes care of our data
 * Using actions, we can change our application state
 * To add a new action, add it to the switch statement in the homeReducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return assign({}, state, {
 *       stateVariable: action.var
 *   });
 */

import {
  CHANGE_FORM,
  SET_AUTH,
  SENDING_REQUEST,
  SET_ERROR_MESSAGE,
  ADD_DRIVE,
  UPDATE_DRIVE,
  SET_ACTIVE_DRIVE,
  TOGGLE_SEAT_FUNCTION,
  SET_USER
} from "../constants/AppConstants";
import auth from "../utils/auth";
// Object.assign is not yet fully supported in all browsers, so we fallback to
// a polyfill
const assign = Object.assign || require("object.assign");

// The initial application state
const initialState = {
  formState: {
    username: "",
    password: ""
  },
  currentlySending: false,
  loggedIn: auth.loggedIn(),
  errorMessage: ""
};

// Takes care of changing the application state
export function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FORM:
      return assign({}, state, {
        formState: action.newState
      });

    case SET_AUTH:
      return assign({}, state, {
        loggedIn: action.newState
      });

    case SENDING_REQUEST:
      return assign({}, state, {
        currentlySending: action.sending
      });

    case SET_ERROR_MESSAGE:
      return assign({}, state, {
        errorMessage: action.message
      });
    default:
      return state;
  }
}

const defaultDriveFunction = {
  id: -1,
  name: "Default",
  minSpeed: 20,
  maxSpeed: 60,
  acceleration: 40,
  type: "PRESET"
};

const userDrive = [
  defaultDriveFunction,
  {
    id: 0,
    name: "User Setting 1",
    minSpeed: 30,
    maxSpeed: 70,
    acceleration: 50,
    type: "USER"
  },
  {
    id: 1,
    name: "Secure",
    maxSpeed: 40,
    minSpeed: 10,
    acceleration: 30,
    type: "PRESET"
  },
  {
    id: 2,
    name: "Sports",
    maxSpeed: 90,
    minSpeed: 20,
    acceleration: 80,
    type: "PRESET"
  },
  {
    id: 3,
    name: "User Setting 2",
    minSpeed: 50,
    maxSpeed: 50,
    acceleration: 50,
    type: "USER"
  },
  {
    id: 4,
    name: "User Setting 3",
    minSpeed: 50,
    maxSpeed: 50,
    acceleration: 50,
    type: "USER"
  },
  {
    id: 5,
    name: "User Setting 3",
    minSpeed: 50,
    maxSpeed: 50,
    acceleration: 50,
    type: "USER"
  }
];
// Takes care of changing the application state
function driveFunctions(state = userDrive, action) {
  switch (action.type) {
    case ADD_DRIVE:
      return [...state, action.drive];
    case UPDATE_DRIVE:
      return state.map((drive, index) => {
        if (drive.id === action.index) {
          return {
            ...drive,
            [action.setting]: action.value
          };
        }
        return drive;
      });
    default:
      return state;
  }
}

function activeDriveFunction(state = -1, action) {
  switch (action.type) {
    case SET_ACTIVE_DRIVE:
      return action.id;
    default:
      return state;
  }
}

const initialSeatFunctions = [
  {
    id: 0,
    name: "Tilt",
    enabled: true,
    icon: "tilt"
  },
  {
    id: 1,
    name: "Recline",
    enabled: true,
    icon: "recline"
  },
  {
    id: 2,
    name: "Elevate",
    enabled: true,
    icon: "elevate"
  },
  {
    id: 3,
    name: "Left Leg",
    enabled: true,
    icon: "left"
  },
  {
    id: 4,
    name: "Right Leg",
    enabled: true,
    icon: "right"
  },
  {
    id: 5,
    name: "Both Legs",
    enabled: true,
    icon: "both"
  }
];

// Takes care of changing the application state: seatingFunctions
function seatFunctions(state = initialSeatFunctions, action) {
  switch (action.type) {
    case TOGGLE_SEAT_FUNCTION:
      return state.map((seatFunction, index) => {
        if (seatFunction.id === action.id) {
          return {
            ...seatFunction,
            enabled: !seatFunction.enabled
          };
        }
        return seatFunction;
      });
    default:
      return state;
  }
}

function user(state = "", action) {
  switch (action.type) {
    case SET_USER:
      return action.user;
    default:
      return state;
  }
}

const specs = {
    Range: "19 km",
    "Max Speed (level surface)": "8.9 kph",
    "Max Speed (6º incline)": "8.5 kph",
    Power: "250 W",
    Voltage: "36 V",
    "Operating temperature": "-25º C to 50º C",
    "Total Weight": "6.1 kg"
  };


export function appReducer(state = initialState, action) {
  return {
    ...homeReducer(state, action),
    driveFunctions: driveFunctions(state.driveFunctions, action),
    activeDriveFunctionId: activeDriveFunction(
      state.activeDriveFunctionId,
      action
    ),
    seatFunctions: seatFunctions(state.seatFunctions, action),
    user: user(state.user, action),
    specs: specs
  };
}
