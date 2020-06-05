const fs = require('fs')
const axios = require('axios')
const jsonexport = require('jsonexport')
const readlineSync = require('readline-sync')


function callData() {
  const start_time = "2019-4-1 00:00:00";
  const end_time = "2020-5-30 23:59:59"
  const from = readlineSync.questionInt("từ trang: ")
  const to = readlineSync.questionInt("đến trang: ")
  for (let page = from; page <= to; page++) {
    const path = `https://crm.ipos.vn/general/sale-manager?pos_parent=FRUZII`
    axios.post(path, {
      end_time,
      page,
      receiver_emails: "",
      start_time
    }, {
      headers: {
        Authorization: "50d0135a8261ed6a5be75a139e561fd39e5e50cd"
      }
    }).then(rsp => {
      console.log(rsp.data.data.count)
      jsonexport(rsp.data.data.sale_logs.map(it => {
        return { mahd: it.tran_no, items: it.items }
      }), (_, csv) => {
        fs.appendFileSync('data.csv', csv, 'utf8')
      })
    })
  }
}
callData()