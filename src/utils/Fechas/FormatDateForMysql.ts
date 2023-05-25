export const FormartDateForMysql = (fecha: string)=>{
    const formattedDate = fecha.slice(0, 19).replace("T", " ");

    // const formattedDate = new Date().toISOString().slice(0, 19).replace("T", " ");
    return formattedDate
}