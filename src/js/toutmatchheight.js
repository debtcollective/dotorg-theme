import MatchHeight from '@tannerhodges/match-height'

if( window ) {
  window.addEventListener('DOMContentLoaded', function() {
    // touts really should only live in columns (and if they arent, they shouldnt matchheight with anything)
    const cols = document.querySelectorAll('.wp-block-columns')
    cols.forEach( function(col,i){
      const touts = col.querySelectorAll('.tout')
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
    toutMatchHeight()
    window.onResize = toutMatchHeight()
  })
}

function toutMatchHeight() {
  console.log('toutMatchHeight')
  const cols = document.querySelectorAll('.wp-block-columns')
  cols.forEach( function(col){
    const touts = col.querySelectorAll('.tout')
    const wrapper = col.querySelectorAll('.content__wrapper')
    const content = col.querySelectorAll('.tout__content')
    if (touts.length > 1) {
      MatchHeight.add(touts)
      MatchHeight.add(wrapper)
      MatchHeight.add(content)
    }
  })
}

const isMHLoaded = (MatchHeight)? true : false
