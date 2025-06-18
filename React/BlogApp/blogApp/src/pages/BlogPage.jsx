import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import BlogCard from '../components/BlogCard'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { ToastAlert } from '../utils'

const BlogPage = () => {

    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const res = await getDocs(collection(db, "blogs"))
            const tempArr = []
            res.forEach((doc) => {
                console.log("doc", doc.data(), doc.id)
                const obj = { ...doc.data(), id: doc.id }
                tempArr.push(obj)

            })
            setBlogs(tempArr)


        } catch (error) {
            ToastAlert({
                type: "error",
                message: error.message || "something went wront"
            })
        }
    }

    console.log("blogs", blogs)

    return (
        <div>
            <Navbar />
            <h1>Blog Page</h1>


            {
                blogs.map((obj) => {
                    return (

                        // obj.private ? null :
                        //     <BlogCard cardDetails={obj} />
                        !obj.private && <BlogCard cardDetails={obj} /> 


                    )
                })
            }


        </div>
    )
}

export default BlogPage
