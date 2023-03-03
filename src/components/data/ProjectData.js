import { v4 as uuidv4 } from 'uuid';


/* Data template
    {
      name: "",
      code: "",
      page: "",
      desc: ""
    }
  */
const projectData = [
    {
        id: uuidv4(),
        name: "Restaurant page", 
        code: "https://github.com/CMING3/Restaurant-Page", 
        page: "https://cming3.github.io/Restaurant-Page/",
        desc: "First webpack website project"
    },
    {
        id: uuidv4(),
        name: "Admin dashboard",
        code: "https://github.com/CMING3/Admin-Dashboard",
        page: "https://cming3.github.io/Admin-Dashboard/",
        desc: "Admin dashboard project practising the skill of css grid and flexbox"
    },
    {
        id: uuidv4(),
        name: "Calculator",
        code: "https://github.com/CMING3/calculator",
        page: "https://cming3.github.io/calculator/",
        desc: "A simple calculator project with basic math operators"
    },
    {
        id: uuidv4(),
        name: "Sign up form",
        code: "https://github.com/CMING3/Sign-up-Form",
        page: "https://cming3.github.io/Sign-up-Form/",
        desc: "A sign up form project practising the skill of html form, css grid and flexbox"
    },
    {
        id: uuidv4(),
        name: "Etch a Sketch",
        code: "https://github.com/CMING3/Etch-a-Sketch",
        page: "https://cming3.github.io/Etch-a-Sketch/",
        desc: "A dot drawing panel project practising the skill of javascript loop"
    },
    {
        id: uuidv4(),
        name: "ToDo list",
        code: "https://github.com/CMING3/ToDoList",
        page: "https://cming3.github.io/ToDoList/",
        desc: "A ToDo list project practising the skill of local storage with webpack"
    },
    {
        id: uuidv4(),
        name: "Tic Tac Toe",
        code: "https://github.com/CMING3/Tic-Tac-Toe",
        page: "https://cming3.github.io/Tic-Tac-Toe/",
        desc: "A Tic Tac Toe mini game project practising the skill of javascript function and DOM event"
    },
    {
        id: uuidv4(),
        name: "Library",
        code: "https://github.com/CMING3/Library",
        page: "https://cming3.github.io/Library/",
        desc: "A library project practising the skill of javascript object constructor"
    },
    {
        id: uuidv4(),
        name: "Rock paper scissor",
        code: "https://github.com/CMING3/rock-paper-scissor",
        page: "https://cming3.github.io/rock-paper-scissor/",
        desc: "This is a little rock paper scissor game play with computer by using Math random."
    },
    {
        id: uuidv4(),
        name: "Odin project landing page",
        code: "https://github.com/CMING3/odin-project-landing-page",
        page: "https://cming3.github.io/odin-project-landing-page/",
        desc: "The first project of The Odin Project, practise the skill of basic html"
    },
    {
        id: uuidv4(),
        name: "Odin recipes",
        code: "https://github.com/CMING3/odin-recipes",
        page: "https://cming3.github.io/odin-recipes/",
        desc: "A recipes web project with simple html href, list, paragraph"
    },
    {
        id: uuidv4(),
        name: "Gift Card Store",
        code: "https://github.com/CMING3/Gift-Card-Store",
        page: "https://cming3.github.io/Gift-Card-Store/",
        desc: "Final group project in ERB course, building a fake gift card store website with bootstrap, contain product, sign in and cart pages. My responsibility in this project is building the navbar, Home page, products and cart pages"
    }
]


export default projectData