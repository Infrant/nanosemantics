import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

interface SendButtonProps {
    isDisabled: boolean
}

export default ({isDisabled}: SendButtonProps) => {
    return (
            <LoadingButton
                size="small"
                // onClick={handleClick}
                endIcon={<SendIcon/>}
                // loading={loading}
                loadingPosition="end"
                variant="contained"
                disabled={isDisabled}
                style={{height: '38px', minWidth: "90px"}}
            >
                Send
            </LoadingButton>
    )
}