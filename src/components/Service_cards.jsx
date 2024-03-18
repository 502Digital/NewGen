import React, { useState } from 'react'
import useCollapse from 'react-collapsed';


const Service_cards = ({ item }) => {
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded
    });
    return ( 
        <>
         <div className="container cards__container">
             <div className="service__cars__img">
             <img src={item.img} alt="" />
             </div>
             <div className="card-body">
                <h2>{item.heading}</h2>
                <p>{item.para}</p>   
                <p className="service__list" {...getCollapseProps()}>{item.show}</p> 
                <button
                {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
            })}
        >
            {isExpanded ? 'Read Less' : 'Read more'}
            </button>
            </div>
        </div>
    </>
);

}

export default Service_cards