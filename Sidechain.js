// Defining a side chain function
function SideChain(x,y,r,fixed) {

            // Adding properties to the side chain
            var ob= {
                friction:0,
                restitution:0.95,
                isStatic: fixed
            }

            // Creating a circle
            this.body = Bodies.circle(x,y,r,ob);

            // Keeping track of the radius
            this.r = r;

            // Adding the body to the world
            World.add(world,this.body);

            // Creating a show function
            this.show = function() {

                // Adding the body's position to a variable
                var pos = this.body.position;

                // Using the push and pop function
                push();

                // Colouring the circle orange
                fill("orange");

                // Making the ellipse mode as center
                ellipseMode(CENTER);

                // Making the stroke weight as 2
                strokeWeight(2);

                // Creating the ellipse at the given position 
                ellipse(pos.x,pos.y,this.r * 2);

                // Creating a line
                line(pos.x,pos.y,400,1);
                pop();
            }
}
