import './SkateTricks.css';


const SkateTricks = ({ stance, obstacle, tutorial, id }) => {

  return (
      <section className='trick-card'>
        <p>{stance}</p>
        <p>Obstacle: {obstacle}</p>
        <p>Link to Tutorial: 
          <br></br>
        {tutorial}</p>  
      </section>
    
  );
}

export default SkateTricks;
