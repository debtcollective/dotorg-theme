const checkboxes = document.querySelectorAll(`.wpcf7-list-item input[type="checkbox"]`)
const radioGroups = document.querySelectorAll(`.wpcf7-radio`)

if (radioGroups) {
	radioGroups.forEach(rGroup => {
		const radioInputs = rGroup.querySelectorAll(`input[type="radio"]`)
		rGroup.addEventListener('change', () => {
			const currentlyChecked = rGroup.querySelectorAll('.checked')
			if (currentlyChecked[0]) {
				currentlyChecked[0].classList.toggle('checked')
			}

			radioInputs.forEach(rInput => {
				if (rInput.checked) {
					if (rInput.parentElement.tagName === 'LABEL') {
						rInput.parentElement.parentElement.classList.toggle('checked')
					} else {
						rInput.parentElement.classList.toggle('checked')
					}
				}
			})
		})
	})
}

if (checkboxes) {
	checkboxes.forEach(c => {
		c.addEventListener('change', () => {
			if (c.parentElement.tagName === 'LABEL') {
				c.parentElement.parentElement.classList.toggle('checked')
			} else {
				c.parentElement.classList.toggle('checked')
			}
		})
	})
}
