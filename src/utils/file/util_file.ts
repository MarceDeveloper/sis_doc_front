export class util_file {
    constructor() {
        
    }
    Convert_File_To_ArraryBit(file: File): Promise<Uint8Array> {
        return new Promise<Uint8Array>((resolve, reject) => {
          const reader = new FileReader();
      
          reader.onload = (event) => {
            const fileData = event.target?.result;
            const uint8Array = new Uint8Array(fileData as ArrayBuffer);
      
            resolve(uint8Array);
          };
      
          reader.onerror = (event) => {
            reject(new Error('Error al leer el archivo'));
          };
      
          reader.readAsArrayBuffer(file);
        });
    }
    // async Convert_File_To_ArraryBit (file:File) : Promise<Uint8Array>{
    //     let res = null
        
    //     const reader = new FileReader();

    //     reader.onload = (e) => {
    //         console.log("e ",e)
    //         const fileData = e.target?.result;
    //         const uint8Array = new Uint8Array(fileData as ArrayBuffer);

    //         // Realizar acciones con el arreglo de bytes (Uint8Array)
    //         res =  uint8Array
    //         return res
    //     };
    //     reader.readAsArrayBuffer(file as any);
        
    // }
        
}