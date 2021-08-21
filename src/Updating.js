import React from 'react'

export const Updating = () => {
    return (
        <div>

            <h1 id='com'>Updating Phase</h1>

            <div id='mar' > <div> The next phase in the lifecycle is when a component is updated.</div>

            <div>A component is updated whenever there is a change in the component's state or props.</div>

            <div>React has five built-in methods that gets called, in this order, when a component is updated:</div>

            
            <li>  shouldComponentUpdate()</li>
            <li>render()</li>
            
            <li>componentDidUpdate()</li>
            <div>  The render() method is required and will always be called, the others are optional and will be called if you define them.</div>
            <h3>shouldComponentUpdate</h3>
            <div>In the shouldComponentUpdate() method you can return a Boolean value that specifies whether React should continue with the rendering or not.</div>

            <div>The default value is true.</div>
            <h3>componentDidUpdate</h3>
            <div> The componentDidUpdate method is called after the component is updated in the DOM.</div>

            <div>The example below might seem complicated, but all it does is this:</div>

            <div>  When the component is mounting it is rendered with the favorite color "red".</div>

            <div> When the component has been mounted, a timer changes the state, and the color becomes "yellow".</div>

            <div> This action triggers the update phase, and since this component has a componentDidUpdate method, this method is executed and writes a message in the empty DIV element:</div>

</div>

        </div>
    )
}
