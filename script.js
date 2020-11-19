let paths = document.getElementsByTagName('path')
// TO DO: integrate user selectable color swatches ?  Why not.


let colors = ['#E0ACD5', '#750D37', '#B3DEC1', '#3993DD', '#FCAB64']
let cycles = 0
setInterval(() => {
  for (let i = 0; i < paths.length; i++) {
    let target = paths[i]
    if (i === 25) {
      target.attributes.fill.value = colors[(i + 1 + cycles) % colors.length]
    } else if (i === 21) {
      target.attributes.fill.value = colors[(i + 3 + cycles) % colors.length]
    } else if (target.attributes.fill) {
      target.attributes.fill.value = colors[(i + cycles) % colors.length]
    } else {
      console.log(target)
    }
  }
  cycles++
}, 1500)



// "path walkthrough" - run this and watch the console to see which index number of the paths Array corresponds to which path in the image.  Take notes to
// identify the "important" paths where you want specific overrides

// let i = 0
// let memory = ''

// setInterval(() => {
//   let target = paths[i]
//   let prev = paths[i - 1]
//   if (target.attributes.fill) {
//     memory = target.attributes.fill.value
//     target.attributes.fill.value = colors[0]
//     console.log(i)
//   }
//   if (prev !== undefined && prev.attributes.fill)
//     prev.attributes.fill.value = memory
//   i++

// }, 750)
 