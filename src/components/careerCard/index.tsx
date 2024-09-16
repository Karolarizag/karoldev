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
    return career.items.map((item) => {
      return <div className="items">
        <p>{item.company}</p>
        <p>{item.role}</p>
        <p>{item.time}</p>
        <div className="circle"></div>
      </div>
    })
  }

  return <div className="career-card">
    <h3>{career.title}</h3>
    {renderItems()}
  </div>
}