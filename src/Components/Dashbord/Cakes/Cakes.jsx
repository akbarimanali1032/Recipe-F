import React, { useState } from 'react'
import Style from './Cakes.module.css'
import { Col, Container, Row } from 'react-bootstrap'
const Cakes = () => {
    
    const [allData, setAllData] = useState([
        { title: "Strawberry Cupcakes", Images: "https://designarc.biz/demos/cake/theme/cake-html/img/cake-feature/c-feature-1.jpg", value: "$20" },
        { title: "Snickerdoodle", Images: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60", value: "$25" },
        { title: "Strawberry Cupcakes", Images: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80", value: "$20" },
        { title: "Chocolate Cupcakes", Images: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=503&q=80", value: "$30" },
        { title: "Snickerdoodle", Images: "https://designarc.biz/demos/cake/theme/cake-html/img/cake-feature/c-feature-4.jpg", value: "$25" },
        { title: "Chocolate Cupcakes", Images: "https://designarc.biz/demos/cake/theme/cake-html/img/cake-feature/c-feature-5.jpg", value: "$30" },
        { title: "Strawberry Cupcakes", Images: "https://designarc.biz/demos/cake/theme/cake-html/img/cake-feature/c-feature-6.jpg", value: "$20" },
        { title: "Vanilla Cupcakes", Images: "https://designarc.biz/demos/cake/theme/cake-html/img/cake-feature/c-feature-7.jpg", value: "$20" },
        { title: "Snickerdoodle", Images: "https://designarc.biz/demos/cake/theme/cake-html/img/cake-feature/c-feature-8.jpg", value: "$25" },
        { title: "Snickerdoodle", Images: "https://avatars.mds.yandex.net/i?id=43cea0114c9cfad4b7887b8ae49b2fca-5244992-images-thumbs&n=13", value: "$25" },
        { title: "Chocolate Cupcakes", Images: "https://images.unsplash.com/photo-1559553156-2e97137af16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=433&q=80", value: "$30" },
        { title: "Vanilla Cupcakes", Images: "https://i.pinimg.com/736x/e5/79/b5/e579b5bea4eb8b0a304e2a4633543485.jpg", value: "$20" },
        { title: "Strawberry Cupcakes", Images: "https://images.unsplash.com/photo-1552689486-ce080445fbb6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=431&q=80", value: "$20" },
        { title: "Vanilla Cupcakes", Images: "https://images.unsplash.com/photo-1560173045-beaf11c65dce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80", value: "$20" },
        { title: "Vanilla Cupcakes", Images: "https://images.unsplash.com/photo-1586221266208-e3cc0e170a60?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80", value: "$20" },
        { title: "Chocolate Cupcakes", Images: "https://designarc.biz/demos/cake/theme/cake-html/img/cake-feature/c-feature-3.jpg", value: "$30" }

    ])


    const [search, setSearch] = useState('');
    const inputHandler = (e) => {
        setSearch(e.target.value);
        // console.log(search); -
    }

    const [searchBtn, setSearchBtn] = useState(allData);
    // console.log(searchBtn);
    const filterbox = (categbox) => {
        const upadatedBox = allData.filter((event) => {
            return event.title === categbox;
        });
        setSearchBtn(upadatedBox);
    }

    return (
        <>
            <div className={ Style.maincake }>
                <Container>
                    <div className={ Style.cakes }>
                        <div className={ Style.cakename }>
                            <button onClick={ () => filterbox('Strawberry Cupcakes') }  >Strawberry</button>
                            <button onClick={ () => filterbox('Chocolate Cupcakes') }  >Chocolate </button>
                            <button onClick={ () => filterbox('Vanilla Cupcakes') }  >Vanilla </button>
                            <button onClick={ () => filterbox('Snickerdoodle') }  >Snickerdoodle </button>
                            <button onClick={ () => setSearchBtn(allData) }  >All </button>
                        </div>
                        <div className={ Style.cupcakes }>
                            <input type="text" onChange={ inputHandler } />
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <div className={ Style.mycakes }>
                            <Row>
                                {
                                    searchBtn.filter((box) => {
                                        return search.toLowerCase() === ""
                                            ? box
                                            : box.title.toLowerCase().includes(search)

                                    }).map((box, index) => {
                                        return (
                                            <Col key={ index } xs={ 12 } sm={ 6 } md={ 6 } lg={ 3 } className='d-flex   justify-content-center ' >
                                                <div className={ Style.cakebox }>
                                                    <div className={ Style.colorphoto }>
                                                        <img src={ box.Images } alt="" />
                                                    </div>
                                                    <div className={ Style.cupbox }>
                                                        <h4>{ box.value }</h4>
                                                        <p>{ box.title }</p>
                                                        <button>Add to Cart</button>
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default Cakes
