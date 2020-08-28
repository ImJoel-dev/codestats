// const OpenCore = require("Core/OpenCore.js");

const Mean = (input) => {

    if (Array.isArray(input)) {
        const length = input.length;

        const total = ReduceArray(input);

        console.log(total / length);


    } else {
       console.log("Invalid user input");
    }


}

const ReduceArray = array => {
    return array.reduce((accumulator, currentValue) => accumulator + currentValue)

}

Mean(1, 2, 3, 4, 5, 6, 8, 9);

