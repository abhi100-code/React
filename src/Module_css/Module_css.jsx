/*
Module css

CSS Modules let you write CSS that is scoped locally to a specific component.
This prevents CSS class name conflicts and makes your styles more maintainable.

What are CSS Modules?
In React, CSS Modules are CSS files where class names are scoped locally by default.
Note: CSS Modules are not a part of the React core library, but are supported by many React 
build tools.
The CSS file have to have the .module.css extension and can be used by 
importing it into your React file(s).

Import : import A from 'style1.module.css'
apply : <div class={A.big_blue}>


*/


import React from 'react'

//import '/normal_css'  normal css

import A from './style1.module.css'
import B from './style2.module.css'

function Module_css() {
  return (
    <div>

        <div className={A.big_blue}>Hello style 1</div>
        <div className={B.big_blue}>Hello style 2</div>
        
    </div>
  )
}

export default Module_css