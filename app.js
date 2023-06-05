// 1
// const heading=React.createElement("h1",{},"Hello world");
// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading); //object
// const heading1 =React.createElement("p",{id:"he"},"this ps");
// const root1 =ReactDOM.createRoot(document.getElementById("r1"));
// root1.render(heading1);

//2
// /* <div id="parent">
// <div id="child">
//   <h1>I am tag1</h1>
//   <h2>I am tagg2</h2>
// </div>
// <div id="child2">
//   <h1>I am tag1</h1>
//   <h2>I am tagg2</h2>
// </div>
// </div> *

const parent=React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},[
React.createElement("h1",{},"i am tag1"),
React.createElement("h2",{},"i am tag2")
]),
React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"i am tag1"),
    React.createElement("h2",{},"i am tag2")]

)]);
const root1 =ReactDOM.createRoot(document.getElementById("root"));
root1.render(parent);
