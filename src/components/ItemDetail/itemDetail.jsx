import React ,{useState,useContext}from 'react'; 
import ButtonCounter from '../buttonCounter/buttonCounter';
import { CartContext } from '../../context/cartContext';

import ButtonCart from '../buttonGoToCart/buttonGoToCart';
import './itemDetail.css'


const  ItemDetail = ({OnlyItem}) => {
    
    let extra = 0
    const  {image,title,description} = OnlyItem

    const [bought,setBought] = useState(false)
    const {addItem} = useContext(CartContext)
    
    let stock = 8
    const initial = 1 


    const onAdd = (quantity) => {
        addItem(OnlyItem,quantity)
        setBought(true)
    } 

    
    if(bought) { 
        extra = (
            <div>
                <ButtonCart />
            
            </div>
        )
    }else{
        extra = (
            <div>
            <ButtonCounter  onAdd={onAdd} stock = {stock} initial={initial}/>
            </div>
        )
    }
    
  
    

    return (

        <div className="ItemGrid">
               <div className="imageContainer">
                    <img src={image} alt={title} className="itemDetailImage"/>
                </div>

                <div className="descriptionContainer">
                    <div>
                        <h1 className="itemDetailTitle">
                                {title}
                        </h1>   
                        <p>                    
                            {description}
                        </p>                
                    </div>
                </div>

                <div className="buttonContainer">
                    {extra}
                </div>        
        </div>
    )
}

export default ItemDetail