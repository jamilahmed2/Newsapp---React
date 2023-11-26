import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    // const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        // props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(100);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - Bandar News`
        updateNews();
         // eslint-disable-next-line 
    }, []);


    // previous page 
    // handlePrevClick = async () => {
    //     console.log("prev")
    //      setPage(page - 1)
    //     updateNews();

    // }
    // next page 
    // handleNextClik = async () => {
    // setPage(page + 1)
    //   updateNews();
    // }

    const fetchMoreData = async () => {
        setPage(page + 1)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        setLoading(true)
        let data = await fetch(url)
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    return (
        <div className='container my-3'>
            <h1 className='text-center mt-5'>BandarNews - Top  {capitalizeFirstLetter(props.category)} Headlines</h1>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row" >
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url} >
                                <Newsitem title={element.title ? element.title.slice(0, 20) : ""} description={element.description ? element.description.slice(0, 44) : ""}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}

                    </div>
                </div>
            </InfiniteScroll>
        </div>
    )
}


News.defaultProps = {
    country: 'us',
    category: 'general',
    pageSize: 12
}
News.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number
}
export default News