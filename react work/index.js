console.log("hi");
const parent=document.getElementById('root');
console.dir(parent);
const root=ReactDOM.createRoot(parent);
// const h1=React.createElement("h1",{style:{color:'cyan'}},"ABES Engineering College");
// const l1=React.createElement("li",{},"Orange");
// const l2=React.createElement("li",{},"Apple");
// const u1=React.createElement("ul",{style:{backgroundColor:'pink'}},l1,l2);
const element = <h1>CSE AIML</h1>;
const l1=<li>Orange</li>;
const l2=<li>Apple</li>;
const u1=<ul>{l1}{l2}</ul>;
const container=(
    <div style={{backgroundColor:'cyan'}}>
        <div>{element}</div>
        <div>
            {u1}
        </div>
    </div>
)
// root.render(h1);
root.render(container);