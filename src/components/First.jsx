import React, {useState, useEffect} from 'react';
import image1 from '../images/pic1.jpg'
import image2 from '../images/pic2.jpg'
import image3 from '../images/justme.jpg'
const images = {image1, image2, image3}

  const First = () => {
    const [selected, setSelected] = useState(images.true)
    const [imageBorder, setImageBorder] = useState("1px solid gold")

    useEffect(() => {
      document.body.style.border = imageBorder;
    }, [imageBorder])

  const toggle = () => 
    setSelected(selected => !selected)

    const changeBorder = () => {
      setImageBorder('2px solid black')
    }
  
  return (
    <div className="container my-5 bg-warning">
      <h1 className="text-center">Relax in the Surrounding😄</h1>
     {selected ? ( 
       <img src={image1} alt='scenery' />
     ) : (
      <img src={image2} alt='buddy' />
     )}
     <br/>
     
      <button onClick={toggle} className="btn btn-primary mx-auto">Toggle the picture</button>
      <br/>
      <br/>
      <button onClick={changeBorder} className="btn btn-success mx-auto">Change Border</button>
    </div>
  );
}

export default First;