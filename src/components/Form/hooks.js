import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { checkUrl } from '../../store/mainSlice'

export const useHooks = () => {
  const [url, setUrl] = useState('')

  const dispatch = useDispatch()

  const handleChange = (e) => setUrl(e.currentTarget.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    dispatch(checkUrl(url))

    console.log(url)
  }

  return { url, handleChange, handleSubmit }
}
