// --- UNUSED, JUST PLAYING HERE ---
const logged = msg => f => (...args) => {
    result = f(...args)
    console.log(`[LOG]: ${msg} ${result}`)
    return result
}

const myFunc =
      logged("Calling myFunc with result:")(
	  function(a, b){
	      console.log(`myFunc called with a = ${a} and b = ${b}`)
	      return a + b
	  })
// --- END UNUSED ---

const renderNative = name => (...children) => {
    let elem = document.createElement(name)
    
    for (child of children){
	elem.appendChild(child)
    }

    return elem
}

const T = text => document.createTextNode(text)
const LI = renderNative("li")
const UL = renderNative("ul")
const DIV = renderNative("div")
const H = level => renderNative(`h${level}`)
const HR = renderNative("hr")
const P = renderNative("p")

const renderToElement = (id, component) => document.getElementById(id).appendChild(component)

const component = f => (...args) => (...children) => {
    elem = f(...args)
    for (child of children) elem.appendChild(child)
    return elem
}

const customComponent = component(function(name, age){
    return DIV(
	H(2)(T(`Hello, ${name}`)),
	HR(),
	P(T(`I see that you're ${age} years old. That's cool`)),
	P(T("These are a few of my favourite things")),
	UL(
	    LI(T("Raindrops on roses")),
	    LI(T("Bright cooper kettles")),
	    LI(T("Brown paper bags tied up with string"))
	)
    )
})

renderToElement("App", 
		UL(
		    LI(T("Item 1")),
		    LI(T("Item 2")),
		    LI(T("Item 3")),
		    LI(
			customComponent("Alice", "23")(T("Inside the custom Componet"))
		    )
		)
	       )
