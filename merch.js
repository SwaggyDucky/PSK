document.getElementById('OrderButton').addEventListener('click', function() {
    window.location.href = 'index.html';
  });

  document.querySelector('.imgmerch').addEventListener('mouseover', function() {
    this.src = 'photos/pskShirtBack.jpg';
  });
  
  document.querySelector('.imgmerch').addEventListener('mouseout', function() {
    this.src = 'photos/pskShirtFront.jpg';
  });