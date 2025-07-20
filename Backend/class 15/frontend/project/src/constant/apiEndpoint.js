const apiEndPoints = {
    login: "/auth/login",
    signup: "/auth/signup",
    uploadImage: "/image/upload",


    // admin
    adminAllRestaurant: "/admin/all-restaurant",
    restaurantApproval: (id) => `/admin/restaurant-approve/${id}`,

    // restaurant
    restaurantDropdown : `/restaurant/dropdown-restaurant`

}


export default apiEndPoints