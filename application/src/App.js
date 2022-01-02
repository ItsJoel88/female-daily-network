/* eslint-disable jsx-a11y/anchor-is-valid */
import "./App.css";
import "library/css/main.css";
import iconMenu from "library/images/icon-menu.png";
import fdLogo from "library/images/fd-logo.png";
import userPlaceholder from "library/images/placeholder_user.png";
import exampleProduct from "library/images/example-product.jpg";
import exampleBrand from "library/images/example-brand.jpg";
import exampleProductWeb from "library/images/example-product.webp";
import popularIcon from "library/images/popular-icon.png";
import iconAppStore from "library/images/icon-app-store.png";
import iconPlayStore from "library/images/icon-playstore.png";
import iconFB from "library/images/icon-fb.png";
import iconTwitter from "library/images/icon-twitter.png";
import iconIG from "library/images/icon-ig.png";
import iconYT from "library/images/icon-yt.png";

function App() {
  return (
    <>
      {/* <!-- HEADER --> */}
      <header className="main-header">
        <img
          src={iconMenu}
          alt="icon-menu"
          className="img-icon cursor-pointer"
        />
        <img src={fdLogo} alt="icon-company" className="img-logo" />
        <span className="input-search-wrapper w-half">
          <input
            type="text"
            placeholder="Search products, articles, topics, brands, etc"
            className="input-search w-full"
          />
        </span>
        <button className="btn btn-large">Login/Signup</button>
      </header>

      {/* <!-- NAVBAR --> */}
      <section className="navbar-container">
        <div className="navbar-menu">
          <a href="#"> Skincare </a>
        </div>

        <div className="navbar-menu">
          <a href="#"> Make up </a>
        </div>

        <div className="navbar-menu">
          <a href="#"> Body </a>
        </div>

        <div className="navbar-menu">
          <a href="#"> Hair </a>
        </div>

        <div className="navbar-menu">
          <a href="#"> Fragrance </a>
        </div>

        <div className="navbar-menu">
          <a href="#"> Nails </a>
        </div>

        <div className="navbar-menu">
          <a href="#"> Tools </a>
        </div>

        <div className="navbar-menu">
          <a href="#"> Brands </a>
        </div>
      </section>

      {/* <!-- CARD --> */}
      <section className="d-flex f-col align-items-center main-body">
        <div className="frame top-frame">Top Frame 970x50</div>
        <div className="frame billboard">Billboard 970x250</div>

        {/* <!-- EDITOR CHOICE --> */}
        <div className="section-card">
          <span className="section-title">Editor's Choice</span>
          <span className="section-subtitle">Curated with love</span>
          <div className="section-content">
            <div className="row gap-2">
              <div className="col-2">
                <div className="product-card">
                  <div className="head">
                    <img src={userPlaceholder} alt="user" />
                    <div className="info">
                      <span className="title">Arinda</span>
                      <span className="subtitle">Senior Editor</span>
                    </div>
                  </div>

                  <img
                    src={exampleProduct}
                    alt="product"
                    className="product-view"
                  />
                  <div className="rating-container">
                    <span className="rating product-rating">4.9</span>

                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star">&#x2605;</span>

                    <span className="rating product-rating-total">(7)</span>
                  </div>

                  <div className="info-container">
                    <span className="title">juice beauty</span>

                    <span className="subtitle">Pure pressed blush</span>

                    <span className="description">Neutral Rose</span>
                  </div>
                </div>
              </div>

              <div className="col-2">
                <div className="product-card">
                  <div className="head">
                    <img src={userPlaceholder} alt="user" />
                    <div className="info">
                      <span className="title">Arinda</span>
                      <span className="subtitle">Senior Editor</span>
                    </div>
                  </div>

                  <img
                    src={exampleProduct}
                    alt="product"
                    className="product-view"
                  />
                  <div className="rating-container">
                    <span className="rating product-rating">4.9</span>

                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star">&#x2605;</span>

                    <span className="rating product-rating-total">(7)</span>
                  </div>

                  <div className="info-container">
                    <span className="title">juice beauty</span>

                    <span className="subtitle">Pure pressed blush</span>

                    <span className="description">Neutral Rose</span>
                  </div>
                </div>
              </div>

              <div className="col-2">
                <div className="product-card">
                  <div className="head">
                    <img src={userPlaceholder} alt="user" />
                    <div className="info">
                      <span className="title">Arinda</span>
                      <span className="subtitle">Senior Editor</span>
                    </div>
                  </div>

                  <img
                    src={exampleProduct}
                    alt="product"
                    className="product-view"
                  />
                  <div className="rating-container">
                    <span className="rating product-rating">4.9</span>

                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star">&#x2605;</span>

                    <span className="rating product-rating-total">(7)</span>
                  </div>

                  <div className="info-container">
                    <span className="title">juice beauty</span>

                    <span className="subtitle">Pure pressed blush</span>

                    <span className="description">Neutral Rose</span>
                  </div>
                </div>
              </div>

              <div className="col-2">
                <div className="product-card">
                  <div className="head">
                    <img src={userPlaceholder} alt="user" />
                    <div className="info">
                      <span className="title">Arinda</span>
                      <span className="subtitle">Senior Editor</span>
                    </div>
                  </div>

                  <img
                    src={exampleProduct}
                    alt="product"
                    className="product-view"
                  />
                  <div className="rating-container">
                    <span className="rating product-rating">4.9</span>

                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star">&#x2605;</span>

                    <span className="rating product-rating-total">(7)</span>
                  </div>

                  <div className="info-container">
                    <span className="title">juice beauty</span>

                    <span className="subtitle">Pure pressed blush</span>

                    <span className="description">Neutral Rose</span>
                  </div>
                </div>
              </div>

              <div className="col-2">
                <div className="product-card">
                  <div className="head">
                    <img src={userPlaceholder} alt="user" />
                    <div className="info">
                      <span className="title">Arinda</span>
                      <span className="subtitle">Senior Editor</span>
                    </div>
                  </div>

                  <img
                    src={exampleProduct}
                    alt="product"
                    className="product-view"
                  />
                  <div className="rating-container">
                    <span className="rating product-rating">4.9</span>

                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star">&#x2605;</span>

                    <span className="rating product-rating-total">(7)</span>
                  </div>

                  <div className="info-container">
                    <span className="title">juice beauty</span>

                    <span className="subtitle">Pure pressed blush</span>

                    <span className="description">Neutral Rose</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- BANNER --> */}
        <div className="bg-pink banner-matches">
          <div className="row">
            <div className="col-6">
              <div className="row content">
                <div className="col-6">&nbsp;</div>
                <div className="col-6">
                  <p className="title">
                    Lookin for products that are just simply perfect for you?
                  </p>

                  <p className="subtitle">
                    Here are some products that we believe match your skin,
                    hair, and body! Have we mentioned that they solve your
                    concerns too?
                  </p>

                  <button className="btn btn-capitalize btn-small">
                    See my matches
                  </button>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="row gap-2">
                <div className="col-3">
                  <div className="product-card">
                    <img
                      src={exampleProduct}
                      alt="product"
                      className="product-view"
                    />
                    <p className="small-font font-bold color-main my-2">
                      Match skin type
                    </p>
                    <div className="rating-container">
                      <span className="rating product-rating">4.9</span>

                      <span className="rating-star filled">&#x2605;</span>
                      <span className="rating-star filled">&#x2605;</span>
                      <span className="rating-star filled">&#x2605;</span>
                      <span className="rating-star filled">&#x2605;</span>
                      <span className="rating-star">&#x2605;</span>

                      <span className="rating product-rating-total">(7)</span>
                    </div>

                    <div className="info-container">
                      <span className="title">juice beauty</span>

                      <span className="subtitle">Pure pressed blush</span>

                      <span className="description">Neutral Rose</span>
                    </div>
                  </div>
                </div>

                <div className="col-3">
                  <div className="product-card">
                    <img
                      src={exampleProduct}
                      alt="product"
                      className="product-view"
                    />
                    <p className="small-font font-bold color-main my-2">
                      Match skin type
                    </p>
                    <div className="rating-container">
                      <span className="rating product-rating">4.9</span>

                      <span className="rating-star filled">&#x2605;</span>
                      <span className="rating-star filled">&#x2605;</span>
                      <span className="rating-star filled">&#x2605;</span>
                      <span className="rating-star filled">&#x2605;</span>
                      <span className="rating-star">&#x2605;</span>

                      <span className="rating product-rating-total">(7)</span>
                    </div>

                    <div className="info-container">
                      <span className="title">juice beauty</span>

                      <span className="subtitle">Pure pressed blush</span>

                      <span className="description">Neutral Rose</span>
                    </div>
                  </div>
                </div>

                <div className="col-3">
                  <div className="product-card">
                    <img
                      src={exampleProduct}
                      alt="product"
                      className="product-view"
                    />
                    <p className="small-font font-bold color-main my-2">
                      Match skin type
                    </p>
                    <div className="rating-container">
                      <span className="rating product-rating">4.9</span>

                      <span className="rating-star filled">&#x2605;</span>
                      <span className="rating-star filled">&#x2605;</span>
                      <span className="rating-star filled">&#x2605;</span>
                      <span className="rating-star filled">&#x2605;</span>
                      <span className="rating-star">&#x2605;</span>

                      <span className="rating product-rating-total">(7)</span>
                    </div>

                    <div className="info-container">
                      <span className="title">juice beauty</span>

                      <span className="subtitle">Pure pressed blush</span>

                      <span className="description">Neutral Rose</span>
                    </div>
                  </div>
                </div>

                <div className="col-3">&nbsp;</div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame internal-campaign">
          <p>Horizontal 970x250</p>
          <p>(Internal campaign only)</p>
        </div>

        {/* <!-- LATEST ARTICLE --> */}
        <div className="section-card">
          <span className="section-title">Latest Articles</span>
          <span className="section-subtitle link">
            So you can make better purchase decision
            <span className="section-link">See more &#10095; </span>
          </span>
          <div className="section-content">
            <div className="row gap-2">
              <div className="article col-4">
                <img
                  src={exampleProductWeb}
                  alt="product-1"
                  className="article-thumbnail"
                />
                <p className="normal-font font-bold">
                  9 Best Face oils for Sensitive Skin
                </p>
                <span className="small-font font-bold color-blur-gray">
                  Username
                </span>
                <span className="small-font color-blur-gray">
                  {" "}
                  | 2 hours ago
                </span>
              </div>

              <div className="article col-4">
                <img
                  src={exampleProductWeb}
                  alt="product-1"
                  className="article-thumbnail"
                />
                <p className="normal-font font-bold">
                  9 Best Face oils for Sensitive Skin
                </p>
                <span className="small-font font-bold color-blur-gray">
                  Username
                </span>
                <span className="small-font color-blur-gray">
                  {" "}
                  | 2 hours ago
                </span>
              </div>

              <div className="article col-4">
                <img
                  src={exampleProductWeb}
                  alt="product-1"
                  className="article-thumbnail"
                />
                <p className="normal-font font-bold">
                  9 Best Face oils for Sensitive Skin
                </p>
                <span className="small-font font-bold color-blur-gray">
                  Username
                </span>
                <span className="small-font color-blur-gray">
                  {" "}
                  | 2 hours ago
                </span>
              </div>
            </div>

            <div className="row gap-2">
              <div className="article col-4">
                <img
                  src={exampleProductWeb}
                  alt="product-1"
                  className="article-thumbnail"
                />
                <p className="normal-font font-bold">
                  9 Best Face oils for Sensitive Skin
                </p>
                <span className="small-font font-bold color-blur-gray">
                  Username
                </span>
                <span className="small-font color-blur-gray">
                  {" "}
                  | 2 hours ago
                </span>
              </div>

              <div className="article col-4">
                <img
                  src={exampleProductWeb}
                  alt="product-1"
                  className="article-thumbnail"
                />
                <p className="normal-font font-bold">
                  9 Best Face oils for Sensitive Skin
                </p>
                <span className="small-font font-bold color-blur-gray">
                  Username
                </span>
                <span className="small-font color-blur-gray">
                  {" "}
                  | 2 hours ago
                </span>
              </div>

              <div className="article col-4">
                <img
                  src={exampleProductWeb}
                  alt="product-1"
                  className="article-thumbnail"
                />
                <p className="normal-font font-bold">
                  9 Best Face oils for Sensitive Skin
                </p>
                <span className="small-font font-bold color-blur-gray">
                  Username
                </span>
                <span className="small-font color-blur-gray">
                  {" "}
                  | 2 hours ago
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- LATEST REVIEWS --> */}
        <div className="d-flex section-card">
          <div className="w-half">
            <span className="section-title">Latest Reviews</span>
            <span className="section-subtitle link">
              So you can make better purchase decision
              <span className="section-link">See more &#10095; </span>
            </span>
            <div className="section-content">
              <div className="row">
                <div className="col-6">
                  <div className="review-card">
                    <div className="head">
                      <div className="view">
                        <img
                          src={exampleProduct}
                          alt="review-product"
                          className="img-product"
                        />

                        <div className="rating-container">
                          <span className="rating-star filled">&#x2605;</span>
                          <span className="rating-star filled">&#x2605;</span>
                          <span className="rating-star filled">&#x2605;</span>
                          <span className="rating-star filled">&#x2605;</span>
                          <span className="rating-star">&#x2605;</span>
                        </div>
                      </div>

                      <div className="info">
                        <span className="title">Val by Valerie Thomas</span>
                        <span className="subtitle">C E Ferulic</span>
                      </div>
                    </div>
                    <div className="content">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Laboriosam sunt nobis aperiam maiores quisquam temporibus,
                      eum quibusdam architecto quaerat ab mollitia iusto
                      reprehenderit molestias dolore quia dolor consectetur cum
                      esse!
                    </div>
                    <div className="footer">
                      <img src={userPlaceholder} alt="user" />
                      <span className="title"> Putri Deani </span>

                      <span className="subtitle">
                        {" "}
                        Combination Skin, 25-29{" "}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="review-card">
                    <div className="head">
                      <div className="view">
                        <img
                          src={exampleProduct}
                          alt="review-product"
                          className="img-product"
                        />

                        <div className="rating-container">
                          <span className="rating-star filled">&#x2605;</span>
                          <span className="rating-star filled">&#x2605;</span>
                          <span className="rating-star filled">&#x2605;</span>
                          <span className="rating-star filled">&#x2605;</span>
                          <span className="rating-star">&#x2605;</span>
                        </div>
                      </div>

                      <div className="info">
                        <span className="title">Val by Valerie Thomas</span>
                        <span className="subtitle">C E Ferulic</span>
                      </div>
                    </div>
                    <div className="content">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Laboriosam sunt nobis aperiam maiores quisquam temporibus,
                      eum quibusdam architecto quaerat ab mollitia iusto
                      reprehenderit molestias dolore quia dolor consectetur cum
                      esse!
                    </div>
                    <div className="footer">
                      <img src={userPlaceholder} alt="user" />
                      <span className="title"> Putri Deani </span>

                      <span className="subtitle">
                        {" "}
                        Combination Skin, 25-29{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-half">
            <span className="section-title">&nbsp;</span>
            <span className="section-subtitle">&nbsp;</span>
            <div className="section-content d-flex justify-end">
              <div className="frame frame-mr-2">MR2 300x250</div>
            </div>
          </div>
        </div>

        {/* <!-- POPULAR GROUPS --> */}
        <div className="section-card">
          <span className="section-title">Popular Groups</span>
          <span className="section-subtitle link">
            Where the beauty TALK are
            <span className="section-link">See more &#10095; </span>
          </span>
          <div className="section-content">
            <div className="row">
              <div className="col-3">
                <div className="popular-card">
                  <img src={popularIcon} alt="user-dp" />
                  <span className="title">Embrace the Curl</span>
                  <div className="popular-icons">
                    <a href="#"> &#9776; </a>
                    <a href="#"> &#x1F4AC; </a>
                    <a href="#"> &#x1F4AC; </a>
                  </div>
                  <span className="slogan">
                    May our curls pop and never stop!
                  </span>
                </div>
              </div>

              <div className="col-3">
                <div className="popular-card">
                  <img src={popularIcon} alt="user-dp" />
                  <span className="title">Embrace the Curl</span>
                  <div className="popular-icons">
                    <a href="#"> &#9776; </a>
                    <a href="#"> &#x1F4AC; </a>
                    <a href="#"> &#x1F4AC; </a>
                  </div>
                  <span className="slogan">
                    May our curls pop and never stop!
                  </span>
                </div>
              </div>

              <div className="col-3">
                <div className="popular-card">
                  <img src={popularIcon} alt="user-dp" />
                  <span className="title">Embrace the Curl</span>
                  <div className="popular-icons">
                    <a href="#"> &#9776; </a>
                    <a href="#"> &#x1F4AC; </a>
                    <a href="#"> &#x1F4AC; </a>
                  </div>
                  <span className="slogan">
                    May our curls pop and never stop!
                  </span>
                </div>
              </div>

              <div className="col-3">
                <div className="popular-card">
                  <img src={popularIcon} alt="user-dp" />
                  <span className="title">Embrace the Curl</span>
                  <div className="popular-icons">
                    <a href="#"> &#9776; </a>
                    <a href="#"> &#x1F4AC; </a>
                    <a href="#"> &#x1F4AC; </a>
                  </div>
                  <span className="slogan">
                    May our curls pop and never stop!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- LATEST VIDEOS --> */}
        <div className="section-card">
          <span className="section-title">Latest Videos</span>
          <span className="section-subtitle link">
            Watch and learn, ladies
            <span className="section-link">See more &#10095; </span>
          </span>
          <div className="section-content">
            <div className="row gap-2">
              <div className="col-6">
                <iframe
                  className="video-frame"
                  width="560"
                  height="100%"
                  src="https://www.youtube.com/embed/VTVTJJJJBA4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                  Unable to load the video
                </iframe>
              </div>
              <div className="col-6 d-flex f-col justify-between">
                <iframe
                  className="video-frame"
                  width="100%"
                  src="https://www.youtube.com/embed/VTVTJJJJBA4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                  Unable to load the video
                </iframe>
                <br />
                <iframe
                  className="video-frame"
                  width="100%"
                  src="https://www.youtube.com/embed/VTVTJJJJBA4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                >
                  Unable to load the video
                </iframe>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- TRENDING THIS WEEK --> */}
        <div className="section-card">
          <span className="section-title">Trending This Week</span>
          <span className="section-subtitle">
            See our weekly most reviewed products
          </span>
          <div className="section-content">
            <div className="row">
              <div className="col-2">
                <div className="product-card">
                  <img
                    src={exampleProduct}
                    alt="product"
                    className="product-view"
                  />
                  <div className="rating-container">
                    <span className="rating product-rating">4.9</span>

                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star">&#x2605;</span>

                    <span className="rating product-rating-total">(7)</span>
                  </div>

                  <div className="info-container">
                    <span className="title">juice beauty</span>

                    <span className="subtitle">Pure pressed blush</span>

                    <span className="description">Neutral Rose</span>
                  </div>
                </div>
              </div>

              <div className="col-2">
                <div className="product-card">
                  <img
                    src={exampleProduct}
                    alt="product"
                    className="product-view"
                  />
                  <div className="rating-container">
                    <span className="rating product-rating">4.9</span>

                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star">&#x2605;</span>

                    <span className="rating product-rating-total">(7)</span>
                  </div>

                  <div className="info-container">
                    <span className="title">juice beauty</span>

                    <span className="subtitle">Pure pressed blush</span>

                    <span className="description">Neutral Rose</span>
                  </div>
                </div>
              </div>

              <div className="col-2">
                <div className="product-card">
                  <img
                    src={exampleProduct}
                    alt="product"
                    className="product-view"
                  />
                  <div className="rating-container">
                    <span className="rating product-rating">4.9</span>

                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star">&#x2605;</span>

                    <span className="rating product-rating-total">(7)</span>
                  </div>

                  <div className="info-container">
                    <span className="title">juice beauty</span>

                    <span className="subtitle">Pure pressed blush</span>

                    <span className="description">Neutral Rose</span>
                  </div>
                </div>
              </div>

              <div className="col-2">
                <div className="product-card">
                  <img
                    src={exampleProduct}
                    alt="product"
                    className="product-view"
                  />
                  <div className="rating-container">
                    <span className="rating product-rating">4.9</span>

                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star">&#x2605;</span>

                    <span className="rating product-rating-total">(7)</span>
                  </div>

                  <div className="info-container">
                    <span className="title">juice beauty</span>

                    <span className="subtitle">Pure pressed blush</span>

                    <span className="description">Neutral Rose</span>
                  </div>
                </div>
              </div>

              <div className="col-2">
                <div className="product-card">
                  <img
                    src={exampleProduct}
                    alt="product"
                    className="product-view"
                  />
                  <div className="rating-container">
                    <span className="rating product-rating">4.9</span>

                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star">&#x2605;</span>

                    <span className="rating product-rating-total">(7)</span>
                  </div>

                  <div className="info-container">
                    <span className="title">juice beauty</span>

                    <span className="subtitle">Pure pressed blush</span>

                    <span className="description">Neutral Rose</span>
                  </div>
                </div>
              </div>

              <div className="col-2">
                <div className="product-card">
                  <img
                    src={exampleProduct}
                    alt="product"
                    className="product-view"
                  />
                  <div className="rating-container">
                    <span className="rating product-rating">4.9</span>

                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star filled">&#x2605;</span>
                    <span className="rating-star">&#x2605;</span>

                    <span className="rating product-rating-total">(7)</span>
                  </div>

                  <div className="info-container">
                    <span className="title">juice beauty</span>

                    <span className="subtitle">Pure pressed blush</span>

                    <span className="description">Neutral Rose</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- TOP BRANDS --> */}
        <div className="section-card">
          <span className="section-title">Top Brands</span>
          <span className="section-subtitle link">
            We all know and love
            <span className="section-link">See more &#10095; </span>
          </span>
          <div className="section-content">
            <div className="row">
              <div className="col-2">
                <img src={exampleBrand} alt="brand" className="img-brand" />
              </div>

              <div className="col-2">
                <img src={exampleBrand} alt="brand" className="img-brand" />
              </div>

              <div className="col-2">
                <img src={exampleBrand} alt="brand" className="img-brand" />
              </div>

              <div className="col-2">
                <img src={exampleBrand} alt="brand" className="img-brand" />
              </div>

              <div className="col-2">
                <img src={exampleBrand} alt="brand" className="img-brand" />
              </div>

              <div className="col-2">
                <img src={exampleBrand} alt="brand" className="img-brand" />
              </div>
            </div>
          </div>
        </div>

        <div className="section-card">
          <span className="section-title">
            Female Daily - Find everything you want to know about beauty on
            Female Daily
          </span>
          <div className="section-content">
            <span className="normal-font font-weight-500">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
              facilis a ipsa harum magnam esse sed quasi, perferendis dolores,
              doloribus totam ad odio porro eligendi ducimus non enim quisquam?
              Non.
            </span>
          </div>
        </div>
      </section>

      {/* <!-- FOOTER --> */}
      <footer className="main-footer">
        <div className="section link-section">
          <div className="left-section">
            <div className="row">
              <div className="col-4">
                <span className="small-font font-bold">About Us</span>
              </div>
              <div className="col-4">
                <span className="small-font font-bold">Terms & Conditions</span>
              </div>
              <div className="col-4">
                <span className="small-font font-bold">Awards</span>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <span className="small-font font-bold">Feedback</span>
              </div>
              <div className="col-4">
                <span className="small-font font-bold">Privacy Policy</span>
              </div>
              <div className="col-4">
                <span className="small-font font-bold">Newsletter</span>
              </div>
            </div>

            <div className="row">
              <div className="col-4">
                <span className="small-font font-bold">Contact</span>
              </div>
              <div className="col-4">
                <span className="small-font font-bold">Help</span>
              </div>
              <div className="col-4"></div>
            </div>
          </div>
          <div className="right-section">
            <div className="row">
              <div className="col-6">&nbsp;</div>

              <div className="col-6">
                <span className="small-font font-bold">
                  Download Our Mobile App
                </span>
              </div>
            </div>

            <div className="row">
              <div className="col-6">&nbsp;</div>

              <div className="col-6">
                <img src={iconAppStore} alt="app-store" className="img-store" />
                <img
                  src={iconPlayStore}
                  alt="play-store"
                  className="img-store"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section logo-section">
          <div className="left-section">
            <div className="row">
              <div className="col-6">
                <img src={fdLogo} alt="icon-company" className="img-logo" />
              </div>
            </div>
          </div>

          <div className="right-section social-media">
            <div className="row">
              <div className="col-6">&nbsp;</div>

              <div className="col-6">
                <img src={iconFB} alt="icon-fb" className="img-icon" />
                <img
                  src={iconTwitter}
                  alt="icon-twitter"
                  className="img-icon"
                />
                <img src={iconIG} alt="icon-ig" className="img-icon" />
                <img src={iconYT} alt="icon-youtube" className="img-icon" />
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="row">
            <div className="col-6">
              <span className="section-subtitle">
                Copyright @ 2015 - 2017 Female Daily Network ● All right
                reserved
              </span>
            </div>
          </div>
        </div>

        <div className="frame bottom-frame">
          Bottom Frame 970x50, 468x60, 320x50
        </div>
      </footer>
    </>
  );
}

export default App;
