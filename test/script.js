document.addEventListener('DOMContentLoaded', function() {

    var foo = new Selectables({
      elements: 'a',
      selectedClass: 'active',
      zone: '#zone1'
    });
  
  
    var bar = new Selectables({
      elements: 'a',
      selectedClass: 'active',
      zone: '#zone2',
      key: 'altKey',
      start: function(e) {
        if (!e.altKey) {
          document.getElementById('alt').style.fontWeight = 'bold';
          setTimeout(function() {
            document.getElementById('alt').style.fontWeight = ''
          }, 2000);
        }
      }
    });
  });
  