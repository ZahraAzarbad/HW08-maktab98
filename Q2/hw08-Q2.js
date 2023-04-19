function makeElement(element, callBack) {
    const body = document.body;
    const elem = document.createElement(element);
    callBack(elem);
    body.appendChild(elem);
}

function callBack(element) {
    element.style.width = "200px";
    element.style.height = "100px";
    element.style.borderRadius = "5px";
    element.style.backgroundColor = "#077207";
    element.style.margin = "10px"
}


makeElement("div", callBack);