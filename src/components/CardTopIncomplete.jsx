

const CardTopIncomplete = (props) => {
  return (
    <>
      <div className="card_top">
        <div className="card_top_left">
            <small id="incomplete"></small>
          <p> {props.name}</p>
        </div>
        <div className="card_top_right">
          <span>0</span>
        </div>
      </div>
    </>
  )
}

export default CardTopIncomplete