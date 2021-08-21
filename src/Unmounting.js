import React from 'react'

export const Unmounting = () => {
    return (
        <div  >
            <h1  id='com'>Unmounting Phase</h1>
            <div id='mar' > <div>The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.</div>

            <div> React has only one built-in method that gets called when a component is unmounted:</div>

            <h3>componentWillUnmount()</h3>
            <div> componentWillUnmount</div>
            <div>  The componentWillUnmount method is called when the component is about to be removed from the DOM.</div>
        </div>
        </div>
    )
}
