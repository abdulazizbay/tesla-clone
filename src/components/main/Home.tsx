import React,{FC} from "react"
import styled from "styled-components"
import model3 from '../../assets/img/tesla.png'
import solarRoof from '../../assets/img/solar-roof.jpg'
import modelS from '../../assets/img/model-s.jpg'
import accessories from '../../assets/img/accessories.jpg'
import modelX from '../../assets/img/model-x.jpg'
import solarPanel from '../../assets/img/solar-panel.jpg'
import modelY from '../../assets/img/model-y.jpg'

import { DynamicModel } from "../secondary/DynamicModel"

export const Home =()=>{
    return (
        <>
            <div className="home-container">
                <DynamicModel title="Model 3" image={model3}/>
                <DynamicModel title="Model Y" image={modelY}/>
                <DynamicModel title="Model S" image={modelS}/>
                <DynamicModel title="Model X" image={modelX}/>
                <DynamicModel title="Solar Panels" image={solarPanel}/>
                <DynamicModel title="Solar Roof" image={solarRoof}/>
                <DynamicModel title="Accessories" image={accessories}/>
            </div>
        </>
    )
}