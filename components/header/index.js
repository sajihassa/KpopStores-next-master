import Head from "next/head";
function index() {
  return (
    <>
      <a href="offer.html">
        <img src="images/download.png" class="img-head" alt="" />
      </a>
      <div class="header">
        <div class="container">
          <div class="logo">
          <a href="/index.html">
            <h1> K-POP Stores </h1>
          </a>

          </div>

          <div class="nav-top">
            <nav class="navbar navbar-default">
              <div class="navbar-header nav_2">
                <button
                  type="button"
                  class="navbar-toggle collapsed navbar-toggle1"
                  data-toggle="collapse"
                  data-target="#bs-megadropdown-tabs"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <br></br>
              <div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
                <ul class="nav navbar-nav">
                  <li class="active">
                    <a href="/" class="hyper">
                      <span>Home</span>
                    </a>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#"
                      class="dropdown-toggle hyper"
                      data-toggle="dropdown"
                    >
                      <span>
                        Admin<b class="caret"></b>
                      </span>
                    </a>
                    <ul class="dropdown-menu multi">
                      <div class="row">
                        <div class="col-sm-3">
                          <ul class="multi-column-dropdown">
                            <li>
                              <a href="/create">
                                <i
                                  class="fa fa-angle-right"
                                  aria-hidden="true"
                                ></i>
                                Create Products
                              </a>
                            </li>
                            <li>
                              <a href="/adminproduct">
                                <i
                                  class="fa fa-angle-right"
                                  aria-hidden="true"
                                ></i>
                                All Products
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </ul>
                  </li>

                  <li class="dropdown">
                    <a
                      href="#"
                      class="dropdown-toggle hyper"
                      data-toggle="dropdown"
                    >
                      <span>
                        User<b class="caret"></b>
                      </span>
                    </a>
                    <ul class="dropdown-menu multi">
                      <div class="row">
                        <div class="col-sm-3">
                          <ul class="multi-column-dropdown">
                            <li>
                              <a href="/">
                                <i
                                  class="fa fa-angle-right"
                                  aria-hidden="true"
                                ></i>
                                All Products
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                    </ul>
                  </li>
                </ul>
              </div>
            </nav>
            <br></br>
            <div class="cart">
              <a href="/cartUser">
                <i class="fa fa-shopping-cart "></i>
              </a>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
