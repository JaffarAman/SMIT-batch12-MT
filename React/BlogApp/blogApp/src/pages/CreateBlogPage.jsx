import React, { useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import { Box, Button, Checkbox, FormControlLabel, Stack, TextField, Typography } from '@mui/material'
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import { v2 as cloudinary } from 'cloudinary';
import axios from "axios"
import { db } from '../firebase';
import { ToastAlert } from '../utils';
import { addDoc, collection } from 'firebase/firestore';
const API_SECRET = `1MeoUikqU-mZkA0bMMFjmAqKFKE`
const CLOUD_NAME = `dbync9n3e`

// // Configuration
// cloudinary.config({
//     cloud_name: 'dbync9n3e',
//     api_key: '586132517457886',
//     api_secret: API_KEY
// });

const CreateBlogPage = () => {

    const inputRef = useRef()
    const [blogTitle, setBlogTitle] = useState("")
    const [blogSubject, setBlogSubject] = useState("")
    const [blogDesc, setBlogDesc] = useState("")
    const [blogImage, setBlogImage] = useState("")
    const [isBlogPrivate, setIsBlogPrivate] = useState("")

    const fileHandler = () => {
        console.log("fileHandler", inputRef.current)
        inputRef.current.click()
    }

    const blogHandler = async () => {
        // console.log(blogTitle,
        //     blogSubject,
        //     blogDesc,
        //     blogImage,
        //     isBlogPrivate
        // )

        let url;
        if (blogImage) {
            const formData = new FormData()
            formData.append("file", blogImage)
            formData.append("upload_preset", "smit12")
            const res = await axios.post(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/upload`, formData)
                .catch((err) => {
                    console.log("err", err.message)
                })
            console.log("res", res.data.secure_url)
            url = res.data.secure_url
        }

        const blogObj = {
            title: blogTitle,
            subject: blogSubject,
            desc: blogDesc,
            private: isBlogPrivate,
            image: url || null,
            userId: localStorage.getItem("user")
        }   

        console.log("blogObj" , blogObj)

        await addDoc(collection(db, "blogs"), blogObj)
        ToastAlert({
            type: "success",
            message: "Blog Successfully created!"
        })

    }

    return (
        <div>

            <Navbar />
            <Typography variant='h4' textAlign={"center"} mt={2}
                sx={{ textDecoration: "underline" }}
            >Create Blog</Typography>

            <Stack gap={4} padding={2} sx={{ border: "1px solid red", width: "50%", margin: "50px auto" }} >
                <TextField placeholder='Blog Title' label='Blog Title' variant='outlined'
                    onChange={(e) => setBlogTitle(e.target.value)}
                />
                <TextField placeholder='Blog Subject' label='Blog Subject' variant='outlined'
                    onChange={(e) => setBlogSubject(e.target.value)}
                />
                <TextField
                    placeholder='Blog Desc'
                    label='Blog Desc'
                    variant='outlined'
                    multiline
                    rows={5}
                    onChange={(e) => setBlogDesc(e.target.value)}

                />
                <Stack gap={2} direction={"row"} alignItems={"center"} >
                    <FormControlLabel control={<Checkbox onChange={(e) => setIsBlogPrivate(e.target.checked)} />} label="Private Blog" />


                    <FormControlLabel onClick={fileHandler} control={<CloudUploadIcon />} label="Upload Image" />


                </Stack>

                <input type="file" hidden ref={inputRef} onChange={(e) => setBlogImage(e.target.files[0])} />
                <Button variant='contained' onClick={blogHandler} >Create Blog</Button>
            </Stack>


        </div>
    )
}

export default CreateBlogPage
