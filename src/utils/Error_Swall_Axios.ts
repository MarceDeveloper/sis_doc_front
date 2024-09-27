import { AxiosError } from "axios"
import { ReactSwal } from "./ReactSwall/ReactSwall"

export const Error_Sawall = (error: AxiosError<{message:string}>) => {
    ReactSwal.fire({
        title: "error",
        icon: "error",
        text: error.response?.data?.message as string
    })
}