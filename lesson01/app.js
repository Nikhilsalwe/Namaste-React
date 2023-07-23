
const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("h1", {}, "This is first element 1"),
    React.createElement("h1", {}, "This is first element 2")
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)


// const heading = React.createElement("h1", {}, "This is first element 1")

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)