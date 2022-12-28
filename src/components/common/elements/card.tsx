import { useState } from 'react';
import { useDispatch } from '../../../redux/store'

const Card = ({ data }: any) => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(null)
    const buttonElement = document.getElementById(
        'button'
    )
    const nameElement = document.getElementById(
        'name'
    )
    const cardElement = document.getElementById(
        'cardType__inner'
    )
//     if(blankCheckoutElement){
//     if(blankCheckoutElement.style.backgroundColor == '#fff'){
//         blankCheckoutElement.onclick =()=>{
//             blankCheckoutElement.style.backgroundColor = 'red'
//         }
//     }
// }

    // blankCheckoutElement
    // blankCheckoutElement.onclick(function (){
    //     blankCheckoutElement.classList("active").siblings().removeClass("active");
    //   })


    const handleClick = (event : any) => {
        // 👇️ toggle class on click
        console.log(cardElement);
        
        event.currentTarget.classList.toggle('active');
        dispatch(data.action)
        if(event.currentTarget.classList == 'active'){
            event.currentTarget.classList.remove('active')
        }
      };
    return <button
        onClick={handleClick}
        id='button'
        className={`cardType__1 ${active == data.titel && 'active'}`}
        style={{
            cursor: 'pointer'
        }}
    >
        <div id='cardType__inner' className="cardType__inner">
            <div className="cardType__icon">
                {data.icon}
            </div>
            <div className="cardType__text">
                <p id='name' className="cardType__name">
                    {data.titel}
                </p>
                <h3 className="cardType__Number" data-testid='total-data-card'>
                    {data.value}
                </h3>
            </div>
        </div>
    </button>
}

export default Card