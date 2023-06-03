const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
  /* calculate position where a box should appear */
  const triggerBottom = (window.innerHeight / 5) * 4

  boxes.forEach((box) => {
    /* get top position of each box element */
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
