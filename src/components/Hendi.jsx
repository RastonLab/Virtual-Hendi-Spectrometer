import React from "react";
import "../style/Hendi.css";
import SVGComponent from "./SVGComponents";
import { svgParts } from "./SVGLibrary";


function Hendi({ id, seeOutside }) {

  return (
    <div className="hendi-box" id={id}> 

      {/* {svgParts.map((part, index) => {
        return <SVGComponent part={part} key={index} className='click-through' />;
      })} */}

      <SVGComponent style={{top:'0', stroke:'#fff0'}} className='click-through' part='laserexterior' /> 
      <SVGComponent style={{top:'0'}} className='click-through' part='base' />
      <SVGComponent style={{top:'0'}} className='click-through' part='lasersymbol' />
      <SVGComponent style={{top:'0'}} className='click-through' part='rpump' />
      <SVGComponent style={{top:'0'}} className='click-through' part='ddpump' />
      <SVGComponent style={{top:'0'}} className='click-through' part='sdpump' />
      <SVGComponent style={{top:'0'}} className='click-through' part='tpump' />
      <SVGComponent style={{top:'0'}} className='click-through' part='sourcechamber' />
      <SVGComponent style={{top:'0'}} className='click-through' part='dopingchamber' />
      <SVGComponent style={{top:'0'}} className='click-through' part='detectionchamber'/>

    </div>
  );
}

export default Hendi;
