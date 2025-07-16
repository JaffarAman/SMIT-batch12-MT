import React from 'react';
import {
    Card,
    CardContent,
    CardActions,
    Typography,
    Button,
    Stack,
    Chip,
    Box,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { BASE_URL } from '../../utils';
import Cookies from 'js-cookie';


export default function RestaurantCard({ restaurant, isRefresh
    , setIsRefresh, setEditRestaurantModal, setSelectRestaurant }) {
    const {
        restaurantName,
        details,
        contactNumber,
        address,
        email,
        category,
        isOpen,
        isApproved,
    } = restaurant || {};


    const deleteHandler = async (id) => {
        console.log("id", id)
        await axios.delete(`${BASE_URL}/restaurant/vendor-restaurant/${id}`, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")} `
            }
        })
        setIsRefresh(!isRefresh)
    }

    const statusHandler = async () => {
        console.log("isOpen", isOpen)
        const id = restaurant._id
        const updateObj = {
            isOpen: !isOpen
        }
        const res = await axios.patch(`${BASE_URL}/restaurant/vendor-restaurant-status/${id}`, updateObj, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")} `
            }
        })
        if (!res.data.status) {
            return alert(res.data.message)
        }
        setIsRefresh(!isRefresh)

    }

    return (
        <Card sx={{ maxWidth: 400, p: 2, borderRadius: 2, boxShadow: 3 }}>
            <CardContent>
                <Stack direction="row" justifyContent={"space-between"} alignItems="center" spacing={1} mb={1}>
                    <Stack flexDirection={"row"}>
                        <RestaurantIcon color="primary" />
                        <Typography variant="h6">{restaurantName}</Typography>
                    </Stack>
                    <Box>
                        <DeleteIcon onClick={() => deleteHandler(restaurant._id)} />
                        <EditIcon
                            // onClick={() => }
                            onClick={() => {
                                setSelectRestaurant(restaurant)
                                setEditRestaurantModal(true)
                            }}
                        />
                    </Box>
                </Stack>

                <Typography variant="body2" color="text.secondary" mb={1}>
                    {details}
                </Typography>

                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                    <PhoneIcon fontSize="small" color="action" />
                    <Typography variant="body2">{contactNumber}</Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                    <LocationOnIcon fontSize="small" color="action" />
                    <Typography variant="body2">{address}</Typography>
                </Stack>

                <Stack direction="row" spacing={1} alignItems="center" mb={1}>
                    <EmailIcon fontSize="small" color="action" />
                    <Typography variant="body2">{email}</Typography>
                </Stack>

                <Chip label={category} color="info" variant="outlined" size="small" sx={{ mr: 1 }} />
                <Chip
                    label={isApproved ? 'Approved' : 'Pending'}
                    color={isApproved ? 'success' : 'warning'}
                    icon={isApproved ? <CheckCircleIcon /> : <CancelIcon />}
                    size="small"
                />
            </CardContent>

            <CardActions>
                <Button onClick={() => {
                    statusHandler()
                }} size="small" variant="outlined" color={isOpen ? 'success' : 'error'}>
                    {isOpen ? 'Open' : 'Closed'}
                </Button>
                <Button size="small" variant="contained" color="primary">
                    View Details
                </Button>
            </CardActions>
        </Card>
    );
}
