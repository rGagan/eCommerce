import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table, Button } from "react-bootstrap";
import { addToCart } from "../redux/actionFunc/productActions";

const Cart = () => {
    const cartProducts = useSelector(state => state.cartProducts.products);
    console.log(cartProducts)
    const dispatch = useDispatch();


    const emptyCart = () => dispatch(addToCart([]));
    const decreaseQuant = (productToChange) => {

        cartProducts.forEach(product => {
            if (product.id===productToChange.id)
                product.quantity-=1;

        });

        const newCartProducts = cartProducts.filter((product)=> {
            return product.quantity>0}) 

        dispatch(addToCart(newCartProducts));
    }

    const increaseQuant = (productToChange) =>  {
        cartProducts.forEach(product => {
            if (product.id===productToChange.id)
            {
                product.quantity+=1;
       
            }
        });
        const newCartProducts = cartProducts.filter((product)=> {
            return product.quantity>0}) 

        dispatch(addToCart(newCartProducts));
    }
    

    if (cartProducts==[])
        return "Nothing to see here.."
    let sum=0

    cartProducts.forEach(product => {
        sum+= (product.price * product.quantity)
    });

    return (
        <div>
            <Button variant="danger" onClick={() => emptyCart()}>Empty Cart</Button>{' '}
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {cartProducts.map(product => (
                    <tr key={product.id}>
                    <td> <img src={product.image} style={{height:"40px"}} /> {product.title} </td>
                    <td><Button variant="light" onClick={() => decreaseQuant(product)}>-</Button>  {product.quantity}  <Button variant="light" onClick={() => increaseQuant(product)}>+</Button></td>
                    <td>${product.price * product.quantity}</td>
                    </tr>

                ))}
            
            <tr>
                <td colSpan={2}>Total</td>
                <td>${sum}</td>
            </tr>
                
            </tbody>
        </Table>
        </div>
        
    );
    

}

export default Cart;