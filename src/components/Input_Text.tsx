import React from 'react'

export const Input_Text = () => {
  return (
    <div>Input_Text</div>
  )
}

// import React from 'react'
// import { Control, Controller, ControllerProps, FieldErrors, FieldValues } from 'react-hook-form'

// interface I_Props<T_Iform extends FieldValues>{
//   propsController:ControllerProps
//   placeholder:string
//   errors:FieldErrors<T_Iform>
//   control:Control<T_Iform, any>
//   label:string
//   FormControllProps?:IFormControlProps
// }



// export const Input_Text = <T_Iform extends FieldValues,>({
//   propsController,
//   errors,
//   control,
//   label
// }:I_Props<T_Iform>) => {

//   const renderError = ()=>{
//     const err = errors as any
//     return(
//       err[`${propsController.name}`].message
//     )
//   }

//   return (
//     <FormControl w={["100%","48%"]} isRequired isInvalid={"Nombre" in errors}>
//         <FormControl.Label>{label}</FormControl.Label>
//         <Controller
//           control={control }
//           render={(ren) => (
//             <Input
//               placeholder="John"
//               onChangeText={(val: string) => ren.field.onChange(val)}
//               value={ren.field.value}
//             />
//           )}
//           name={propsController.name as any}
//           rules={{ required: "el nombre es obligatorio", minLength: 3 }}
//           defaultValue={propsController.defaultValue}
//         />
//         <Text color={"error.600"}>
//           {renderError()}
//         </Text>
        
        
//       </FormControl>
//   )
// }
