//1st object--> HtmlElement
//2nd object--> HtmlSelectElement - this is the child object of HtmlElement
//but it should also include instance functions of HtmlElement


function HtmlElement(){
    this.click = function(){
        console.log('Clicked');
    }
}

HtmlElement.prototype.focus = function(){
    console.log("Focused");
}

function HtmlSelectElement(items= []){
this.items = items;

this.addItem = function(item){
    this.items.push(item);
}

this.removeItem = function(item){
    this.items.splice(this.items.indexOf(item),1);
}
}

HtmlSelectElement.prototype= new HtmlElement();

const e = new HtmlElement();
const s = new HtmlSelectElement();