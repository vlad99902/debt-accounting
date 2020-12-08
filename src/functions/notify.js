import { toast } from 'react-toastify';

export default function notify(text = "Base message") {
  toast(
    text, {
    position: "bottom-right",
    autoClose: 4000,
    draggable: true,
    pauseOnFocusLoss: false,
    pauseOnHover: false
  })
}