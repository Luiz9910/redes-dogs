import { useState } from 'react'

const types = {
    email: {
        regex: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.[a-z]?$/i,
        message: "Preencha um email válido"
    },
    password: {
      regex:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8})$/,
      message: "A senha precisa ter 1 caracter maíusculo, 1 minúsculo e 1 digito. Com no mínimo 8 caracateres."
    }
}

const useForm = (type) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState(null)

    function validate(value) {
        if (type === false) return true;
        if (value.length == 0) {
            setError('Preencha um valor')
            return false;
        }

        if (types[type] && types[type].regex.test(value)) {
            setError(types[type].message)
            return false
        }

        setError(null)
        return true;
    }

    function onChange({target}) {
        if (error) validate(target.value);
        setValue(target.value);
    }

    return {
        value,
        setValue,
        onChange,
        validate: () => validate(value),
        onBlur: () => validate(value),
        error
    }
}

export default useForm
