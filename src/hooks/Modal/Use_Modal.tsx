import React, { useState } from 'react'
import { Modal } from '@mui/material'



interface IporpsModal {
    children: React.ReactNode
    handleCloseModal: () => void

}

export const Use_Modal = () => {
    const [is_visible, set_Is_visible] = useState(false)
    const [moda_display, setmoda_display] = useState<"block" | "none">("block")

    const Custom_Modal = ({children,handleCloseModal}:IporpsModal)=>(
        <Modal open={is_visible} onClose={() => { handleCloseModal()}} style={{ zIndex: 1000, display: moda_display }}>
            <div className="modal-container" style={{ width: "90%", maxHeight: "90vh", overflow: "auto" }}>
                {children}
            </div>
        </Modal>
    )

    return {
        is_visible,
        set_Is_visible,
        Custom_Modal
    }
}
