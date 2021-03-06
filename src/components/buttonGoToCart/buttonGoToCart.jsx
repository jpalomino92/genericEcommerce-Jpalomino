import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import './buttonGoToCart.css'
import { Link } from 'react-router-dom';


export default function ButtonCart() {
    return (
        <div>
            <Link to = {`/Cart`}>
                <Button animated className= 'ButtonCart'>
                    <Button.Content visible>Ir al Carrito</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
            </Link>
            <br />
            <br />

            <Link to = {`/`}>
                <Button animated className= 'ButtonCart'>
                    <Button.Content visible>Seguir comprando</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>

            </Link>

        </div>
        
    )
}


