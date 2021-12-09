import eqjs from 'eq.js'

const eventsTout = document.querySelectorAll('.events-tout')

if (eventsTout[0]) {
	console.log('this is events-tout', eventsTout)
	eventsTout.forEach(tout => {
		eqjs.definePts(tout, {
			large: 538
		})
	})
}
