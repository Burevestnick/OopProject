'use strict'

const DomElement = function(selector) {
  this.selector = selector,
  this.height = '',
  this.width = '',
  this.bg = '',
  this.fontSize = 0
  
  this.createElem = function() {
    if (selector[0] === '.') {
      this.height = 'auto',
      this.width = '200',
      this.bg = 'rgb(186, 201, 220)',
      this.fontSize = '16'

      let elem = document.createElement('div')
      elem.className = this.selector.slice(1)
      elem.textContent = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, beatae.!"
      elem.style.cssText = `
      height: ${this.height}px;
      width: ${this.width}px;
      border: solid 2px black;
      font-size: ${this.fontSize}px;
      background: ${this.bg};
      border-radius: 10px;
      padding: 15px;
      margin-top: 10px;
      `
      
      document.body.appendChild(elem);
    }  else if (selector[0] === '#') {
      this.height = 'auto',
      this.width = '60',
      this.bg = 'rgb(160, 158, 202)',
      this.fontSize = 20
      
      let elem = document.createElement('p')
      elem.id = this.selector.slice(1)
      elem.textContent = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, ipsum voluptate. Porro inventore quibusdam vero quisquam omnis quas facere facilis.'
      elem.style.cssText = `
      height: ${this.height}px;
      width: ${this.width}%;
      border: dashed 2px black;
      font-size: ${this.fontSize}px;
      background: ${this.bg};
      border-radius: 5px;
      display: flex;
      align-content: center;
      justify-content: center;
      margin-top: 15px;
      padding: 15px;
      color: rgb(6, 4, 52);
      `
      
      document.body.appendChild(elem);
    }
  }
}

const newDomElementDiv = new DomElement('.block')
const newDomElementDiv1 = new DomElement('.block')
const newDomElementParagraph = new DomElement('#best')
const newDomElementParagraph1 = new DomElement('#best')

newDomElementDiv.createElem()
newDomElementParagraph.createElem()
newDomElementDiv1.createElem()
newDomElementParagraph1.createElem()













