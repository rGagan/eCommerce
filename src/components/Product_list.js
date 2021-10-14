import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col, Button } from "react-bootstrap"
import ProductComponent from "./Product_component";
import { gotProducts, fetchData, removeArray, addToCart } from "../redux/actionFunc/productActions";

const ProductList = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.allProducts.products);
    const gotProducts = useSelector(state => state.gotProducts);
    const cartProducts = useSelector(state => state.cartProducts.products);
    console.log(products);
    
    const adProductToCart = (productToAdd) =>
    {
        let done = false;
        cartProducts.forEach(product => {
            if (product.id===productToAdd.id)
            {
                product.quantity+=1;
                done=true;
                
            }
                
        
        });

        if (!done)
        {
            cartProducts.push(productToAdd)
            cartProducts.forEach(product => 
                {
                    if (product.id===productToAdd.id)
                       product.quantity=1 
                })
        }
        
        dispatch(addToCart(cartProducts));

    };
    if (!gotProducts)
        dispatch(fetchData('products'));
    

    if (!gotProducts)
        return "Loading..."

    return (
        <Container>
            <Row className="gy-5">
            { products.map((product) =>(
                    <Col sm={4} key={product.id}>
                        
                            <Card style={{ width: '18rem'  }}>
                            <Link to={`/product/${product.id}`} style={{ textDecoration:'none',color:'black'}}>
                                <Card.Img style={{ height: '20rem'  }} variant="top" src={product.image} />
                                <Card.Body  className="text-wrap" style={{ height: '18rem',  } }>
                                    <Card.Title style={{ height: '6rem', overflow:'hidden'}}>{product.title}</Card.Title>
                                    <Card.Text style={{ height: '10rem', overflow:'hidden', textOverflow:'ellipsis'}} className="text-wrap">
                                        {product.description}
                                    </Card.Text>
                                </Card.Body>
                            </Link>
                                <hr/>
                                <Card.Body>
                                <Button variant="primary" onClick={() => adProductToCart(product)}>Add to Cart</Button>{' '}
                                </Card.Body>
                            </Card>
                        
                    </Col>
            ))}
            </Row>
        </Container>
    );


};

export default ProductList;