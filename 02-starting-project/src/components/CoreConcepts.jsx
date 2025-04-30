
function CoreConcepts({image, title, description}) {
    /* const {title, image, desc} = props */
    return (
      <li>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </li>
    );
  }
  
  export default CoreConcepts;