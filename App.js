const parent = React.createElement(
    "div",
    { id: "Parent" },
    [
        React.createElement(
            "div",
            { id: "Child1" },
            [React.createElement(
                "h1",
                { id: "heading" }, "this is heading"),
            React.createElement(
                "h1",
                { id: "heading1" }, "this is heading1")]
        ),
        React.createElement(
            "div",
            { id: "Child2" },
            [React.createElement(
                "h1",
                { id: "Child2heading" }, "this is heading"),
            React.createElement(
                "h1",
                { id: "Child2heading1" }, "this is heading1")]
        )
    ]
);


const heading = React.createElement("h1", { id: "heading" }, "Hello world from react!");

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
root.render(parent);