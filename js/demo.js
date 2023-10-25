// Set up Particle Effects when the page is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Initialize the particleground with specific dot and line colors
  particleground(document.getElementById('particles'), {
    dotColor: '#5cbdaa', // Set dot color to a shade of green
    lineColor: '#5cbdaa' // Set line color to the same shade of green
  });
  // Center the intro element vertically on the screen
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);

/*
// jQuery plugin example:
$(document).ready(function() {
  // Initialize the particleground with specific dot and line colors using jQuery
  $('#particles').particleground({
    dotColor: '#5cbdaa', // Set dot color to a shade of green
    lineColor: '#5cbdaa' // Set line color to the same shade of green
  });
  // Center the intro element vertically on the screen using jQuery
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});
*/

