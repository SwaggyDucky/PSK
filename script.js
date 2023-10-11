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
    $(window).scroll(function(){
      var winTop = $(window).scrollTop();
      if(winTop >= 30){
        $("body").addClass("sticky-header");
      }else{
        $("body").removeClass("sticky-header");
      }//if-else
    });//win func.
  });//ready func.