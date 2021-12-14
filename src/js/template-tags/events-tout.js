import eqjs from 'eq.js'

const eventsTout = document.querySelectorAll('.events-tout')

if (eventsTout[0]) {
	eventsTout.forEach(tout => {
		eqjs.definePts(tout, {
			large: 538
		})
	})
}
