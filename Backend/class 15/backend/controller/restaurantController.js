// import RestaurantModel from "./schema/Restaurant.js"

import RestaurantModel from "../schema/Restaurant.js"


export const createRestaurantController = async (req, res) => {
    // console.log(req.user.id, "req user")

    try {
        const body = req.body
        const userId = req.user.id

        const restaurantObj = {
            ...body,
            createBy: userId
        }
        const response = await RestaurantModel.create(restaurantObj)
        console.log("response", response)
        res.json({
            status: true,
            data: response,
            message: "successfully created! wait for the Admin Approval"
        })

    } catch (error) {
        res.json({
            status: false,
            data: null,
            message: error.message || "something went wrong"
        })
    }




}


export const getVendorRestaurant  = async (req, res) => {
    const userId = req.user.id
    console.log("userId", userId)
    const data = await RestaurantModel.find({ createBy: userId, isDeleted: false })

    res.json({ message: "OKAY KI REPORT", data: data, status: true })
}


export const deleteVendorRes =  async (req, res) => {
    const params = req.params
    console.log("params", params.id)
    const updateObj = {
        isDeleted: true
    }
    await RestaurantModel.findByIdAndUpdate(params.id, updateObj)
    res.json({ message: "Deleted Succssfully!", status: true })

}