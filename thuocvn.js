const fs = require('fs')
const axios = require('axios')
const cheerio = require('cheerio')
const jsonexport = require('jsonexport')

function getPageSource(url) {
    return axios.get(url)
}

function htmlToData($) {
    console.log($.find(".PillName").text())
    const _1 = $.find('.PillInfo .PillName').text().trim()
    console.log(_1)
    const _2 = $.find('h1#ten-thuoc').text().trim()
    // const _3 = $.find('.textdetaillink').text().trim()
    // const _4 = $.find('.textdetaillink').text().trim()
    // const _5 = $.find('').text().trim()
    // const _6 = $.find('').text().trim()
    const _7 = $.find('a.texttplink').text().trim()
    const _8 = $.find('').text().trim()
    const _9 = $.find('').text().trim()
    const _10 = $.find('#PillContent').text().trim()
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
    // console.log($.find('table.pill_info_table td').text())
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

getPageSource('http://www.thuoc.vn/Default.aspx?Mod=ViewDrugs&DrugsID=77836').then(rsp => {
    const $ = cheerio.load(rsp.data)
    console.log($.root().find("td#leftPanel").html())
    const data = []
    data.push(htmlToData($("body td.leftPanel-show#leftPanel")))
    // console.log(data)
})