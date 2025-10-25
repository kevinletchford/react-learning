import * as React from "react";
import { useClickAway } from "../hooks/useClickAway";

function ClickAway() {
    const [isOpen, setIsOpen] = React.useState(false);
    const ref = useClickAway<HTMLDivElement>(() =>{
        setIsOpen(false);
    });

    const handleOpenModal = () =>{
        if(isOpen === false){
            setIsOpen(true);
        }
    }

  return (
    <div>
        <h1>Use Click Away</h1>
        <button className="link" onClick={handleOpenModal}>Open Modal</button>
        {isOpen && (
            <div ref={ref}>
                <button onClick={() => setIsOpen(false)}>&times;</button>
                <h2>Modal</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis molestias ullam hic amet consequuntur molestiae blanditiis vel reprehenderit. Totam nobis itaque unde! Repudiandae ipsum vel facere fugiat adipisci blanditiis veritatis?</p>
            </div>
        )}
    </div>
  )
}

export default ClickAway