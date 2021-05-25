import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';//　追加　Linkタブを読み込む
 
class page2 extends React.Component {   //page2クラスにReact.Componentを継承する
 
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div>
                HelloPage2!!!
                <br/>
                <Link to={`/`}>Go To page1</Link>
            </div>
        );
    }
}
 
export default page2;