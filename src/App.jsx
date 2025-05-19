import './App.css'
import Nabbar from './components/Nabbar'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {


  return (
    <>
      <Nabbar/>

      <div className='d-flex flex-column align-items-center justify-content-center'>
        <div className='row w-75'>
          <div className='col-lg d-flex align-items-center justify-content-center'>
        <Card text="text1" list={[1, 2, 3, 4]} img="https://images.pexels.com/photos/31449901/pexels-photo-31449901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>

          </div>
          <div className='col-lg d-flex align-items-center justify-content-center'>
        <Card text="text2" list={[11, 22, 33, 44]} img="https://images.pexels.com/photos/31212418/pexels-photo-31212418/free-photo-of-elegant-minimalist-baby-s-breath-in-artistic-vase.jpeg"/>

          </div>
          <div className='col-lg d-flex align-items-center justify-content-center'>
        <Card text="text3" list={[10, 20, 30, 40]} img="https://images.pexels.com/photos/31932781/pexels-photo-31932781/free-photo-of-vibrant-abstract-art-in-purple-tones.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>

          </div>
        </div>

        <div className='row w-75'>
          <div className='col-lg d-flex align-items-center justify-content-center'>
        <Card text="text4" list={[5, 6, 7, 8]} img="https://images.pexels.com/photos/29504593/pexels-photo-29504593/free-photo-of-colorful-abstract-fluid-art-painting-on-canvas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>

          </div>
          <div className='col-lg d-flex align-items-center justify-content-center'>
        <Card text="text5" list={[9652, 2342, 1313, 1231]} img="https://images.pexels.com/photos/30987360/pexels-photo-30987360/free-photo-of-colorful-abstract-fluid-art-with-red-and-turquoise-swirls.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>

          </div>
        </div>






      </div>

      <Footer/>
      
    </>
  )
}

export default App
