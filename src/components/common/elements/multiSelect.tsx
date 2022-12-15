
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import { useDispatch as useAppDispatch } from '../../../redux/store'


export default function MultiSelect({ id, filterData, filterAction }: any) {
    const { element, values } = filterData;
    const dispatch = useAppDispatch();
    const handelFilter = (value: any, event: any) => {
        dispatch(filterAction(element, value, event.target.checked))
    }


    const openWithDOm = () => {
        new Promise((res: any, rej) => {
            try {
                const w: any = window;
                const d: any = document;
                d.getElementById(w.Oid).style.display = "none";
                res();
            } catch {
                res();
            }

        }).then(() => {
            const w: any = window;
            if (w.Oid != id) {
                w.Oid = id;
                const d: any = document;
                d.getElementById(id).style.display = "block"
            } else {
                w.Oid = null
            }
        })
    }

    return (
        <div className='multi-select-cs-parent clkIgnr'>
            <div className='multi-select-cs clkIgnr' id={id}>
                <ul className='clkIgnr'>
                    {values && values.map((w: any, i: any) => {
                        return <li className='clkIgnr' key={`eleCheck-${w}-${i}`}>
                            <label className="clkIgnr label">
                                <input onChange={handelFilter.bind(null, w)} className='clkIgnr check-Box' type="checkbox" />
                                <span className='clkIgnr span-label'>{w}</span>
                            </label>
                        </li>
                    })}
                </ul>
            </div>
            <span className='clkIgnr' style={{ cursor: "pointer" }}>
                <UnfoldMoreIcon className='clkIgnr' onClick={openWithDOm} />
            </span>
        </div>
    );
}