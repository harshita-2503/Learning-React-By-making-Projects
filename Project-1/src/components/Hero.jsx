const Hero=()=>{
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESEVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.
                YOUR FEET DESEVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES
                </p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary_btn">Category</button>

                </div>

                <div className="shopping">
                    Also Available on
                    <div className="brand-icons">
                        <img src="/images/amazon.png" alt="amazon-logo" />
                        <img src="/images/flipkart (1).png" alt="flipkart-logo" />
                    </div>
                </div>
            </div>

          
            <div className="hero-image">
            <img src="/images/shoe_image.png" alt="shaoe-image" />

            </div>
        </main>
    );
};

export default Hero