import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
    Divider,
    Stack,
    TextField,
    MenuItem,
} from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { Controller, useForm } from 'react-hook-form';
import axios from 'axios';
import { BASE_URL } from '../../utils';
import Cookies from 'js-cookie';
import apiEndPoints from '../../constant/apiEndpoint';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
};

const categories = ['Italian', 'Chinese', 'Indian', 'Mexican', 'Thai', 'Other'];

export default function AddMenuModal({ open, setOpen, isRefresh, setIsRefresh }) {
    const handleClose = () => setOpen(false);
    const [logoImage, setLogoImage] = React.useState()
    const [restaurantDropdown, setRestaurantDropdown] = React.useState([])
    const handleChange = (e) => {
        console.log(e.target.files[0])
        setLogoImage(e.target.files[0])
    };

    //   const handleSubmit = () => {
    //     // Here you can send the form data to your backend or perform validation
    //     console.log(form);
    //     handleClose();
    //   };


    const { control, handleSubmit, reset } = useForm({
        defaultValues: {
            restaurantName: "",
            details: "",
            contactNumber: "",
            address: "",
            email: "",
            category: "",
        }
    })


    const onSubmit = async (obj) => {
        console.log("obj", obj)
        return
        try {

            let imageUrl;
            if (logoImage) {
                console.log("image uploading....", logoImage)
                const api = `${BASE_URL}${apiEndPoints.uploadImage}`
                const formData = new FormData()
                formData.append("image", logoImage)

                const imageRes = await axios.post(api, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": `Bearer ${Cookies.get("token")}`
                    }
                })
                console.log("imageRes", imageRes)
                imageUrl = imageRes.data.url
            }

            const objToSend = {
                ...obj,
                imageUrl: imageUrl || null
            }

            const response = await axios.post(`${BASE_URL}/restaurant/create-restaurant`, objToSend, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")} `
                }
            })
            console.log("response", response)
            alert(response.data.message)
            handleClose()
            reset({})
            setIsRefresh(!isRefresh)

        } catch (error) {

        }
    }


    React.useEffect(() => {
        (async () => {
            const api = `${BASE_URL}${apiEndPoints.restaurantDropdown}`
            const res = await axios.get(api, {
                headers: {
                    "Authorization": `Bearer ${Cookies.get("token")}`
                }
            })
            console.log("data", res.data)
            setRestaurantDropdown(res.data.data)
        })()
    }, [])

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="h5">Create Menu</Typography>
                            <ClearIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
                        </Stack>
                        <Divider sx={{ my: 2 }} />

                        <Stack spacing={2}>

                            <Controller
                                control={control}
                                name='restaurant'
                                render={({ field, formState: { errors } }) => <TextField
                                    select
                                    label="Select Restaurant"
                                    fullWidth
                                    {...field}
                                >
                                    {restaurantDropdown.map((res) => (
                                        <MenuItem key={res._id} value={res._id}>
                                            {res.restaurantName}
                                        </MenuItem>
                                    ))}
                                </TextField>}
                            />

                            <Controller
                                control={control}
                                name='menuName'
                                render={({ field, formState: { errors } }) => <TextField
                                    label="Menu Name"
                                    fullWidth
                                    {...field}
                                />}
                            />

                            <Controller
                                control={control}
                                name='details'
                                render={({ field, formState: { errors } }) => <TextField
                                    label="Menu Details"
                                    fullWidth
                                    multiline
                                    minRows={3}
                                    {...field}
                                />}
                            />

                            <Controller
                                control={control}
                                name='price'
                                render={({ field, formState: { errors } }) => <TextField
                                    label="Price"
                                    fullWidth
                                    {...field}
                                />}
                            />

                            <Controller
                                control={control}
                                name='category'
                                render={({ field, formState: { errors } }) => <TextField
                                    select
                                    label="Category"
                                    fullWidth
                                    {...field}
                                >
                                    {categories.map((cat) => (
                                        <MenuItem key={cat} value={cat}>
                                            {cat}
                                        </MenuItem>
                                    ))}
                                </TextField>}
                            />



                            <Button variant="outlined" component="label">
                                Upload Image
                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    name="logo"
                                    onChange={handleChange}
                                />
                            </Button>


                            {logoImage && (
                                <Typography variant="body2" color="text.secondary">
                                    Selected file: {logoImage.name}
                                </Typography>
                            )}

                            <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>
                                Submit
                            </Button>
                        </Stack>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
