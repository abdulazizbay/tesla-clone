import React,{FC} from "react"
import styled from "styled-components"
import model3 from '../../assets/img/tesla.png'
import { DynamicModel } from "../secondary/DynamicModel"

export const Home =()=>{
    return (
        <>
            <div className="home-container">
                <DynamicModel title="Model 3" image={model3}/>
                <DynamicModel title="Model3" image={model3}/>
            </div>
        </>
    )
}