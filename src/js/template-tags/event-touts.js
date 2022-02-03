import eqjs from 'eq.js'


const eventsTout = document.querySelectorAll('.events-tout')
if (eventsTout[0]) {
	eventsTout.forEach(tout => {
		eqjs.definePts(tout, {
			small: 250,
			medium: 540,
			large: 720,
			xl: 1000
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
