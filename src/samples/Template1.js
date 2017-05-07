import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../styles/Template-1.css';

class Template1 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="template1">
 	<h1>First Last</h1>
 	<div id="address">
 		<div id="first">
 			<h3>Credentials</h3>
 			3A, Your Major, <abbr title="University of Waterloo">UW</abbr><br />
 			<a href="mailto:YOUREMAILADDRESS@uwaterloo.ca">emailaddress@uwaterloo.ca</a><br />
 			<a href="http://www.YOURWEBSITE.ca">www.yourwebsite.ca</a>
 		</div>
 		<div>
 			<h3>Local Address</h3>
 			335 Name Street, Unit #<br>
 			Town, Province, N2H 3Y6<br>
 			1-519-500-1111
 		</div>
 		<div>
 			<h3>Permanent Address</h3>
 			62 6th Avenue <br>
 			Town, Ontario, N4N 2V6<br>
 			1-519-500-1111
 		</div>
 	</div>

 	<h2>Summary of Qualifications</h2>
 	<ul>
 		<li>Bullet one Bullet one</li>
 		<li>Bullet two Bullet two</li>
 		<li>Bullet three Bullet three</li>
 		<li>Bullet four Bullet four</li>
 		<li>Bullet five Bullet Five</li>
 	</ul>


 	<h2>Work Experience</h2>
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


 	<h2>Interest / Volunteer</h2>
 	<span class="date">Start &raquo; End Year</span>
 	<h3>Volunteer Job Title</h3>
 	<address>Company Name, Address, City Province</address>
 	<ul>
 		<li>Bullet one Bullet one</li>
 		<li>Bullet two Bullet two</li>
 		<li>Bullet three Bullet three</li>
 	</ul>


 	<h2>Education</h2>
 	<ul>
 		<li>Candidate for Bachelor of Major, University, Province,  StartYear - Present</li>
 		<li>OSSD, Highschool, Town, Province, StartYear-EndYear</li>
 	</ul>


 	<h2>Academic Awards</h2>
 	<ul>
 		<li>Year, Year, Name of award/Scholarship</li>
 	</ul>

</div>
    );
  }
}

/*About.propTypes = {
  aboutData: PropTypes.string.isRequired
};*/

export default Template1
