'use strict';


function DomElement(selector = '.', height = 300, width = 500, bg, fontSize = 12) {

    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

}

DomElement.prototype.creatEntry = function() {

    let elem;
        
    if (this.selector[0] === '.') {
        elem = document.createElement('div');
        elem.className = this.selector.slice(1);
    }

    if (this.selector[0] === '#') {
        elem = document.createElement('p');
        elem.id = this.selector.slice(1);
        elem.textContent = `Изучение JavaScript - ОГОНЬ!!! ООП - привет:)`;
    }

    elem.style.cssText = `height: ${this.height}px;
        width: ${this.width}px;
        background: ${this.bg};
        font-size: ${this.fontSize}px; `;
        
        return elem;

};

let newDomDiv = new DomElement ('.block', 300, 500, 'black', 12);
let newDomText = new DomElement ('#best', 200, 400, 'red', 28);

document.body.appendChild(newDomDiv.creatEntry());
document.body.appendChild(newDomText.creatEntry());
