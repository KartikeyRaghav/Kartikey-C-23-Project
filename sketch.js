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
var design1,design2,design3,design4,design5,design6,design7,design8,
design9,design10,design11,design12,design13,design14,design15,design16;
var wallline1,wallline2,wallline3,wallline4,wallline5,wallline6,wallline7,wallline8,wallline9,wallline10,
wallline11,wallline12,wallline13,wallline14,wallline15,wallline16,wallline17,wallline18,wallline19,wallline20,
walline21,wallline22,wallline23;
var d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,d18,d19,d20,d21,d22,d23,d24,d25,d26,d27,d28,d29,
d30,d31,d32,d33,d34,d35,d36,d37,d38,d39,d40,d41,d42,d43,d44,d45,d46,d47,d48,d49,d50,d51,d52,d53,d54,d55,d56,
d57,d58,d59,d60,d61,d62,d64,d65,d66,d67,d68,d69,d70,d71,d72,d73,d74,d75,d76,d77,d78,d79,d80,d81,d82,d83,d84,
d85,d86,d87,d88,d89,d90,d91,d92,d93,d94,d95,d96,d97,d98,d99,d100,d101,d102,d103,d104,d105,d106,d107,d108,d109,
d110,d111,d112,d113,d114,d115,d116,d117,d118,d119,d120,d121,d122,d123,d124;
var part1,part2,part3,part4,part15,part6,part7,part8,part9,part10,part11,part12,part13,part14,part15,part16;
var gateline1,gateline2,gateline3,gateline4,gateline5,gateline6,gateline7,gateline8,gateline9,gateline10;    
var p,p1;

// Creating an array of particles   
var particles = [];  
var particles1 = [];
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

          // Creating the castlepillars
          castlepillar1 = new Castlepillar(55,320,50,500);
          castlepillar2 = new Castlepillar(745,320,50,500);

          // Creating a wall
          wall = new Wall(400,395,640,350);

          // Creatiing the gates
          gate1 = new Gate(350,470,100,200);
          gate2 = new Gate(450,470,100,200);

          // Adding design to the wall
          d1 = new Rectangle1(100,240,20,20);
          d2 = new Rectangle1(140,240,20,20);
          d3 = new Rectangle1(180,240,20,20);
          d4 = new Rectangle1(220,240,20,20);
          d5 = new Rectangle1(260,240,20,20);
          d6 = new Rectangle1(300,240,20,20);
          d7 = new Rectangle1(340,240,20,20);
          d8 = new Rectangle1(380,240,20,20);
          d9 = new Rectangle1(420,240,20,20);
          d10 = new Rectangle1(460,240,20,20);
          d11 = new Rectangle1(500,240,20,20);
          d12 = new Rectangle1(540,240,20,20);
          d13 = new Rectangle1(580,240,20,20);
          d14 = new Rectangle1(620,240,20,20);
          d15 = new Rectangle1(660,240,20,20);
          d16 = new Rectangle1(700,240,20,20);
          d17 = new Rectangle1(100,280,20,20);
          d18 = new Rectangle1(140,280,20,20);
          d19 = new Rectangle1(180,280,20,20);
          d20 = new Rectangle1(220,280,20,20);
          d21 = new Rectangle1(260,280,20,20);
          d22 = new Rectangle1(300,280,20,20);
          d23 = new Rectangle1(340,280,20,20);
          d24 = new Rectangle1(380,280,20,20);
          d25 = new Rectangle1(420,280,20,20);
          d26 = new Rectangle1(460,280,20,20);
          d27 = new Rectangle1(500,280,20,20);
          d28 = new Rectangle1(540,280,20,20);
          d29 = new Rectangle1(580,280,20,20);
          d30 = new Rectangle1(620,280,20,20);
          d31 = new Rectangle1(660,280,20,20);
          d32 = new Rectangle1(700,280,20,20);
          d33 = new Rectangle1(100,320,20,20);
          d34 = new Rectangle1(140,320,20,20);
          d35 = new Rectangle1(180,320,20,20);
          d36 = new Rectangle1(220,320,20,20);
          d37 = new Rectangle1(260,320,20,20);
          d38 = new Rectangle1(300,320,20,20);
          d39 = new Rectangle1(340,320,20,20);
          d40 = new Rectangle1(380,320,20,20);
          d41 = new Rectangle1(420,320,20,20);
          d42 = new Rectangle1(460,320,20,20);
          d43 = new Rectangle1(500,320,20,20);
          d44 = new Rectangle1(540,320,20,20);
          d45 = new Rectangle1(580,320,20,20);
          d46 = new Rectangle1(620,320,20,20);
          d47 = new Rectangle1(660,320,20,20);
          d48 = new Rectangle1(700,320,20,20);
          d49 = new Rectangle1(100,360,20,20);
          d50 = new Rectangle1(140,360,20,20);
          d51 = new Rectangle1(180,360,20,20);
          d52 = new Rectangle1(220,360,20,20);
          d53 = new Rectangle1(260,360,20,20);
          d54 = new Rectangle1(300,360,20,20);
          d55 = new Rectangle1(340,360,20,20);
          d56 = new Rectangle1(380,360,20,20);
          d57 = new Rectangle1(420,360,20,20);
          d58 = new Rectangle1(460,360,20,20);
          d59 = new Rectangle1(500,360,20,20);
          d60 = new Rectangle1(540,360,20,20);
          d61 = new Rectangle1(580,360,20,20);
          d62 = new Rectangle1(620,360,20,20);
          d63 = new Rectangle1(660,360,20,20);
          d64 = new Rectangle1(700,360,20,20);
          d65 = new Rectangle1(100,400,20,20);
          d66 = new Rectangle1(140,400,20,20);
          d67 = new Rectangle1(180,400,20,20);
          d68 = new Rectangle1(220,400,20,20);
          d69 = new Rectangle1(260,400,20,20);
          d70 = new Rectangle1(300,400,20,20);
          d71 = new Rectangle1(500,400,20,20);
          d72 = new Rectangle1(540,400,20,20);
          d73 = new Rectangle1(580,400,20,20);
          d74 = new Rectangle1(620,400,20,20);
          d75 = new Rectangle1(660,400,20,20);
          d76 = new Rectangle1(700,400,20,20);
          d77 = new Rectangle1(100,440,20,20);
          d78 = new Rectangle1(140,440,20,20);
          d79 = new Rectangle1(180,440,20,20);
          d80 = new Rectangle1(220,440,20,20);
          d81 = new Rectangle1(260,440,20,20);
          d82 = new Rectangle1(300,440,20,20);
          d83 = new Rectangle1(500,440,20,20);
          d84 = new Rectangle1(540,440,20,20);
          d85 = new Rectangle1(580,440,20,20);
          d86 = new Rectangle1(620,440,20,20);
          d87 = new Rectangle1(660,440,20,20);
          d88 = new Rectangle1(700,440,20,20);
          d89 = new Rectangle1(100,480,20,20);
          d90 = new Rectangle1(140,480,20,20);
          d91 = new Rectangle1(180,480,20,20);
          d92 = new Rectangle1(220,480,20,20);
          d93 = new Rectangle1(260,480,20,20);
          d94 = new Rectangle1(300,480,20,20);
          d95 = new Rectangle1(500,480,20,20);
          d96 = new Rectangle1(540,480,20,20);
          d97 = new Rectangle1(580,480,20,20);
          d98 = new Rectangle1(620,480,20,20);
          d99 = new Rectangle1(660,480,20,20);
          d100 = new Rectangle1(700,480,20,20);
          d101 = new Rectangle1(100,520,20,20);
          d102 = new Rectangle1(140,520,20,20);
          d103 = new Rectangle1(180,520,20,20);
          d104 = new Rectangle1(220,520,20,20);
          d105 = new Rectangle1(260,520,20,20);
          d106 = new Rectangle1(300,520,20,20);
          d107 = new Rectangle1(500,520,20,20);
          d108 = new Rectangle1(540,520,20,20);
          d109 = new Rectangle1(580,520,20,20);
          d110 = new Rectangle1(620,520,20,20);
          d111 = new Rectangle1(660,520,20,20);
          d112 = new Rectangle1(700,520,20,20);
          d113 = new Rectangle1(100,555,20,10);
          d114 = new Rectangle1(140,555,20,10);
          d115 = new Rectangle1(180,555,20,10);
          d116 = new Rectangle1(220,555,20,10);
          d117 = new Rectangle1(260,555,20,10);
          d118 = new Rectangle1(300,555,20,10);
          d119 = new Rectangle1(500,555,20,10);
          d120 = new Rectangle1(540,555,20,10);
          d121 = new Rectangle1(580,555,20,10);
          d122 = new Rectangle1(620,555,20,10);
          d123 = new Rectangle1(660,555,20,10);
          d124 = new Rectangle1(700,555,20,10);

          // Adding design to the gates
          design1 = new Rectangle(325,400,20,20);
          design2 = new Rectangle(325,445,20,20);
          design3 = new Rectangle(325,490,20,20);
          design4 = new Rectangle(325,535,20,20);
          design5 = new Rectangle(375,400,20,20);
          design6 = new Rectangle(375,445,20,20);
          design7 = new Rectangle(375,490,20,20);
          design8 = new Rectangle(375,535,20,20);
          design9 = new Rectangle(425,400,20,20);
          design10 = new Rectangle(425,445,20,20);
          design11 = new Rectangle(425,490,20,20);
          design12 = new Rectangle(425,535,20,20);
          design13 = new Rectangle(475,400,20,20);
          design14 = new Rectangle(475,445,20,20);
          design15 = new Rectangle(475,490,20,20);
          design16 = new Rectangle(475,535,20,20); 

          // Adding the upper walls
          part1 = new Rectangle2(100,160,40,120);
          part2 = new Rectangle2(140,180,40,80);
          part3 = new Rectangle2(180,160,40,120);
          part4 = new Rectangle2(220,180,40,80);
          part5 = new Rectangle2(260,160,40,120);
          part6 = new Rectangle2(300,180,40,80);
          part7 = new Rectangle2(340,160,40,120);
          part8 = new Rectangle2(380,180,40,80);
          part9 = new Rectangle2(420,160,40,120);
          part10 = new Rectangle2(460,180,40,80);
          part11 = new Rectangle2(500,160,40,120);
          part12 = new Rectangle2(540,180,40,80);
          part13 = new Rectangle2(580,160,40,120);
          part14 = new Rectangle2(620,180,40,80);
          part15 = new Rectangle2(660,160,40,120);
          part16 = new Rectangle2(700,180,40,80);

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

          // Displaying the wall's design
          d1.display();
          d2.display();
          d3.display();
          d4.display();
          d5.display();
          d6.display();
          d7.display();
          d8.display();
          d9.display();
          d10.display();
          d11.display();
          d12.display();
          d13.display();
          d14.display();
          d15.display();
          d16.display();
          d17.display();
          d18.display();
          d19.display();
          d20.display();
          d21.display();
          d22.display();
          d23.display();
          d24.display();
          d25.display();
          d26.display();
          d27.display();
          d28.display();
          d29.display();
          d30.display();
          d31.display();
          d32.display();
          d33.display();
          d34.display();
          d35.display();
          d36.display();
          d37.display();
          d38.display();
          d39.display();
          d40.display();
          d41.display();
          d42.display();
          d43.display();
          d44.display();
          d45.display();
          d46.display();
          d47.display();
          d48.display();
          d49.display();
          d50.display();
          d51.display();
          d52.display();
          d53.display();
          d54.display();
          d55.display();
          d56.display();
          d57.display();
          d58.display();
          d59.display();
          d60.display();
          d61.display();
          d62.display();
          d63.display();
          d64.display();
          d65.display();
          d66.display();
          d67.display();
          d68.display();
          d69.display();
          d70.display();
          d71.display();
          d72.display();
          d73.display();
          d74.display();
          d75.display();
          d76.display();
          d77.display();
          d78.display();
          d79.display();
          d80.display();
          d81.display();
          d82.display();
          d83.display();
          d84.display();
          d85.display();
          d86.display();
          d87.display();
          d88.display();
          d89.display();
          d90.display();
          d91.display();
          d92.display();
          d93.display();
          d94.display();
          d95.display();
          d96.display();
          d97.display();
          d98.display();
          d99.display();
          d100.display();
          d101.display();
          d102.display();
          d103.display();
          d104.display();
          d105.display();
          d106.display();
          d107.display();
          d108.display();
          d109.display();
          d110.display();
          d111.display();
          d112.display();
          d113.display();
          d114.display();
          d115.display();
          d116.display();
          d117.display();
          d118.display();
          d119.display();
          d120.display();
          d121.display();
          d122.display();
          d123.display();
          d124.display();

          // Displaying the upper part of the wall
          part1.display();
          part2.display();
          part3.display();
          part4.display();
          part5.display();
          part6.display();
          part7.display();
          part8.display();
          part9.display();
          part10.display();
          part11.display();
          part12.display();
          part13.display();
          part14.display();
          part15.display();
          part16.display();

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

          // Displaying the the gate's design
          design1.display();
          design2.display();
          design3.display();
          design4.display();
          design5.display();
          design6.display();
          design7.display();
          design8.display();
          design9.display();
          design10.display();
          design11.display();
          design12.display();
          design13.display();
          design14.display();
          design15.display();
          design16.display();
}
