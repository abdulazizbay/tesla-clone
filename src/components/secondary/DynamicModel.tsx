import styled from "styled-components"
import model3 from '../../assets/img/tesla.png'
interface IProps{
    title:string
    
}

export const DynamicModel = (props:IProps)=>{
    return(
        <>
            <StyledDynamicModel>
                <div className={props.title}>
                    <div className="container">
                        <div className="title-delevery">
                            <h1>{props.title}</h1>
                            <p>Order Online for <a href='/'>Touchless Delivery</a></p>
                        </div>
                        <div className="buttons">
                            <button>Custom Order</button>
                            <button>Existing Inventory</button>
                        </div>
                    </div>
                </div>
            </StyledDynamicModel>
        </>
    )
}

const StyledDynamicModel = styled.div`
    .container{
        
    background-image: url(${model3});
    }
`