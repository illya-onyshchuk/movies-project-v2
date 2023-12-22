import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import PropTypes from "prop-types";

import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Typography,
  Modal,
  Paper,
  InputBase,
  Divider,
  IconButton,
  Alert,
  Snackbar,
} from "@mui/material";

import { SocialShare } from "../../components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 24,
  p: 4,
};

const ConfirmModal = ({ open, url, title, onClose }) => {
  const [state, setState] = useState({
    openAlert: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, openAlert } = state;

  const handleClick = (newState) => () => {
    setState({ ...newState, openAlert: true });
  };

  const handleClose = () => {
    setState({ ...state, openAlert: false });
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            mt: "24px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="List URL"
            inputProps={{ "aria-label": "list URL" }}
            value={url}
          />
          {/* <Link component={RouterLink} to="recommend">
            <IconButton sx={{ p: "10px" }} aria-label="preview">
              <RemoveRedEyeOutlinedIcon />
            </IconButton>
          </Link> */}
          <IconButton
            href={url}
            target="_blank"
            sx={{ p: "10px" }}
            aria-label="preview"
          >
            <RemoveRedEyeOutlinedIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <CopyToClipboard text={url}>
            <IconButton
              onClick={handleClick({ vertical: "top", horizontal: "center" })}
              color="primary"
              sx={{ p: "10px" }}
              aria-label="copy to clipboard"
            >
              <ContentCopyRoundedIcon />
            </IconButton>
          </CopyToClipboard>
        </Paper>

        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h3"
          sx={{ pt: "12px" }}
        >
          Share with frends
        </Typography>

        <SocialShare url={url} title={title} />

        {openAlert ? (
          <Snackbar
            autoHideDuration={500}
            anchorOrigin={{ vertical, horizontal }}
            open={openAlert}
            onClose={handleClose}
            key={vertical + horizontal}
          >
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={handleClose}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mt: "-20px" }}
            >
              Copied!
            </Alert>
          </Snackbar>
        ) : null}
      </Box>
    </Modal>
  );
};

ConfirmModal.propTypes = {
  open: PropTypes.bool,
  url: PropTypes.string,
  title: PropTypes.string,
  onClose: PropTypes.func,
};

export default ConfirmModal;
