const fs = require('fs')
const axios = require('axios')
const jsonexport = require('jsonexport')
const readlineSync = require('readline-sync')


function callData() {
  const from = readlineSync.questionInt("từ trang: ")
  const to = readlineSync.questionInt("đến trang: ")
  for (let page = from; page <= to; page++) {
    const path = `https://crm.ipos.vn/general/sale-manager?pos_parent=FRUZII`
    axios.post(path, {
      end_time: "2020-5-30 23:59:59",
      page,
      receiver_emails: "",
      start_time: "2019-4-1 00:00:00"
    }, {
      headers: {
        Authorization: "bbf03369afd0b69cf9b7a5990efece5b5ddf1c73"
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