import React from "react"


const MenuSection = ({ section }) => {
    return (
        <div className="single-menu">
            <h3>Appetizers</h3>
            <ul className="list">
                {section.items.map(item => {
                    return (
                        <li key={item.name}>
                            <p className="menu-item">{item.name}</p>
                            <p>{item.description}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MenuSection


