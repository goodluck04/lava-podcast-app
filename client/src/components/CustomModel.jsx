
import React from 'react'
import { Modal, Box } from "@mui/material"


const CustomModel = ({ open, setOpen, component: Component }) => {
    const handleClose = () => {
        setOpen(false);
      };
    return (
        <div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                // Top 
                    className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white rounded-[8px] shadow p-4 outline-none"
                >
                    <Component setOpen={setOpen} handleClose={handleClose} />
                </Box>
            </Modal>
        </div>
    )
}

export default CustomModel