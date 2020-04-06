import React, { Component } from 'react';
//TOC 리스트컴포넌트
class TOC extends Component {
  // concat을 사용할 경우
  /* shouldComponentUpdate()는 현재의것과 이전의 것을 보고 컴포넌트를 랜더링 해줄지
   유무를 정해준다. */
  shouldComponentUpdate(newProps, newState){
    console.log('==>TOC render shouldComponentUpdate'
    ,newProps
    ,this.props.data);
    if(this.props.data === newProps.data){
      return false;
    }
    return true;
  }
    render() {
      console.log('TOC render')
      var lists = [];
      var data = this.props.data;
      var i = 0;
      while(i < data.length) {
        lists.push(
          <li key={data[i].id}>
            <a href={"/content/"+data[i].id}
            // 속성을 이용하는 방식은 생활코딩 오픈튜토리얼스에...!
            onClick={function(id, e){
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id)}>
            {data[i].title}
            </a>
          </li>)
        i = i + 1;
      }
      return(
        <nav>
          <ul>
            {lists}
          </ul>
        </nav>
      )
    }
  }

export default TOC;