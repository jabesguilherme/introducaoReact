const root = document.querySelector("#root");

const t1 = React.createElement("h1", {id:"Título Principal"}, "Hello");
const t2 = React.createElement("h4", {id:"Título complementar"}, "Salve");

const headline = React.createElement("div", null, t1, t2);

ReactDOM.render(headline, root);
