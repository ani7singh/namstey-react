    const parent = React.createElement( "div",{ id: "parent" },[
      React.createElement( "div",{ id: "child1" }, [
        React.createElement( "h1", {id: "heading_1"}, "Heading1"),
          React.createElement( "h2", {id: "heading_2"}, "Heading2")
         ]),
          React.createElement( "div",{ id: "child2" },[
            React.createElement( "h1", {id: "heading_1"}, "Heading1"),
            React.createElement( "h2", {id: "heading_2"}, "Heading2")
         ]),
        ]);
      console.log(parent);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);