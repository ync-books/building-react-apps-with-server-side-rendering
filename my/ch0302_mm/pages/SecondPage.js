import Link from "next/link";
import React from "react";

const SecondPage = (props) => (
    <div>
        <h1>
            Welcome to {props.url.query.content}
        </h1>
        <Link href="/">
            <a>Home</a>
        </Link>
    </div>

);
export default SecondPage