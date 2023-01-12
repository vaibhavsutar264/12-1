import { rest } from 'msw'
import routes from '../services/api/routes'

export const handlers = [
   rest.get(`${routes.BASE_URL}${routes.GET_INVOICES}`, (req,res, ctx)=>{
      const data = {
         "meta_data": {
             "api_name": "invoice_list"
         },
         "result_data": {
             "Invoices": [
                 {
                     "id": 1,
                     "Invoice_no": 134,
                     "Customer_LE": "a",
                     "Tata_Entity": "vaibhav",
                     "PO_number": 1050,
                     "Payment_Status": "pending",
                     "Invoice_amt": 1000.87,
                     "Currency": "Rupees",
                     "Invoice_date": "2000-06-23",
                     "Due_date": "2000-09-23",
                     "Payment done date & time": "2000-07-23",
                     "Time Zone": "IST"
                 },
                 {
                     "id": 2,
                     "Invoice_no": 134,
                     "Customer_LE": "xyz",
                     "Tata_Entity": "Dummy b Tata Entity",
                     "PO_number": 110,
                     "Payment_Status": "completed",
                     "Invoice_amt": 2000.87,
                     "Currency": "Rupees",
                     "Invoice_date": "07/07/2022",
                     "Due_date": "07/08/2022",
                     "Payment done date & time": "2000-07-23",
                     "Time Zone": "IST"
                 },
             ]
         }
     }
      return res(
         ctx.status(200),
         ctx.json(data)
      )
   })
]