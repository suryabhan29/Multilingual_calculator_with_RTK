
import React from 'react'
import { Dropdown } from 'react-bootstrap'
import i18n from '../i18n';

export default function LanguageDropDown() {

    //2.2 function defination area
    let changeLanguage = (l)=>{
        // alert('okokok'+l);
        localStorage.setItem('curLng',l);
         i18n.changeLanguage(l)
    }
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Language
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>{changeLanguage('en'); }}>English</Dropdown.Item>
        <Dropdown.Item onClick={()=>{changeLanguage('hi'); }}>Hindi</Dropdown.Item>
        <Dropdown.Item onClick={()=>{changeLanguage('fr'); }}>France</Dropdown.Item>
        <Dropdown.Item onClick={()=>{changeLanguage('nl'); }}>Dutch</Dropdown.Item>
        <Dropdown.Item onClick={()=>{changeLanguage('por'); }}>Portuguese</Dropdown.Item>
        <Dropdown.Item onClick={()=>{changeLanguage('ta'); }}>tamil</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
