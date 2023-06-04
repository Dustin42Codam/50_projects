const labels = document.querySelectorAll('.form-control label')
console.log('🚀 ~ file: script.js:2 ~ labels:', labels)

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, index) => `<span
	style="transition-delay:${index * 50}ms">${letter}</span>`
    )
    .join('')
})
