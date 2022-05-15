import { message } from "antd"

export const successMessage = (content) => {
    message.success({
        content,
        className: "mt-5"
    })
}

export const errorMessage = (content = "Something went wrong") => {
    message.error({
        content, className: "mt-5"
    })
}