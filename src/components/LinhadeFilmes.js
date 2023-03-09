import React from "react";
import './LinhadeFilmes.css';

export default ({title, items}) => {

    return (
        <div>
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                { items.results.length > 0 && items.results.map((item, key) => (
                    <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                
                ))}
            </div>
        </div>
    );
}