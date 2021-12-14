import MatchHeight from '@tannerhodges/match-height'

console.log('hello, from toutmatchheight.js')

if( window ) {
  window.addEventListener('DOMContentLoaded', function() {
    console.log('hi')
    // touts really should only live in columns (and if they arent, they shouldnt matchheight with anything)
    const cols = document.querySelectorAll('.wp-block-columns')
    cols.forEach( function(col,i){
      console.log('col', i)
      let touts = col.querySelectorAll('.tout')
      touts.forEach( function(tout, j) {
        console.log('tout', j)
        // group titles and contents in a wrapper here to get easier less awkward layouts.
        let title = tout.querySelector('.tout__title')
        let content = tout.querySelector('.tout__content')
        let wrapper = document.createElement('div')
        wrapper.classList.add('content__wrapper')
        tout.prepend(wrapper)
        wrapper.append(title)
        wrapper.append(content)

      })
    })
    toutMatchHeight()
    window.onResize = toutMatchHeight()
  })
}

function toutMatchHeight() {
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
