// Creating a castlepillar class
class Castlepillar {

                // Creating the constructor
                constructor(x,y,width,height) {
            
                // Adding properties to the constructor
                var options = {
                    isStatic:true
                }
            
                // Creating the rectangle
                this.body = Bodies.rectangle(x, y, width, height, options);

                // Keeping the track of width and height
                this.width = width;
                this.height = height;
                
                // Adding the body to the world
                World.add(world, this.body);
                }
            
                // Creating a display function
                display(){

                // Adding the body's position to a variable
                var pos =this.body.position;

                // Using the push and pop function
                push();

                // Filling purple colour to the pillar 
                fill("purple");

                // Making the rect mode as center
                rectMode(CENTER);

                // Creating a rectangle at the given position
                rect(pos.x,pos.y,this.width,this.height);

                pop();
                }
}

// Creating a Gate class
class Gate {

                // Creating the constructor
                constructor(x,y,width,height) {
            
                // Adding properties to the constructor
                var options = {
                    isStatic:true
                }
            
                // Creating the rectangle
                this.body = Bodies.rectangle(x, y, width, height, options);

                // Keeping the track of width and height
                this.width = width;
                this.height = height;
                
                // Adding the body to the world
                World.add(world, this.body);
                }
            
                // Creating a display function
                display(){

                // Adding the body's position to a variable
                var pos =this.body.position;

                // Using the push and pop function
                push();

                // Filling purple colour to the pillar 
                fill("brown");

                // Making the rect mode as center
                rectMode(CENTER);

                // Creating a rectangle at the given position
                rect(pos.x,pos.y,this.width,this.height);
                
                pop();
                }
}

// Creating a ground class
class Ground {

                // Creating the constructor
                constructor(x,y,width,height) {
                
                // Adding properties to the constructor
                var options = {
                    isStatic:true
                }
                
                // Creating the rectangle
                this.body = Bodies.rectangle(x, y, width, height, options);

                // Keeping the track of width and height
                this.width = width;
                this.height = height;
                    
                // Adding the body to the world
                World.add(world, this.body);
                }
                
                // Creating a display function
                display(){

                // Adding the body's position to a variable
                var pos =this.body.position;

                // Using the push and pop function
                push();

                // Filling purple colour to the pillar 
                fill("grey");

                // Making the rect mode as center
                rectMode(CENTER);

                // Creating a rectangle at the given position
                rect(pos.x,pos.y,this.width,this.height);
                    
                pop();
                }
}

// Creating a wall class
class Wall {

                // Creating the constructor
                constructor(x,y,width,height) {
            
                // Adding properties to the constructor
                var options = {
                    isStatic:true
                }
            
                // Creating the rectangle
                this.body = Bodies.rectangle(x, y, width, height, options);

                // Keeping the track of width and height
                this.width = width;
                this.height = height;
                
                // Adding the body to the world
                World.add(world, this.body);
                }
            
                // Creating a display function
                display(){

                // Adding the body's position to a variable
                var pos =this.body.position;

                // Using the push and pop function
                push();

                // Filling purple colour to the pillar 
                fill("green");

                // Making the rect mode as center
                rectMode(CENTER);

                // Creating a rectangle at the given position
                rect(pos.x,pos.y,this.width,this.height);
                
                pop();
                }
}

// Creating a rectangle class
class Rectangle {

                // Creating the constructor
                constructor(x,y,width,height) {
            
                // Adding properties to the constructor
                var options = {
                    isStatic:true
                }
            
                // Creating the rectangle
                this.body = Bodies.rectangle(x, y, width, height, options);

                // Keeping the track of width and height
                this.width = width;
                this.height = height;
                
                // Adding the body to the world
                World.add(world, this.body);
                }
            
                // Creating a display function
                display(){

                // Adding the body's position to a variable
                var pos =this.body.position;

                // Using the push and pop function
                push();

                // Filling purple colour to the pillar 
                fill("black");

                // Making the rect mode as center
                rectMode(CENTER);

                // Creating a rectangle at the given position
                rect(pos.x,pos.y,this.width,this.height);
                
                pop();
                }
}

// Creating a rectangle1 class
class Rectangle1 {

                // Creating the constructor
                constructor(x,y,width,height) {
            
                // Adding properties to the constructor
                var options = {
                    isStatic:true
                }
            
                // Creating the rectangle
                this.body = Bodies.rectangle(x, y, width, height, options);

                // Keeping the track of width and height
                this.width = width;
                this.height = height;
                
                // Adding the body to the world
                World.add(world, this.body);
                }
            
                // Creating a display function
                display(){

                // Adding the body's position to a variable
                var pos =this.body.position;

                // Using the push and pop function
                push();

                // Filling purple colour to the pillar 
                fill("gold");

                // Making the rect mode as center
                rectMode(CENTER);

                // Creating a rectangle at the given position
                rect(pos.x,pos.y,this.width,this.height);
                
                pop();
                }
}

// Creating a rectangle2 class
class Rectangle2 {

                // Creating the constructor
                constructor(x,y,width,height) {
                
                // Adding properties to the constructor
                var options = {
                    isStatic:true
                }
                
                // Creating the rectangle
                this.body = Bodies.rectangle(x, y, width, height, options);

                // Keeping the track of width and height
                this.width = width;
                this.height = height;
                    
                // Adding the body to the world
                World.add(world, this.body);
                }
                
                // Creating a display function
                display(){

                // Adding the body's position to a variable
                var pos =this.body.position;

                // Using the push and pop function
                push();

                // Filling purple colour to the pillar 
                fill("grey");

                // Making the rect mode as center
                rectMode(CENTER);

                // Creating a rectangle at the given position
                rect(pos.x,pos.y,this.width,this.height);
                    
                pop();
                }
}