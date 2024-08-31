import toast from "react-hot-toast";

export const showToast = (text, styles) => {
  toast(text, {
    className: styles,
  });
};
