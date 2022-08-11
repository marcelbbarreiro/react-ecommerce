import "./SelectFighter.css";

function SelectFighter() {
  return (
    <>
    <div className="select_fighter__bg">
    <h3 className='select_fighter__text'>Select your <span className='fighter__word'>Fighter</span></h3>
    </div>
      <div className="select_fighter__container">
        <div className="select_fighter__container_fighter">
          <div className="select_fighter__container_fighter_info">
            <img
              src="https://image.shutterstock.com/image-photo/side-view-cool-golden-retriever-260nw-1926690362.jpg"
              alt=""
            />
            <p>PuPPY</p>
          </div>
        </div>
        <div className="select_fighter__container_fighter">
          <div className="select_fighter__container_fighter_info">
            <img
              src="https://image.shutterstock.com/image-photo/side-view-cool-golden-retriever-260nw-1926690362.jpg"
              alt=""
            />
            <p>PuPPY</p>
          </div>
        </div>
        <div className="select_fighter__container_fighter">
          <div className="select_fighter__container_fighter_info">
            <img
              src="https://image.shutterstock.com/image-photo/side-view-cool-golden-retriever-260nw-1926690362.jpg"
              alt=""
            />
            <p>PuPPY</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default SelectFighter;
