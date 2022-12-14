import React from 'react'
import { useParams } from 'react-router-dom'
import {
  Box,
  Container,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
} from '@mui/material'

import { useSelector } from '../../redux/store'
import { dataTables } from '../../utils/constants'
import jsPDF from 'jspdf'

function createData(
  invoiceId: number,
  customerLe: string,
  entity: string,
  poNo: number,
  status: string,
  invoiceAmount: number,
  invoiceIssuedDate: string,
  dueDate: string
) {
  return {
    invoiceId,
    customerLe,
    entity,
    poNo,
    status,
    invoiceAmount,
    invoiceIssuedDate,
    dueDate,
  }
}

const rows = [
  createData(
    134,
    'a',
    'vaibhav',
    1050,
    'pending',
    1000.87,
    '2000-06-23',
    '2000-09-23'
  ),
  createData(
    134,
    'xyz',
    'Dummy b Tata Entity',
    110,
    'completed',
    2000.87,
    '2000-06-23',
    '2000-09-23'
  ),
  createData(
    136,
    'xyz',
    'Dummy b Tata Entity',
    30,
    'completed',
    3000.87,
    '2000-06-23',
    '2000-09-23'
  ),
  createData(
    120,
    'xyz',
    'Dummy b Tata Entity',
    4000,
    'pending',
    4000.87,
    '2000-06-23',
    '2000-09-23'
  ),
  createData(
    100,
    'xyz',
    'Dummy b Tata Entity',
    800,
    'completed',
    5000.87,
    '2000-06-23',
    '2000-09-23'
  ),
]

const InvoiceBill = () => {
  const {
    isError,
    isLoading,
    isSuccess,
    PageData = [],
    invoiceData = [],
    total,
    page,
    take,
  } = useSelector((state: any) => state.billing)
  const { data, columns, tableName } = dataTables.BILLING(PageData)
  const { id } = useParams()

  const generatePdf = () => {
    const doc = new jsPDF('p', 'pt', 'a1')
    const tableElement = document.getElementById(
      'table-data'
    ) as HTMLButtonElement
    doc.html(tableElement, {
      callback: function (pdf) {
        pdf.save('invoices.pdf')
      },
    })
  }

  return (
    <Container id="table-data" fixed>
      <Box className="invoice-bill" mt={20}>
        {/* Top meta starts here */}
        <Box className="top-meta" mb={10}>
          <Typography
            variant="h2"
            textTransform="capitalize"
            component="h1"
            textAlign="right"
            sx={{
              maxWidth: 'unset',
              padding: 0,
            }}
            gutterBottom
          >
            invoice
          </Typography>
          <Stack rowGap={0.5}>
            <Stack
              spacing={{ xs: 2 }}
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography
                variant="h6"
                textTransform="uppercase"
                component="h2"
                sx={{
                  minWidth: '72px',
                }}
              >
                date:
              </Typography>
              <Typography
                variant="body2"
                textTransform="uppercase"
                sx={{ fontWeight: 600 }}
              >
                12/5/2022
              </Typography>
            </Stack>

            <Stack
              spacing={{ xs: 2 }}
              direction="row"
              alignItems="center"
              justifyContent="flex-end"
            >
              <Typography
                variant="h6"
                textTransform="uppercase"
                component="h2"
                sx={{
                  minWidth: '72px',
                }}
              >
                invoice:
              </Typography>
              <Typography
                variant="body2"
                textTransform="uppercase"
                sx={{ fontWeight: 600 }}
              >
                5355489
              </Typography>
            </Stack>
          </Stack>
        </Box>

        {/* Bottom meta starts here */}
        <Box className="bottom-meta" mb={3}>
          <Stack
            direction="row"
            justifyContent="space-between"
            columnGap={0}
            rowGap={5}
            flexWrap="wrap"
          >
            <Box className="from" flexBasis="35%">
              <Stack direction="row" spacing={2}>
                <Typography
                  variant="h6"
                  textTransform="uppercase"
                  component="h2"
                  sx={{
                    minWidth: '72px',
                  }}
                >
                  from:
                </Typography>
                <List
                  sx={{
                    paddingTop: 0,
                    position: 'relative',
                    top: '-8px',
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary="company name"
                        sx={{
                          textTransform: 'capitalize',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary="client email address"
                        sx={{
                          textTransform: 'capitalize',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary="address 1"
                        sx={{
                          textTransform: 'capitalize',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary="address 2"
                        sx={{
                          textTransform: 'capitalize',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Stack>
            </Box>

            <Box className="from" flexBasis="33.34%">
              <Stack direction="row" spacing={2}>
                <Typography
                  variant="h6"
                  textTransform="uppercase"
                  component="h2"
                  sx={{
                    minWidth: '72px',
                  }}
                >
                  to:
                </Typography>
                <List
                  sx={{
                    paddingTop: 0,
                    position: 'relative',
                    top: '-8px',
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary="client name"
                        sx={{
                          textTransform: 'capitalize',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary="client email address"
                        sx={{
                          textTransform: 'capitalize',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary="client address 1"
                        sx={{
                          textTransform: 'capitalize',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary="client address 2"
                        sx={{
                          textTransform: 'capitalize',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Stack>
            </Box>

            <Box className="from" flexBasis="35%">
              <Stack direction="row" spacing={2}>
                <Typography
                  variant="h6"
                  textTransform="uppercase"
                  component="h2"
                  sx={{
                    minWidth: '72px',
                  }}
                >
                  terms:
                </Typography>
                <List
                  sx={{
                    paddingTop: 0,
                    position: 'relative',
                    top: '-8px',
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary="terms"
                        sx={{
                          textTransform: 'capitalize',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Stack>
            </Box>

            <Box className="from" flexBasis="35%">
              <Stack direction="row" spacing={2}>
                <Typography
                  variant="h6"
                  textTransform="uppercase"
                  component="h2"
                  sx={{
                    minWidth: '72px',
                  }}
                >
                  date:
                </Typography>
                <List
                  sx={{
                    paddingTop: 0,
                    position: 'relative',
                    top: '-8px',
                  }}
                >
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText
                        primary="due date"
                        sx={{
                          textTransform: 'capitalize',
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                </List>
              </Stack>
            </Box>
          </Stack>
        </Box>

        {/* Invoice Table starts here */}
        <TableContainer
          component={Paper}
          sx={{
            mb: 5,
          }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Invoice ID</TableCell>
                <TableCell align="right">Customer Le</TableCell>
                <TableCell align="right">Entity</TableCell>
                <TableCell align="right">Po No.</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Invoice Amount</TableCell>
                <TableCell align="right">Invoice Issued Date</TableCell>
                <TableCell align="right">Due Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* 
          {rows.map((row) => (
            <TableRow
              key={row.invoiceId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.invoiceId}
              </TableCell>
              <TableCell align="right">{row.customerLe}</TableCell>
              <TableCell align="right">{row.entity}</TableCell>
              <TableCell align="right">{row.poNo}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.invoiceAmount}</TableCell>
              <TableCell align="right">{row.invoiceIssuedDate}</TableCell>
              <TableCell align="right">{row.dueDate}</TableCell>
            </TableRow>
          ))}
          */}
              {data &&
                data
                  .filter((item: any) => item.id == id)
                  .map((item: any, index: any) => (
                    <TableRow
                      key={item.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {item.Invoice_no}
                      </TableCell>
                      <TableCell align="right">{item.Customer_LE}</TableCell>
                      <TableCell align="right">{item.Tata_Entity}</TableCell>
                      <TableCell align="right">{item.PO_number}</TableCell>
                      <TableCell align="right">{item.Payment_Status}</TableCell>
                      <TableCell align="right">{item.Invoice_amt}</TableCell>
                      <TableCell align="right">{item.Invoice_date}</TableCell>
                      <TableCell align="right">{item.Due_date}</TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <button className="actionButton__item" onClick={generatePdf}></button>
    </Container>
  )
}

export default InvoiceBill
