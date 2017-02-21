import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Footer , About, Skills, SideBar, Contact, Accomplishments } from './components'


class App extends Component {

	render(){
		return(
			<div>
		      
		      <SideBar />

		      <div id="wrapper">

		          <div id="main">

		              <About />

		              <Skills />

		              <Accomplishments />

		              <Contact />
		          </div>

		          <Footer />

		      </div>
		    </div>
		)
	}

}

ReactDOM.render(<App />, document.getElementById('root') )