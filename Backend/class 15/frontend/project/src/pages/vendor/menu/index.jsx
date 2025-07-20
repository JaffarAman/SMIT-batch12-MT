import React, { useState } from 'react'
import { VendorLayout } from '../../../components'
import AddMenuModal from '../../../components/Modals/AddMenu'
import { Button, Stack } from '@mui/material'

const VendorMenu = () => {
    const [menuModal, setMenuModal] = useState(false)
    return (
        <VendorLayout>
            <Stack flexDirection={"row"} justifyContent={"space-between"} >
                <h1>Vendor  Menu</h1>
                <Button variant='contained'
                    onClick={() => setMenuModal(true)}
                >Add Menu</Button>
            </Stack>


            {menuModal && <AddMenuModal open={menuModal} setOpen={setMenuModal} />}



        </VendorLayout>
    )
}

export default VendorMenu
