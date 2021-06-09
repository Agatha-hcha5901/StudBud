/*pomodoro*/
var pomodoro = {
    started : false,
    minutes : 0,
    seconds : 0,
    fillerHeight : 0,
    fillerIncrement : 0,
    interval : null,
    minutesDom : null,
    secondsDom : null,
    fillerDom : null,
    init : function(){
      var self = this;
      this.minutesDom = document.querySelector('#minutes');
      this.secondsDom = document.querySelector('#seconds');
      this.fillerDom = document.querySelector('#filler');
      this.interval = setInterval(function(){
        self.intervalCallback.apply(self);
      }, 1000);
      document.querySelector('#work').onclick = function(){
        self.startWork.apply(self);
      };
      document.querySelector('#shortBreak').onclick = function(){
        self.startShortBreak.apply(self);
      };
      document.querySelector('#longBreak').onclick = function(){
        self.startLongBreak.apply(self);
      };
      document.querySelector('#stop').onclick = function(){
        self.stopTimer.apply(self);
      };
    },
    resetVariables : function(mins, secs, started){
      this.minutes = mins;
      this.seconds = secs;
      this.started = started;
      this.fillerIncrement = 200/(this.minutes*60);
      this.fillerHeight = 0;  
    },
    startWork: function() {
      this.resetVariables(25, 0, true);
    },
    startShortBreak : function(){
      this.resetVariables(5, 0, true);
    },
    startLongBreak : function(){
      this.resetVariables(15, 0, true);
    },
    stopTimer : function(){
      this.resetVariables(25, 0, false);
      this.updateDom();
    },
    toDoubleDigit : function(num){
      if(num < 10) {
        return "0" + parseInt(num, 10);
      }
      return num;
    },
    updateDom : function(){
      this.minutesDom.innerHTML = this.toDoubleDigit(this.minutes);
      this.secondsDom.innerHTML = this.toDoubleDigit(this.seconds);
      this.fillerHeight = this.fillerHeight + this.fillerIncrement;
      this.fillerDom.style.height = this.fillerHeight + 'px';
    },
    intervalCallback : function(){
      if(!this.started) return false;
      if(this.seconds == 0) {
        if(this.minutes == 0) {
          this.timerComplete();
          return;
        }
        this.seconds = 59;
        this.minutes--;
      } else {
        this.seconds--;
      }
      this.updateDom();
    },
    timerComplete : function(){
      this.started = false;
      this.fillerHeight = 0;
    }
};
window.onload = function(){
  pomodoro.init();
};

 /*stpwatch*/
var time = 0;
var running = 0;

function startPause() {
    if (running == 0) {
        running = 1;
        increment();
        document.getElementById("startPause").innerHTML = "PAUSE";
    } else {
        running = 0;
        document.getElementById("startPause").innerHTML = "RESUME";
    }
}

function reset(){
    running = 0;
    time = 0;
    document.getElementById("startPause").innerHTML = "START";
    document.getElementById("output").innerHTML = "00:00:00";
}

function increment() {
    if (running == 1) {
        setTimeout(function() {
            time++;
            var mins = Math.floor(time/10/60);
            var secs = Math.floor(time/10 % 60);
            var tenths = time % 10;
            if (mins < 10) {
              mins = "0" + mins;
            } 
            if (secs < 10) {
              secs = "0" + secs;
            }
            document.getElementById("output").innerHTML = mins + ":" + secs + ":" + "0" + tenths;
            increment();
        },100);
    }
}

/*Acronym Maker*/
var letters = {
A: "APE",
a: "APE",
B: "BED",
b: "BED",
C: "CAR",
c: "CAR",
D: "DUCK",
d: "DUCK",
E: "EGG",
e: "EGG",
F: "FLY",
f: "FLY",
G: "GO",
g: "GO",
H: "HELP",
h: "HELP",
I: "IF",
i: "IF",
J: "JOY",
j: "JOY",
K: "KING",
k: "KING",
L: "LIGHT",
l: "LIGHT",
M: "MAY",
m: "MAY",
N: "NEW",
n: "NEW",
O: "OWL",
o: "OWL",
P: "PIG",
p: "PIG",
Q: "QUAKE",
q: "QUAKE",
R: "RIVER",
r: "RIVER",
S: "SLOTH",
s: "SLOTH",
T: "TREE",
t: "TREE",
U: "UNICORN",
u: "UNICORN",
V: "VACCINE",
v: "VACCINE",
W: "WIND",
w: "WIND",
X: "XENIAL",
x: "XENIAL",
Y: "YOU",
y: "YOU",
Z: "ZERO",
z: "ZERO"
}

function makeName(str){
  var arr = str.split("")
  for(let i=0; i<arr.length; i++){
    arr.splice(i,1,letters[arr[i]])
  }
  console.log(arr.join(" "))
}
makeName('testing')
