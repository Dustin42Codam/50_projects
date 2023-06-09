const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateCup()

smallCups.forEach((cup, index) => {
  cup.addEventListener('click', () => {
    highlightCups(index)
  })
})

function highlightCups(targetIndex) {
  if (
    (smallCups[targetIndex].classList.contains('full') &&
      smallCups[targetIndex].nextElementSibling &&
      !smallCups[targetIndex].nextElementSibling.classList.contains('full')) ||
    (targetIndex === smallCups.length - 1 &&
      smallCups[targetIndex].classList.contains('full'))
  ) {
    console.log('true')
    targetIndex--
  }

  smallCups.forEach((cup, index) => {
    if (index <= targetIndex) {
      cup.classList.add('full')
    } else {
      cup.classList.remove('full')
    }
  })
  updateCup()
}

function updateCup() {
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

  if (fullCups === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${(fullCups / totalCups) * 330}px`
    percentage.innerText = `${(fullCups / totalCups) * 100}%`
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    remained.style.text = 'Remained'
    liters.innerText = `${2 - (250 * fullCups) / 1000}L`
  }
}
