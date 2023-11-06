document.getElementById('merchbox').addEventListener('click', function() {
    var modal = document.getElementById('form');
    modal.style.display = "block";
});

document.querySelector('.close-btn').addEventListener('click', function() {
    var modal = document.getElementById('form');
    modal.style.display = "none";
});

window.addEventListener('click', function(event) {
    var modal = document.getElementById('form');
    if (event.target == modal) {
        modal.style.display = "none";
    }
});