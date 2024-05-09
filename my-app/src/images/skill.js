import React from 'react'
import img from './python.png'
import img1 from './flutter.png'
import img2 from './ubuntu.png'
import img3 from './gitSource.png'
import img4 from './erpnext.png'
import img5 from './mongodb.png'
import img6 from './html.png'
import img7 from './css.png'
import img8 from './js.png'
import img9 from './frappe.png'
import img10 from './net.png'
import img11 from './fmf.png'
import img12 from './sql.png'
import img13 from './aws.png'
export const Skill = () => {
  return(
    <>
    <div className='row'>
        <div className='skill'><img src={img} height={60} /><br/><br/>Python</div>
        <div className='skill'><img src={img1} height={65} /><br/><br/>Flutter</div>
        <div className='skill1'><div className='ub'><img src={img2} height={75}/></div><br/>Ubuntu</div>
        <div className='skill'><img src={img3} height={70} /><br/><br/>Git Source<br/> Control</div>
    </div>
    <div className='row'>
        <div className='skill'><img src={img4} height={60} /><br/><br/>ERPNext</div>
        <div className='skill'><img src={img5} height={70} /><br/><br/>Mongodb</div>
        <div className='skill'><img src={img7} height={60} /><img src={img6} height={70} /><br/><br/>Html & CSS</div>
        <div className='skill'><img src={img8} height={60} /><br/><br/>JavaScript</div>
    </div>
    <div className='row'>
        <div className='skill'><img src={img9} height={55} /><br/><br/>Frappe</div>
        <div className='skill'><img src={img10} height={70} /><br/><br/>.Net</div>
        <div className='skill'><img src={img11} height={70} /><br/><br/>Flask Microweb Framework</div>
    </div>
    <div className='row'>
        <div className='skill'><img src={img12} height={60} /><br/><br/>MySql</div>
        <div className='skill'><img src={img13} height={60} /><br/><br/>Python</div>
        <div className='skill2'>
        <div className='row'>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
        </div>
        <div className='row'>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
        </div>
        <div className='row'>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
        </div>
        <div className='row'>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
        </div>
        </div>
    </div>
    </>
  )
}
