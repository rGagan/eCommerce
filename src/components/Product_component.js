import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products);
    const gotProducts = useSelector(state => state.gotProducts);
    console.log(products)

    if (!gotProducts)
        return "Loading..."

    return (
        <Container>
            <Row className="gy-5">
            { products.map((product) =>(
                    <Col sm={4} key={product.id}>
                        <Link to={`/product/${product.id}`} style={{ textDecoration:'none',color:'black'}}>
                            <Card style={{ width: '18rem'  }}>
                                <Card.Img style={{ height: '20rem'  }} variant="top" src={product.image} />
                                <Card.Body  className="text-wrap" style={{ height: '18rem',  } }>
                                    <Card.Title style={{ height: '6rem', overflow:'hidden'}}>{product.title}</Card.Title>
                                    <Card.Text style={{ height: '10rem', overflow:'hidden', textOverflow:'ellipsis'}} className="text-wrap">
                                        {product.description}
                                    </Card.Text>
                                </Card.Body>
                                <hr/>
                                <Card.Body>
                                    <Card.Link href="/">More Details</Card.Link>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
            ))}
            </Row>
        </Container>
    );

};

export default ProductComponent;