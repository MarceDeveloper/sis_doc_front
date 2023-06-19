export const error_message_api = (error:any)=>{
    return error.response.data.error.message as string
}