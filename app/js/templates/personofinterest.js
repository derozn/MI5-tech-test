"use strict"

/*
*    @name poiTemplate
*    @function
*    @param {object} props - props to be rendered into the component
*    @return {string} - string representing the person of interest
*/
export const poiTemplate = (props) => { 
	
	/*
	*    @type {string, int, string }
	*    @private
	*/
	let { name, number, image } = props

	return (
		`<div class="column-6">
			<div class="person-of-interest">
				<div class="content">
					<div class="left">
						<i class="profile-pic" style="background-image:url('${require('../../assets/' + image)}')"></i>
					</div>
					<div class="right">
						<h2 class="name">
							${name}
						</h2>
						<h3 class="number">
							${number}
						</h3>
					</div>
				</div>
			</div>
		</div>`
	)
}