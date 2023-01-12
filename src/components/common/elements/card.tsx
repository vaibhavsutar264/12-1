import { useState, useEffect} from 'react';
import useLocales from '../../../hooks/useLocales';
import { useDispatch } from '../../../redux/store'

const Card = ({ cardData,data, id }: any) => {
  const { t } = useLocales()
    const dispatch = useDispatch();
    const [active, setActive] = useState(data.titel)
    const handleClick = (event : any) => {
        dispatch(data.action)
      };
    const element = document.getElementsByClassName('cardType__1')
    // console.log(element[1].className)

    useEffect(() => {
        const element = document.getElementsByClassName('cardType__1')
        if(element[0]){
            element[0].className = "cardType__1 initial"
        }
        if(element[0]){
            if(element[0].className === "cardType__1 active"){
                element[1].className = "cardType__1"
                element[2].className = "cardType__1"
                element[3].className = "cardType__1"
            }
        }
        if(element[1]){
            if(element[1].className === "cardType__1 active"){
                element[0].className = "cardType__1"
                element[2].className = "cardType__1"
                element[3].className = "cardType__1"
            }
        }
        if(element[2]){
            if(element[2].className === "cardType__1 active"){
                element[1].className = "cardType__1"
                element[0].className = "cardType__1"
                element[3].className = "cardType__1"
            }
        }
            if(element[3]){
            if(element[3].className === "cardType__1 active"){
                element[1].className = "cardType__1"
                element[2].className = "cardType__1"
                element[0].className = "cardType__1"
            }
        }
    }, [element[0]])
    
    // const element = document.getElementsByClassName('cardType__1')
    if(element[0]){
    if(element[0].className === "cardType__1 active"){
        element[1].className = "cardType__1"
        element[2].className = "cardType__1"
        element[3].className = "cardType__1"
    }
}
if(element[1]){
    if(element[1].className === "cardType__1 active"){
        element[0].className = "cardType__1"
        element[2].className = "cardType__1"
        element[3].className = "cardType__1"
    }
}
if(element[2]){
    if(element[2].className === "cardType__1 active"){
        element[1].className = "cardType__1"
        element[0].className = "cardType__1"
        element[3].className = "cardType__1"
    }
}
    if(element[3]){
    if(element[3].className === "cardType__1 active"){
        element[1].className = "cardType__1"
        element[2].className = "cardType__1"
        element[0].className = "cardType__1"
    }
}
    
    //   console.log(fourthElement?.style.backgroundColor);
      
    return <button
        onClick={handleClick}
        defaultValue={10} 
        className={`cardType__1`}
        style={{
            cursor: 'pointer',
            backgroundColor: ((data.titel == t<string>('allInvoice'))? 'rgb(26, 115, 232)': ((data.titel == t<string>('overdue'))? 'rgb(54, 63, 94)': ((data.titel == t<string>('unpaidInvoices'))? 'rgb(229, 68, 87)': ((data.titel == t<string>('paidInvoices'))? 'rgb(61, 184, 135)': ''))))
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