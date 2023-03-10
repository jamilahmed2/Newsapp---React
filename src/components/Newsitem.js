import React from 'react'

const Newsitem = (props)=> {


        let { title, description, imageUrl, newsUrl, author, date, source } = props;
        return (
            <div className="my-3">
                <div className="card" >
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}... <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger">
                            {source}<span className="visually-hidden"></span>
                        </span></h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className='text-muted'>By {!author ? "unknow" : author} on {!date ? "null" : new Date(date).toGMTString()}</small></p>
                        <a rel='noreferrer' href={newsUrl} target={'_blank'} className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>
            </div>
        )
    }


export default Newsitem