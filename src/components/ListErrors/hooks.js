import { useSelector } from 'react-redux'

export const useData = () => {
  const status = useSelector((state) => state.main.status)
  const impacts = useSelector((state) => state.main.data?.impacts)

  return { status, impacts }
}

export const useGetNodes = () => {
  const formatedNodes = useSelector((state) => state.main.data?.formatedNodes)

  return { formatedNodes }
}
