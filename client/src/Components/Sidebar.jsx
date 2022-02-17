import {slide as Menu} from 'react-burger-menu';
import Chat from "../pages/Chat";
import React from "react";
import burger from "./../assets/icons/burger.svg";

function Sidebar() {
    return (
        <div>




        <Menu styles={styles} isOpen={true} width={200} className={"bg-green-300"}
              disableCloseOnEsc
              noOverlay
              customCrossIcon={false}
              customBurgerIcon={
                  <img src={burger}/>

              }
        >



            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>
            <div>test</div>



        </Menu>

        </div>
    );
}

export default Sidebar;


var styles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '36px',
        height: '30px',
        left: '36px',
        top: '36px'
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmBurgerBarsHover: {
        background: '#a90000'
    },
    bmCrossButton: {
        height: '24px',
        width: '24px'
    },
    bmCross: {
        background: '#bdc3c7'
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%'
    },
    bmMenu: {
        background: '#373a47',
        padding: '2.5em 1.5em 0',
        fontSize: '1.15em'
    },
    bmMorphShape: {
        fill: '#373a47'
    },
    bmItemList: {
        color: '#b8b7ad',
        padding: '0.8em'
    },
    bmItem: {
        // display: 'inline-block'
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    }
}