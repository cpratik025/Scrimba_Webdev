var i = 0
var j = 0
var k = 0
var name = 'Pratik Chorsiya'; /* The text to type */
var position = 'Full Stack Developer/DevOps Engineer'; /* The text to type */
var project = 'Working Projects'; /* The text to type */
 
var speed = 1000; /* Speed in milliseconds */

  function typeWriter() {
    if (i < name.length) {
      document.getElementById("name").innerHTML += name.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
    if (j < position.length) {
      document.getElementById("position").innerHTML += position.charAt(j);
      j++;
      setTimeout(typeWriter, speed);
    }
    if (k < project.length) {
      document.getElementById("project").innerHTML += project.charAt(k);
      k++;
      setTimeout(typeWriter, speed);
    }
  }

  // Start the animation
  typeWriter();
