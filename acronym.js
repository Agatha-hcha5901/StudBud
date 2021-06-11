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

var wordInput = document.getElementbyId("acronym"); 

wordInput.addEventListener("submit", function(event){
  let word = wordInput.value;
}

function makeName(str){
  var arr = str.split("")
  for(let i=0; i<arr.length; i++){
    arr.splice(i,1,letters[arr[i]])
  }
  console.log(arr.join(" "))
}
makeName(word)