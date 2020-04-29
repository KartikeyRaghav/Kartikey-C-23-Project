// Adding physics to the project
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

// Creating the different objects
var engine, world;
var castlepillar1,castlepillar2;
var cone1,cone2;
var wall;
var gate1,gate2;
var line1,line2,line3,line4,line5,line6,line7,line8,line9,line10,line11,line12,line13,line14,
line15,line16,line17,line18,line19,line20,line21,line22,line23,line24,line25,line26,line27,line28,
line29,line30,line31,line32,line33,line34,line35,line36,line37,line38,line39,line40,line41,line42;
var wallline1,wallline2,wallline3,wallline4,wallline5,wallline6,wallline7,wallline8,wallline9,wallline10,
wallline11,wallline12,wallline13,wallline14,wallline15,wallline16,wallline17,wallline18,wallline19,wallline20,
walline21,wallline22,wallline23;
var gateline1,gateline2,gateline3,gateline4,gateline5,gateline6,gateline7,gateline8,gateline9,gateline10;    
var p,p1;

// Creating an array of particles   
var particles = [];  
var particles1 = [];
var rectangle = [];
var design = [];
var part = [];
var drawline = [];
var wallline = [];
var gateline = [];
var mConstraint;                          

// Calling the function setup
function setup(){

          // Creating the canvas
          var canvas = createCanvas(800,600);

          // Creating the engine
          engine = Engine.create();

          // Adding world to the engine
          world = engine.world;

          // Creating a canvas mouse
          var canvasmouse = Mouse.create(canvas.elt);

          // Changing the pixel ratio according to the density of the screen
          canvasmouse.pixelRatio = pixelDensity();

          // Adding canvas mouse to the mouse constraint
          var op = {
            Mouse: canvasmouse
          }

          // Creating the mouse constraint
          mConstraint = MouseConstraint.create(engine, op);

          // Adding it to the world
          World.add(world,mConstraint);
        
          // Creating a ground
          ground = new Ground(400,585,800,30);
          fill("purple");

          // Adding ground to the world
          World.add(world,ground);

          // Creating an object that will keep track of the previous particle
          var prev = null;

          // Creating a chain at the left side
          for(x = 15; x > -570; x -= 40) {

            // Creating a variable fixed
            var fixed = false;

            // Making the fixed true if there is no previous particle
            if(!prev) {
              fixed = true;
            }

            // Creating a particle
            p = new SideChain(x,80,10,fixed);

            // Adding it to particles array
            particles.push(p);

            // Adding the particle to the world
            World.add(world,p);

            // Creating an invisible chain with the previous particle
            if(prev) {

              // Adding the properties to the chain with the help of a variable
              var options = {
              
              // Setting the chain start and end point
              bodyA: p.body,
              bodyB: prev.body,

              // Setting the length of the chain
              length: 20,

              // Setting the stiffness of the chain
              stiffness: 0.4
            }

            // Creating a constraint
            var constre = Constraint.create(options);

            // Adding the constraint to the world
            World.add(world,constre);
            }

            // Adding the particle to the previous
            prev = p;
          }

          // Creating another object that will keep track of the previous particle
          var prev1 = null;

          // Creating a chain on the right side
          for(i = 785; i < 1350; i = i + 40) {

            // Creating a fixed variable and giving it false value
            var fixed = false;

            // Giving fixed as true value when there is no previous particle
            if(!prev1) {
              fixed = true;
            }

            // Creating another particle
            p1 = new SideChain(i,80,10,fixed);

            // Adding it to particles array
            particles.push(p1);

            // Adding the particle to the world
            World.add(world,p1);

            // Creating an invisible chain with the previous particle
            if(prev1) {

              // Adding the properties to the particles
              var option = {

              // Setting the start and end position of the chain
              bodyA: p1.body,
              bodyB: prev1.body,

              // Setting the length of the chain
              length: 20,

              // Setting the stiffness of the chain
              stiffness: 0.4
            }

            // Creating a constraint
            var constra = Constraint.create(option);

            // Adding the constraint to the world
            World.add(world,constra);
            }

            // Adding the particle to the previous
            prev1 = p1;
          }

          // Displaying the wall's design
          var X=100;
          var Y=240;
          var Z=20;
          for(var i=1;i<=144;i++){
            if(i%16 == 0){

              var rectangle1 = new Rectangle1(X,Y,Z,Z);
              rectangle.push(rectangle1);
              X= 100;
              Y = Y + 40;
            }else{                     
              var rectangle1 = new Rectangle1(X,Y,Z,Z);
              rectangle.push(rectangle1);
              X= X+40;
            }
      
          }

          // Creating the castlepillars
          castlepillar1 = new Castlepillar(55,320,50,500);
          castlepillar2 = new Castlepillar(745,320,50,500);

          // Creating a wall
          wall = new Wall(400,395,640,350);

          // Creatiing the gates
          gate1 = new Gate(350,470,100,200);
          gate2 = new Gate(450,470,100,200);

          var A=325;
          var B=400;
          var C=20;
          for(var a=1;a<=16;a++){
            if(a%4 == 0){

              var design1 = new Rectangle(A,B,C,C);
              design.push(design1);
              A= 325;
              B = B + 45;
            }else{                     
              var design1 = new Rectangle(A,B,C,C);
              design.push(design1);
              A= A+50;
            }
      
          }

          var D=100;
          var E=180;
          var F=40;
          var G = 80;
          for(var b=1;b<=16;b++){
            if(b%2 == 0){

              var part1 = new Rectangle2(D,E,F,G);
              part.push(part1);
              D = D + 40;
              E = E + 20;
              G = G - 40;
            }else{                     
              var part1 = new Rectangle2(D,E,F,G);
              part.push(part1);
              D = D + 40;
              E = E - 20;
              G = G + 40;
            }
      
          }
}



// Main part of the function called
function draw(){

          // Colouring the background
          background("rgb(100,200,255)");

          // Updating the engine
          Engine.update(engine);
          
          // Displaying a text
          textSize(20);
          textFont("Algerian");
          text("You can also click on the circles to drag them.",120,100);

          // Displaying the paricles
          for(var j = 0; j < particles.length; j++) {
            particles[j].show();
          }  

          // Drawing a line between the mouse and the particle which is clicked 
          if(mConstraint.body) {
              var pos = mConstraint.body.position;
              var offset = mConstraint.constraint.pointB;
              var m = mConstraint.mouse.position;
              line(pos.x + offset.x,pos.y + offset.y,m.x,m.y)
          }

          // Displaying the ground
          ground.display();

          // Creating the coness
          cone1 = triangle(0,70,55,5,110,70);
          cone2 = triangle(690,70,745,5,800,70);
          // Fillng the colour red to the cone
          fill("red");

          // Adding the cones to the world
          World.add(world,cone1);
          World.add(world,cone2);
              
          // Displaying the castle pillar
          castlepillar1.display();
          castlepillar2.display();

          // Displaying the wall
          wall.display();

          for(var x = 0; x < rectangle.length; x++) {
            rectangle[x].display();
          }

          for(var z = 0; z < part.length; z++) {
            part[z].display();
          }

          strokeWeight(2);          

          // Creating different lines
          line1 = line(30,70,80,120);
          line2 = line(80,120,30,170);
          line3 = line(30,170,80,220);
          line4 = line(80,220,30,270);
          line5 = line(30,270,80,320);
          line6 = line(80,320,30,370);
          line7 = line(30,370,80,420);
          line8 = line(80,420,30,470);
          line9 = line(30,470,80,520);
          line10 = line(80,520,30,570);
          line11 = line(80,70,30,120);
          line12 = line(30,120,80,170);
          line13 = line(80,170,30,220);
          line14 = line(30,220,80,270);
          line15 = line(80,270,30,320);
          line16 = line(30,320,80,370);
          line17 = line(80,370,30,420);
          line18 = line(30,420,80,470);
          line19 = line(80,470,30,520);
          line20 = line(30,520,80,570);
          line21 = line(770,70,720,120);
          line22 = line(720,120,770,170);
          line23 = line(770,170,720,220);
          line24 = line(720,220,770,270);
          line25 = line(770,270,720,320);
          line26 = line(720,320,770,370);
          line27 = line(770,370,720,420);
          line28 = line(720,420,770,470);
          line29 = line(770,470,720,520);
          line30 = line(720,520,770,570);
          line31 = line(720,70,770,120);
          line32 = line(770,120,720,170);
          line33 = line(720,170,770,220);
          line34 = line(770,220,720,270);
          line35 = line(720,270,770,320);
          line36 = line(770,320,720,370);
          line37 = line(720,370,770,420);
          line38 = line(770,420,720,470);
          line39 = line(720,470,770,520);
          line40 = line(770,520,720,570);
          line41 = line(55,70,55,570);
          line42 = line(745,70,745,570);

          // Creating the wall lines
          wallline1 = line(120,220,120,570);
          wallline2 = line(160,220,160,570);
          wallline3 = line(200,220,200,570);
          wallline4 = line(240,220,240,570);
          wallline5 = line(280,220,280,570);
          wallline6 = line(320,220,320,570);
          wallline7 = line(360,220,360,570);
          wallline8 = line(400,220,400,570);
          wallline9 = line(440,220,440,570);
          wallline10 = line(480,220,480,570);
          wallline11 = line(520,220,520,570);
          wallline12 = line(560,220,560,570);
          wallline13 = line(600,220,600,570);
          wallline14 = line(640,220,640,570);
          wallline15 = line(680,220,680,570);
          wallline16 = line(80,260,720,260);
          wallline17 = line(80,300,720,300);
          wallline18 = line(80,340,720,340);
          wallline19 = line(80,380,720,380);
          wallline20 = line(80,420,720,420);
          wallline21 = line(80,460,720,460);
          wallline22 = line(80,500,720,500);
          wallline23 = line(80,540,720,540);

          // Displaying the gate
          gate1.display();
          gate2.display();

          // Creating the gate lines 
          gateline1 = line(325,370,325,570);
          gateline2 = line(375,370,375,570);
          gateline3 = line(425,370,425,570);
          gateline4 = line(475,370,475,570);
          gateline5 = line(300,400,500,400);
          gateline6 = line(300,445,500,445);
          gateline7 = line(300,490,500,490);
          gateline8 = line(300,535,500,535);

          for(var y = 0; y < design.length; y++) {
            design[y].display();
          }
}
