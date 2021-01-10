
import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    products: Product[];
    selectedProduct: Product[];
    onSelectProduct: (Product: Product) => void;
}

function ProductsList({ products, selectedProduct, onSelectProduct }: Props) {
    return(
        <div className="orders-list-container">
            <div className="orders-list-items">
                {products.map(product => (
                    <ProductCard 
                    key={product.id} 
                    product={product}
                    onSelectProduct={onSelectProduct}
                    isSelected={checkIsSelected(selectedProduct, product)}
                    />
                ))}
             
            </div>
        </div>
    )
}

export default ProductsList;