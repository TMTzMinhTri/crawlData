const fs = require('fs')
const axios = require('axios')
const jsonexport = require('jsonexport')
const readlineSync = require('readline-sync')


function callData() {
    const path = `https://crm.ipos.vn/customer/get-membership-type?pos_parent=FRUZII`
    const from = readlineSync.questionInt("từ trang: ")
    const to = readlineSync.questionInt("đến trang: ")
    for (let i = from; i <= to; i++) {
        axios.get(path, {
            headers: {
                Authorization: "430eb899f6a9c4de3ba68fe4afdaadb8ab33acaa"
            }
        }).then(rsp => {
            jsonexport(rsp.data, (_, csv) => {
                fs.appendFileSync('data.csv', csv, 'utf8')
            })
        })
    }
}
callData()


// `https://crm.ipos.vn/customer/get-membership-type?pos_parent=FRUZII`

// `https://crm.ipos.vn/marketing/partners?tags=delivery,voucher&type_search_tag=has_any_of&pos_parent=FRUZII`


// `https://crm.ipos.vn/customer/member-filter?page=${page}&type_search_tag=has_all_of&tags=&gender=&birth_month=&min_age=&max_age=&min_eat_amount=&max_eat_amount=&min_point=&max_point=&min_eat_count=&max_eat_count=&min_last_visit_frequency=&max_last_visit_frequency=&last_pos=&city_id=&filter_name=&source=&membership_type=&receiver_email=&tag_name=&created_source=&min_create_at=&max_create_at=&pos_parent=FRUZII

// `https://crm.ipos.vn/customer/member-filter?page=${page}&phone=0932274022&pos_parent=FRUZII`

// https://crm.ipos.vn/customer/sale-log?page=${page}&user_id=0932274022&pos_parent=FRUZII

// https://crm.ipos.vn/customer/member-detail?page=1&user_id=0932274022&pos_parent=FRUZII

// https://crm.ipos.vn/customer/member-voucher?page=1&user_id=0932274022&pos_parent=FRUZII

// https://crm.ipos.vn/customer/member-point?page=1&user_id=0932274022&pos_parent=FRUZII