import {generator} from './util.js'
import {Scope} from './util.js'

export const keyboard = (audioCtx, element) => {

  const canvas = element.querySelector('canvas')

  const analyser = audioCtx.createAnalyser()

  analyser.connect(audioCtx.destination)

  // draw to canvas
  const scope = new Scope(analyser, canvas)
  const animate = () => {
    requestAnimationFrame(animate)
    scope.render()
  }
  animate()

  const sound = generator(audioCtx, analyser)


  // Math.sin with period of 0..1
  const sin = v => Math.sin(Math.PI * 2 * v)

  const freq = note => 27.5 * Math.pow(2, (note - 21) / 12)

  const harmony = f => t =>
    (sin(f * t) +
    (sin(f * t * 3) / 3) +
    (sin(f * t * 7) / 7))
    * 0.2 * sin(t * 2)

  const preventDefault = fn => e => {
    e.preventDefault()
    fn(e)
  }

  Array.from(element.querySelectorAll('svg rect'))
    .sort((a, b) =>
      parseFloat(a.getAttribute('x')) - parseFloat(b.getAttribute('x'))
    )
    .forEach((key, i) => {
      const s = sound(0.25, harmony(freq(i + 48)))
      key.addEventListener('pointerenter', s)
    })

}
