import React from 'react'
import {useState , useEffect} from 'react'
import { useParams ,Link } from 'react-router-dom'
import{Row,Col,Image,ListGroup,ListGroupItem,Card} from 'react-bootstrap'
import Rating from './Rating'
import Footer from './Footer'
import { useSelector } from 'react-redux'
import { restaurantListReducer } from '../reducers/restaurantReducer'
function RestaurantDetails() {
  // const[restaurants, setRestaurants]= useState([])
  const{ id } = useParams()
  const detailsPageContent=useSelector(state=>state.restaurantList)
  const{restaurant} =detailsPageContent
  // useEffect(()=>{
  //   const fetchData=async()=>{
  //     await fetch('/restaurants.json')
  //     .then((res)=>res.json())
  //     .then((data)=>setRestaurants(data.restaurants))
  //   }
  //   fetchData();
  // },[])
  const details =restaurant.find((i)=>i.id == id)
  console.log("details",details);
  return (
    <>
    <Link className='btn btn-outline-dark my-2 rounded btn-sm' to ="/"> Back</Link>
    
      {details ? (
        <Row className="my-3">
        <Col md={3}>
        <Image className='img' src={details.photograph} alt={details.name} fluid />
        </Col>
        <Col md={4}>
        <ListGroup.Item>
        <h2>{details.name}</h2>
        <p>{details.neighborhood}</p>
        </ListGroup.Item>
        <ListGroup.Item>
        <p>Cuisine:{details.cuisine_type}</p>
    </ListGroup.Item>
    <ListGroup.Item>
        
        <p>Address:{details.address}</p>
        </ListGroup.Item>
        </Col>
        <Col md={4}>
        <ListGroup.Item>
        
        <h4>OperatingHrs:</h4>
        <p>monday:{details.operating_hours.Monday}</p>
        <p>tuesday:{details.operating_hours.Monday}</p>
        <p>wednesday:{details.operating_hours.Monday}</p>
        <p>thusday:{details.operating_hours.Monday}</p>
        <p>friday:{details.operating_hours.Monday}</p>

        </ListGroup.Item>
        
        
        
        </Col>
        <Row>
          <Col className='my-3 mx-3 p-3 rounded'><Rating data={details.reviews} /></Col>
        </Row>
        </Row>
      
       
      ): "null"}
      <Row>
        <Col>
        <Footer/>        </Col>
      </Row>
    </>
  )
}

export default RestaurantDetails