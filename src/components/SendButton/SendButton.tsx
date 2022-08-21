import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";

interface SendButtonProps {
    isDisabled: boolean
    isSendingMessage: boolean
    onSendMessage: () => void
}

export default React.memo(({isDisabled, onSendMessage, isSendingMessage}: SendButtonProps) => {
        return (
            <LoadingButton
                size="small"
                endIcon={<SendIcon/>}
                loading={isSendingMessage}
                loadingPosition="end"
                variant="contained"
                disabled={isDisabled}
                style={{height: '40px', minWidth: "100px"}}
                onClick={onSendMessage}
            >
                Send
            </LoadingButton>
        )
    }
)