import axios from 'axios';

const PNET_URL = 'http://104.248.110.70:3000/omvc_logs';

export {getLogData};

function getLogData() {
  //alert("getLogData");
  const url = PNET_URL;
  return axios.get(url, {"content-type": "application/json"}).then(response => {
    const {data} = response;
    console.log("get LOG data: ", data );
    return data;
  });
}

