// obj = {
//     message,
//     type

import { Bounce, toast } from "react-toastify"

// }
export const ToastAlert = (obj) => {

    switch (obj.type) {
        case "success":
            return toast.success(obj.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        case "error":
            toast.error(obj.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
    }


}