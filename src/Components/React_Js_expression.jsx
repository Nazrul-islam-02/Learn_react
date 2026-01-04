import React from 'react';

const React_Js_expression = () => {
      const hp = 100;

      function carName(name){
        return name;
      }

      function isDetermine(){
        return 10;
      }
     const style = {
        color: "red",
        fontSize: "20px",
        backgroundColor:"yellow",
        padding:"10px",
        textAlign:"center"
     }

      

    return (
        <div className='bg-gray-200 text-center p-4 text-black font-bold'>
            This is Component


            <h1 style={style}> My car is {carName("BMW")}</h1>
            <p>It has {hp*10 + 1000+10} horsepower </p>

            <button onClick={()=> alert("hello")} className='bg-green-300 px-4 py-2 mt-5 rounded-lg hover:bg-green-500 cursor-pointer'> Click ME</button>
        
           {/* jsx condition */}
           {
            (isDetermine()) ? <p>is right</p>
                    : <p>is worng</p>
           }

           

        </div>
    );
};

export default React_Js_expression;