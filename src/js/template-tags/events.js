function mutate(s) {
  return function splice() {
    let a = s.split('');
    Array.prototype.splice.apply(a, arguments);
    return a.join('');
  };
}

if( window ) {
  window.addEventListener('DOMContentLoaded', function() {
    var dates = document.querySelectorAll('.wp-block-wp-action-network-events-event-query .event__date time')
    dates.forEach( function(aDate) {
      const dateString = aDate.textContent
      if ( dateString.indexOf(',') == 3) {
        aDate.innerHTML = mutate(dateString)(4,0,'<br>')
      }
    })
  })
}
