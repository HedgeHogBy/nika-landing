import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons/faEnvelopeOpen'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faViber } from '@fortawesome/free-brands-svg-icons/faViber'

class Footer extends React.Component {
	render() {
		return (
			<div id="footer">
				<div className="inner">
					<ul className="icons">
						<li>
							<a
								href="https://www.instagram.com/stankevich_photo"
								className="icon"
								target="_blank"
							>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
						</li>
						<li>
							<a href="viber://chat?number=+375259007017" className="icon">
								<FontAwesomeIcon icon={faViber} />
							</a>
						</li>
						<li>
							<a href="#" className="icon">
								<FontAwesomeIcon icon={faEnvelopeOpen} />
							</a>
						</li>
					</ul>
					<ul className="copyright">
						<li>&copy; Nika Stankevich 2018</li>
					</ul>
				</div>
			</div>
		)
	}
}

export default Footer
