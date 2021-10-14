import React, {useEffect} from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, gotProducts, removeArray, addToCart } from "../redux/actionFunc/productActions";
import { Figure, Badge, Button } from "react-bootstrap";

const ProductDetails = () => {
    const productAll = useSelector(state => state.allProducts.products)
    const gotProduct = useSelector(state => state.gotProducts) 
    const cartProducts = useSelector(state => state.cartProducts.products)

    console.log(productAll)

    const {productId} = useParams();
    const dispatch = useDispatch();
    const product= productAll.filter((products) => (products.id==productId ));
    console.log(product)
    // useEffect(()=>{
    //     if (productId)
    //      dispatch(fetchData(`products/${productId}`));
    //      return ()=> {
    //          dispatch(gotProducts(false))
    //          dispatch(removeArray())
    //      }
    // }, [productId])

    const adProductToCart = (productToAdd) => {

        let done = false;
        cartProducts.forEach(product => {
            if (product.id===productToAdd.id)
            {
                product.quantity+=1;
                done=true;
                console.log(product.quantity)
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
    }

    if(!gotProduct || product==null)
        return "Loading..."
    return (
        <div>
            <div key={product[0].id}>
            <h2>{product[0].title}</h2>
            <Figure>
                <Figure.Image
                    width={500}
                    height={650}
                    alt="250x350"
                    src={product[0].image}
                />
                <Figure.Caption className="text-center text-wrap" style={{width:'50rem'}}>
                    {product[0].description}
                </Figure.Caption>
                <h3><Badge className="large" bg="info">${product[0].price}</Badge></h3>
                <Button variant="primary" onClick={() => adProductToCart(product[0])}>Add to Cart</Button>{' '}
            </Figure>
        </div>
        
        </div>
    )

};

export default ProductDetails;