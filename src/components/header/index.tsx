import "./header.css"
import json from "../../i18n/english.json"
import { checkResponsive } from "../../services/checkResponsive"

export const Header = () => {
  const isMobile = checkResponsive(600)


  const showItems = json.menu.map((item) => {
      return <p>{item.title}</p>
    })

    
  return <div className="header">
    {!isMobile && showItems}
    
  </div>

}