// Array declare

var friendAge = [12, 22, 53, 75, 46, 98];
// console.log(friendAge);

var friendsName = ["Megha", "Motu", "Petni", "Likee Bandobi", "Tik-Tok Bandobi", "Raj"];
// console.log(friendsName);


// Number of Index

var indexOfFriendsAge = (friendAge.length);
// console.log(indexOfFriendsAge);
var indexOfFriendsName = (friendsName.length);
// console.log(indexOfFriendsName);


// Position Of Array Elements

// console.log(friendAge[3]);
// console.log(friendsName[2]);


// To Get Position By the Element 
var positionIndexAge = friendAge.indexOf(75);
// console.log(positionIndexAge);
var positionIndexName = friendsName.indexOf("Petni");
// console.log(positionIndexName);


// Change Of Array Name
friendAge[1] = 60;
friendAge[5] = 100;
// console.log(friendAge);

friendsName[2] = "Best Friend";
// console.log(friendsName)