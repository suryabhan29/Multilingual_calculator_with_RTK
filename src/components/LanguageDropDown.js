import React from 'react'
import { Dropdown } from 'react-bootstrap'

export default function LanguageDropDown() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Language
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">English</Dropdown.Item>
        <Dropdown.Item href="#">Hindi</Dropdown.Item>
        <Dropdown.Item href="#">France</Dropdown.Item>
        <Dropdown.Item href="#">Dutch</Dropdown.Item>
        <Dropdown.Item href="#">Portuguese</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}
