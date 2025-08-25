import React from 'react';

function ProductPage() {
  const handleBuyNow = () => { alert('Thank you! We will contact you soon.'); };

  return (
    <div>
      <h1>Our Products</h1>
      <p>Here you can see all our products.</p>
      <button onClick={handleBuyNow}>Buy Now</button>
    </div>
  );
}

export default ProductPage;
