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

export default function EditRestaurantModal({ open, setOpen, isRefresh, setIsRefresh, selectRestaurant }) {


    const handleClose = () => setOpen(false);
    const [form, setForm] = React.useState({
        name: '',
        details: '',
        contact: '',
        address: '',
        email: '',
        logo: null,
        category: '',
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
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
        const updateObj = {
            address: obj.address,
            category: obj.category,
            contactNumber: obj.contactNumber,
            details: obj.details,
            email: obj.email,
            restaurantName: obj.restaurantName
        }
        try {
            // const id = //selectRestaurant._id
            const id = obj._id
            const response = await axios.put(`${BASE_URL}/restaurant/vendor-restaurant/${id}`, updateObj, {
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

    console.log("selectRestaurant model", selectRestaurant)

    React.useEffect(() => {

        reset(selectRestaurant)

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
                            <Typography variant="h5">EDIT Restaurant</Typography>
                            <ClearIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
                        </Stack>
                        <Divider sx={{ my: 2 }} />

                        <Stack spacing={2}>
                            <Controller
                                control={control}
                                name='restaurantName'
                                render={({ field, formState: { errors } }) => <TextField
                                    label="Restaurant Name"
                                    fullWidth
                                    {...field}
                                />}
                            />

                            <Controller
                                control={control}
                                name='details'
                                render={({ field, formState: { errors } }) => <TextField
                                    label="Details"
                                    fullWidth
                                    multiline
                                    minRows={3}
                                    {...field}
                                />}
                            />

                            <Controller
                                control={control}
                                name='contactNumber'
                                render={({ field, formState: { errors } }) => <TextField
                                    label="Contact Number"
                                    fullWidth
                                    {...field}
                                />}
                            />

                            <Controller
                                control={control}
                                name='address'
                                render={({ field, formState: { errors } }) => <TextField
                                    label="Address / Location"
                                    fullWidth
                                    {...field}
                                />}
                            />

                            <Controller
                                control={control}
                                name='email'
                                render={({ field, formState: { errors } }) => <TextField
                                    label="Email"
                                    type="email"
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
                                Upload Logo
                                <input
                                    type="file"
                                    accept="image/*"
                                    hidden
                                    name="logo"
                                    onChange={handleChange}
                                />
                            </Button>

                            {form.logo && (
                                <Typography variant="body2" color="text.secondary">
                                    Selected file: {form.logo.name}
                                </Typography>
                            )}

                            <Button variant="contained" color="primary" onClick={handleSubmit(onSubmit)}>
                                EDIT
                            </Button>
                        </Stack>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
