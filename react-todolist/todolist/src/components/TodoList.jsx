import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          value: '游泳',
          checked: false
        },
        {
          value: '学习',
          checked: false
        },
        {
          value: '跑步',
          checked: true
        }
      ]
    }
  }
  //按下回车添加事项
  addData = (e) => {
    if (e.keyCode == 13) {
      let arr = this.state.list;
      arr.push({
        value: this.refs.title.value,
        checked: false
      })
      this.setState({
        list: arr
      })
      this.refs.title.value = ''
      localStorage.setItem('list',JSON.stringify(arr))
    }
    
  }
  //勾选判断是否完成 
  handleChange = (index) => {
    let arr = this.state.list;
    arr[index].checked = !arr[index].checked;
    this.setState({
      list: arr
    })
    localStorage.setItem('list',JSON.stringify(arr))
  }
  //删除
  removeData = (index)=>{
    console.log(index);
    
    let arr = this.state.list;
    arr.splice(index ,1);
    this.setState({
      list:arr
    })
    localStorage.setItem('list',JSON.stringify(arr))
  }
  //周期函数
  componentDidMount () {
     //获取缓存的数据

     var list=JSON.parse(localStorage.getItem('list'));   /*字符串*/

     if(list){

         this.setState({

             list:list
         })
     }
  }
  render() {
    return (
      <div>
        <header className="title">TodoList案例 <input type="text" ref="title" onKeyUp={this.addData} /></header>
        <h2>待办事项</h2>
        <ul>
          {
             // 一定要注意map里面的回调函数改写为箭头函数，因为this指针指向问题
            this.state.list.map( (item, index)=> {
              if (!item.checked) {
                return (
                  <li key={index}>
                    <input type="checkbox" checked={item.checked} onChange={this.handleChange.bind(this, index)} />
                    {item.value}
                    <button onClick={this.removeData.bind(this,index)}>删除</button>
                  </li>
                )
              }
            })
          }
        </ul>
        <hr />
        <h2>完成事项</h2>
        <hr />
        <ul>
          {
            // 一定要注意map里面的回调函数改写为箭头函数，因为this指针指向问题
            this.state.list.map( (item, index)=>{
              if (item.checked) {
                return (
                  <li key={index}>
                    <input type="checkbox" checked={item.checked} onChange={this.handleChange.bind(this,index)} />
                    {item.value}
                    <button onClick={this.removeData.bind(this,index)}>删除</button>
                  </li>
                )
              }
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList;
