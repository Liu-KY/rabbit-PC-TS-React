import React from 'react';
import request from '../utils/request'
import  './App.less'

const test = async () => {
  const res = await request.get('/home/index')
  console.log(res)
}
test ()


function App() {
  return (
    <div className='div'>首页</div>
  );
}

export default App;
