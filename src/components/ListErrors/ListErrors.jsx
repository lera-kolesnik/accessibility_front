import { useData } from './hooks'
import Impact from './Impacts'
import './ListErrors.css'

const ORDER_IMPACT = ['critical', 'serious', 'minor', 'moderate']

export default function ListErrors() {
  const { status, impacts } = useData()

  if (status === 'awaiting') {
    return null
  }

  if (status === 'loading') {
    return (
      <div className="loader-wrapper">
        <div className="loader">
          <p className="visually-hidden">
            Loading data
          </p>
        </div>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="error-message">
        Sorry, this url invalid!
      </div>
    )
  }

  return (
    <div className="errors-list">
      <p className="errors-list__title">List of found errors:</p>
      {ORDER_IMPACT.map((impact) => (
        <Impact impact={impact} errors={impacts[impact]} />
      ))}
    </div>
  )
}
