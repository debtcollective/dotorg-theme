import eqjs from 'eq.js'

const touts = document.querySelectorAll('.wp-block-column .tout')
if (touts[0]) {
	touts.forEach(tout => {
		if (tout.classList.contains('event-tout')) return
		eqjs.definePts(tout, {
			large: 240
		})
	})
}
