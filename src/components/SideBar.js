import React, { Component } from 'react'

class SideBar extends Component {
	render (){
		return (
			
			<section id="header">
		        <header>
		          <span className="image avatar"><img src="images/avatar.jpg" alt="" /></span>
		          <h1 id="logo"><a href="#">George Iwu</a></h1>
		          <p>I got reprogrammed by a rogue AI<br />
		          and now Im totally cray</p>
		        </header>
		        <nav id="nav">
		          <ul>
		            <li><a href="#one" className="active">About</a></li>
		            <li><a href="#two">Things I Can Do</a></li>
		            <li><a href="#three">A Few Accomplishments</a></li>
		            <li><a href="#four">Contact</a></li>
		          </ul>
		        </nav>
		        <footer>
		          <ul className="icons">
		            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
		            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
		            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
		            <li><a href="#" className="icon fa-github"><span className="label">Github</span></a></li>
		            <li><a href="#" className="icon fa-envelope"><span className="label">Email</span></a></li>
		          </ul>
		        </footer>
		      </section>
		)
	}
}

export default SideBar