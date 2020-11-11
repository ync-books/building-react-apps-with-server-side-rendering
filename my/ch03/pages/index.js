import React from  'react'
import Link from 'next/link'
import GetLink from '../components/DynamicRouter'
function MyComponent(){
    return (
        <div>
            <GetLink title={"Page 1"}></GetLink>
            <GetLink title={"Page 2"}></GetLink>
            <GetLink title={"Page 3"}></GetLink>
        </div>
    )
}
export default MyComponent