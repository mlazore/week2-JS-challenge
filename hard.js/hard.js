let tomHeight = 9;
let tomMass = 8;

let jerryHeight = 10;
let jerryMass = 45;

let tomBMI = tomMass / tomHeight ** 2;
let jerryBMI = jerryMass / (jerryHeight * jerryHeight);

let tomLgBMI = tomBMI > jerryBMI;
if (tomLgBMI) {
    console.log("Tom's BMI is higher than Jerry's");
} else {
    console.log("Jerry's BMI is higher than Tom's");
}

//BMI = mass / height ^2 = mass / (height * height)

