import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Controller, useForm } from 'react-hook-form'
import { TextField, Button } from '@mui/material'
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup'


// const schema = yup
//   .object({
//     firstName: yup.string().required(),
//     age: yup.number().positive().integer().required(),
//   })
//   .required()


const loginSchema = yup.object({
  email: yup.string().required(),
  password: yup.string().required().min(6).max(8)
})



function App() {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")



  // const submiHandler = (event) => {
  //   event.preventDefault()
  //   console.log("event", email, password)

  //   setEmail("")
  //   setPassword("")

  // }
  // console.log(useForm())

  const { register, handleSubmit, reset, formState: { errors }, watch, control } = useForm({
    defaultValues: {
      email: "",
      password: ""
    },
    resolver: yupResolver(loginSchema),
    mode: "onSubmit"
  })


  // const email = watch("email")
  // console.log("email", email)


  const submitHandler = (obj) => {
    console.log("submitHandler", obj)
    // reset()
  }

  console.log("errors", errors)

  return (
    <>
      {/* <form onSubmit={submiHandler} >
        <input type="text" placeholder='Email Address'
          onChange={e => setEmail(e.target.value)}
          value={email}
        />
        <input type="text" placeholder='Password'
          onChange={e => setPassword(e.target.value)}
          value={password}
        />
        <button>Login</button>
      </form> */}


      {/* <form onSubmit={handleSubmit(submitHandler)} >
        <input type="text" placeholder='Email Address'
          {...register("email")}
        />
        <input type="text" placeholder='Password'
          {...register("password", {
            // min: 8,
            // max: 8
            required: "Required Field",
            minLength: {
              value: 6,
              message: "min 6 char"
            }
          })}
        />
        {
          errors?.password ? <span> {errors?.password?.message} </span> : null
        }
        <button>Login</button>
        <button type='button' onClick={() => reset()} >RESET</button>
      </form> */}


      <form onSubmit={handleSubmit(submitHandler)} >
        <Controller
          name='email'
          control={control}
          render={({ field, formState: { errors } }) =>
            <TextField label="email"  {...field}
              error={errors.email}
              helperText={errors?.email?.message}
            />

          }

        />

        <br />
        <Controller
          name='password'
          control={control}
          render={({ field, formState: { errors } }) =>
            <TextField label="password" {...field}
              error={errors.password}
              helperText={errors?.password?.message}
            />
          }
        />

        <br />
        <Button variant='contained' type='submit' >LOGIN</Button>
      </form>




    </>
  )
}

export default App


// https://blog.logrocket.com/using-material-ui-with-react-hook-form/