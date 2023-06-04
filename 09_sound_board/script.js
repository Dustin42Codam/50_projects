const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach((sound) => {
  const button = document.createElement('button')

  button.classList.add('btn')

  button.innerText = sound

  button.addEventListener('click', () => {
    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(button)
})
