import ProductsGrid from "../components/blocks/ProductsGrid";
import SectionTitle from "../components/elements/SectionTitle";
import { getBestSellingProducts } from "../fetcher/products";

const Home = ({ bestSellingProducts }) => {
    return (
        <>
            <section className="section-best-sellers">
                <div className="container mx-auto">
                    <SectionTitle title="Our Best Sellers" />
                    <ProductsGrid products={bestSellingProducts} />
                </div>
            </section>
        </>
    );
}

export default Home;

export async function getServerSideProps() {
    const { data: bestSellingProducts } = await getBestSellingProducts();
    return {
        props: {
            bestSellingProducts: bestSellingProducts
        },
    };
}