import Product from "../elements/Product";

const ProductsGrid = ({products}) => {
    return (
        <div className="grid grid-cols-12 gap-10">
            {products.map(product => (
                <div className="col-span-3" key={product.product_id}>
                    <Product product={product}/>
                </div>
            ))}
        </div>
    );
}

export default ProductsGrid;