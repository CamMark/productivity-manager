type Props = {
    timeRemaining: number
}

const Clock = ({timeRemaining}: Props) => {
  
  return (
    <p>{`${String(Math.floor(timeRemaining / 60)).padStart(2, "0")} :
                ${String(timeRemaining % 60).padStart(2, "0")}`}</p>
  )
}

export default Clock