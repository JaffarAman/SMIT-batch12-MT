import React, { useEffect, useState } from 'react'
import { VendorLayout } from '../../../components'
import { Box, Button, Stack } from '@mui/material'
import AddRestaurantModal from '../../../components/Modals/AddRestaurant'
import axios from 'axios'
import { BASE_URL } from '../../../utils'
import Cookies from 'js-cookie'
import RestaurantCard from '../../../components/RestauarantCard'
import EditRestaurantModal from '../../../components/Modals/EditRestaurant'

const Restaurant = () => {

    // ADD MODAL
    const [restaurantModal, setRestaurantModal] = useState(false)


    // EDIT MODAL
    const [editRestaurantModal, setEditRestaurantModal] = useState(false)

    const [restaurants, setRestaurants] = useState([])
    const [isRefresh, setIsRefresh] = useState(false)

    const [selectRestaurant, setSelectRestaurant] = useState({})
    console.log("selectRestaurant", selectRestaurant)


    useEffect(() => {
        fetchData()
    }, [isRefresh])

    const fetchData = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/restaurant/vendor-restaurant`, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")} `
                }
            })
            setRestaurants(res.data.data)
        } catch (error) {

        }
    }

    return (
        <VendorLayout>
            <Stack flexDirection={"row"} justifyContent={"space-between"} >
                <h1>Vendor  Restaurant</h1>
                <Button variant='contained'
                    onClick={() => setRestaurantModal(true)}
                >Create Restaurant</Button>
            </Stack>

            <Stack mt={5} flexDirection={"row"} gap={5} flexWrap={"wrap"} >
                {
                    restaurants.map((restaurantObj) => {
                        return (
                            <RestaurantCard restaurant={restaurantObj}
                                isRefresh={isRefresh}
                                setIsRefresh={setIsRefresh}
                                setEditRestaurantModal={setEditRestaurantModal}
                                setSelectRestaurant={setSelectRestaurant}
                            />
                        )
                    })
                }

            </Stack>



            <AddRestaurantModal
                open={restaurantModal}
                setOpen={setRestaurantModal}
                isRefresh={isRefresh}
                setIsRefresh={setIsRefresh}
            />


         { editRestaurantModal &&  <EditRestaurantModal
                open={editRestaurantModal}
                setOpen={setEditRestaurantModal}
                isRefresh={isRefresh}
                setIsRefresh={setIsRefresh}
                selectRestaurant={selectRestaurant}
            />}





        </VendorLayout>
    )
}

export default Restaurant
