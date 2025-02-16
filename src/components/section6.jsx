import React from 'react'


const products = [
    { id: 1, name: 'iPhone 11 Pro Max', price: '$89.90', description: 'The harder you work for something, the greater you`ll feel when you achieve it.' },
    { id: 2, name: 'Macbook Air', price: '$199.90', description: 'Choosing The Right Path. The harder you work for something.' },
    { id: 3, name: 'iPad Pro', price: '$129.90', description: 'The harder you work for something, the greater you`ll feel when you achieve it.' }
  ];
  
const Section6 = () => {
  
    
  return (
    <>
 <section className="productSection">
      <div className="productContainer">
        {products.map((product) => (
          <div key={product.id} className="productCard">
            <div className="productImage">
              <svg width="64" height="64" fill="#D9DDE8" xmlns="http://www.w3.org/2000/svg">
                <polygon points="32,12 52,44 12,44" />
              </svg>
              <span className="productPrice">{product.price}</span>
            </div>
            <h3 className="productName">{product.name}</h3>
            <p className="productDescription">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  )
}

export default Section6
