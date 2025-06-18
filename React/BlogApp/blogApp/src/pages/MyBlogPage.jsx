import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import BlogCard from '../components/BlogCard'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import { ToastAlert } from '../utils'
import { CircularProgress } from '@mui/material'

const MyBlogPage = () => {

    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(false)
    const [refresh, setRefresh] = useState(false)

    useEffect(() => {
        fetchData()
    }, [refresh])

    const fetchData = async () => {
        try {
            setLoading(true)
            const res = await getDocs(collection(db, "blogs"))
            setLoading(false)
            const tempArr = []
            res.forEach((doc) => {
                console.log("doc", doc.data(), doc.id)
                const obj = { ...doc.data(), id: doc.id }
                tempArr.push(obj)

            })
            setBlogs(tempArr)


        } catch (error) {
            setLoading(false)
            ToastAlert({
                type: "error",
                message: error.message || "something went wront"
            })
        }
    }

    console.log("blogs", blogs)

    return (
        loading ? <CircularProgress /> :
            <div>
                <Navbar />
                <h1>MY Blog Page</h1>


                {
                    blogs.map((obj) => {
                        return (
                            obj.userId === localStorage.getItem("user") &&
                            <BlogCard cardDetails={obj} actionBtn={true}
                                setRefresh={setRefresh}
                            />
                        )
                    })
                }


            </div>
    )
}

export default MyBlogPage
