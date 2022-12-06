import { useDispatch } from '../../../redux/store'

const Card = ({ data }: any) => {
    const dispatch = useDispatch();
    return <button
        onClick={() => { dispatch(data.action) }}
        className="cardType__1"
        style={{
            background: data.bgcolor,
            cursor: 'pointer'
        }}
    >
        <div className="cardType__inner">
            <div className="cardType__icon">
                {data.icon}
            </div>
            <div className="cardType__text">
                <p className="cardType__name" style={{ color: data.textColor }}>
                    {data.titel}
                </p>
                <h3 className="cardType__Number" style={{ color: data.cntColor }}>
                    {data.value}
                </h3>
            </div>
        </div>
    </button>
}

export default Card