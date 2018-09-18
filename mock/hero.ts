import * as Mock from 'mockjs';

Mock.mock('https://www.baidu.com/s', {
    'data|1-10': [
        {
            'id|+1': 1
        }
    ]
});
