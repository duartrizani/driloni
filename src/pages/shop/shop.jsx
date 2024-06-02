import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "../../pages/shop/Product";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar";

const Shop = ({ setSelectedProducts }) => {
    const [cart, setCart] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [addedToCart, setAddedToCart] = useState(false);
    const navigate = useNavigate();

    const addToCart = (newProduct) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(product => product.id === newProduct.id);
            if (existingProduct) {
                // If the product already exists in the cart, update its amount
                const updatedCart = prevCart.map(product =>
                    product.id === newProduct.id
                        ? { ...product, amount: parseInt(product.amount) + parseInt(newProduct.amount) }
                        : product
                );
                return updatedCart;
            } else {
                // If the product is not in the cart, add it
                return [...prevCart, newProduct];
            }
        });
        setAddedToCart(true);
        setTimeout(() => {
            setAddedToCart(false);
        }, 3000);
    };


    useEffect(() => {
        // Load selected products from localStorage on component mount
        const storedProducts = localStorage.getItem('selectedProducts');
        if (storedProducts) {
            setSelectedProducts(JSON.parse(storedProducts));
        }
    }, [setSelectedProducts]);

    const handleCheckout = () => {
        setSelectedProducts(cart);
        navigate("/summary");
    };

    const uniqueCategories = [...new Set(PRODUCTS.flatMap((product) => product.kategoria))];

    const filteredProducts = PRODUCTS.filter(
        (product) =>
            product.productName.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
            (selectedCategory === "" || product.kategoria.includes(selectedCategory))
    );

    const sortedProducts =
        sortBy === "asc"
            ? [...filteredProducts].sort((a, b) => a.productName.localeCompare(b.productName))
            : sortBy === "desc"
                ? [...filteredProducts].sort((a, b) => b.productName.localeCompare(a.productName))
                : filteredProducts;

    return (
        <div>
            <div className="max-lg:hidden">
                <div className="mt-4 w-full max-lg:hidden">
                    <Navbar />
                </div>
                <div className="container mx-auto p-8">
                    <div className="fixed top-0 left-0 right-0 bg-white shadow-md p-4 z-10">
                        <div className="flex items-center justify-between">
                            <input
                                type="text"
                                placeholder="Kërko Produktinë..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="px-3 py-2 border rounded-md w-full md:w-64 mr-4"
                            />
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-3 py-2 border rounded-md"
                            >
                                <option value="">Rendit sipas alfabetit</option>
                                <option value="asc">A-Z...</option>
                                <option value="desc">Z-A...</option>
                            </select>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-3 py-2 border rounded-md ml-4"
                            >
                                <option value="">Të gjitha kategoritë</option>
                                {uniqueCategories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                            <button
                                onClick={handleCheckout}
                                className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-700 ml-auto"
                            >
                                Vazhdo
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
                        {sortedProducts.map((product) => (
                            <Product key={product.id} data={product} addToCart={addToCart} addedToCart={addedToCart}/>
                        ))}
                    </div>
                </div>
            </div>



            {/* MOBILE */}

            <div className="lg:hidden">


                {/* Search & Filter Section */}
                <div className="container mx-auto p-4 bg-white shadow-md rounded-md z-10 ">
                    <div className="flex flex-col space-y-2 md:flex-row md:space-x-4">
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="px-3 py-2 border rounded-md w-full md:w-64"
                        />

                        <div className="flex flex-wrap justify-between md:w-1/2">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-3 py-2 border rounded-md w-full md:w-1/2 mb-2 md:mb-0"
                            >
                                <option value="">Sort by Alphabet</option>
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>

                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="px-3 py-2 border rounded-md w-full md:w-1/2"
                            >
                                <option value="">All Categories</option>
                                {uniqueCategories.map((category) => (
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-700 ml-auto"
                        >
                            Proceed to Summary
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="container p-2">
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 mt-2">
                        {sortedProducts.map((product) => (
                            <Product key={product.id} data={product} addToCart={addToCart} addedToCart={addedToCart} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
