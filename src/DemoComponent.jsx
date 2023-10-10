import React from "react";
import Buttongroup from "./button_group";
import Display_component from "./Display_component";
import { useState } from "react";

export default function DemoComponent({count, setCount}){

    let [YesOrNo, setYesOrNo] = useState(false);
    let Dem 
    let Obj= {x:"apple", y:"orange", z:"banana"};
    // if (YesOrNo) {
    //     Dem = <Buttongroup></Buttongroup>
    // }
    // else {
    //     Dem = <Display_component></Display_component>
    // }
    return(
        <div> 
            {Obj.x
            } {
            Obj.y
            } {
            Obj.z
            }
            {/* {YesOrNo?(
                <Buttongroup></Buttongroup>
            ) : (<DemoComponent></DemoComponent>)} */}
        </div>
    )
}