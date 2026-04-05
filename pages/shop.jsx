import React from 'react'
import {Link, useSearchParams} from "react-router-dom"
import { getItems } from '../api'
export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [fetchData, setFetchData] = React.useState(null)
React.useEffect(() => {
  async function loadData() {
    const data = await getItems()
    setFetchData(data)
  }
  loadData()
}, [])
    const typeFilter = searchParams.get("category")

    

const productData = fetchData
  ? (typeFilter
      ? fetchData.filter(item => item.category === typeFilter)
      : fetchData)
  : []

  const items = productData?.map(item=> {
    return (
  <Link to={`/shop/${item.id}`} key={item.id} >
    <div className="card">
      <img src={item.thumbnail} alt={item.title} />
      <h3>{item.title}</h3>
      <p className="price">${item.price}</p>
      <p className="stock">{item.availabilityStatus}</p>
    </div>
  </Link>
    )})
    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

  if(!fetchData){
    return (
    <>
      <h1>Loading...</h1>
    </>
  )
  }else{
    
    return(
    <section>
    <div className='filter-buttons'>
      <button onClick={()=>handleFilterChange("category","beauty")}>Beauty</button>
      <button onClick={()=>handleFilterChange("category","fragrances")}>Fragrances</button>
      <button onClick={()=>handleFilterChange("category","furniture")}>Furniture</button>
      <button onClick={()=>handleFilterChange("category","groceries")}>Groceries</button>
      
      {typeFilter?<button style={{background:'lime',color:"black"}} onClick={()=>handleFilterChange("category",null)}>Clear all...</button>:''}
    </div>
    <div className='grid-container'>
      {items}
    </div>
    </section>)
  }
  
}