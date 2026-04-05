export default function Home() {
  return (
    <section className="home-section">
      <div className="home-content">
        <h2>Welcome to DummyShop</h2>
        <p>Your Premium Destination for Quality Products</p>
        <div className="home-features">
          <div className="feature">
            <h3>Wide Selection</h3>
            <p>Browse through thousands of premium products across multiple categories including beauty, fragrances, furniture, and groceries.</p>
          </div>
          <div className="feature">
            <h3>Secure Shopping</h3>
            <p>Shop with confidence using Supabase authentication. Your account and purchases are protected with enterprise-grade security.</p>
          </div>
          <div className="feature">
            <h3>Easy Navigation</h3>
            <p>Intuitive browsing experience with advanced filtering options. Find exactly what you're looking for in seconds.</p>
          </div>
        </div>
      </div>
    </section>
  )
}