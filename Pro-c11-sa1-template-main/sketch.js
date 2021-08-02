var weight = [35,38,42,45,43,34,36,41,48,32];

var sum = 0 
for(var I=0 ; I<weight.length ; I++) {
  sum = sum + weight[I]
}

var average = sum/weight.length

console.log(average)

function setup() {
  createCanvas(400,400);

}

function draw() 
{
  background(30);
}

 

