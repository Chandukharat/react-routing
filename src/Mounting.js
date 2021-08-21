import React from 'react'


export const Mounting = () => {
    return (
        <div >
            <h1  id='com'>Mounting Phase</h1>
            <div id='mar' >
            <div>Mounting means putting elements into the DOM.</div>

            <div> React has four built-in methods that gets called, in this order, when mounting a component:</div>

            <li> 1.constructor()</li>
            <li> 3.render()</li>
            <li> 4.componentDidMount()</li>
            <div>   The render() method is required and will always be called, the others are optional and will be called if you define them.</div>

            <h3>constructor</h3>
            <div>  The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values. </div>

            <div>   The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component). </div>
            <h3>render</h3>
            <div>The render() method is required, and is the method that actually outputs the HTML to the DOM.</div>

            <h3>componentDidMount</h3>
            <div> The componentDidMount() method is called after the component is rendered.</div>

            <div>  This is where you run statements that requires that the component is already placed in the DOM.</div>
        </div></div>
    )
}
