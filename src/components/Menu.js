import React from "react"
import MenuSection from "./MenuSection"

const Menu = ({ menu }) => {

    return (
        <div className="menu-list">
            {menu.sections.map(section => {
                return (
                    <MenuSection section={section} key={section.heading} />
                )
            })}
        </div>
    )
}

export default Menu