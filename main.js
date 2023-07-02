//Bai 2
var gio = [
    [ "grapes" ,15],
    [ "apples" , 10],
    [ "bananas",5]]
for (let i = 0; i < gio.length; i++){
    console.log(gio[i][2]);
    console.log(gio[i][1]);
}
//Bai 3
var myDog = {
    name: "Ngao",
    legs: 4,
    friends: ["everything!"],
};
console.log(myDog);
myDog.name = "Husky";
myDog.color = "brown"
delete myDog.friends;
console.log(myDog);