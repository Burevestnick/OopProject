'use strict'

const DomElement = function(selector) {
  this.selector = selector,
  this.height = 'auto',
  this.width = 'fit-content',
  this.bg = 'white',
  this.fontSize = 26
  // this.text = prompt("enter text")
  
  this.createElem = function() {

    if (selector[0] === '.') {
      let elem = document.createElement('div')
      elem.className = this.selector.slice(1)
      elem.textContent = "Я див!"
      elem.style.cssText = `
      height: ${this.height};
      width: ${this.width};
      font-size: ${this.fontSize}px;
      background: ${this.bg};
      border-radius: 10px;
      padding-left: 50px;
      padding-right: 50px;
      margin-top: 10px;
      `
      
      document.body.appendChild(elem);
    }  else if (selector[0] === '#') {
      let elem = document.createElement('p')
      elem.id = this.selector.slice(1)
      elem.textContent = 'Я строка!'
      elem.style.cssText = `
      height: ${this.height}px;
      width: ${this.width};
      font-size: ${this.fontSize}px;
      background: ${this.bg};
      border-radius: 10px;
      padding-left: 50px;
      padding-right: 50px;
      margin-top: 10px;
      color: rgb(121, 150, 231);
      `
      
      document.body.appendChild(elem);
    }
  }
}

const newDomElement1 = new DomElement('.block')
const newDomElement2 = new DomElement('#best')

newDomElement1.createElem()
newDomElement2.createElem()













