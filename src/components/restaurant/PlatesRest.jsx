import styled from 'styled-components'
import "../../index.css"

export const PlatesRest = () => {
  return (
    <div>
      <RestDetails>
        <img className="image-rest" src="/images/logo-rest.png" alt="" / >
          <div className="rest-details-wrap">
            <h2 className="rest-details-name">Kei Ef Ci</h2>
            <p className="rest-details-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi cum perspiciatis, voluptate saepe, excepturi animi autem.</p>
          </div>
      </RestDetails>
      <ListPlates>
        <ListPlate >
          <Img src="/images/pollo-2.jpeg" alt="pollo"/>
          <div className="list-plate-description">
            <h3 className="title-plate">Name Plate</h3>
            <span>S/. 30.00</span>
            <Button>Agregar</Button>
          </div>
        </ListPlate>
        <ListPlate >
          <Img src="/images/pollo.jpg" alt="pollo"/>
          <div className="list-plate-description">
            <h3 className="title-plate">Name Plate</h3>
            <span>S/. 30.00</span>
            <Button>Agregar</Button>
          </div>
        </ListPlate>
        <ListPlate >
          <Img src="/images/pollo-2.jpeg" alt="pollo"/>
          <div className="list-plate-description">
            <h3 className="title-plate">Name Plate</h3>
            <span>S/. 30.00</span>
            <Button>Agregar</Button>
          </div>
        </ListPlate>
        <ListPlate >
          <Img src="/images/pollo.jpg" alt="pollo"/>
          <div className="list-plate-description">
            <h3 className="title-plate">Name Plate</h3>
            <span>S/. 30.00</span>
            <Button>Agregar</Button>
          </div>
        </ListPlate>
      </ListPlates>
    </div>
  )
}



const ListPlates = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-template-rows: repeat(5, 200px);
  gap: 20px;
  padding: 20px 40px;
`

const ListPlate = styled.div`
  background: #fff;
  border-radius: 12px;
  display: flex;
  box-shadow: 0 3px 3px rgb(0 0 0 / 10%);
  overflow: hidden;
`

const Button = styled.button`
  background-color: #165a4b;
  border-radius: 20px;
  font-weight: bold;
  letter-spacing: 0.5px;
  padding: 7px 20px;
  color: #fff;
`

const Img = styled.img`
  width: 50%;
  heigth: 100%;
`

const RestDetails = styled.div`
  padding: 20px 40px;
  display: flex;
  gap: 20px;
`