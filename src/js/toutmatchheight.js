import MatchHeight from '@tannerhodges/match-height'

const groupSelector = '.wp-block-group'


const matchHeights = function() {
  const groups = document.querySelectorAll(groupSelector)
  groups.forEach( function(grp,i){
    const touts = grp.querySelectorAll('.tout')
    if (touts.length < 2) return;
    touts.forEach( function(tout) {
      // group titles and contents in a wrapper here to get easier less awkward layouts.
      const title = tout.querySelector('.tout__title')
      const content = tout.querySelector('.tout__content')
      const wrapper = document.createElement('div')
      if(tout.classList.contains('link-tout')) {
        const wrappingLink = tout.querySelector('a')
        if(wrappingLink) {
          wrapper.classList.add('content__wrapper')
          wrappingLink.prepend(wrapper)
          wrapper.append(title)
          wrapper.append(content)
        }
      }
    })
    const  wrappers = grp.querySelectorAll('.content__wrapper')
    MatchHeight.add(touts)
    MatchHeight.add(wrappers)
  })
}


if( window ) {
  window.addEventListener('DOMContentLoaded', function() {
    setTimeout(matchHeights, 300);
  })
}
