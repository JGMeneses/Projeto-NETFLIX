import React, {useEffect, useState} from 'react';
import './App.css';
import Tmdb from './Tmdb';
import LinhadeFilmes from '../components/LinhaDeFilmes/LinhadeFilmes';
import FeaturedMovie from '../components/FilmeEmDestaque/FilmeEmDestaque';
import Header from '../components/Header/Header';


export default () => {

    const [movieList, setMovieList] = useState([]);
    const [featuredData, setFeaturedData] = useState([]);
    const [blackHeader, setBlackHeader] = useState(false);

    useEffect(() =>{
        const loadAll = async () => {
            //Pegando a lista TOTAL
            let list = await Tmdb.getHomeList();
            setMovieList(list)

            //pegando filme em destaque

            let originals = list.filter(i=>i.slug==='originals');
            let aleatorio = Math.floor(Math.random() * (originals[0].items.results.length -1));
            let chosen =originals[0].items.results[aleatorio];
            let chosenInfo =  await Tmdb.getMovieInfo(chosen.id, 'tv');
            setFeaturedData(chosenInfo);

        }
        loadAll();
    }, []);

    useEffect(() => {
        const scrollListener = () => {
            if(window.scrollY > 10) {
                setBlackHeader(true);
            
            }else{
                setBlackHeader(false);
            }

        }
        window.addEventListener(`scroll`, scrollListener);

        return () => {
            window.removeEventListener(`scroll`, scrollListener);
        }
    }, []);
    

    return (
        <div className="page">

        <Header black = {blackHeader}/>    
        {featuredData &&
            <FeaturedMovie item={featuredData} />
        }

           <section className="lists">
            {movieList.map((item,key) =>(
               <LinhadeFilmes key={key} title={item.title} items={item.items}/>
            ))}
           </section>
                
           <footer>
                <span role="img" arial-aria-label="M01"> ︻デ═一....•°• S2!! </span> jottinha<br/>
                Direitos de imagem para Netflix<br/>
           </footer>
           
        </div>
    );
}