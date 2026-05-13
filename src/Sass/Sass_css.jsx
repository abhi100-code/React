/*
What is Sass?
Sass stands for Syntactically Awesome Stylesheet
Sass is an extension to CSS
Sass is a CSS pre-processor
Sass is completely compatible with all versions of CSS
Sass reduces repetition of CSS and therefore saves time
Sass was designed by Hampton Catlin and developed by Natalie Weizenbaum in 2006
Sass is free to download and use

Why Use Sass?
Stylesheets are getting larger, more complex, and harder to maintain. This is where a CSS pre-processor can help.

Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.

https://sass-lang.com/install/ 

npm i -g sass

use: falana.scss ext=.scss

*/


import React from 'react'

import './mycss1.css'
import './mysass.scss'

function Sass_css() {
  return (
    <div>
        <h1 className='test'>Normal css</h1>
        <hr />

        <h1 className='box1'>Hello Variable css</h1>
        <hr />

        <nav>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
                <li><a href="">Home</a></li>
            </ul>
        </nav>

        <hr />

        <h1 className='myproperties'>Hello Nested Properties </h1>
        <h1 className='myproperties1'>Hello Nested Properties </h1>

        <hr />

        <button className='button-basic'>Basic</button>
        <button className='red-basic'>red</button>
        <button className='green-basic'>Green</button>
        <button className='blue-basic'>Blue</button>
        <button className='purple-basic'>Purple</button>


        
    </div>
  )
}

export default Sass_css