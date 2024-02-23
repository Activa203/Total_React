const parent=React.createElement(
    "div",{id:"parent"},
    React.createElement(
        "div",{id:"child"},[React.createElement("h1",{},"this is h1 tag of parent and child"),
        React.createElement("h1",{},"this is h1 tag of parent and child")]));


const heading=React.createElement("h1",{id:"heading"},"Hello React");
console.log(heading);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
