import styled from "styled-components"
import model3 from '../../assets/img/tesla.png'
interface IProps{
    title:string
    image:string
}

export const DynamicModel = (props:IProps)=>{
    return(
        <>
            <StyledDynamicModel title={props.title} image={props.image}>
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

const StyledDynamicModel = styled.div<IProps>`
    .container{
        background: url(${props=>props.image}),no-repeat,center, #d9d9d9 ;
        background-size: cover;;
        height: 800px;
        background-color: aqua;
    }
`;