document.addEventListener('keydown', function(event) {
    var key = String.fromCharCode(event.keyCode).toUpperCase();
    if (/^[A-Z]$/.test(key)) {
      alert('You pressed the ' + key );
    }
  });