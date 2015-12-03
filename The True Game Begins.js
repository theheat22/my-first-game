function once(fn, context) { 
  var result;

  return function() { 
    if(fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }

    return result;
  };
}
var myCharacter = {
  name: "Death's Doll",
  
  powerLevel: 100,
  
  specialPowers:["Flight", "Speed","Deception", "Selfmodification", "Adept with Weaponry","Revert"],
  
  image: "http://codeparkhouston.com/hs-fall-2015/lesson-09/assets/deaths-doll.jpg",
  story: "A toy originally given to the Grim Reaper. He grew fond of the doll, as a child, and midified it over time. The doll soon gained the owner's malicious intention and used the modifications to help the Angel of Death, himself",
  
  Selfmodification: function(){setTimeout(function(){setInterval(function(){
    myCharacter.powerLevel = myCharacter.powerLevel + 1;},50);},60000);
    
   return ("Selfmodification Activated");
    
    
},

  Revert: function(){
    myCharacter.powerLevel = 100;
    myCharacter.image ="http://codeparkhouston.com/hs-fall-2015/lesson-09/assets/deaths-doll.jpg";
    
     return ("Original form taken");
  },

  angelIdol: true,
  Deception: function(){
   if ((myCharacter.powerLevel < 5) && (myCharacter.angelIdol)){myCharacter.powerLevel = 1;
    myCharacter.image = "data:image/jpeg;base64,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";
    Enemy.powerLevel = Enemy.powerLevel - (Math.floor(Math.random()*100) + 10)
    myCharacter.angelIdol = false
    setTimeout(myCharacter.Revert(), 4000);
    return("Yet your memory of me remains. I will take you down")}
    else {}
  },
    
  
powerUp: function(){
  myCharacter.powerLevel = myCharacter.powerLevel + 10;
  
  return myCharacter.powerLevel;
}, 

powerDown: function(){
  myCharacter.powerLevel = myCharacter.powerLevel - 10;
  
  return myCharacter.powerLevel;
},


 Speed: function(){
   myCharacter.powerLevel = 60;
   return ("Life Taken. Inceasing Speed.");
 },  
   
   Punch: function(){
     
     if (myCharacter.powerLevel == 60){
       Enemy.powerLevel = Enemy.powerLevel - 20;
     }
       else {
        Enemy.powerLevel = Enemy.powerLevel - 10; 
       }
     }, 
     
     
     
   
 
  Cut: function(){
    
    if (myCharacter.powerLevel == 60){
      Enemy.powerLevel = Enemy.powerLevel - 28;
    }
     else {
        Enemy.powerLevel = Enemy.powerLevel - 14;
     } 
  },
  
  Barrage: function(){
    
    if (myCharacter.powerLevel == 60){
      Enemy.powerLevel = Enemy.powerLevel - 100;
    }
     else {
       Enemy.powerLevel = Enemy.powerLevel - 50;
       return ("Target Blown to Pieces");
     }
   },
};

show(myCharacter);

var Enemy = {
  name: "Grim Reaper",
  
  powerLevel: 1000,
  
  specialPowers: ["Death's Grasp","Etheral Slice","Wither","Dissection","Nigh Death","Soulbound Drain","Total Annihilation","Power Division","Killcommand","EndGame"],
  
  specialPowers2: ["DeathsGrasp","EtheralSlice","Wither","Dissection","NighDeath","SoulboundDrain","TotalAnnihilation","PowerDivision","Killcommand","EndGame"],

  image: "http://vignette1.wikia.nocookie.net/darkhunter/images/1/1e/Grim_Reaper_Thanatos.jpg/revision/latest?cb=20131005231234",
   EndGamenumber: 1,

 TotalAnnihilation: function(){ myCharacter.powerLevel = myCharacter.powerLevel - 9999;
  console.log("None escape death!");
  return myCharacter.Deception()},

DeathsGrasp: function(){
myCharacter.powerLevel = myCharacter.powerLevel - (Math.floor(Math.random()*5) * Enemy.EndGamenumber);
return ("Remeber who you face.")
},
EtheralSlice: function(){
  myCharacter.powerLevel = myCharacter.powerLevel - ((Math.floor(Math.random()*5) + 2) * Enemy.EndGamenumber);
  return ("Feel my blade.")
},
Wither: function(){
  myCharacter.powerLevel = myCharacter.powerLevel - ((Math.floor(Math.random()*5) + 5) * Enemy.EndGamenumber);
  return("Fade into the abyss.")
},  

PowerDivision: function(){
  myCharacter.powerLevel= Math.floor(myCharacter.powerLevel / (2 * Enemy.EndGamenumber));
  return("Let's see you divide.")
},

NighDeath: function(){
  if (Enemy.powerLevel <= 100){ myCharacter.powerLevel = myCharacter.powerLevel - (20 * Enemy.EndGamenumber);} 
  else{ myCharacter.powerLevel = myCharacter.powerLevel - (15 * Enemy.EndGamenumber);}
  
},

SoulboundDrain: function(){
  myCharacter.powerLevel = myCharacter.powerLevel - (10 * Enemy.EndGamenumber);
  Enemy.powerLevel = Enemy.powerLevel + (10 * Enemy.EndGamenumber);

},

Dissection: function(){
  myCharacter.powerLevel = myCharacter.powerLevel - (20 * Enemy.EndGamenumber);
  Enemy.powerLevel = Enemy.powerLevel + (5 * Enemy.EndGamenumber);
  return("Now I see how you work.")
},

Killcommand: function(){
  myCharacter.PowerLevel = myCharacter.PowerLevel - (50 * Enemy.EndGamenumber);

  return("Fear me.")
}, 

EndGame: function(){
  Enemy.EndGamenumber = Enemy.EndGamenumber * 2

  return("Playtimes over.")
},

canMultiply: true,
canMultiplyTwo: true,

attack: function(){
  myCharacter.Deception();
  if (Enemy.powerLevel < 101){
    // once (function(){
    //   Enemy.EndGamenumber = Enemy.EndGamenumber * 8;
    // })();

    if(Enemy.canMultiply = true){
      Enemy.EndGamenumber = Enemy.EndGamenumber * 8;
      Enemy.canMultiply = false;
    }

    return    Enemy.specialPowers2[Math.floor(Math.random()*5) + 5 ];
  }
  else if (Enemy.powerLevel < 501){
    // once(function(){
    //   Enemy.EndGamenumber = Enemy.EndGamenumber * 4;
    //   alert("OK")}
    // )();


    if(Enemy.canMultiplyTwo = true){
      Enemy.EndGamenumber = Enemy.EndGamenumber * 4;
      Enemy.canMultiplyTwo = false;
    }

    return Enemy.specialPowers2[Math.floor(Math.random()*5) + 4];
  }

  else { return Enemy[Enemy.specialPowers2[Math.floor((Math.random()*4))]]();
  }                                
  //return Enemy.specialPowers[Math.floor((Math.random()*10) + 1)];
},





  
};

show(Enemy);

