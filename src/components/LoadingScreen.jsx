function LoadingScreen({ loading }) {
  return (
    <div className={`loading-screen ${!loading ? 'hidden' : ''}`} id="loadingScreen">
      <div className="loader-ring"></div>
      <div className="loading-text">Initializing Experience...</div>
    </div>
  )
}

export default LoadingScreen

