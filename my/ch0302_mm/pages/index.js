import React from  'react'
import GetLink from "../components/DynamicRouter";
import Link from "next/link";
function MyComponent(){
    return (
        <div>
            <GetLink title='Page 1'
                     Disp='page-1'
                     Class='img p1'>
            </GetLink>
            <GetLink title='Page 2'
                     Disp='page-2'
                     Class='img p2'>
            </GetLink>
            <GetLink title='Page 3'
                     Disp='page-3'
                     Class='img p3'>
            </GetLink>
            <Link href="GithubUsers">
                <a>Github Users</a>
            </Link>

        </div>
    )
}
export default MyComponent