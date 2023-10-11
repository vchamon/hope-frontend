import { HTMLInputTypeAttribute, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { cpf } from 'cpf-cnpj-validator'
import InputMask from 'react-input-mask'

import { REQUIRED_FIELD_MESSAGE } from './config/constants'
import { capitalize } from './utils/transform'
import './styles/global.css'

const createUserFormSchema = z.object({
  name: z.string()
    .min(1, REQUIRED_FIELD_MESSAGE)
    .transform(capitalize),
  birthdate: z.string()
    .min(1, REQUIRED_FIELD_MESSAGE),
  socialId: z.string()
    .min(1, REQUIRED_FIELD_MESSAGE)
    .refine(cpf.isValid, 'Informe um CPF válido'),
  email: z.string()
    .min(1, REQUIRED_FIELD_MESSAGE)
    .email('Informe um e-mail válido')
    .toLowerCase(),
  telephone: z.string()
    .min(1, REQUIRED_FIELD_MESSAGE),
  address: z.string()
    .min(1, REQUIRED_FIELD_MESSAGE),
  mothersName: z.string()
    .min(1, REQUIRED_FIELD_MESSAGE),
  fathersName: z.string()
    .min(1, REQUIRED_FIELD_MESSAGE),
  areaId: z.string()
    .min(1, REQUIRED_FIELD_MESSAGE),
  subareaId: z.string()
    .min(1, REQUIRED_FIELD_MESSAGE),
})

type CreateUserFormData = z.infer<typeof createUserFormSchema>

type Field = {
  id: keyof CreateUserFormData
  type: HTMLInputTypeAttribute
  label: string
  mask?: string
}

export function App() {
  const [output, setOutput] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserFormData>({
    resolver: zodResolver(createUserFormSchema),
  })

  function createUser(data: unknown) {
    setOutput(JSON.stringify(data, null, 2))
  }

  const renderFields = useMemo(() => {
    const fields: Field[] = [
      {
        id: 'name',
        label: 'Nome',
        type: 'text'
      },
      {
        id: 'socialId',
        label: 'CPF',
        type: 'tel',
        mask: '999.999.999-99'
      },
      {
        id: 'birthdate',
        label: 'Data de nascimento',
        type: 'tel',
        mask: '99/99/9999'
      },
      {
        id: 'email',
        label: 'E-mail',
        type: 'text'
      },
      {
        id: 'telephone',
        label: 'Telefone',
        type: 'tel',
        mask: '(99) 9 9999-9999'
      },
      {
        id: 'address',
        label: 'Endereço',
        type: 'text'
      },
      {
        id: 'mothersName',
        label: 'Nome da mãe',
        type: 'text'
      },
      {
        id: 'fathersName',
        label: 'Nome do pai',
        type: 'text'
      },
      {
        id: 'areaId',
        label: 'Área',
        type: 'text'
      },
      {
        id: 'subareaId',
        label: 'Subárea',
        type: 'text'
      },
      {
        id: 'areaId',
        label: 'Área',
        type: 'text'
      },
      {
        id: 'subareaId',
        label: 'Subárea',
        type: 'text'
      },
    ]

    return fields.map((field) => (
      <div className='flex flex-col gap-1'>
        <label htmlFor={field.id}>{field.label}</label>
        {
          field.mask
            ? (
              <InputMask
                type={field.type}
                mask={field.mask}
                className='border border-zinc-200 shadow-sm rounded h-10 px-3'
                {...register(field.id)}
              />
            ) : (
              <input
                type={field.type}
                className='border border-zinc-200 shadow-sm rounded h-10 px-3'
                {...register(field.id)}
              />
            )
        }
        {errors[field.id] && <span>{errors[field.id]?.message}</span>}
      </div>
    ))
  }, [errors, register])

  return (
    <main className='bg-zinc-50 p-24 flex flex-col items-center justify-center'>
      <form
        onSubmit={handleSubmit(createUser)}
        className='flex flex-col gap-4 w-full max-w-sm'
      >
        {renderFields}

        <button
          type='submit'
          className='bg-emerald-500 rounded font-semibold text-white h-10 hover:bg-emerald-600'
        >
          Salvar
        </button>
      </form>

      <pre>{output}</pre>
    </main>
  )
}
