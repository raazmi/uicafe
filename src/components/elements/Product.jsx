import Link from "next/link";
import Image from 'next/image';
import { toBase64, shimmer } from "../../lib/functions";
import {AppContext} from '../../context/appContext';
import { useContext, useState, useEffect } from "react";
import { ReactSVG } from 'react-svg';
import {MdLocationOn} from 'react-icons/md'

const Product = ({ product: { image_url, description, price, title, product_id } }) => {
    const [isCart, setIsCart] = useState(false);
    const {addToCart, cartProducts} = useContext(AppContext);

    useEffect(()=>{
        let temp = cartProducts.findIndex(item => item.product_id === product_id);
        setIsCart(temp > -1);
    }, [cartProducts, product_id])

    console.log(isCart);


    return (
        <div className="product">
            <Link href={`/products/${product_id}`}>
                <a className="block product-image overflow-hidden fiximage">
                    <Image src={image_url} height={600} width={400} alt={title} placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            shimmer(400, 600)
                        )}`} />
                </a>
            </Link>
            <div className="product-content pt-4">
                <div className="product-title-wishlist mb-6 flex justify-between">
                    <div className="leftside">
                        <Link href={`/products/${product_id}`}>
                            <a className="text-heading hover:text-primary transition-all text-2xl uppercase duration-500">{title}</a>
                        </Link>
                    <span className="text-[14px] block font-optional">
                        <MdLocationOn className="inline-block"/>
                        <em className="pl-3 align-middle">Ethiopia</em>
                    </span>
                    </div>
                    <span className="rightside inline-block h-6 w-6">
                        <ReactSVG  className="fill-current"
                            src="/icons/heart.svg"
                            beforeInjection={(svg) => {
                                svg.setAttribute("height", "auto");
                                svg.setAttribute("width", "auto");
                            }}/>
                    </span>
                </div>
                <h4 className="product-price border-t border-b text-center py-2 font-optional font-bold"><em>CHF {price}</em></h4>
                {isCart !== -1 ? (
                    <button className="border-0 flex items-center justify-center bg-transparent text-primary text-2xl" onClick={() => addToCart({product_id, image_url, title, price, quantity: 1})}>
                    <span className="icon inline-block h-8 w-8 text-primary">
                        <ReactSVG
                            className="fill-current "
                            src="/icons/add-to-cart.svg"
                            beforeInjection={(svg) => {
                                svg.setAttribute("height", "auto");
                                svg.setAttribute("width", "auto");
                            }}
                        />  
                    </span>
                    <span className="pl-4">Add to cart</span>
                </button>
                ) : (
                    <p className="text-2xl">Product Successfully Added</p>
                )}
            </div>
        </div>
    );
}

export default Product;