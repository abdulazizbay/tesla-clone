import React,{FC} from "react"
import styled from "styled-components"
import model3 from '../../assets/img/tesla.png'
import solarRoof from '../../assets/img/solar-roof.jpg'
import modelS from '../../assets/img/model-s.jpg'
import accessories from '../../assets/img/accessories.jpg'
import modelX from '../../assets/img/model-x.jpg'
import solarPanel from '../../assets/img/solar-panel.jpg'
import modelY from '../../assets/img/model-y.jpg'

import { DynamicHome } from "./DynamicHome"

export const Home =()=>{
    
    return (
        <>
            <div className="home-container">
                <DynamicHome title="Model 3" image={model3}/>
                <DynamicHome title="Model Y" image={modelY}/>
                <DynamicHome title="Model S" image={modelS}/>
                <DynamicHome title="Model X" image={modelX}/>
                <DynamicHome title="Solar Panels" image={solarPanel}/>
                <DynamicHome title="Solar Roof" image={solarRoof}/>
                <DynamicHome title="Accessories" image={accessories}/>
            </div>
        </>
    )
}