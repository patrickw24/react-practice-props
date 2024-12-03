export const ProductCard = ({products})=>{

   

return(
    <>
    {products.map((product)=>(
        <div key={product.name} className="card mb-2 mt-2 col-3 mx-auto border-primary">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {product.price}
            </h6>
            <p className="card-text">{product.stock}</p>
          </div>
        </div>

    ))}
    </>
)

}