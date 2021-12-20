document.addEventListener( 'DOMContentLoaded', function() {
  var cwLinks = document.querySelectorAll('.chatwoot .wp-block-button__link');
  cwLinks.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const wootButton = document.querySelector('button.woot-widget-bubble');
      if (wootButton ) wootButton.click();
    })
  });
});
