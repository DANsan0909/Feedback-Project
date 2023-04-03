import spinner from '../../assets/react.svg'

export default function Spinner() {
  return (
    <div style={{  margin:' 50px auto', width:'20vw',display: 'flex',}}>
        <h2>waiting for server</h2>
        <img src={spinner} alt='Loading'  />
    </div>
  )
}
