import React from 'react';
import { useForm } from 'react-hook-form';
import { Box, Button, TextField, Typography } from '@mui/material';
import { service_sesion } from '../../api/service_sesion';
import { ReactSwal } from '../../utils';
import { useNavigate } from 'react-router-dom';

interface FormValues {
    nick:string
    old_password: string;
    new_password: string;
    confirmPassword: string;
}

const ChangePasswordForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm<FormValues>();
    const navigate = useNavigate();

    // const newPassword = watch('new_password');
    // const newPassword = watch('old_password');

    // const nick = watch('new_password');
    const onSubmit = async (data: FormValues) => {
        if (data.new_password !== data.confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return;
        }
        try {
            const res = await service_sesion.change_password_by_nick_and_pass(data.nick,data.old_password,data.new_password,)
            await ReactSwal.fire({icon:"success",text:"contraseña cambiada con exito"})
            navigate("/")
        } catch (error) {
            console.log(error)
            ReactSwal.fire({icon:"error",text:"error al cambiar de contraseña"})
        }
        console.log('Contraseña cambiada:', data);
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 2, p: 2, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}
        >
            <Typography variant="h6" gutterBottom>
                Cambiar contraseña
            </Typography>
            <TextField
                label="Usuario"
                type="text"
                fullWidth
                margin="normal"
                {...register('nick', { required: 'Usuario requerido' })}
                error={!!errors.nick}
                helperText={errors.nick?.message}
            />
            <TextField
                label="Contraseña actual"
                type="password"
                fullWidth
                margin="normal"
                {...register('old_password', { required: 'La contraseña actual es obligatoria' })}
                error={!!errors.old_password}
                helperText={errors.old_password?.message}
            />
            <TextField
                label="Nueva contraseña"
                type="password"
                fullWidth
                margin="normal"
                {...register('new_password', { required: 'La nueva contraseña es obligatoria' })}
                error={!!errors.new_password}
                helperText={errors.new_password?.message}
            />
            <TextField
                label="Confirmar nueva contraseña"
                type="password"
                fullWidth
                margin="normal"
                {...register('confirmPassword', { required: 'Confirma la nueva contraseña' })}
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword?.message}
            />
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                Cambiar contraseña
            </Button>
        </Box>
    );
};

export default ChangePasswordForm;
