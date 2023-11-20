function checkPassword() {
  var passwordEntered = document.getElementById("password").value;
  var correctPassword = "yourPassword"; // Replace with your password

  if (passwordEntered === correctPassword || 1===1) {
      sessionStorage.setItem("isLoggedIn", "true"); // Set flag in sessionStorage
      document.getElementById("login").style.display = "none";
      document.getElementById("content").style.display = "block";
  } else {
      alert("Incorrect password!");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let images = document.querySelectorAll('.image-container img');
  let currentIndex = 0;
  let imageDisplayDuration = 2000; // Duration each image is displayed, in milliseconds

  function showNextImage() {
      if (currentIndex > 0) {
          images[currentIndex - 1].style.display = 'none'; // Hide previous image
      }
      if (currentIndex < images.length) {
          images[currentIndex].style.display = 'block'; // Show current image
          currentIndex++;
          setTimeout(showNextImage, imageDisplayDuration);
      } else {
          document.querySelector('.image-container').style.display = 'none';
          document.querySelector('.contents').style.display = 'block';
      }
  }

  showNextImage();
});

window.onload = function() {
  if (sessionStorage.getItem("isLoggedIn") === "true") {
      document.getElementById("login").style.display = "none";
      document.getElementById("content").style.display = "block";
  }
};

document.getElementById('cta-button').addEventListener('click', function() {
    var modal = document.getElementById('modal');
    modal.style.display = "block";
});

document.querySelector('.close-btn').addEventListener('click', function() {
    var modal = document.getElementById('modal');
    modal.style.display = "none";
});

// Close the modal if anywhere outside of the modal content is clicked
window.addEventListener('click', function(event) {
    var modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
});

$(function(){
  var previousScroll = 0;
  $(window).scroll(function(){
    var currentScroll = $(this).scrollTop();
    if(currentScroll >= previousScroll+5){
      $("body").addClass("sticky-header");
    }else if (previousScroll - currentScroll > 5){
      $("body").removeClass("sticky-header");
    }
    previousScroll = currentScroll;
  });
});


/*$(function(){
    var previousScroll = 0;
    $(window).scroll(function(){
      var winTop = $(window).scrollTop();
      if(winTop >= 30){
        $("body").addClass("sticky-header");
      }else{
        $("body").removeClass("sticky-header");
      }//if-else
    });//win func.
  });//ready func.
  */