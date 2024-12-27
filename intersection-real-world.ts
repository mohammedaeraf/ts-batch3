type ApiResponse = {
    status: number;
    message: string;
};

type Product = {
    id: number;
    name: string;
    price: number;
};

type Category = {
    title: string;
    description: string;
}

type ProductApiResponse = ApiResponse & {
    productData: Product;
    categoryData: Category;
};

// Example usage
const productResponse: ProductApiResponse = {
    status: 200,
    message: "Product fetched successfully",
    productData: {
        id: 101,
        name: "HP Pavillion",
        price: 1500,
    },
    categoryData: {
        title: "Laptops",
        description: "Laptops and Tablets"
    }
};

console.log(productResponse.productData.price); // Output: 1500
