 import {menu, product,productdata, slider} from '../data/data'
 import '../style/style.css'
 import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Home(){
    return(
        <div style={{width:"100%" ,height:400, backgroundColor:"red"}}>
        <h1 style={{color:"yellow"}}>Hello World</h1>
        {/*
      <ul>
            <li>{menu}</li>
            <li>{menu1}</li>
            <li>{menu2}</li>
            <li>{menu3}</li>
            
        </ul>*/}
const slider = (
  <AwesomeSlider>
    {
        slider.map(function(d){
            return(
                <div>
                    <img src={d} className='sliderimage'/>
                </div>
            )
        }


        )
    }
   
    
  </AwesomeSlider>
);
        <ul className='menubar'>
        {

            menu.map(function(d){
                return (<li>{d}</li> )

            })
        }
           </ul>
        <div className='productshow'> 
        {

              product.map(function(d){
                return (<li>{d}</li> )

})
}
        </div>
        <div>
        {

productdata.map(function(d){
  return (<p>{d.name}{d.rate_sell}{d.mrprate}</p> )

})
}
        </div>
</div>

    )
}
 
export default Home;