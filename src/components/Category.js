import React from "react";
import categories from "../data/category.json";

export default function Category() {
    return (
        <div className="category-container">
            <h2 className="category-heading heading-medium">Top Categories</h2>
            <div className="categories-wrapper">
            {categories.map(category => {
                return (
                    <a key={category.id} href="/">
                        <div className="category">
                            <img 
                                src={require("../assets/resources/svg/Category/" + category.path + ".svg")} 
                                alt="Category icon" 
                            />
                            <span className="text-primary">{category.name}</span>
                        </div>
                    </a>
                        );
                    })}
            </div>
        </div>
    );
}