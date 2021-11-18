/*const arr=['llo','kio','ik','lij']
const narr=arr.reduce(function(acc,item,index){
    acc+=item +' '
    return acc
''})
console.log(narr);*/
//CHALLENGE 1
const addOne = function (array) {
  let newResult = [];
  array.forEach((element) => {
    newResult.push(element + 1);
  });
  return res;
};
//CHALLENGE 2
const addExclamation = function (array) {
  let newResult1 = [];
  array.forEach((element) => {
    newResult1.push(element + "!");
  });
  return newResult1;
};
//CHALLENGE 3
const addOneByMap = function (array) {
  let newResult2 = array.map((element) => {
    return element + 1;
  });
  return newResult2;
};
//CHALLENGE 4
const addQuestion = function (array) {
  let newResult3 = array.map((element) => {
    return element + "";
  });
  return newResult3;
};
//CHALLENGE 5
const forLoopTwoToThe = function (array) {
  let powerr = array.map((element) => {
    return Math.pow(2, element);
  });
  return powerr;
};
//CHALLENGE 6
const typeNum = function (array) {
  return array.map((element) => {
    return typeof element === "number";
  });
};
//CHALLENGE 7
const containsAnd = function (array) {
  return array.filter((element) => {
    if (element.includes("and")) return element;
  });
};
//CHALLENGE 8
const oddValues = function (array) {
  return array.filter((element) => {
    if (element % 2 == 1) return element;
  });
};
//CHALLENGE 9
const addValues = function (array) {
  return array.map((element) => {
    return reduce(element);
  });
};
//CHALLENGE 10
//----------------------------Objects----------------------------
//CHALLENGE 1
const checkValues = (obj, value) => {
  return Object.values(obj).indexOf(value) > -1;
};

const courseInfo = {
  name: "Code 301",
  duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
  topics: [
    "SMACSS",
    "APIs",
    "NodeJS",
    "SQL",
    "jQuery",
    "functional programming",
  ],
  finalExam: true,
};
console.log(courseInfo);
const getCourseKeys = (obj) => {
  return Object.keys(obj);
};
//CHALLENGE 3
const objectName = {
  GraceHopper: "222-303-5938",
  AdaLovelace: "222-349-9842",
  AlanTuring: "222-853-5933",
};
const updateNumbers = (obj) => {
  let newarr = [];
  for (let printfull in obj) {
    newarr.push(`${printfull}: ${obj[printfull]}`);
    console.log(printfull);
  }
  return newarr;
};

//CHALLENGE 4

const studentOne = {
  math: { grade: 70, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 },
};

const studentTwo = {
  math: { grade: 59, total: 120 },
  english: { grade: 80, total: 100 },
  art: { grade: 90, total: 100 },
};
const PassedOrFailed = (studentGrades) => {
  for (let key in studentGrades) {
    if (`${grade}` / `{total}` > 0.5) {
      return "The student have passed";
    } else {
      return "The student have failed";
    }
  }
};
//CHALLENGE 5
const totalCharacters = (array) => {
  for (const key in array) {
    if (Object.length(array, key)) {
    }
  }
  //in this task I use the loop to includ the array and sum all chart  in array by useing mathod .lenght
  return array.length
};
//CHALLENGE 6
const houseSize = (arr) => {
  //in this task I will put the output in array including objects,and put the first element by house 
  return arr
};