import RestaurantModel from "../schema/Restaurant.js"

export const allRestaurant = async (req, res) => {
    try {

        const data = await RestaurantModel.find({})
        res.json({
            data,
            message: "fetch all res",
            status: true
        })


    } catch (error) {
        res.json({
            message: error.message,
            status: false
        })
    }
}


export const RestaurantApprove = async (req, res) => {
    try {
        const { id } = req.params
        const body = req.body

        console.log("body", body)

        if (!id || body?.isApproved == null || body?.isApproved == undefined) {
            return res.json({
                status: false,
                message: "required fields are missing"
            })
        }

        const updateObj = {
            isApproved: body.isApproved
        }

        const data = await RestaurantModel.findByIdAndUpdate(id, updateObj, { new: true })
        res.json({
            message: "Status changed",
            data
        })


    } catch (error) {
        res.json({
            message: error.message,
            status: false
        })
    }
}
