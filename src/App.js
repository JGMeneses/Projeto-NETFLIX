import React, {useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import LinhadeFilmes from './components/LinhadeFilmes';
import FeaturedMovie from './components/FilmeEmDestaque';


export default () => {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState([]);

    useEffect(() =>{
        const loadAll = async () => {
            //Pegando a lista TOTAL
            let list = await Tmdb.getHomeList();
            setMovieList(list)

            //pegando filme em destaque

            let originals = list.filter(i=>i.slug==='originals');
            let aleatorio = Math.floor(Math.random() * (originals[0].items.results.length -1));
            let chosen =originals[0].items.results[aleatorio];
            console.log(chosen);

        }
        loadAll();
    }, []);

    return (
        <div className="page">

        {featuredData &&
            <FeaturedMovie item={featuredData} />
        }

           <section className="lists">
            {movieList.map((item,key) =>(
               <LinhadeFilmes key={key} title={item.title} items={item.items}/>
            ))}
           </section>
           
        </div>
    );
}