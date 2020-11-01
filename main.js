'use strict';

class DomElement {
    constructor(selector, height, width, bg, fontSize) {

        this.selector = selector;
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;

    }
}

DomElement.prototype.creatEntry = function() {

    let elem;

    if(this.selector[0] === '.') {
        elem = document.createElement('div');
        elem.className = this.selector.slice(1);
    }

    if(this.selector[0] === '#') {
        elem = document.createElement('p');
        elem.id = this.selector.slice(1);
        elem.textContent = `Изучение JavaScript - ОГОНЬ!!! ООП - привет:)`;
    }

    elem.style.cssText = `height: ${this.height} px;
        width: ${this.width} px;
        backgroundColor: # ${this.bg};
        fontSize: ${this.fontSize} px;
        `;
        console.log(elem.style.cssText);
    return elem;

};

let newDomDiv = new DomElement ('.block', '300', '500', '000', '');
let newDomText = new DomElement ('#best', '200', '400', 'fff', '14');


document.body.appendChild(newDomDiv.creatEntry());
document.body.appendChild(newDomText.creatEntry());

console.log(newDomDiv);
console.log(newDomText);