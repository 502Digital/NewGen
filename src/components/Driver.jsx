import Card from '../UI/Card'

const Driver = ({image, name, job, socials}) => {
  return (
    <Card className="driver">
        <div className="driver__img">
            <img src={image} alt={name} />    
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="driver__socials">
            {
                
                socials.map(({icon, link}, index) => {
                    return <a key={index} href={link} target="blank" rel='noreffer
                    noopener'>{icon}</a>
                })
            }    
        </div>   
    </Card>
  )
}

export default Driver