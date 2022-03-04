import MatchHeight from '@tannerhodges/match-height'

const groupSelector = '.wp-block-group'

if( window ) {
  window.addEventListener('DOMContentLoaded', function() {
    // touts really should only live in columns (and if they arent, they shouldnt matchheight with anything)
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
        } else {
          //@Todo: Accomodate non-link-tout height matching.
        }
      })
    })
    setTimeout(toutMatchHeight, 200)
    window.onResize = toutMatchHeight()
  })
}

function toutMatchHeight() {
  const groups = document.querySelectorAll(groupSelector)
  groups.forEach( function(grp,i){
    const touts = grp.querySelectorAll('.tout')
    if (touts.length < 2) return;
    const wrapper = grp.querySelectorAll('.content__wrapper')
    const content = grp.querySelectorAll('.tout__content')
    if (touts.length > 1 ) {
      if (grp.dataSet.matchHeightInitialized == true) {
        MatchHeight.add(wrapper)
        MatchHeight.add(touts)
        grp.dataSet.matchHeightInitialized = true;
      } else {
        MatchHeight.update(wrapper)
        MatchHeight.update(touts)
      }
    }
  })
}

const isMHLoaded = (MatchHeight)? true : false
