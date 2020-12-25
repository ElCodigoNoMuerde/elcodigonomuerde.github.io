import React from "react"
import material from "../styles/materialize.css"
import AdSense from 'react-adsense';

export default function Cintillo() {
	require('materialize-css/dist/js/materialize.min.js')
  return (
  <material>
	<nav>
		<div class="grey darken-2 nav-wrapper">
		<a href="#" class="brand-logo">El Codigo No Muerde</a>
		<ul id="nav-mobile" class="right hide-on-med-and-down">
			<li><a href="#">OP1</a></li>
			<li><a href="#">OP2</a></li>
			<li><a href="#">OP3</a></li>
		</ul>
		</div>
	</nav>
	<AdSense.Google
		client='ca-pub-8354409704567755'
		slot='1742165778'
		style={{ display: 'block' }}
		format='auto'
		responsive='true'
		layoutKey='-gw-1+2a-9x+5c'
	/>
	<div class="card-panel teal lighten-2">This is a card panel with a teal lighten-2 class</div>
	</material>	
  )
}