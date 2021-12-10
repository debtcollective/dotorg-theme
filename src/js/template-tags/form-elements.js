const radioInputs = document.querySelectorAll(`input[type="radio"]`)
const checkboxes = document.querySelectorAll(`.wpcf7-list-item input[type="checkbox"]`)

if (radioInputs) {
	radioInputs.forEach(r => {
		r.addEventListener('change', () => {
			const checked = document.querySelector('.wpcf7-list-item.checked-radio')
			if (checked)  checked.classList.remove('checked-radio')
			if(r.checked) r.parentElement.classList.add('checked-radio')
		})
	})
}

if (checkboxes) {
	checkboxes.forEach(c => {
		c.addEventListener('change', () => {
			c.parentElement.classList.toggle('checked')
		})
	})
}
