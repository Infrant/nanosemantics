import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

export default () => {
    return (
            <LoadingButton
                size="small"
                // onClick={handleClick}
                endIcon={<SendIcon/>}
                // loading={loading}
                loadingPosition="end"
                variant="contained"
                style={{height: '38px', minWidth: "90px"}}
            >
                Send
            </LoadingButton>
    )
}