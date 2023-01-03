import { useState } from 'react';
import { useDispatch } from '../../../redux/store'

const Card = ({ data, id }: any) => {
    const dispatch = useDispatch();
    const [active, setActive] = useState(null)

    const handleClick = (event : any) => {
        dispatch(data.action)
      };

    //   console.log(fourthElement?.style.backgroundColor);
      
    return <button
        onClick={handleClick}
        className={`cardType__1 ${(data.titel == 'ALL INVOICES')? 'active': ""}`}
        style={{
            cursor: 'pointer',
            backgroundColor: ((data.titel == 'ALL INVOICES')? 'rgb(26, 115, 232)': ((data.titel == 'OVERDUE')? 'rgb(54, 63, 94)': ((data.titel == 'UNPAID INVOICES')? 'rgb(229, 68, 87)': ((data.titel == 'PAID INVOICES')? 'rgb(61, 184, 135)': ''))))
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