'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useFormStatus } from 'react-dom'
import Swal from 'sweetalert2'
export function SubmitButton() {
  const { pending, data } = useFormStatus()
 const [submitted,setSubmitted] = useState(false)

 const router = useRouter()
 useEffect(() => {
       // Display SweetAlert for successful login
       if(!pending && submitted){
        Swal.fire({
            icon: 'success',
            title: 'Login Successful',
            text: 'You have successfully logged in.',
            confirmButtonText: 'OK',
            confirmButtonColor: '#3085d6',
          }).then(() => {
              router.push("/")
          }) 
       }
 },[pending])

 useEffect(() => {
    if(data){
        setSubmitted(true)
    }
 },[data])

 return (
    <button type="submit" aria-disabled={pending} className="w-full bg-indigo-600 text-white rounded-md p-2">
        Submit
    </button>
  )
}