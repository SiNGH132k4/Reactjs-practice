import React from 'react'
import { createRoot } from 'react-dom/client'
import {jsx as _jsx} from 'react/jsx-runtime'
import App from './App.jsx'

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = "Delta103"

const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Visit Google',
    anotherUser
)

createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
