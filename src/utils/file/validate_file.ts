export const Is_Word = (file: File) => {
    // const file = event.target.files[0];
    const maxSize = 3 * 1024 * 1024; // 3 megabytes

    if (file) {
        console.log({file})
        if (file.type !== 'application/msword' && file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
            
            // Invalid file type
            // setValue('file_word', null);
            const one = file.type !== 'application/msword'
            const two = file.type !== 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
            alert('Por favor, seleccione un archivo de Word válido.'+`${one}` +two);
            console.log({
                from:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                to:file.type
            })
           
            return false
        }
        return true
    }
};

export const Validate_Peso_File = (file:File,max_peso_megas:number)=>{
    if (file.size > (max_peso_megas * 1024 * 1024)) {
        // File size exceeds limit
        // alert('El tamaño del archivo excede el límite de 3 megabytes.');
        return false
    }
    return true
}