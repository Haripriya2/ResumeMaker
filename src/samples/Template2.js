import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Template-2.css';

class Template2 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
  <div id ="template2">
	<div id="address">335 Name Street, Unit #, Town, Province, N2H 3Y6</div>
	<h1>First Last</h1>
	<div id="contact">3A, Your Major, <abbr title="University of Waterloo">UW</abbr>, 1-519-500-8252, <a href="mailto:YOUREMAILADDRESS@uwaterloo.ca">emailaddress@uwaterloo.ca</a></div>

	<div class="section">
		<h2>Summary of Qualifications</h2>
			<ul>
				<li>Bullet one Bullet one</li>
				<li>Bullet two Bullet two</li>
				<li>Bullet three Bullet three</li>
				<li>Bullet four Bullet four</li>
				<li>Bullet five Bullet Five</li>
			</ul>
	</div>

	<div class="section">
		<h2>Work Experience</h2>
		<div class="content">
			<span class="date">Start &raquo; End Year</span>
			<h3>Job Title One</h3>
			<address>Company Name, Address, City Province</address>
			<ul>
				<li>Bullet one Bullet one</li>
				<li>Bullet two Bullet two</li>
				<li>Bullet three Bullet three</li>
				<li>Bullet four Bullet four</li>
			</ul>

			<span class="date">Start &raquo; End Year</span>
			<h3>Job Title Two</h3>
			<address>Company Name, Address, City Province</address>
			<ul>
				<li>Bullet one Bullet one</li>
				<li>Bullet two Bullet two</li>
				<li>Bullet three Bullet three</li>
				<li>Bullet four Bullet four</li>
			</ul>

			<span class="date">Start &raquo; End Year</span>
			<h3>Job Title Three</h3>
			<address>Company Name, Address, City Province</address>
		</div>
	</div>

	<div class="section">
		<h2>Volunteer Experience</h2>
		<div class="content">
			<span class="date">Start &raquo; End Year</span>
			<h3>Volunteer Job Title</h3>
			<address>Company Name, Address, City Province</address>
			<ul>
				<li>Bullet one Bullet one</li>
				<li>Bullet two Bullet two</li>
				<li>Bullet three Bullet three</li>
			</ul>
		</div>
	</div>

	<div class="section">
		<h2>Education</h2>
			<ul>
				<li>Candidate for Bachelor of Major, University, Province,  StartYear - Present</li>
				<li>OSSD, Highschool, Town, Province, StartYear-EndYear</li>
			</ul>
	</div>

	<div class="section">
		<h2>Academic Awards</h2>
			<ul>
				<li>Year, Year, Name of award/Scholarship</li>
			</ul>
	</div>

</div>
        );
      }
    }

    /*About.propTypes = {
      aboutData: PropTypes.string.isRequired
    };*/

export default Template2
