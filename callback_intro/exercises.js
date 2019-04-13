// const readline = require('readline');

// const reader = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

const addNumbers = (sum, numsLeft, completionCallback) => {
  if (numsLeft === 0) {
    completionCallback(sum);
    reader.close();
  }
  if (numsLeft > 0) {
      reader.question("Input Number: ", (el) => {
      let parsed_el = parseInt(el);
      sum += parsed_el;
      console.log(sum);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, completionCallback);
    });
  }
};

// addNumbers(0, 2, sum => console.log(`Total Sum: ${sum}`));

const askIfGreaterThan = (el1, el2, callback) => {
  reader.question(`Input 'yes' if ${el1} is greater than ${el2} else 'no'\n`, (response) => {
    if (response === 'yes') {
      return callback(true);
    } else {
      return callback(false);
    }
  });
};

// askIfGreaterThan(1, 2, (el) => {
//   console.log(el);
//   reader.close();
// });

const innerBubbleSortLoop = (arr, i, madeAnySwaps, outerBubbleSortLoop) => {
  if (i < arr.length - 1) {
    askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
      if (isGreaterThan) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
  if (i == (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
  }
};


// innerBubbleSortLoop([1, 2, 3], 0, false, () => {
//   console.log('in outer bubble sort');
//   reader.close();
// });

const absurdBubbleSort = (arr, sortCompletionCallback) => {
  // let madeAnySwaps = true;
  function outerBubbleSortLoop(madeAnySwaps){
    if (madeAnySwaps == true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }
  outerBubbleSortLoop(true);
};

// absurdBubbleSort([3, 2, 1], function (arr) {
//   console.log("Sorted array: " + JSON.stringify(arr));
//   reader.close();
// });

Function.prototype.myBind = function(context) {
  return () => {
    this.apply(context);
  };
};

class Lamp {
  constructor() {
    this.name = "a lamp";
  }
}

const turnOn = function () {
  console.log("Turning on " + this.name);
};

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);

// boundTurnOn(); // should say "Turning on a lamp"
// myBoundTurnOn(); // should say "Turning on a lamp"



Function.prototype.myThrottle = function(interval) {
  let tooSoon = false;
  
  return () => {
  if (tooSoon === false) {
    tooSoon = true;

      setTimeout(() => {
        tooSoon = false;
        this();
      }, interval);}
  };
};

// const test = () => {
//   console.log("hello");
// }

// test.myThrottle(500);



class Neuron {
  fire() {
    console.log("Firing!");
  }
};

const neuron = new Neuron;
// When we create a new Neuron, 
// we can call #fire as frequently as we want

// The following code will try to #fire the neuron every 10ms. Try it in the console:
// const interval = setInterval(() => {
//   neuron.fire();
// }, 1000);

// // You can use clearInterval to stop the firing:
// clearInterval(interval);

// Using Function#myThrottle, we should be able to throttle 
// the #fire function of our neuron so that it can only fire 
// once every 500ms:

// neuron.fire = neuron.fire.myThrottle(500);

// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);

// This time, if our Function#myThrottle worked correctly, 
// the Neuron#fire function should only be able to execute 
// every 500ms, even though we're still trying to invoke it 
// every 10ms!

// If we want this behavior for ALL neurons, we can do the same logic in the constructor:

// class Neuron {
//   constructor() {
//     this.fire = this.fire.myThrottle(500);
//   }

//   fire() {
//     console.log("Firing!");
//   }
// };


Function.prototype.myDebounce = function(interval) {
  let tooSoon = true;

  return () => {
    if (tooSoon) {
      setTimeout(this, interval);
      tooSoon = false;
    } 
  };
};


class SearchBar {
  constructor() {
    this.query = "";

    this.type = this.type.bind(this);
    this.search = this.search.bind(this);
  }

  type(letter) {
    this.query += letter;
    this.search();
  }

  search() {
    console.log(`searching for ${this.query}`);
  }
}


const searchBar = new SearchBar;

const queryForHelloWorld = () => {
  searchBar.type("h");
  searchBar.type("e");
  searchBar.type("l");
  searchBar.type("l");
  searchBar.type("o");
  searchBar.type(" ");
  searchBar.type("w");
  searchBar.type("o");
  searchBar.type("r");
  searchBar.type("l");
  searchBar.type("d");
}

const q = queryForHelloWorld.myDebounce(500);
// q();

const interval = setInterval(() => {
  q();
}, 10);

// neuron.fire = neuron.fire.myDebounce(500);

// const interval = setInterval(() => {
//   neuron.fire();
// }, 10);