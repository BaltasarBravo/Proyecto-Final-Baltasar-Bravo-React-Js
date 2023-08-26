import React from 'react';
// import Button from 'react-bootstrap/Button';
import { FaRegTrashAlt } from 'react-icons/fa';

export const CartItem = ({ product, index, handleRemove }) => {
    const { name, price, img } = product;
    const itemsFullPrice = price * product.quantity;

    return (
        <article className="inCartItem">
            <div className="inCartItem_container">
                <div className="inCartItemImgContainer">
                    <img src={img} className="img-fluid" alt={`imagen de ${name}`} />
                </div>
                <div className="inCartItem_container_text">
                    <h3>{name}</h3>
                    <p>
                        <span>
                            {itemsFullPrice.toLocaleString("en", {
                                style: "currency",
                                currency: "ARS"
                            })}
                        </span>
                    </p>
                </div>
            </div>
            <Button variant="danger" onClick={() => handleRemove(index)}><FaRegTrashAlt /></Button>
        </article>
    );
}



