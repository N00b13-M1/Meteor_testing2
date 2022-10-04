// // Create a variable called numberOfSeasons and assign it the value 6 between the lines created for you in the JavaScript editor (the tab labeled "JS"). Remember to use the let keyword, and don't forget the semicolon at the end of the line!

// // Next, create a variable called numberOfEpisodes, and assign it the value 12.

// let numberOfSeasons = 6;
// let numberOfEpisodes = 12;

// console.log(numberOfSeasons);

// // In the JS editor, create two variables, episodeTime and commercialTime, with appropriate values (45 and 5, for example).

// // Using the two time variables you just created, plus the pre-existing number of episodes and number of seasons variables, create a variable called totalShowTime containing the total viewing time for this show.

// let episodeTime = 45;
// let commercialTime = 5;

// let totalShowTime = numberOfSeasons * numberOfEpisodes * (episodeTime + commercialTime)

// console.log(totalShowTime)

// const hoursPerDay = 60;

// const minutesPerHour = 60;

// const secondsPerMinute = 60;

// // Create a variable called episodeTitle containing a string, and give your episode an exciting title.

// // Create a number variable called episodeDuration, and decide how long your episode is in minutes.

// // Finally, create a boolean variable called hasBeenWatched which states whether or not the user has already watched the episode.

// // Check if the component works as you would expect it to. Don't hesitate to modify your values and see if the behavior is what you expect.

// let episodeTitle = "Exciting Name";
// let episodeDuration = 35;

// let hasbeenWatched = true;

// console.log(typeof hasbeenWatched);

// // Create an Object and store it in a variable called episode, using curly-brace notation (JSON), with three keys:

// // title

// // duration

// // hasBeenWatched

// // Associate appropriate values to each of these keys.

// let episode = {
//     title: "Hallokes",
//     duration: 45,
//     hasbeenWatched: true,
// }

// console.log(episode.duration)

// let episodeTitle_2 = console.log(episode.title);
// let episodeDuration_2 = console.log(episode.duration);
// let episodeHasBeenWatched_2 = console.log(episode.hasbeenWatched);

// // Now that you know about classes, it's time to use one for our episode component. This time, there are three episode components, so the logical way of doing things is to create an  Episode  class, and then three instances of it — one for each episode.

// // Create a class called Episode using the class keyword.

// // Create a constructor for the Episode class. It should accept three arguments:

// // title

// // duration

// // hasBeenWatched

// class Episode {
//     constructor(batou, tijd, hallokes) {
//         this.title = batou,
//             this.duration = tijd
//         this.hasBeenWatched = hallokes
//     }
// }

// let firstEpisode = new Episode("test", 45, true);
// let secondEpisode = new Episode("hallokes", 40, false);
// let thirdEpisode = new Episode("yowkes", 35, true);

// console.log(firstEpisode);

// // Using the  this  keyword, make sure the constructor assigns the received arguments to the corresponding fields in the new instance. Using the  new  keyword, create three instances of the  Episode  and store them in the variables:

// // firstEpisode

// // secondEpisode

// // thirdEpisode

// // Remember to pass appropriate arguments to each!

// // Create an array stored in a variable called episodes, and populate it with the three variables firstEpisode, secondEpisode and thirdEpisode. Watch the page populate itself automatically!

// // Try changing the order in which you add the episodes, and watch what happens as it refreshes.

// // let episodes = ["firstEpisode", 'secondEpisode', 'thirdEpisode']


// // var obj = { first: 'reference' };
// // obj.push = ('test')

// // console.log(obj);


// var reference = [1];
// var refCopy = reference;
// reference.push(2);
// console.log(reference, refCopy);

// var hundred = 100;
// var two = 2;
// function multiply(x, y) {
//     // PAUSE
//     return x * y;
// }
// var twoHundred = multiply(hundred, two);
// console.log(twoHundred);


// // function changeAgeImpure(person) {
// //     person.age = 25;
// //     return person;
// // }

// // console.log(person);

// // function changeAgePure(person) {
// //     var newPersonObj = JSON.parse(JSON.stringify(person));
// //     newPersonObj.age = 25;
// //     return newPersonObj;
// // }
// // var alex = {
// //     name: 'Alex',
// //     age: 30
// // };
// // var alexChanged = changeAgePure(alex);
// // console.log(alex); 
// // console.log(alexChanged); 


// // var personObj1 = {
// //     name: 'Alex',
// //     age: 30
// // };
// // var person = personObj1;
// // person.age = 25;

// // console.log(person);
// // console.log(personObj1);


// // var arr1 = ['Hi!'];
// // var arr2 = ['Hi!'];
// // console.log(arr1 === arr2);


// // var arr1str = JSON.stringify(arr1);
// // var arr2str = JSON.stringify(arr2);
// // console.log(arr1str === arr2str);


// var obj = { first: 'reference' };
// obj.second = 'ref2';

// console.log(obj);


// var arrRef = ['Hi!'];
// var arrRef2 = arrRef;
// console.log(typeof arrRef);
// console.log(arrRef === arrRef2);

// var arr1 = ['Hi!'];
// var arr2 = ['Hi!'];
// console.log(arr1 === arr2);

// var arr1str = JSON.stringify(arr1);
// var arr2str = JSON.stringify(arr2);
// console.log(arr1str);
// console.log(arr2str);
// console.log(arr1str === arr2str);

// // function changeAgeImpure(person) {
// //     person.age = 25;
// //     return person;
// // }
// // var alex = {
// //     name: 'Alex',
// //     age: 30
// // };
// // var changedAlex = changeAgeImpure(alex);
// // console.log(alex); 
// // console.log(changedAlex);

// // function changeAgePure(person) {
// //     var newPersonObj = JSON.parse(JSON.stringify(person));
// //     newPersonObj.age = 25;
// //     return console.log(newPersonObj);
// // }
// // var alex = {
// //     name: 'Alex',
// //     age: 30
// // };
// // changeAgePure(alex);
// // // console.log(alex); // -> { name: 'Alex', age: 30 }
// // // console.log(alexChanged); 

// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//         name: 'John',
//         age: 50
//     };

//     return person;
// }
// var personObj1 = {
//     name: 'Alex',
//     age: 30
// };
// personObj2 = changeAgeAndReference(personObj1);
// console.log(personObj1); // -> ?
// console.log(personObj2); // -> ?


// var personObj3 = {
//     name: 'Alex',
//     age: 30
// };

// personObj3.age = 25;
// personObj3 = {
//     name: 'John',
//     age: 50
// };

// console.log(personObj3);

// let episodes = [];

// episodes.push(firstEpisode);
// episodes.push(secondEpisode);
// episodes.push(thirdEpisode);
// episodes.push(thirdEpisode);

// console.log(episodes);

// const wrongMap = new Map();
// // wrongMap['bla'] = 'blaa';
// // wrongMap['bla2'] = 'blaaa2';
// wrongMap.set('bla', 'blaa');
// wrongMap.set('bla2', 'blaaa2');


// console.log(wrongMap.get('bla'));

// // console.log(wrongMap.has('bla'));

// let numberOfSeats = true

// let numberOfGuests = 1;

// if (numberOfSeats !== numberOfGuests) {
//     console.log('they are not equal');
// } else {
//     console.log("they're equal");
// }


// // class Episode {
// //     constructor(title, duration, minutesWatched) {
// //       this.title = title;
// //       this.duration = duration;
// //       // Add logic here
// //       // ======================
// //     if (minutesWatched == 0 ) {
// //         this.watchedText = "Not yet watched";
// //         this.continueWatching = true;
// //     }
// //     else if (minutesWatched < duration && minutesWatched > 0){
// //         this.watchedText = "Watching";
// //         this.continueWatching = true;
// //     }

// //     else{
// //         this.watchedText = "Watched";
// //         this.continueWatching = false;
// //     }
// //     }
// // }


// //     let numberOfPassengers = 10;
// //     let i;

// //     for (i = 0; i < numberOfPassengers ; i++) {
// //         console.log(`Passenger ${i+1} boarded`);
// //     };
// //     console.log("All passengers boarded");

// // const songs = ["Hallokes", "Miauwkes", "Yo", "Çava?"];


// // for (let i = 0; i < songs.length ;  i++) {
// //     console.log(`Track ${i+1}: ` + songs[i]);
// // };

// // for (let i in songs) {
// //     console.log(i)
// //     };

// const passengers = [
//     {
//         name: 'Will Alexander',
//         ticketNumber: 209542
//     },
//     {
//         name: 'Sarah Kate',
//         ticketNumber: 169336
//     },
//     {
//         name: 'Audrey Simon',
//         ticketNumber: 779042
//     },
//     {
//         name: 'Tau Perkington',
//         ticketNumber: 703911
//     }
// ];

// let i;


// for (i = 0; i < passengers.length; i++) {
//     console.log("Boarding " + passengers[i].name + "with ticket number " + passengers[i].ticketNumber);
// }



// // for (let yo of passengers) {
// //     console.log('Boarding passenger ' + yo.name + ' with ticket number ' + yo.ticketNumber);
// // }


// let seatsLeft = 8;
// let passengersLeft = 6;
// let passengersBoarded = 4;

// while (seatsLeft > 0 && passengersLeft > 0) {
//     passengersLeft--;
//     passengersBoarded++;
//     seatsLeft--;
// }

// console.log(seatsLeft);
// console.log(passengersLeft);
// console.log(passengersBoarded);



// function myLocalScope() {
//     var myVar = 5;
//     console.log(myVar);
// }
// myLocalScope();
// //   console.log(myVar);


// console.log(greeter);
// var greeter = "say hello"

// // var greeter;
// // console.log(greeter); // greeter is undefined
// // greeter = "say hello"


// const add = (number1, number2) => {
//     const result = number1 + number2;
//     return result;
// }


// add(5, 42332);



// const tauRatings = [5, 4, 5, 5, 1, 2];
// const colinRatings = [5, 5, 5, 4, 5];


// const calculateAverageRating = (ratings) => {
//     let ratingSum = 0;
//     for (let i = 0; i < ratings.length; i++) {
//         ratingSum += ratings[i];
//         // console.log(ratingSum / ratings.length);
//     }

//     console.log(ratingSum / ratings.length);
//     // if (ratings.length = 0) {
//     //     console.log("test");
//     // }
//     // else {
//     //     for (let i = 0; i < ratings.length; i++) {
//     //         ratingSum += ratings[i];
//     //         console.log(ratingSum / ratings.length);
//     //     }
//     // };
//     // console.log(ratings.length);
// };

// calculateAverageRating(tauRatings);
// calculateAverageRating(colinRatings);

// let test = true;
// test = !test
// console.log(test);


// let test2 = [1,2,3,4];
// test2.slice();

// console.log(test2);

// var alex = {
//     name: 'Alex',
//     age: 30
// };

// console.log(alex);
// console.log(JSON.stringify(alex));
// console.log(JSON.parse(JSON.stringify(alex)));

function changeAgeAndReference(person) {
    person.age = 25;
    person = {
        name: 'John',
        age: 50
    };
    
    return person;
}
var personObj1 = {
    name: 'Alex',
    age: 30
};

// var personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1); // -> ?
console.log(changeAgeAndReference(personObj1)); // -> ?
// console.log(personObj2); // -> ?

fgergege