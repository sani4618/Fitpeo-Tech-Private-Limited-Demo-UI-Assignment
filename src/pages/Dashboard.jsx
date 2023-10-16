import React, { useState } from 'react'
import { Chart } from "react-google-charts";
import Navbar from '../components/Navbar';

const Dashboard = () => {
    const [datas, SetData] = useState(
        {
            "earnings": {
                "value": "198", "percentage": "37.8"
            },
            "orders":
            {
                "value": "2.4", "percentage": "2"
            },
            "Balance":
            {
                "value": "2.4", "percentage": "2"
            },
            "Sales":
            {
                "value": "89", "percentage": "11"
            },


        }
    )

   
    const styledata = { "max-width": 440 }
    const data = [
        ["Month", "Sales"],
        ["Jan", 600],
        ["Feb", 500],
        ["Mar", 1000],
        ["Apr", 850],
        ["May", 950],
        ["Jun", 400],
        ["Jul", 950],
        ["Aug", 1100],
        ["Sep", 1010],
        ["oct", 850],
        ["Nov", 800],
        ["Dec", 950],
    ];

    const options = {
        chart: {

            title: "Overview",
            subtitle: "monthly Earning",
        },
    };

    const don_data = [
        ["Task", "Hours per Day"],
        ["Work", 11],


        ["Sleep", 7], // CSS-style declaration
    ];

    const don_options = {
        title: "Customers",
        subtitle: "Customers that buy products",
        pieHole: 0.6,
        is3D: false,
    };


    return (
        <div>
          
<Navbar/>

            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row">
                            <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex align-items-stretch">

                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTsepVTLfymKJack5lBKif_PXmmoLL-WMrRGJ_qPUdLqkvkJQK2" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <p className="card-text"><small className="text-body-secondary">Earnings</small></p>
                                                <p className="card-text"><h1><b>${datas.earnings.value}k</b></h1></p>
                                                <p className="card-text"><small className="text-body-secondary"><div><p > <font color="#19bf19"> &#8593; {datas.earnings.percentage}%  </font> this month </p></div></small></p>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex align-items-stretch">

                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTmgW1UGlV5Loos_txj9iAmTGO45pdzSDcbfvLvNMFfjGnPb8Z7" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <p className="card-text"><small className="text-body-secondary">Orders</small></p>
                                                <p className="card-text"><h1><b>${datas.orders.value}k</b></h1></p>
                                                <p className="card-text"><small className="text-body-secondary"><div><p > <font color="#f20519"> &#8595; {datas.orders.percentage}%  </font> this month </p></div></small></p>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex align-items-stretch">


                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRhxfiZNgk-aBy3cHjtz6r9U9p08ae7_MUr3qOAck55rmNcjVBE" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <p className="card-text"><small className="text-body-secondary">Balance</small></p>
                                                <p className="card-text"><h1><b>${datas.Balance.value}k</b></h1></p>
                                                <p className="card-text"><small className="text-body-secondary"><div><p > <font color="#f20519"> &#8595; {datas.Balance.percentage}%  </font> this month </p></div></small></p>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>

                            <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3 d-flex align-items-stretch">


                                <div className="card mb-3">
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT05Qc9YdaJAHBhjQs6cW3o8-NNiEaccqT2G-YrLaOxYTCC3KGY" className="img-fluid rounded-start" alt="..." />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <p className="card-text"><small className="text-body-secondary">Total Sales</small></p>
                                                <p className="card-text"><h1><b>${datas.Sales.value}k</b></h1></p>
                                                <p className="card-text"><small className="text-body-secondary"><div><p > <font color="#19bf19"> &#8593; {datas.Sales.percentage}%  </font> this month </p></div></small></p>
                                            </div>

                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>

                        <div className="row">
                            <div className="col col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9 col-xxl-9">

                                <div className="card text-bg-light mb-3">
                                    <div className="card-body">

                                        <Chart
                                            chartType="Bar"
                                            width="100%"
                                            height="400px"
                                            data={data}
                                            options={options}
                                        />

                                    </div>
                                </div>

                            </div>

                            <div className="col col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">


                                <div className="card text-bg-light mb-3">
                                    <div className="card-body">

                                        <Chart
                                            chartType="PieChart"
                                            width="100%"
                                            height="400px"
                                            data={don_data}
                                            options={don_options}
                                        />

                                    </div>
                                </div>


                            </div>
                        </div>


                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                                <div className="card">
                                    <div className="card-header">
                                        <div className="row">


                                        <div className="col col-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8">
                                                <p>Product Sell</p>
                                                

                                            </div>



                                            <div className="col col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">


                                                <p align="right">
                                                    <form className="d-flex" role="search">
                                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" width="20" />
                                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                                    </form>
                                                </p>
                                                

                                            </div>
                                           
                                            <div className="col col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2">

                                                <select name="" id="" className="form-control">
                                                    <option value="">Last 30 days</option>
                                                    <option value="">fdfdfd</option>
                                                    <option value="">dfdfdf</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                <th scope="col">Product Name</th>
                                                    <th scope="col">Stock</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Total Sales</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                
                                                <tr>
                                                    <th scope="row"><img height="50px" width="50px" src="https://www.keralatourism.org/images/KeralaTourism-share-image.jpg"  alt=""  /> 
                                                    <b>Abstract 3D</b> <br />                                                             
                                                    
                                                    </th>
                                                    
                                                    <td>32 in stocks</td>
                                                    <td>$45.99</td>
                                                    <td>20</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><img height="50px" width="50px" src="https://www.keralatourism.org/images/KeralaTourism-share-image.jpg" alt="" />
                                                    <b>Sarphens illustration</b>
                                                     </th>
                                                    
                                                     <td>32 in stocks</td>
                                                    <td>$45.99</td>
                                                    <td>20</td>
                                                </tr>
                                              
                                            </tbody>
                                        </table>
                                    </div>
                                </div>



                            </div>
                        </div>

                    </div>


                </div>
            </div>


        </div>
    )
};

export default Dashboard;