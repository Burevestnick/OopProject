'use strict'

const DomElement = function(selector) {
  this.selector = selector,
  this.height = 100,
  this.width = 100,
  this.bg = 'white',
  this.fontSize = 26,

  this.top = 0,
  this.left = 0,
  this.down = 0,
  this.right = 0,
  
  this.createElem = function() {

    if (selector[0] === '.') {
      let elem = document.createElement('div')
      elem.className = this.selector.slice(1)
      elem.style.cssText = `
      height: ${this.height}px;
      width: ${this.width}px;
      font-size: ${this.fontSize}px;
      background: ${this.bg};
      border-radius: 5px;
      padding-left: 10px;
      margin-top: 10px;
      position: absolute;
      `
      document.body.appendChild(elem);
      
      document.addEventListener('keydown', (event) => {
        if (event.code === 'KeyW') {
          this.top -= 10
          elem.style.top = `${this.top}px`
        } else if (event.code === 'KeyS') {
          this.top += 10
          elem.style.top = `${this.top}px`
        } else if (event.code === 'KeyA') {
          this.left -= 10
          elem.style.left = `${this.left}px`
        } else if (event.code === 'KeyD') {
          this.left += 10
          elem.style.left = `${this.left}px`
        }
      })
    }  else if (selector[0] === '#') {
      let elem = document.createElement('p')
      elem.id = this.selector.slice(1)
      elem.textContent = 'Lorem ipsum dolor sit.'
      elem.style.cssText = `
      height: ${this.height}px;
      width: ${this.width}%;
      font-size: ${this.fontSize}px;
      background: ${this.bg};
      border-radius: 20px;
      padding-left: 10px;
      margin-top: 10px;
      color: rgb(121, 150, 231);
      `

      document.body.appendChild(elem);
    }
  }

}

const newDomElement1 = new DomElement('.block')

newDomElement1.createElem()
console.log(newDomElement1);














