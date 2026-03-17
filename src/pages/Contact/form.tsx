// @ts-nocheck
import { useForm, Controller } from 'react-hook-form'
import { Button, TextField } from '@mui/material'
import InputMask from 'react-input-mask'
import { useCallback } from 'react'
import { Contacts } from '../../config/constants'

export interface FormFields {
  name: string
  phone: string
  subject: string
  message: string
}

export const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormFields>()

  const submit = useCallback(({ name, phone, subject, message }: FormFields) => {
    const body = `${message}\nAtenciosamente, ${name}\nContato: ${phone}`
    window.location.href = `mailto:${Contacts.EMAIL}?subject=${encodeURI(subject)}&body=${encodeURI(body)}`
  }, [])

  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-col gap-4'>
      <Controller
        name="name"
        control={control}
        rules={{ required: 'O nome é obrigatório' }}
        render={
          ({ field }) => (
            <div>
              <TextField
                {...field}
                id="name"
                label="Nome completo *"
                variant="outlined"
                size="small"
                fullWidth
                error={!!errors.name}
              />
              {errors.name && (
                <span className='text-red-600 text-xs'>{errors.name.message}</span>
              )}
            </div>
          )
        }
      />

      <Controller
        name="phone"
        control={control}
        rules={{
          required: 'O telefone é obrigatório',
          minLength: {
            value: 9,
            message: 'Telefone inválido'
          }
        }}
        render={
          ({ field }) => (
            <div>
              <InputMask
                {...field}
                mask={field.value?.length <= 10 ? '(99) 9999-9999?' : '(99) 99999-9999'}
                maskChar=""
                onChange={(evt) => {
                  field.onChange(evt.target.value.replace(/[^0-9]+/g, ''))
                }}
                formatChars={{ 9: '[0-9]', '?': '[0-9 ]' }}
                alwaysShowMask={false}>
                {() => (
                  <TextField
                    label="Telefone *"
                    variant="outlined"
                    size="small"
                    fullWidth
                    error={!!errors.phone}
                  />
                )}
              </InputMask>

              {errors.phone && (
                <span className='text-red-600 text-xs'>{errors.phone.message}</span>
              )}
            </div>
          )
        }
      />

      <Controller
        name="subject"
        control={control}
        rules={{
          required: 'O assunto é obrigatório',
          minLength: {
            value: 5,
            message: 'Mínimo de 5 caracteres'
          }
        }}
        render={
          ({ field }) => (
            <div>
              <TextField
                {...field}
                label="Assunto *"
                variant="outlined"
                size="small"
                fullWidth
                error={!!errors.subject}
              />
              {errors.subject && (
                <span className='text-red-600 text-xs'>{errors.subject.message}</span>
              )}
            </div>
          )
        }
      />

      <Controller
        name="message"
        control={control}
        rules={{
          required: 'A mensagem é obrigatória',
          minLength: {
            value: 10,
            message: 'Mínimo de 10 caracteres'
          }
        }}
        render={
          ({ field }) => (
            <div>
              <TextField
                {...field}
                label="Mensagem *"
                variant="outlined"
                size="small"
                fullWidth
                multiline
                minRows={5}
                error={!!errors.message}
              />
              {errors.message && (
                <span className='text-red-600 text-xs'>{errors.message.message}</span>
              )}
            </div>
          )
        }
      />

      <Button
        type='submit'
        variant='contained'
        style={{ backgroundColor: 'var(--primary500)', marginTop: "1rem" }}
      >
        Enviar
      </Button>
    </form>
  )
}
