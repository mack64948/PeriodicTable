import "./index.css"
import { ElementContainer } from "../ElementContainer";
import { useState } from "react";

export const PeriodicTable = ({setSelected}) => {
   

    return (<div className="pt-container">
        <div className="pt-element-container column-label"></div>
        <div className="pt-element-container column-label">1</div>
        <div className="pt-element-container column-label">2</div>
        <div className="pt-element-container column-label">3</div>
        <div className="pt-element-container column-label">4</div>
        <div className="pt-element-container column-label">5</div>
        <div className="pt-element-container column-label">6</div>
        <div className="pt-element-container column-label">7</div>
        <div className="pt-element-container column-label">8</div>
        <div className="pt-element-container column-label">9</div>
        <div className="pt-element-container column-label">10</div>
        <div className="pt-element-container column-label">11</div>
        <div className="pt-element-container column-label">12</div>
        <div className="pt-element-container column-label">13</div>
        <div className="pt-element-container column-label">14</div>
        <div className="pt-element-container column-label">15</div>
        <div className="pt-element-container column-label">16</div>
        <div className="pt-element-container column-label">17</div>
        <div className="pt-element-container column-label">18</div>

        {/* Period 1 */}
        <div className="pt-element-container row-label">1</div>

        <div onMouseOver={
            (e) => { setSelected(1);}
        } className="pt-element-container period-1 g1">H</div>
        <div className="pt-element-container period-1 filler"></div>
        <div className="pt-element-container period-1 filler"></div>
        <div className="pt-element-container period-1 filler"></div>
        <div className="pt-element-container period-1 filler"></div>
        <div className="pt-element-container period-1 filler"></div>
        <div className="pt-element-container period-1 filler"></div>
        <div className="pt-element-container period-1 filler"></div>
        <div className="pt-element-container period-1 filler"></div>
        <div className="pt-element-container period-1 filler"></div>
        <div className="pt-element-container period-1 filler"></div>
        <div className="pt-element-container period-1 filler"></div>
        <div className="pt-element-container period-1 filler"></div>
        <div className="pt-element-container period-1 filler"></div>
        <div className="pt-element-container period-1 filler"></div>
        <div className="pt-element-container period-1 filler"></div>
        <div className="pt-element-container period-1 filler"></div>

        <div onMouseOver={
            (e) => { setSelected(2);}
        }  className="pt-element-container period-1 g8">He</div>


        {/* Period 2 */}
        <div className="pt-element-container row-label">2</div>

        <div onMouseOver={
            (e) => { setSelected(3);}
        }  className="pt-element-container g1 alkali-metal">Li</div>
        <div onMouseOver={
            (e) => { setSelected(4);}
        }  className="pt-element-container g2">Be</div>
        <div className="pt-element-container filler"></div>
        <div className="pt-element-container filler"></div>

        <div className="pt-element-container filler"></div>
        <div className="pt-element-container filler"></div>
        <div className="pt-element-container filler"></div>
        <div className="pt-element-container filler"></div>
        <div className="pt-element-container filler"></div>
        <div className="pt-element-container filler"></div>
        <div className="pt-element-container filler"></div>
        <div className="pt-element-container filler"></div>
        <div className="pt-element-container g3">B</div>
        <div className="pt-element-container g4">C</div>
        <div className="pt-element-container g5">N</div>
        <div className="pt-element-container g6">O</div>
        <div className="pt-element-container g7">F</div>
        <div className="pt-element-container g8">Ne</div>


        {/* Period 3 */}
        <div className="pt-element-container row-label">3</div>

        <ElementContainer className="pt-element-container g1 alkali-metal" elementInfo={
            { symbol: "Na", name: "Sodium", atomicNumber: 11, atomicWeight: 22.990}
        }></ElementContainer>
        <div className="pt-element-container g2">Mg</div>
        <div className="pt-element-container filler"></div>
        <div className="pt-element-container filler"></div>
        <div className="pt-element-container filler"></div>
        <div className="pt-element-container filler"></div>
        <div className="pt-element-container filler"></div>
        <div className="pt-element-container filler"></div>
        <div className="pt-element-container filler"></div>
        <div className="pt-element-container filler"></div>
        <div className="pt-element-container filler"></div>
        <div className="pt-element-container filler"></div>
        <div className="pt-element-container g3">Al</div>
        <div className="pt-element-container g4">Si</div>
        <div className="pt-element-container g5">P</div>
        <div className="pt-element-container g6">S</div>
        <div className="pt-element-container g7">Cl</div>
        <div className="pt-element-container g8">Ar</div>

        {/* Period 4 */}
        <div className="pt-element-container row-label">4</div>
        <div className="pt-element-container g1 alkali-metal">K</div>
        <div className="pt-element-container g2">Ca</div>
        <div className="pt-element-container tr-metal">Sc</div>
        <div className="pt-element-container tr-metal">Ti</div>
        <div className="pt-element-container tr-metal">V</div>
        <div className="pt-element-container tr-metal">Cr</div>
        <div className="pt-element-container tr-metal">Mn</div>
        <div className="pt-element-container tr-metal">Fe</div>
        <div className="pt-element-container tr-metal">Co</div>
        <div className="pt-element-container tr-metal">Ni</div>
        <div className="pt-element-container tr-metal">Cu</div>
        <div className="pt-element-container tr-metal">Zn</div>
        <div className="pt-element-container g3">Ga</div>
        <div className="pt-element-container g4">Ge</div>
        <div className="pt-element-container g5">As</div>
        <div className="pt-element-container g6">Se</div>
        <div className="pt-element-container g7">Br</div>
        <div className="pt-element-container g8">Kr</div>


        {/* Period 5 */}
        <div className="pt-element-container row-label">5</div>

        <div className="pt-element-container alkali-metal">Rb</div>
        <div className="pt-element-container">Sr</div>
        <div className="pt-element-container tr-metal">Y</div>
        <div className="pt-element-container tr-metal">Zr</div>
        <div className="pt-element-container tr-metal">Nb</div>
        <div className="pt-element-container tr-metal">Mo</div>
        <div className="pt-element-container tr-metal">Tc</div>
        <div className="pt-element-container tr-metal">Ru</div>
        <div className="pt-element-container tr-metal">Rh</div>
        <div className="pt-element-container tr-metal">Pd</div>
        <div className="pt-element-container tr-metal">Ag</div>
        <div className="pt-element-container tr-metal">Cd</div>
        <div className="pt-element-container">In</div>
        <div className="pt-element-container">Sn</div>
        <div className="pt-element-container">Sb</div>
        <div className="pt-element-container">Te</div>
        <div className="pt-element-container">I</div>
        <div className="pt-element-container">Xe</div>

        {/* Period 6 */}
        <div className="pt-element-container row-label">6</div>

        <div className="pt-element-container">Ca</div>
        <div className="pt-element-container">Ba</div>
        <div className="pt-element-container">51-71</div>
        <div className="pt-element-container">Hf</div>
        <div className="pt-element-container">Ta</div>
        <div className="pt-element-container">W</div>
        <div className="pt-element-container">Re</div>
        <div className="pt-element-container">Os</div>
        <div className="pt-element-container">Ir</div>
        <div className="pt-element-container">Pt</div>
        <div className="pt-element-container">Au</div>
        <div className="pt-element-container">Hg</div>
        <div className="pt-element-container">Tl</div>
        <div className="pt-element-container">Pb</div>
        <div className="pt-element-container">Bi</div>
        <div className="pt-element-container">Po</div>
        <div className="pt-element-container">At</div>
        <div className="pt-element-container">Rn</div>

        {/* Period 7 */}
        <div className="pt-element-container row-label">7</div>

        <div className="pt-element-container">Fr</div>
        <div className="pt-element-container">Ra</div>
        <div className="pt-element-container">89-103</div>
        <div className="pt-element-container">Rf</div>
        <div className="pt-element-container">Db</div>
        <div className="pt-element-container">Sg</div>
        <div className="pt-element-container">Bh</div>
        <div className="pt-element-container">Hs</div>
        <div className="pt-element-container">Mt</div>
        <div className="pt-element-container">Ds</div>
        <div className="pt-element-container">Rg</div>
        <div className="pt-element-container">Cn</div>
        <div className="pt-element-container">Nh</div>
        <div className="pt-element-container">Fl</div>
        <div className="pt-element-container">Mc</div>
        <div className="pt-element-container">Lv</div>
        <div className="pt-element-container">Ts</div>
        <div className="pt-element-container">Og</div>



    </div>);
}