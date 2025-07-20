import React, { useEffect, useState } from 'react'
import AdminLayout from '../../../components/Layouts/AdminLayout'
import axios from 'axios'
import { BASE_URL } from '../../../utils'
import apiEndPoints from '../../../constant/apiEndpoint'
import Cookies from 'js-cookie'
import { Avatar, Paper, Table, TableCell, TableContainer, TableHead, TableRow, Typography, TableBody, Tooltip } from '@mui/material'
import ApprovalIcon from '@mui/icons-material/Approval';
import DeleteIcon from '@mui/icons-material/Delete';

const headers = [
    "Restaurant Name",
    "Category",
    "Email",
    "Approved",
    "Deleted",
    "Created At",
    // "Contact",
    // "Address",
    // "Open",
    "Image",
    "Actions"
];

const AllRestaurant = () => {

    const [restaurantData, setRestaurantData] = useState([])

    useEffect(() => {
        fetch()
    }, [])

    const fetch = async () => {
        const api = `${BASE_URL}${apiEndPoints.adminAllRestaurant}`
        const res = await axios.get(api, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        setRestaurantData(res.data.data)

    }

    console.log("restaurantData", restaurantData)


    const approveRestaurant = async (obj) => {
        const api = `${BASE_URL}${apiEndPoints.restaurantApproval(obj._id)}`
        console.log("obj.isApproved", obj.isApproved)
        const body = {
            isApproved: !obj.isApproved
        }
        await axios.patch(api, body, {
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        })
        fetch()
    }

    return (
        <AdminLayout>
            <h1>ALL RESTAURANT</h1>

            <TableContainer component={Paper} sx={{ mt: 3 }}>
                <Typography variant="h6" sx={{ p: 2 }}>
                    Restaurants
                </Typography>
                <Table>
                    <TableHead>
                        <TableRow>
                            {headers.map((header) => (
                                <TableCell key={header} sx={{ fontWeight: "bold" }}>
                                    {header}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {restaurantData.map((restaurant) => (
                            <TableRow key={restaurant._id}>
                                <TableCell>{restaurant.restaurantName}</TableCell>
                                <TableCell>{restaurant.category}</TableCell>
                                <TableCell>{restaurant.email}</TableCell>
                                {/* <TableCell>{restaurant.contactNumber}</TableCell> */}
                                {/* <TableCell>{restaurant.address}</TableCell> */}
                                <TableCell>{restaurant.isApproved ? "Yes" : "No"}</TableCell>
                                {/* <TableCell>{restaurant.isOpen ? "Yes" : "No"}</TableCell> */}
                                <TableCell>{restaurant.isDeleted ? "Yes" : "No"}</TableCell>
                                <TableCell>{new Date(restaurant.createAt).toLocaleString()}</TableCell>
                                <TableCell>
                                    {restaurant.imageUrl ? (
                                        <Avatar
                                            alt={restaurant.restaurantName}
                                            src={restaurant.imageUrl}
                                            sx={{ width: 40, height: 40 }}
                                        />
                                    ) : (
                                        "N/A"
                                    )}
                                </TableCell>
                                <TableCell>
                                    <Tooltip title="Approve" >
                                        <ApprovalIcon onClick={() => approveRestaurant(restaurant)} />
                                    </Tooltip>

                                    <Tooltip title="Delete" >
                                        <DeleteIcon />
                                    </Tooltip>

                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </AdminLayout>
    )
}

export default AllRestaurant
