import React, { useEffect, useState } from "react"
import { Toast, ToastBody, ToastHeader } from "reactstrap"

const ToastHandler = ({ toastMessage }) => {
  const [toastDisplay, setToastDisplay] = useState(false)

  useEffect(() => {
    if (toastMessage.header !== "") {
      setToastDisplay(true)
    }
  },[toastMessage])
  
  setTimeout(() => {
    if(toastDisplay === true){
      setToastDisplay(false)
    }
  }, 5000)

  return (
    <Toast className="toast" isOpen={toastDisplay}>
      <ToastHeader
        toggle={function noRefCheck() {
          setToastDisplay(false)
        }}
        className="toast-header"
      >
        {toastMessage.header}
      </ToastHeader>
      <ToastBody>{toastMessage.body}</ToastBody>
    </Toast>
  )
}

export default ToastHandler
