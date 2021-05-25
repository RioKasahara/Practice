import React from 'react';              //Reactを読み込んでいる
import { Link } from 'react-router-dom';// 追加 Linkタブを読み込む
 
class page1 extends React.Component {   //page1クラスにReact.Componentを継承する
 
    render() {                          //画面表示の為のrenderメソッドを定義する
        return (
            <div>
                HelloPage1!!!
                <br/>　　　　　　　　　　　　　　　　　　　　　//追加　改行のhtmlタブ
                <Link to={`/page2`}>Go To page2</Link>  //追加　Go To page2をクリックするとhttp://localhost:3000/page2に遷移する
            </div>
        );
    }
}
 
export default page1;                   //page1を出力する為に必要