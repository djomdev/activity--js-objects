var jennyObj = {
   name: "jenny",
   img_40x40: "selfy-ig-profile.png",
   job: 'seamstress',
   age:  28,
   profileActive: false,
   img_40x40: "thumnail-me.jpg",
   img_100x100: "jenny-profile.jpg",
   img_244x244: "frend-kitkat.jpg",
   img_200x200: "penguin-hat.png",
}

var rufusDolanObj = {
   name: "rufus",
   img_50x50: "srs-photo.png",
   job: 'cook',
   age:  48,
   hasFace: false,
   img_100x100: "glamour-shot.png",
   img_300x200: "at-the-game.png",
}

var userImageList2 = getImageNamesFromObject(rufusDolanObj)


function getImageNamesFromObject(object){
   var result = [];
   for (key in object) {
      if(key.slice(0,4) === "img_"){
         result.push(object[key]);
      }
   }
   return result;
}

//=> ["srs-photo.png", "glamour-shot.png", "at-the-game.png"]