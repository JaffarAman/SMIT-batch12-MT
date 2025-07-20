import axios from 'axios'
import React, { useEffect } from 'react'
import { BASE_URL } from '../../../utils'
import Cookies from 'js-cookie'
import AdminLayout from '../../../components/Layouts/AdminLayout'

const AdminDashboard = () => {
    return (
        <AdminLayout >
            <h1>ADMIN DASHBOARD</h1>
        </AdminLayout>
    )
}

export default AdminDashboard
