import SPINNER from '../../assets/images/spinner.svg'

export const Loader = () => {
  return (
    <div className="loader">
      <img src={SPINNER} alt="loading-image" />
    </div>
  )
}

export default Loader
