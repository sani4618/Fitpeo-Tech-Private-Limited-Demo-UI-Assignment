import React from 'react'

const Navbar = () => {
    return (
        <div>


            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <nav className="navbar bg-body-tertiary">
                            <div className="container-fluid">
                                <a className="navbar-brand">Hello Shahrukh 👋🏻, </a>
                                <form className="d-flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Navbar