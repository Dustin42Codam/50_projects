const tagsElement = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()

textarea.addEventListener('keyup', (e) => {
  let len = createTags(e.target.value)

  if (len === 1) {
    textarea.value = textarea.value.replace(/(\r\n|\n|\r)/gm, '')
  }

  if (len > 1) {
    if (document.querySelectorAll('.tag').length && e.key === 'Enter') {
      setTimeout(() => {
        e.target.value = ''
      }, 10)
      randomSelect()
    } else if (e.target.value === '\n' && e.key === 'Enter') {
      textarea.value = ''
    }
  }
})

function createTags(input) {
  const tags = input
    .split(',')
    .filter((tag) => tag.trim() !== '')
    .map((tag) => tag.trim())

  tagsElement.innerHTML = ''

  tags.forEach((tag) => {
    const tagElement = document.createElement('span')
    tagElement.classList.add('tag')
    tagElement.innerText = tag
    tagsElement.appendChild(tagElement)
  })
  return tags.length
}

function randomSelect() {
  const times = 30

  const interval = setInterval(() => {
    const randomTag = pickRandomTag()
    highlightTag(randomTag)
    setTimeout(() => {
      unhighlightTag(randomTag)
    }, 100)
  }, 100)

  setTimeout(() => {
    clearInterval(interval)

    setTimeout(() => {
      const randomTag = pickRandomTag()
      highlightTag(randomTag)
    }, 100)
  }, times * 100)
}

function pickRandomTag() {
  const tags = document.querySelectorAll('.tag')
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
  tag.classList.add('highlight')
}

function unhighlightTag(tag) {
  tag.classList.remove('highlight')
}
