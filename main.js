'use strict'

const DomElement = function(selector, height, width, bg, fontSize) {
  this.selector = selector,
  this.height = height,
  this.width = width,
  this.bg = bg,
  this.fontSize = fontSize
  
  this.createElem = function() {
    if (selector[0] === '.') {
      let elem = document.createElement('div')
      elem.className = this.selector.slice(1)
      elem.textContent = prompt('Введите текст для дива')

      elem.style.cssText = `
      height: ${this.height}px;
      width: ${this.width}px;
      font-size: ${this.fontSize}px;
      background: ${this.bg};
      margin-bottom: 40px;
      `
      document.body.appendChild(elem);
    }  else if (selector[0] === '#') {
      let elem = document.createElement('p')
      elem.id = this.selector.slice(1)
      elem.textContent = prompt('Введите текст для параграфа')

      elem.style.cssText = `
      height: ${this.height}px;
      width: ${this.width}px;
      font-size: ${this.fontSize}px;
      background: ${this.bg};
      margin-bottom: 40px;
      `
      document.body.appendChild(elem);
    }
  }
}

const newDomElementDiv = new DomElement('.block', '50', '400', 'white', 16)
const newDomElementParagraph = new DomElement('#best', 'auto', '300', 'red', 18)

newDomElementDiv.createElem()
newDomElementParagraph.createElem()













