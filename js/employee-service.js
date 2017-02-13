import request from './request';

export let findAll = () => {
    return request({url:"http://www.amock.io/api/v1/e-service"})
        .then(data => data = JSON.parse(data))
}
