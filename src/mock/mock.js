import Mock from 'mockjs'

import data from './data.json'

Mock.mock('/list', {code:0,data:data.list} )

