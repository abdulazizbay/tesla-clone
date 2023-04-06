import styled from "styled-components"
import ModelS from '../../assets/img/model-s.jpg'
import { AllNewInterior } from "../secondary/AllNewInterior"
import { Features } from "../secondary/Features"
import { ModelInfoSec } from "../secondary/ModelInfoSec"
import gameImg from '../../assets/img/game.jpg'
import connectedImg from '../../assets/img/connected.jpg'
import audioImg from '../../assets/img/audio.jpg'
import { useLocation } from "react-router-dom"

// interface LocationState {
//     from: {
//       pathname: string;
//     };
//   }
  


export const ModelInfo = ()=>{
    // const location = useLocation<LocationState>();

    // const { from } = location.state || { from: { pathname: "/" } };
    return(
        <>
            <div className="modelInfo">
                <ModelInfoSec 
                    title='Model S' 
                    background={ModelS} 
                    plaid= {true}
                    range='396' 
                    mph='1.99' 
                    speed='200'
                    peak='1,020'
                />
            </div>
            <AllNewInterior/>
            <Features 
                title="Game from Anywhere" 
                descr="Up to 10 teraflops of processing power enables in-car gaming on-par with today’s newest consoles. Wireless controller compatibility lets you game from any seat."
                image={gameImg}
                reverse={true}
            />
            <Features 
                title="Stay Connected" 
                descr="Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop."
                image={connectedImg}
                reverse={   false}
            />
            <Features 
                title="Stay Connected" 
                descr="Multi-device Bluetooth, wireless and USB-C charging for every passenger, with enough power to fast-charge your tablets and laptop."
                image={audioImg}
                reverse={true}
            />
        </>
    )
}