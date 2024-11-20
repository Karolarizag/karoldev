import "./careerCard.css"

interface careerItems {
  company: string, 
  role: string, 
  time: string
}

interface careerProps {
  title: string, 
  items: careerItems[]
}

export const CareerCard = ({career}:{career: careerProps}) => {

  const renderItems = () => {
    return career.items.map((item, idx) => {
      return <div className="items" key={idx}>
        <p className="company">{item.company}</p>
        <p className="text">{item.role}</p>
        <p className="text">{item.time}</p>
        <div className="circle"></div>
      </div>
    })
  }

  return <div className="career-card">
    <h3>{career.title}</h3>
    {renderItems()}
  </div>
}