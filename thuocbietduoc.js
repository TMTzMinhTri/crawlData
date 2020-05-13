const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')
const jsonexport = require('jsonexport')

function getPageSource(url) {
  return axios.get(url)
}
function htmlToData($) {
  const _1 = $.find('h1#ten-thuoc').text().trim()
  const _2 = $.find('h1#ten-thuoc').text().trim()
  // const _3 = $.find('.textdetaillink').text().trim()
  // const _4 = $.find('.textdetaillink').text().trim()
  // const _5 = $.find('').text().trim()
  // const _6 = $.find('').text().trim()
  const _7 = $.find('').text().trim()
  const _8 = $.find('').text().trim()
  const _9 = $.find('').text().trim()
  const _10 = $.find('.textdetaildrg1').text().trim()
  const _11 = $.find('').text().trim()
  const _12 = $.find('').text().trim()
  const _13 = $.find('').text().trim()
  const _14 = $.find('').text().trim()
  const _15 = $.find('').text().trim()
  const _16 = $.find('').text().trim()
  const _17 = $.find('#comnamesx').text().trim()
  const _18 = $.find('').text().trim()
  const _19 = $.find('#comnamedk').text().trim()
  const _20 = $.find('').text().trim()
  const _21 = $.find('').text().trim()
  const _22 = $.find('').text().trim()
  const _24 = $.find('img.imgdrg_lst').attr('src')
  const _25 = $.find('.textdetaildrg').text()

  return {
    "Tên QT": _1,
    "Ten DP": _2,
    "Ngành hàng": "THUOC",
    "Nhóm HH": "THUỐC KÊ ĐƠN",
    "Nhóm điều tri I": "DD tiêm TM, vô trùng khác",
    "Nhóm điều tri II": "DD tiêm TM, vô trùng",
    "_1": _7,
    "_2": _8,
    "_3": _9,
    "vi": _10,
    "en": _11,
    "cấp 1(viên)": _12,
    "cấp 2(vỉ)": _13,
    "cấp 3(hộp)": _14,
    "cấp 4(thùng)": _15,
    "MSX": _16,
    "Cty SX": _17,
    "Brand SX": _18,
    "NPP": _19,
    "Mnk": _20,
    "NNK": _21,
    "N": _22,
    "Số đăng ký": _25,
    "hình ảnh": _24
  }
}

// getPageSource(`https://www.thuocbietduoc.com.vn/thuoc-59921/lipiles20.aspx`).then(rsp => {
//   const $ = cheerio.load(rsp.data)
//   const data = []
//   data.push(htmlToData($("article")))
//   // $('.products .product-small').each((_, element) => {

//   // })
//   jsonexport(data, (_, csv) => {
//     fs.appendFileSync('data.csv', csv, 'utf8')
//   })
// })



const arr = ['https://www.thuocbietduoc.com.vn/thuoc-65905/folitop.aspx', 'https://www.thuocbietduoc.com.vn/thuoc-19507/viagra.aspx', 'https://www.thuocbietduoc.com.vn/thuoc-64588/tamiflu.aspx', 'https://www.thuocbietduoc.com.vn/thuoc-61035/ajuakinol.aspx']
arr.forEach(item => getPageSource(item).then(rsp => {
  const $ = cheerio.load(rsp.data)
  const data = []
  data.push(htmlToData($("article")))
  jsonexport(data, (_, csv) => {
    fs.appendFileSync('data.csv', csv, 'utf8')
  })
}))