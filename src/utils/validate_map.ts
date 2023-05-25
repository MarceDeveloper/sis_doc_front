export const validate_map = <T>(array_value: T[]) =>{
    if (typeof array_value === 'object' && array_value !== null && typeof array_value.map === 'function') {
        return array_value
    }else{
        const arr: T[] = []
        return arr
    }

}

