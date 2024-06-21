import { Product } from "@prisma/client"
import { formatCurrency } from "../../src/utils"
import Image from "next/image"

type ProductCardProps = {
    product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="border bg-white ">

            <Image
                src={`/products/${product.image}.jpg`}
                alt=""
                width={400}
                height={500}
                quality={100}
            />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="mt-5 font-black text-4xl text-amber-500">
                    {formatCurrency(product.price)}
                </p>
                <button type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 
                        uppercase font-bold cursor-pointer"
                >
                        Agregar 
                </button>
            </div>
        </div>
    )
}

export default ProductCard