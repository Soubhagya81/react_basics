const parent = React.createElement("div",{id:"parent"},
                [React.createElement("div", {id:"child1"},
                    [
                        React.createElement("h1",{id:"heading1"},"Hello i am heading1"),
                     React.createElement("h2",{id:"heading2"},"Hello i am heading2")
                    ]),
                     React.createElement("div", {id:"child2"},
                    [
                        React.createElement("h1",{id:"heading1"},"Hello i am heading1"),
                      React.createElement("h2",{id:"heading2"},"Hello i am heading2")
                    ])
                ]);


// const heading = React.createElement("h1", {
//     id:"myHeading"
// }, "Hello my name is rajesh");

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);
