import React from 'react';
import styled from 'styled-components';

const Photo = styled.div`
	width: 10em;
	height: 10em;
	border-radius: 50%;
	margin: auto;
	margin-top: 15%;
	box-shadow: 0px 0px 10px;
`;

const Name = styled.h1`
    font-family: 'Sacramento', cursive;
    font-size: 3em;
    padding: 0px;
    margin: 2% 0% 0%;
`

class Overview extends React.Component {
    render() {
        return <section className="test center" id="OverviewMountains">
				<Photo id="selfperson" />

				{/* this is where I will put my image of said self person */}
				<Name>Marisha Hoza</Name>
				<h1>Full Stack Web Developer - Artist</h1>

				<p>Be uncommon.</p>
				<p>Skip to <a href="https://docs.google.com/document/d/1sBd1nafkn6v_ANm2CfoswxE_QdpmZZKLoVMjNVoalNE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">my paper resume</a></p>
				{/* lol I don't have a link for that yet! */}
			</section>;
    }
};







export default Overview;