import React, {
  useEffect, useState
} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
export default function Home() {
  const [search,setSearch]= useState('');
  const [foodCat, setfoodcat] = useState([]);
  const [foodItem, setfooditem] = useState([]);
  const loadData = async () => {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/api/foodData`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        
      }
    });
    response = await response.json();
    setfooditem(response[0]);
    setfoodcat(response[1]);
    //console.log(response[0],response[1]);
  }
  useEffect(() => {
    loadData()
  }, [])
  return (
    <div>
      <div><Navbar /></div>
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{ objectFit: "contain !important" }}>
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>

              <div className="d-flex justify-content-center">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
              </div>

            </div>
            <div className="carousel-item active">
              <img src="https://images.unsplash.com/photo-1604908554097-4bee4f690a8a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ "maxHeight": "700px" }} className="d-block  w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1600891964751-dc0cc8611e47?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ "maxHeight": "700px" }} className="d-block  w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" style={{ "maxHeight": "700px" }} className="d-block  w-100" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className='container'>
        {
          foodCat !=[]
            ? foodCat.map((data) => {
              return (<div className='row mb-3'>
                <div key={data._id} className='fs-3 m-3'>
                  {data.CategoryName}
                </div>
                <hr />
                {foodItem != [] ? foodItem.filter((item) => item.CategoryName == data.CategoryName&&(item.name.toLowerCase().includes(search.toLocaleLowerCase()))).map(filterItems => {
                  return (
                    <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                      <Card foodItem={filterItems}
                        options={filterItems.options[0]}
                        //imgsrc={filterItems.img}des={filterItems.description}
                        ></Card>
                    </div>
                  )
                }
                ) : <div>No such data found</div>}
              </div>

              )
            })
            : ""
        }
      </div>
      <div><Footer /></div>

    </div>
  )
}
