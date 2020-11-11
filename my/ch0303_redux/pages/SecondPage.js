import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router'

const SecondPage = () => {
    const router = useRouter()
    const {content} = router.query
    return (
        <div>
            <h1>
                Welcome to {content}
            </h1>
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
    )
};
export default SecondPage