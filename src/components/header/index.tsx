import "./header.css"
import json from "../../i18n/english.json"
import { checkResponsive } from "../../services/checkResponsive"
import { Close, Menu } from "../../utils/icons"
import { useState } from "react"

export const Header = ({sections}:{sections: React.MutableRefObject<HTMLElement | null>[]}) => {
  const [openMenu, setOpenMenu] = useState(false)
  const isMobile = checkResponsive(600)

  const onClickMenuItem = (i:number) => {
    sections[i]?.current?.scrollIntoView({behavior: "smooth"})
  }
  
  const showItems = json.menu.map((item, key) => {
      return <p key={key} onClick={() => onClickMenuItem(key)}>{item.title}</p>
    })

  if (isMobile) {
    if (!openMenu) {
      return <div 
      className="menu-icon"
      onClick={() => setOpenMenu(true)}>{Menu}</div>
    } else {
     return <div className="header-mobile">
        <div 
        className="close-icon" 
        onClick={() => setOpenMenu(false)}>
          {Close}
        </div>
        <div className="items">
          {showItems}
        </div>
      </div>
    }
  } else {
    return <div className="header-bigscreen">
      {showItems}
    </div>  
  } 
}