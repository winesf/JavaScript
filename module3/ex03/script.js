class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    divAdd (text = "Empty div"){
        let div = document.createElement('div');
        div.innerText = text;
        div.style.cssText = `
        height:${this.height}px; 
        width:${this.width}px; 
        background-color:${this.bg}; 
        font-size:${this.fontSize}px; 
        text-align:${this.textAlign}
        `;
        document.body.appendChild(div);
    }
}

let newObj = new Options(100,200, 'red', 15, 'center');
    newObj.divAdd();