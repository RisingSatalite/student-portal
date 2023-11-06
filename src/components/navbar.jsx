// Navigate pages here
import { useState } from "react"
// If using react-router-dom, uncomment the next line and use <Link> for navigation.
// import { Link } from 'react-router-dom';

export default function NavbarExample() {
    return (
      <main className="navbar">
        {/* Uncomment below if using react-router-dom */}
        {/* <Link to="/page1">To page1</Link> */}
        {/* <Link to="/page2">To page2</Link> */}
        <a href="/page1">To page1</a>
        <a href="/page2">To page2</a>
      </main>
    )
}
