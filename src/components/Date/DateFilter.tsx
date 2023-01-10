import React, { useEffect, useState } from 'react'
import { useSelector } from '../../redux/store';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';

const DateFilter = () => {
    const {PageData = [], MasterData = []} = useSelector((state: any) => state.billing);
    const [data, setdata] = useState([])
    const [allData, setAllData] = useState([])
    const [startDate, setstartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    useEffect(() => {
      setdata(MasterData)
      setAllData(MasterData)
    }, [])
    // console.log(data);
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
      }
    const handleSelect = (date : any)=>{
        const filtered = allData.filter((item)=>{
            const invoiceDate = new Date(item["Invoice_date"])
            return invoiceDate >= date.selection.startDate && invoiceDate <= date.selection.endDate
        })
          setstartDate(date.selection.startDate)
          console.log((startDate).toLocaleDateString().substring(0,10))          
          setEndDate(date.selection.endDate)
          setdata(filtered)
    }
  return (
    <div>
    <DateRangePicker
        ranges={[selectionRange]}
        onChange={handleSelect}
      />
    <table>
    <thead>
  <tr>
    <th>Invoice_no</th>
    <th>Invoice_date</th>
  </tr>
  </thead>
  <tbody>
  {data.map((item: any)=>{
      return (<>
  <tr key={item['id']}>
        <td>{item['Invoice_no']}</td>
        <td>{item['Invoice_date']}</td>
        </tr>
        </>
        )
    })}
  </tbody>
</table>
    
    </div>
  )
}

export default DateFilter