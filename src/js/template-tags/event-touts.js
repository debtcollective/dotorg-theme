import eqjs from 'eq.js'

const eventsTout = document.querySelectorAll('.events-tout')

if (eventsTout[0]) {
	eventsTout.forEach(tout => {
		eqjs.definePts(tout, {
			large: 538
		})
	})
}

const singleEventTout = document.querySelectorAll('.event-tout')
if (singleEventTout[0]) {
	singleEventTout.forEach(tout => {
		eqjs.definePts(tout, {
			large: 400
		})
	})
}
