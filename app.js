// console.log("UMarrrr");
// console.log("Hello world");
// console.log("HEHHEHEHHEHE");

// let name = 'tony stark';
// age = 12;
// // alert(age);
// // alert(name);
// let output = "total price :"+ ( age + age)+" ruppe";
// console.log(output);
// console.log('age total : $(age + age) here');

// function ourReusableFunction(){
//     console.log("hello");
// }
// ourReusableFunction()

// function ourFunction(a,b){
//     console.log(a-b);
//     console.log(a+b);
//     console.log(a/b);
// }
// // ourFunction(23,32)
// var outer = "winter"
// function wear(){
//     // var outer = "sweater";
//     return outer;
// }
// console.log(wear())


// returnVALUE
// function minus(num){
//     return num - 7
// }
// console.log(minus(5))s


// if 
// function trueOrFalse(isit){
//     if(isit == "True"){
//         return "trueeee"
//     }
//     return "falseee"
// }
// console.log(trueOrFalse("True"))


// function calculator(num , num2 , operator){
//     if (operator =="+"){
//         return num+num2
//     }
//     else if (operator =="/"){
//         return num /num2
//     }
//     else if (operator=="*"){
//         return num*num2
//     }
//     else if (operator == "-"){
//         return num - num2
//     }
//     else {
//         return num%num2
//     }

// };
// alert(calculator(10,10,"+"));


// function isit(a,b){
//     return a<b;
// }
// console.log(isit(12,21));


// obj
var ourdog = {
    "name":"camper",
    "legs": "three",
    "tail":1,
    "eats": "food"
}
// console.log(ourdog)
 
// var name = ourdog.name;
// var eats = ourdog.eats;
// console.log("My dogs name is "+ name +" he likes to eat "+ eats)

// second way
// var name = ourdog["name"];
// alert(name)
// update
// ourdog.name = "happy"
// alert(ourdog.name)

// adding a property
// ourdog["indian"] = "yes";
// alert(ourdog.indian);

// delete a property
// delete ourdog.name


// function check(a){
//     if (ourdog.hasOwnProperty(a)){
//         return ourdog[a]
//     }
//     else{
//         return "not found"
//     }
// }
// console.log(check("name"))


// manipulating

// var storage = {
//     "car":{
//         "inide":{
//             "glove box": "maps",
//             "passenger seat":"bottle"
//         }
//     },
//     "outside":{
//         "trunk":"jack"
//     }
// };
// var content = storage.car.inide["passenger seat"];
// console.log(content);


// var plant = [
//     {type:"flowers",
//     list:["rose",
//             "sunflower",
//             "dandelin"]
//     },
//     {type : "trees",
//     list : [
//             "pine",
//             "fir",
//             "bamboo"
//         ]

//     }
// ];

// console.log(plant[1].list[2]);


var plants = [
    {
        type: "flowers",
        list: ["rose", "sunflower", "dandelion", "lily", "tulip"]
    },
    {
        type: "trees",
        list: ["pine", "fir", "bamboo", "oak", "maple"]
    },
    {
        type: "shrubs",
        list: ["azalea", "boxwood", "hydrangea", "rhododendron", "juniper"]
    },
    {
        type: "vines",
        list: ["ivy", "grapevine", "wisteria", "clematis", "morning glory"]
    },
    {
        type: "succulents",
        list: ["aloe vera", "cactus", "jade plant", "echeveria", "hens and chicks"]
    },
    {
        type: "ferns",
        list: ["Boston fern", "bird's nest fern", "staghorn fern", "maidenhair fern", "sword fern"]
    }
];

var data = plants[4].list[1];
alert(data);

//     }
// }
// var data = JSON.parse(JSON.stringify(collection));

// function updating(id , prop, value){
//     if ( value === ""){
//         delete collection[id][prop];
//     }
//     else if (prop === "tracks"){
//         collection[id][prop] = collection[id][prop] || [];
//         collection[id][prop].push(value);
//     }
//     else{
//         collection[id][prop] = value;
//     }
//     return collection;
// }

// console.log(updating("4" , "artist", "zaheer"))


// var myarr = [];
// // var i = 0;
// // while (i < 5){
// //     myarr.push(i);
// //     i++
// // }
// // console.log(myarr);
// for (var i = 0; i<=20;i+=2) {
//     myarr.push(i);
// }
// console.log(myarr);


// var myarraay = [2,4,6,8,10];
// var total = 0;
// for (var i = 0;i<myarraay.length;i++){
//     total+=myarraay[i];
// }
// console.log(total);

// nested for
// function multi(arr){
//     var product = 1;
//     for(var i =0;i< arr.length;i++){
//         for(var j = 0;j<arr[i].length;j++){
//             product*=arr[i][j];
//         }
//     }
//     return product;
// }
// var product = multi([[1,2],[3,4],[5,6,7,8]]);
// console.log(product);

// do while 
// var arr = [];
// var i = 1;

// do{
//     arr.push(i)
//     i++
// }while (i<5)
// console.log(i,arr)

// var contacts = [
//     {"firstName":"Umar",
//         "lastName" :"uddin",
//         "Number":12,
//         "skills":[
//             "js","html","react"
//         ]
//     },{"firstName":"muneeb",
//         "lastName" :"",
//         "Number":12,
//         "skills":[
//             "js","html","react"
//         ]
//     },{"firstName":"pranjal",
//         "lastName" :"",
//         "Number":12,
//         "skills":[
//             "js","html","react"
//         ]
//     },{"firstName":"zubiya",
//         "lastName" :"",
//         "Number":12,
//         "skills":[
//             "js","html","react"
//         ]
//     }
// ]

















