import React from 'react'
import Master from './Layout/Master'
import Axioss from '../config/Axiosss';
import Loader from './Components/Loader';
export default function Home() {
	const [loader, setLoader] = React.useState(true);
  const [data, setData] = React.useState({ data: [] });
  const [category, setCategory] = React.useState([]);
  const [selectedCategory, setSelectedCategory] = React.useState("");
	React.useEffect(() => {
		Axioss.get('/product').then(res => {
			setLoader(false);
			setData(res.data.data);
    });
    
    Axioss.get('/category').then(res => {
      setLoader(false);
      setCategory(res.data.data);
    });
	}, []);
	return (
		<Master>
			{
				loader ? (
					<Loader />
				) : (
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <div className="card p-3">
                    <div>
                      {category.map(d => (
                        <span className={selectedCategory == d.id ? 'btn btn-dark' : 'btn btn-outline-dark'} style={{ marginRight:3 }} key={d.id} onClick={()=>setSelectedCategory(d.id)}>{d.name}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12">
                  <div className='mb-2'>
                    <button className="btn btn-sm btn-primary">
                      <span className="fas fa-arrow-left"></span>                     
                    </button>
                    <button className="btn btn-sm btn-primary ms-2">
                      <span className="fas fa-arrow-right"></span> 
                    </button>
                  </div>
                </div>
								{
									data.data.map(d => {
										return (
											<div className="col-md-3" key={d.id}>
                        <div className="card">
                          <img src={`http://localhost:8000/images/${d.image}`}className='card-image' alt="" />
                          <div className="card-body">
                            <h4 className='text-center'>{d.name}</h4>
                            <div className="d-flex justify-content-between mt-3">
                              <span className="btn btn-sm btn-outline-warning">{d.price} ks</span>
                              <span className="btn btn-sm btn-danger">Add To Cart</span>
                            </div>
                          </div>
                        </div>
                      </div>
										)
									})
								}
							
						</div>
					</div>
				)
					
			}
			
			
		</Master>
	)
}
