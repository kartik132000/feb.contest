let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  let developers = arr.map(employee => {
    if (employee.profession == "developer") {
      return employee;
    }
  }).filter(Boolean);
  console.log(developers);
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  let developer = [];
  arr.forEach(employee => {
    if (employee.profession == "developer") {
      developers.push(employee);
    }
  })
  console.log(employee);
}

function addData() {
  //Write your code here, just console.log
  let newemployee = { id: 4, name: susan, age: "20", profession: "inter" };
  arr.push(newemployee);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  arr.arrfilter(employee => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 5, name: "Alice", age: "22", profession: "developer" },
    { id: 6, name: "bob", age: "24", profession: "admin" },
    { id: 7, name: "charlie", age: "26", profession: "designer" }
  ];
  let conbinedArray = arr.concat(newArr);
  console.log(conbinedArray);
}