let onlineCourse = "BSIT";
let priceCourse = 37000;
let maingoals = ["learn", "upskill", "improve"];

// alert(onlineCourse);
// alert(priceCourse);
// alert(maingoals);

// let groupVar = onlineCourse + priceCourse + maingoals;

let groupVar = {
  name: onlineCourse,
  price: priceCourse,
  goals: maingoals,
};

// alert(groupVar.name);
// alert(groupVar.price);
// alert(groupVar.goals);

//alert(groupVar.goals[1]);

function getListItem(array, arrayIndex){
    let arrayElement = array[arrayIndex];
    return arrayElement;
}

let firstGoal = getListItem(groupVar.goals,1);


alert(firstGoal);


// alert(maingoals[1]);

// let i;

// function myCommand(myList, i) {
//   return myList[i];
// }

// alert(myCommand(maingoals, 1));
